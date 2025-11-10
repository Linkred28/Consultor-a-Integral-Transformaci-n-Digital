import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

type Role = "user" | "model";

interface Message {
  role: Role;
  text: string;
}

const BASE_SUGGESTIONS = [
  "Cómo encaramos tu negocio",
  "Pilares del modelo",
  "Servicios para Ventas",
  "Beneficios estratégicos",
  "ROI / FODA / KPIs",
  "Agendar contacto",
];

// Sugerencias según tema para continuidad natural
const NEXT_SUGGESTIONS: Record<string, string[]> = {
  "cómo encaramos tu negocio": ["Pilares del modelo", "Beneficios estratégicos", "Agendar contacto"],
  "pilares del modelo": ["Servicios para Ventas", "ROI / FODA / KPIs", "Beneficios estratégicos"],
  "servicios para ventas": ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  "beneficios estratégicos": ["ROI / FODA / KPIs", "Cómo encaramos tu negocio", "Agendar contacto"],
  "roi / foda / kpis": ["Beneficios estratégicos", "Pilares del modelo", "Agendar contacto"],
  "agendar contacto": ["Pilares del modelo", "Servicios para Ventas", "Beneficios estratégicos"],
};

// Contenido base (por si el usuario pregunta algo general)
const CONTEXTO =
  "Combinamos Consultoría Integral, Transformación Digital y Formaciones. " +
  "Conectamos áreas y datos para decidir con claridad, rapidez y trazabilidad. " +
  "Trabajamos con tableros, procesos y gobierno para que el cambio sí se adopte.";

// Respuestas AMIGABLES por tema (lenguaje simple + emojis sutiles)
const FRIENDLY: Record<string, string> = {
  "cómo encaramos tu negocio":
    "Te lo cuento fácil 🙂\n" +
    "• Hoy muchas empresas traen procesos sueltos y datos dudosos; eso retrasa decisiones.\n" +
    "• Nosotros conectamos áreas y datos para que todo quede trazado y claro.\n" +
    "• El salto es pasar de “apagar fuegos” a dirigir con tablero y reglas simples.\n" +
    "¿Quieres que lo bajemos a un ejemplo rápido de tu empresa?",
  "pilares del modelo":
    "Nuestros 3 pilares, en corto 👇\n" +
    "1) Consultoría Integral: ordenamos procesos, roles y controles para que todo corra parejo.\n" +
    "2) Transformación Digital: automatizamos lo repetitivo y dejamos datos confiables.\n" +
    "3) Formaciones: ayudamos a que la gente adopte el cambio y lo mantenga vivo.\n" +
    "Si quieres, te muestro cómo se ven juntos en la práctica.",
  "servicios para ventas":
    "Ventas, versión simple 💼\n" +
    "• CRM con orden: leads con scoring, playbooks claros y etapas bien definidas.\n" +
    "• Resultado: más conversión, ciclos más cortos y forecast que sí se cumple.\n" +
    "¿Te comparto un mini flujo de ventas en 3 pasos?",
  "beneficios estratégicos":
    "Beneficios sin rollo ⚡\n" +
    "• Decidir con datos confiables y a tiempo.\n" +
    "• Quitar fricción operativa (menos errores, más trazabilidad).\n" +
    "• Bajar riesgos antes de que peguen.\n" +
    "• Crecer sin que todo se rompa.\n" +
    "¿Qué beneficio te urge más ahora?",
  "roi / foda / kpis":
    "Medimos para mejorar 📊\n" +
    "• ROI: ver si cada iniciativa deja valor real (no solo costo).\n" +
    "• FODA: vivo y accionable, no de cajón.\n" +
    "• KPIs: pocos, claros y con responsables.\n" +
    "¿Quieres que armemos un tablero ejemplo con 5 KPIs útiles?",
  "agendar contacto":
    "Fácil 😊 Compártenos tu correo o una fecha y armamos llamada. También puedes escribir en metodiko.com.mx.\n" +
    "Mientras, si te sirve, te paso un esquema 30-60-90 para arrancar.",
};

// Utilidades de “tono humano”
const OPENERS = [
  "Va en corto:",
  "Te lo explico sencillo:",
  "Con gusto, al grano:",
  "Vamos por partes:",
];

