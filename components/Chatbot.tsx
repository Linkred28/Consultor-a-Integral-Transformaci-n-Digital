import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

type Role = "user" | "model";
interface Message { role: Role; text: string; }

/* ====================== Ajustes de UX ====================== */
// Tipeo a velocidad de lectura humana (más pausado)
const BASE_CHAR_DELAY = 65;  // ms por carácter
const PAUSE_DOT = 320;       // pausa tras . ! ?
const PAUSE_COMMA = 180;     // pausa tras , ; :
const PAUSE_SPACE = 24;

// Emojis sutiles (1 por respuesta máx.)
const EMOJI = { ok: "✅", light: "💡", chart: "📊", gear: "⚙️", wave: "👋" };

// Chips siempre visibles (no se agotan)
const BASE_CHIPS = [
  "Cómo encaramos tu negocio",
  "Pilares del modelo",
  "Servicios para Ventas",
  "Beneficios estratégicos",
  "ROI / FODA / KPIs",
  "Agendar contacto",
];

/* ===================== Detección de intención ===================== */
type IntentKey =
  | "saludo" | "enfoque" | "pilares" | "ventas" | "beneficios" | "medicion"
  | "agendar" | "logistica" | "administracion" | "rrhh" | "tecnologia" | "gerencia"
  | "precio" | "desconocido";

const INTENTS: Array<{ key: IntentKey; test: RegExp }> = [
  { key: "saludo", test: /\b(hola|buen[oa]s|qué tal|que tal)\b/i },
  { key: "enfoque", test: /(encaramos|enfoque|cómo trabajan|como trabajan)/i },
  { key: "pilares", test: /pilares?|modelo de trabajo/i },
  { key: "ventas", test: /venta|crm|pipeline|forecast|prospect|comercial/i },
  { key: "beneficios", test: /beneficio|valor|impacto|ventaja/i },
  { key: "medicion", test: /roi|foda|kpi|indicador|tablero|m[eé]tricas?/i },
  { key: "agendar", test: /agenda(r)?|contact(o)?|llamada|reuni[oó]n|cita/i },
  { key: "logistica", test: /log[ií]stica|rutas|inventario|wms|almac[eé]n/i },
  { key: "administracion", test: /administra(ci[oó]n)|aprobaci[oó]n|finanzas|contable/i },
  { key: "rrhh", test: /(rh|rrhh|talento|desempeño|onboarding|clima)/i },
  { key: "tecnologia", test: /(ti|seguridad|datos confiables|automatiza(ci[oó]n)|arquitectura)/i },
  { key: "gerencia", test: /gerencia|gobierno de datos|pmo|okrs?|riesgos?/i },
];

/* ======================= Respuestas breves ======================= */
// Aperturas amables y profesionales (rotan para no sonar repetitivo)
const OPENERS = [
  "Con gusto. ",
  "Gracias por la consulta. ",
  "Claro, se lo explico de forma sencilla. ",
  "Encantado de ayudar. ",
  "Le comparto el punto clave. ",
];

function polite(answer: string) {
  const opener = OPENERS[Math.floor(Math.random() * OPENERS.length)];
  return opener + answer;
}

const ANSWERS: Record<IntentKey, string> = {
  saludo:
    `Hola ${EMOJI.wave} Soy Metodiko AI. Puedo explicarle enfoque, pilares, beneficios o un ejemplo práctico en Ventas, Operaciones o TI. ¿Por dónde desea empezar?`,
  enfoque:
    `Ordenamos procesos, unificamos datos confiables y conectamos áreas para decidir con claridad y velocidad. Pasamos de operación dispersa a gobierno ejecutivo con tableros y reglas claras ${EMOJI.ok}`,
  pilares:
    `Trabajamos en tres frentes: 1) **Consultoría Integral** (procesos, roles y controles), 2) **Transformación Digital** (automatización y datos confiables) y 3) **Formaciones** (adopción real y sostenida) ${EMOJI.gear}`,
  beneficios:
    `Decidir con datos confiables y a tiempo, quitar fricción operativa (menos errores, más trazabilidad) y reducir riesgos antes de que afecten al negocio. Base lista para crecer sin fricciones ${EMOJI.ok}`,
  ventas:
    `CRM ordenado con scoring y playbooks. Resultado: mayor conversión, ciclos más cortos y forecast confiable. Si desea, le comparto un mini flujo de 3 pasos ${EMOJI.chart}`,
  medicion:
    `Medimos para mejorar: **ROI** por iniciativa, **FODA** vivo y **KPIs** con responsables. Todo visible en un tablero ejecutivo por área ${EMOJI.chart}`,
  agendar:
    `Con gusto coordinamos. Compártame un correo o franja de horario y agendamos. También puede escribirnos en metodiko.com.mx ${EMOJI.ok}`,
  logistica:
    `WMS ligero con trazabilidad end-to-end, inventario inteligente y rutas optimizadas. Menor costo por entrega y cumplimiento consistente (OTIF) ${EMOJI.ok}`,
  administracion:
    `Procesos mapeados, reglas de aprobación y automatización de tareas clave. Tableros financieros en tiempo real para decidir con claridad ${EMOJI.ok}`,
  rrhh:
    `Onboarding digital, desempeño y automatizaciones de RH. Visibilidad del clima y objetivos alineados por equipo ${EMOJI.ok}`,
  tecnologia:
    `Seguridad reforzada, automatización y datos confiables para análisis avanzado e IA. Entorno estable y moderno para operar con confianza ${EMOJI.gear}`,
  gerencia:
    `Gobierno de datos ágil, PMO conectada a la estrategia y OKRs con seguimiento. Riesgos y retorno visibles en un mismo marco ${EMOJI.chart}`,
  precio:
    `Estimamos inversión con un diagnóstico breve. Objetivo: cada iniciativa debe mostrar ROI claro y plazos razonables ${EMOJI.chart}`,
  desconocido:
    `Puedo apoyarle con enfoque, beneficios, ROI/KPIs u ofrecer un ejemplo aplicado a Ventas/Operaciones/TI. ¿Qué tema le interesa revisar? ${EMOJI.light}`,
};

