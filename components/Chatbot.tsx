import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

type Role = "user" | "model";

interface Message {
  role: Role;
  text: string;
}

/* ------------------------------ Configuración ------------------------------ */

// Velocidad de tipeo “humano”
const BASE_CHAR_DELAY = 45; // ms por carácter
const PAUSE_DOT = 230;
const PAUSE_COMMA = 120;
const PAUSE_SPACE = 18;

// Emojis sutiles (1 por respuesta como máximo)
const EMOJI = {
  ok: "✅",
  think: "💡",
  chart: "📊",
  bolt: "⚙️",
  wave: "👋",
};

// Sugerencias base SIEMPRE visibles (no se agotan)
const BASE_CHIPS = [
  "Cómo encaramos tu negocio",
  "Pilares del modelo",
  "Servicios para Ventas",
  "Beneficios estratégicos",
  "ROI / FODA / KPIs",
  "Agendar contacto",
];

/* ----------------------------- Detección de intent ----------------------------- */

type IntentKey =
  | "enfoque"
  | "pilares"
  | "ventas"
  | "beneficios"
  | "medicion"
  | "agendar"
  | "logistica"
  | "administracion"
  | "rrhh"
  | "tecnologia"
  | "gerencia"
  | "saludo"
  | "precio"
  | "desconocido";

const INTENTS: Array<{ key: IntentKey; test: RegExp }> = [
  { key: "saludo", test: /\b(hola|buen[oa]s|qué tal|que tal)\b/i },
  { key: "enfoque", test: /(encaramos|enfoque|cómo trabajan|como trabajan)/i },
  { key: "pilares", test: /pilares?|modelo de trabajo/i },
  { key: "ventas", test: /venta|crm|pipeline|forecast|prospect|comercial/i },
  { key: "beneficios", test: /beneficio|valor|impacto|ventaja/i },
  { key: "medicion", test: /roi|foda|kpi|indicador|tablero|metricas?/i },
  { key: "agendar", test: /agenda(r)?|contact(o)?|llamada|reunión|reunion|cita/i },
  { key: "logistica", test: /logistica|rutas|inventario|wms|almac[eé]n/i },
  { key: "administracion", test: /administra(ción|cion)|aprobaci(o|ó)nes|finanzas|contable/i },
  { key: "rrhh", test: /(rh|rrhh|talento|desempeño|onboarding|clima)/i },
  { key: "tecnologia", test: /(ti|seguridad|datos confiables|automatiza(ción|cion)|arquitectura)/i },
  { key: "gerencia", test: /gerencia|gobierno de datos|pmo|okrs?|riesgos?/i },
];

/* ----------------------------- Respuestas breves ----------------------------- */
/* Profesional, cercano, empático. Breve y directo. Un emoji sutil. */

const ANSWERS: Record<IntentKey, string> = {
  saludo:
    `Hola ${EMOJI.wave} Soy Metodiko AI. Puedo explicarle nuestro enfoque, pilares, beneficios o armar un ejemplo aplicado a Ventas, Operaciones o TI. ¿Qué le gustaría revisar primero?`,

  enfoque:
    `Ordenamos procesos, unificamos datos confiables y conectamos áreas para decidir con claridad y velocidad. Pasamos de operación dispersa a gobierno ejecutivo con tableros y reglas claras ${EMOJI.ok}`,

  pilares:
    `Trabajamos en tres frentes: 1) **Consultoría Integral**: procesos, roles y controles. 2) **Transformación Digital**: automatización y datos confiables. 3) **Formaciones**: adopción real y sostenida ${EMOJI.bolt}`,

  beneficios:
    `Ofrecemos beneficios orientados a decidir con datos confiables y a tiempo, quitar fricción operativa (menos errores, más trazabilidad) y bajar riesgos antes de que afecten al negocio. Base lista para crecer sin fricciones ${EMOJI.ok}`,

  ventas:
    `Ventas con control: CRM ordenado, scoring y playbooks claros. Resultado: mayor conversión, ciclos más cortos y forecast confiable. Si desea, comparto un mini flujo de 3 pasos ${EMOJI.chart}`,

  medicion:
    `Medimos para mejorar: **ROI** por iniciativa, **FODA** vivo y accionable, y **KPIs** pocos y responsables claros. Todo en un tablero ejecutivo visible por área ${EMOJI.chart}`,

  agendar:
    `Con gusto. Indíquenos un correo o fecha y coordinamos. También puede escribirnos en metodiko.com.mx. Podemos partir con un diagnóstico breve sin costo ${EMOJI.ok}`,

  logistica:
    `Logística: trazabilidad end-to-end con WMS ligero, inventario inteligente y rutas optimizadas. Menor costo por entrega y cumplimiento consistente (OTIF) ${EMOJI.ok}`,

  administracion:
    `Administración: mapeamos procesos, definimos reglas de aprobación y automatizamos tareas clave. Tableros financieros en tiempo real para decidir con claridad ${EMOJI.ok}`,

  rrhh:
    `Talento: onboarding digital, desempeño y automatización de procesos de RH. Visibilidad del clima y alineación de objetivos por equipo ${EMOJI.ok}`,

  tecnologia:
    `TI: seguridad reforzada, automatización y datos confiables para análisis avanzado e IA. Entorno estable y moderno para operar con confianza ${EMOJI.bolt}`,

  gerencia:
    `Gerencia: gobierno de datos ágil, PMO conectada a la estrategia y OKRs con seguimiento. Riesgos y retorno visibles en un mismo marco ${EMOJI.chart}`,

  precio:
    `Podemos estimar inversión tras un diagnóstico breve. El objetivo es que cada iniciativa muestre ROI claro y plazos razonables ${EMOJI.chart}`,

  desconocido:
    `Puedo ayudarle con enfoque, beneficios, ROI/KPIs, o un ejemplo aplicado a Ventas, Operaciones o TI. ¿Sobre qué tema desea profundizar? ${EMOJI.think}`,
};