const CLOSERS = [
  "¿Te late si lo llevamos a un plan rápido?",
  "¿Quieres que te muestre un ejemplo con tus áreas?",
  "Si quieres, armamos los siguientes 3 pasos.",
  "¿Te preparo un mini tablero de muestra?",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Fallback: hacer cualquier texto más conversacional
function conversationalize(text: string): string {
  const t = text
    .replace(/\s+/g, " ")
    .replace(/organización/gi, "empresa")
    .replace(/gobierno empresarial/gi, "dirección clara")
    .replace(/automatizaciones/gi, "automatización")
    .trim();
  return `${pick(OPENERS)} ${t} ${pick(CLOSERS)} 🙂`;
}

// Efecto de “tipeo” a ritmo humano (~45ms por carácter + pausas en signos)
const BASE_CHAR_DELAY = 45; // ms por carácter aprox. (≈22 cps)
function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
async function typeOut(
  fullText: string,
  setText: (t: string) => void
): Promise<void> {
  let buffer = "";
  for (let i = 0; i < fullText.length; i++) {
    const ch = fullText[i];
    buffer += ch;
    setText(buffer);

    // Pausas naturales
    let delay = BASE_CHAR_DELAY;
    if (".!?".includes(ch)) delay = 230;
    else if (",;:".includes(ch)) delay = 120;
    else if (ch === " ") delay = 20;

    await sleep(delay);
  }
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hola, soy Metodiko AI. ¿En qué te ayudo hoy? 🙂" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(BASE_SUGGESTIONS);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const toggle = () => setIsOpen((v) => !v);

  const onChip = (text: string) => {
    setInput(text);
    setTimeout(() => void send(text), 0);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    void send(input.trim());
  };

  async function send(text: string) {
    // agrega mensaje del usuario
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Selección de respuesta amigable
    const key = text.trim().toLowerCase();
    const base =
      FRIENDLY[key] ??
      (Object.keys(FRIENDLY).find((k) => key.includes(k)) ? FRIENDLY[Object.keys(FRIENDLY).find((k) => key.includes(k)) as string] : undefined);

    const response = base ?? conversationalize(CONTEXTO);

    // Inserta un mensaje vacío y lo va “tipeando”
    let idx = -1;
    setMessages((prev) => {
      const next = [...prev, { role: "model", text: "" }];
      idx = next.length - 1;
      return next;
    });

    await typeOut(response, (partial) => {
      setMessages((prev) => {
        const next = [...prev];
        if (idx >= 0) next[idx] = { role: "model", text: partial };
        return next;
      });
    });

    // Actualiza chips contextuales
    const nextChips = NEXT_SUGGESTIONS[key] ?? BASE_SUGGESTIONS;
    setChips(nextChips);
    setIsTyping(false);
  }

  return (
    <>
      {/* FAB: ya con margen inferior en CSS global para no chocar con el scroll-to-top */}
      <button
        className="chatbot-fab fixed z-[60]"
        onClick={toggle}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      {/* Panel */}
      <div className={`chatbot-panel ${isOpen ? "open" : ""}`} role="dialog" aria-labelledby="chatbot-title">
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            {/* Logo limpio y un poco más grande */}
            <Logo className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
            <h2 id="chatbot-title" className="text-lg md:text-xl font-semibold text-brand-text">
              Metodiko AI
            </h2>
          </div>
          <button
            onClick={toggle}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar chat"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        {/* Chips contextuales */}
        <div className="px-4 pt-3 flex flex-wrap gap-2">
          {chips.map((s) => (
            <button
              key={s}
              className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
              onClick={() => onChip(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mensajes */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <div key={i} className={`message-bubble ${m.role === "user" ? "message-user" : "message-model"}`}>
              {m.text}
            </div>
          ))}
          {isTyping && (
            <div className="message-bubble message-model loading-dots">
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <form onSubmit={onSubmit} className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí…"
            className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={isTyping}
            aria-label="Mensaje para el chatbot"
          />
          <button type="submit" className="button p-3" disabled={isTyping || !input.trim()} aria-label="Enviar mensaje">
            <IconSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;

