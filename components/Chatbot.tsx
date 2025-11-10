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

// Sugerencias por tema para continuidad natural
const NEXT_SUGGESTIONS: Record<string, string[]> = {
  "cómo encaramos tu negocio": ["Pilares del modelo", "Beneficios estratégicos", "Agendar contacto"],
  "pilares del modelo": ["Servicios para Ventas", "ROI / FODA / KPIs", "Beneficios estratégicos"],
  "servicios para ventas": ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  "beneficios estratégicos": ["ROI / FODA / KPIs", "Pilares del modelo", "Agendar contacto"],
  "roi / foda / kpis": ["Beneficios estratégicos", "Cómo encaramos tu negocio", "Agendar contacto"],
  "agendar contacto": ["Pilares del modelo", "Servicios para Ventas", "Beneficios estratégicos"],
};

// ====== “Cerebro” local con tu contenido (sin API) ======
const CONTEXTO =
  "Metodiko combina Consultoría Integral, Transformación Digital y Formaciones. " +
  "Ejes: estrategia conectada a la ejecución, trazabilidad y gobierno corporativo, crecimiento escalable, innovación continua y decisiones basadas en datos. " +
  "Propuesta: pasar del control operativo a un gobierno empresarial con visión digital; foco, velocidad e impacto. " +
  "Servicios por área: Administración (automatización y tableros), Logística (WMS y trazabilidad), RH (onboarding, desempeño, clima), Tecnología (seguridad, automatización y datos confiables), " +
  "Ventas (CRM con scoring y playbooks), Gerencia (gobierno de datos, PMO, OKRs, ROI y riesgos). " +
  "Beneficios: decisiones confiables en tiempo real, eficiencia end-to-end, reducción de riesgos y crecimiento escalable. " +
  "Indicadores: ROI, FODA dinámico y KPIs. CTA: Inicie la conversación en metodiko.com.mx.";

const FAQ: Record<string, string> = {
  "cómo encaramos tu negocio":
    "1) Dilema actual: procesos fragmentados, datos poco confiables y decisiones tardías. " +
    "2) Visión integrada: trazabilidad end-to-end, decisiones basadas en datos y anticipación de riesgos. " +
    "3) Salto estratégico: gobierno empresarial con visión digital para más foco, velocidad e impacto.",
  "pilares del modelo":
    "Pilares: (1) Consultoría Integral (modelos operativos integrados, gobierno y riesgos). " +
    "(2) Transformación Digital (gobierno del cambio, automatizaciones, innovación, herramientas e IA). " +
    "(3) Formaciones (coaching ejecutivo, entrenamiento de equipos, laboratorios y formación continua).",
  "servicios para ventas":
    "Ventas: CRM organizado con scoring de leads y playbooks; proceso predecible, mayor conversión, ciclos más cortos y forecast confiable.",
  "beneficios estratégicos":
    "Beneficios: decisiones basadas en datos en tiempo real, eficiencia operativa end-to-end, reducción de riesgos y crecimiento escalable.",
  "roi / foda / kpis":
    "ROI: medimos retorno e impacto financiero. FODA: dinámico y accionable. KPIs: gobierno del desempeño con indicadores que conectan visión y ejecución.",
  "agendar contacto":
    "Con gusto. Compártanos su correo o agendamos una llamada. También puede iniciar la conversación en metodiko.com.mx.",
};

// ====== Re-escritor a tono humano (ejecutivo–cálido, “usted”) ======
const OPENERS = [
  "Claro, se lo explico en simple:",
  "Con gusto, voy al punto:",
  "Le cuento de forma breve:",
  "Perfecto, aquí la idea central:",
];

const BRIDGES = [
  "En otras palabras,",
  "Dicho práctico,",
  "Traducido al día a día,",
  "Llevado a operación,",
];

const CLOSERS = [
  "¿Le gustaría que lo llevemos a un plan de 3 pasos?",
  "¿Quiere que bajemos esto a KPIs y responsables?",
  "¿Le preparo un ejemplo rápido aplicado a su empresa?",
  "¿Le muestro cómo se vería en un tablero ejecutivo?",
];