/* ----------------------------- Chips contextuales ----------------------------- */

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

/* ------------------------------ Utilidades UI ------------------------------ */

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

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
  for (const it of INTENTS) {
    if (it.test.test(t)) return it.key;
  }
  // heurística: si preguntan por costo/precio
  if (/\b(precio|costo|cu[aá]nt[o|a]\s+cuesta|inversi[oó]n)\b/i.test(t)) return "precio";
  return "desconocido";
}

function empatheticPrefix(text: string): string {
  // si detecta palabras de confusión o urgencia, añade una frase empática leve
  if (/(no entiendo|duda|problema|error|urge|preocupaci[oó]n)/i.test(text)) {
    return "Entiendo el punto. ";
  }
  return "";
}

/* --------------------------------- Componente -------------------------------- */

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text:
        `Hola ${EMOJI.wave} Soy Metodiko AI. Puedo explicarle nuestro enfoque, pilares, beneficios o armar un ejemplo aplicado a Ventas/Operaciones/TI. ` +
        `Use los botones o escriba su consulta cuando guste.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(BASE_CHIPS);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const toggle = () => setOpen((v) => !v);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || typing) return;
    void answer(input.trim());
  };

  const onChip = (label: string) => {
    if (typing) return;
    void answer(label);
  };

  async function answer(userText: string) {
    // 1) Usuario
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    // 2) Intent + respuesta breve, profesional y empática
    const key = detectIntent(userText);
    const prefix = empatheticPrefix(userText);
    const base = ANSWERS[key];
    const reply = prefix + (base ?? ANSWERS.desconocido);

    // 3) Tipeo humano
    let idx = -1;
    setMessages((prev) => {
      const next = [...prev, { role: "model", text: "" }];
      idx = next.length - 1;
      return next;
    });
    await typeOut(reply, (partial) => {
      setMessages((prev) => {
        const next = [...prev];
        if (idx >= 0) next[idx] = { role: "model", text: partial };
        return next;
      });
    });

    // 4) Chips contextuales SIEMPRE disponibles (no se agotan)
    const next = NEXT_CHIPS[key] ?? BASE_CHIPS;
    // mezcla “next” con “base” evitando duplicados y manteniendo 6 como máx.
    const merged = Array.from(new Set([...next, ...BASE_CHIPS])).slice(0, 6);
    setChips(merged);

    setTyping(false);
  }

  return (
    <>
      {/* FAB: recuerda que en tu CSS global debe tener bottom suficiente para no chocar con el botón de scroll */}
      <button
        className="chatbot-fab fixed z-[60]"
        onClick={toggle}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={open}
      >
        {open ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      <div
        className={`chatbot-panel ${open ? "open" : ""}`}
        role="dialog"
        aria-labelledby="chatbot-title"
      >
        {/* Header con logo limpio (sin marco) y tamaño mayor */}
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

        {/* Conversación */}
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
          {typing && (
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
            disabled={typing}
            aria-label="Mensaje para el chatbot"
          />
          <button
            type="submit"
            className="button p-3"
            disabled={typing || !input.trim()}
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