const NEXT_CHIPS: Record<IntentKey, string[]> = {
  enfoque: ["Pilares del modelo", "Beneficios estratégicos", "ROI / FODA / KPIs"],
  pilares: ["Beneficios estratégicos", "Servicios para Ventas", "ROI / FODA / KPIs"],
  beneficios: ["Cómo encaramos tu negocio", "ROI / FODA / KPIs", "Agendar contacto"],
  ventas: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  medicion: ["Beneficios estratégicos", "Pilares del modelo", "Agendar contacto"],
  agendar: ["Cómo encaramos tu negocio", "Pilares del modelo", "Beneficios estratégicos"],
  logistica: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  administracion: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  rrhh: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  tecnologia: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  gerencia: ["Beneficios estratégicos", "ROI / FODA / KPIs", "Agendar contacto"],
  saludo: BASE_CHIPS,
  precio: ["ROI / FODA / KPIs", "Beneficios estratégicos", "Agendar contacto"],
  desconocido: BASE_CHIPS,
};

/* ===================== Utilidades de tipeo ===================== */
function sleep(ms: number) { return new Promise(res => setTimeout(res, ms)); }

async function typeOut(full: string, set: (t: string) => void) {
  let buf = "";
  for (let i = 0; i < full.length; i++) {
    const ch = full[i];
    buf += ch;
    set(buf);

    let d = BASE_CHAR_DELAY;
    if (".!?".includes(ch)) d = PAUSE_DOT;
    else if (",;:".includes(ch)) d = PAUSE_COMMA;
    else if (ch === " ") d = PAUSE_SPACE;

    await sleep(d);
  }
}

function detectIntent(text: string): IntentKey {
  const t = text.toLowerCase();
  for (const it of INTENTS) if (it.test.test(t)) return it.key;
  if (/\b(precio|costo|cu[aá]nt[o|a]\s+cuesta|inversi[oó]n)\b/i.test(t)) return "precio";
  return "desconocido";
}

/* =========================== Componente =========================== */
const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: "model",
    text:
      `Hola ${EMOJI.wave} Soy Metodiko AI. Puedo explicarle nuestro enfoque, pilares, beneficios o un ejemplo aplicado a Ventas/Operaciones/TI. ` +
      `Use los botones o escriba su consulta cuando guste.`,
  }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(BASE_CHIPS);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing, open]);
  const toggle = () => setOpen(v => !v);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || typing) return;
    void answer(input.trim());
  };
  const onChip = (label: string) => { if (!typing) void answer(label); };

  async function answer(userText: string) {
    // Usuario
    setMessages(prev => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    // Intent + respuesta amable
    const intent = detectIntent(userText);
    const botText = polite(ANSWERS[intent] ?? ANSWERS.desconocido);

    // Placeholder “pensando…” (3 puntos sutiles)
    let idx = -1;
    setMessages(prev => {
      const next = [...prev, { role: "model", text: "" }];
      idx = next.length - 1;
      return next;
    });

    // Tipeo humano
    await typeOut(botText, (partial) => {
      setMessages(prev => {
        const next = [...prev];
        if (idx >= 0) next[idx] = { role: "model", text: partial };
        return next;
      });
    });

    // Chips contextuales
    const next = NEXT_CHIPS[intent] ?? BASE_CHIPS;
    const merged = Array.from(new Set([...next, ...BASE_CHIPS])).slice(0, 6);
    setChips(merged);

    setTyping(false);
  }

  return (
    <>
      {/* Estilos locales para los puntos del “pensando…” */}
      <style>{`
        @keyframes typingBlink { 0%, 80%, 100% { opacity: .2 } 40% { opacity: 1 } }
        .typing-dot { width:6px; height:6px; margin-right:6px; border-radius:9999px; background: var(--brand-text-secondary, #6b7280); display:inline-block; animation: typingBlink 1.2s infinite ease-in-out; }
        .typing-dot.delay-150 { animation-delay: .15s; }
        .typing-dot.delay-300 { animation-delay: .30s; }
      `}</style>

      {/* FAB con separación del botón de scroll */}
      <button
        className="chatbot-fab fixed z-[60]"
        style={{ bottom: "6.5rem", right: "1.25rem" }}
        onClick={toggle}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={open}
      >
        {open ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      <div className={`chatbot-panel ${open ? "open" : ""}`} role="dialog" aria-labelledby="chatbot-title">
        {/* Header: logo más grande y sin marco */}
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
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

        {/* Chips siempre activos */}
        <div className="px-4 pt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
              onClick={() => onChip(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Conversación: mayor alto útil + fuente un poco menor */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 md:gap-4 min-h-[52vh] md:min-h-[60vh] text-[15px] leading-relaxed">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-bubble ${m.role === "user" ? "message-user" : "message-model"} text-[15px] leading-relaxed`}
            >
              {m.text}
            </div>
          ))}

          {/* Indicador de “pensando” con puntos, en un bubble pequeño */}
          {typing && (
            <div className="message-bubble message-model px-3 py-2">
              <span className="typing-dot" />
              <span className="typing-dot delay-150" />
              <span className="typing-dot delay-300" />
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
            placeholder="Escriba su consulta…"
            className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={typing}
            aria-label="Mensaje para el chatbot"
          />
          <button type="submit" className="button p-3" disabled={typing || !input.trim()} aria-label="Enviar mensaje">
            <IconSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;