// Limpia numeraciones y hace frases más fluidas
function normalizeBullets(text: string): string {
  let t = text.replace(/\s+/g, " ").trim();

  // 1) 2) 3) -> separadores suaves
  t = t
    .replace(/(?:^|\s)[\(\[]?1\)[\)\]]?\s*/gi, "")
    .replace(/(?:^|\s)[\(\[]?2\)[\)\]]?\s*/gi, " | ")
    .replace(/(?:^|\s)[\(\[]?3\)[\)\]]?\s*/gi, " | ")
    .replace(/(?:^|\s)[\(\[]?4\)[\)\]]?\s*/gi, " | ");

  // Reemplaza puntos y punto y coma encadenados por conectores
  t = t.replace(/[:;]\s*/g, ": ");
  t = t.replace(/\s*\|\s*/g, " · ");

  // Evita párrafos muy largos
  if (t.length > 360) {
    // corta en la última frase completa antes de 360
    const idx = t.lastIndexOf(". ", 360);
    if (idx > 200) t = t.slice(0, idx + 1);
  }
  return t;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeConversational(base: string, topicKey?: string): string {
  const opener = pick(OPENERS);
  const bridge = pick(BRIDGES);
  const closer = pick(CLOSERS);

  const core = normalizeBullets(base);

  // Micro-ajustes de tono (“usted”, verbos más cercanos)
  const softened = core
    .replace(/\bobtiene\b/gi, "logra")
    .replace(/\bobtendrá\b/gi, "va a lograr")
    .replace(/\bempresa\b/gi, "organización")
    .replace(/\bdebe\b/gi, "podemos")
    .replace(/\bclientes\b/gi, "sus clientes");

  // Ensamble con conectores y cierre con pregunta
  const body =
    `${opener} ${softened}` +
    ` ${bridge} podemos aterrizarlo con ejemplos de su operación.` +
    ` ${closer}`;

  // Bonus: si no hay tema, ancla al contexto para que suene natural
  if (!topicKey) {
    return `${opener} ${normalizeBullets(CONTEXTO)} ${closer}`;
  }
  return body;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hola, soy Metodiko AI. ¿En qué le puedo ayudar hoy?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chips, setChips] = useState<string[]>(BASE_SUGGESTIONS);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  const toggle = () => setIsOpen((v) => !v);

  const useChips = (text: string) => {
    setInput(text);
    setTimeout(() => {
      void handleSend(text);
    }, 0);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    void handleSend(input.trim());
  };

  async function handleSend(text: string) {
    if (isLoading) return;
    setIsLoading(true);

    // Usuario
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    // “Búsqueda” local por clave
    const key = text.trim().toLowerCase();
    const baseAnswer = FAQ[key] ?? CONTEXTO;

    // Reescritura a tono humano
    const friendly = makeConversational(baseAnswer, FAQ[key] ? key : undefined);

    // Simula latencia para sensación natural
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "model", text: friendly }]);
      // Sugerencias contextuales
      setChips(NEXT_SUGGESTIONS[key] ?? BASE_SUGGESTIONS);
      setIsLoading(false);
    }, 350);
  }

  return (
    <>
      {/* FAB: separado del scroll (ver CSS global) */}
      <button
        className="chatbot-fab fixed z-[60]"
        onClick={toggle}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      {/* Panel */}
      <div
        className={`chatbot-panel ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-labelledby="chatbot-title"
      >
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            {/* Logo limpio y más grande */}
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

        {/* Chips de inicio/seguimiento */}
        <div className="px-4 pt-3 flex flex-wrap gap-2">
          {chips.map((s) => (
            <button
              key={s}
              className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
              onClick={() => useChips(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-bubble ${
                m.role === "user" ? "message-user" : "message-model"
              }`}
            >
              {m.text}
            </div>
          ))}
          {isLoading && (
            <div className="message-bubble message-model loading-dots">
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={onSubmit}
          className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriba su consulta…"
            className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={isLoading}
            aria-label="Mensaje para el chatbot"
          />
          <button
            type="submit"
            className="button p-3"
            disabled={isLoading || !input.trim()}
            aria-label="Enviar mensaje"
          >
            <IconSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
