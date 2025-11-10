import React, { useEffect, useMemo, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

/** ===== Tipos ===== */
type Role = "user" | "model";
interface Message { role: Role; text: string; }
interface KBItem {
  id: string;
  title: string;
  answer: string;
  keywords: string[];
}

/** ===== Base de conocimiento (extraída de tu página) ===== */
const KB: KBItem[] = [
  {
    id: "enfoque",
    title: "Nuestro Enfoque",
    answer:
      "Reestructuración, Normalización y Estandarización de procesos de forma transversal en todos los sectores del negocio. Integramos finanzas, operaciones y talento bajo una visión digital para lograr trazabilidad, decisiones confiables y anticipación de riesgos.",
    keywords: ["enfoque", "reestructuración", "normalización", "estandarización", "transversal"]
  },
  {
    id: "como-encaramos",
    title: "Cómo encaramos tu negocio",
    answer:
      "1) Dilema Actual: procesos fragmentados, información poco confiable y decisiones tardías. " +
      "2) Visión Integrada: trazabilidad end-to-end, decisiones basadas en datos y anticipación de riesgos. " +
      "3) Salto Estratégico: gobierno empresarial con visión digital para más foco, velocidad e impacto.",
    keywords: ["cómo", "encaramos", "dilema", "visión integrada", "salto estratégico"]
  },
  {
    id: "pilares",
    title: "Pilares de nuestro modelo",
    answer:
      "Pilares: (1) Consultoría Integral, (2) Transformación Digital y (3) Formaciones. " +
      "Alineamos personas, procesos y gobierno; orquestamos áreas con indicadores; definimos políticas, controles y tableros ejecutivos.",
    keywords: ["pilares", "consultoría integral", "transformación digital", "formaciones"]
  },
  {
    id: "consultoria",
    title: "Consultoría Integral",
    answer:
      "Diseñamos un roadmap transversal, diagnosticamos brechas, priorizamos iniciativas de alto impacto y acompañamos la ejecución para asegurar adopción y retorno.",
    keywords: ["consultoría", "roadmap", "diagnóstico", "ejecución", "adopción", "retorno"]
  },
  {
    id: "transformacion",
    title: "Transformación Digital",
    answer:
      "Gobierno del cambio, automatizaciones, innovación tecnológica, herramientas informáticas e IA. Siempre con datos confiables y escalabilidad.",
    keywords: ["transformación", "automatización", "gobierno del cambio", "herramientas", "ia"]
  },
  {
    id: "formaciones",
    title: "Formaciones",
    answer:
      "Academia corporativa evolutiva: coaching ejecutivo, entrenamiento de equipos, laboratorios de adopción y formación continua para retención de talento alineado a objetivos.",
    keywords: ["formación", "coaching", "entrenamiento", "laboratorios", "talento"]
  },
  {
    id: "serv-admin",
    title: "Administración",
    answer:
      "Control y eficiencia: mapeo de procesos, reglas de aprobación y automatización. Tableros en tiempo real para decisiones financieras claras y eficientes.",
    keywords: ["administración", "procesos", "aprobación", "tableros", "financieras"]
  },
  {
    id: "serv-logistica",
    title: "Logística",
    answer:
      "Optimización y trazabilidad total: WMS ligero, inventario inteligente y operación conectada para máxima eficiencia y entregas perfectas.",
    keywords: ["logística", "wms", "trazabilidad", "inventario", "rutas", "almacenes"]
  },
  {
    id: "serv-rrhh",
    title: "Recursos Humanos",
    answer:
      "Gestión y desarrollo de talento: onboarding sin papeles, desempeño, automatización, visibilidad de clima laboral y alineación con objetivos.",
    keywords: ["rrhh", "recursos humanos", "onboarding", "desempeño", "clima laboral"]
  },
  {
    id: "serv-tech",
    title: "Tecnología",
    answer:
      "Seguridad, automatización y datos confiables: base para análisis avanzado e IA, con sistemas estables y entorno moderno.",
    keywords: ["tecnología", "seguridad", "datos", "automatización", "ia"]
  },
  {
    id: "serv-ventas",
    title: "Ventas",
    answer:
      "Proceso comercial predecible y escalable: CRM organizado, scoring de leads y playbooks. Mayor conversión, ciclos más cortos y forecast confiable.",
    keywords: ["ventas", "crm", "leads", "playbook", "forecast"]
  },
  {
    id: "serv-gerencia",
    title: "Gerencia y PMO",
    answer:
      "Gobierno de datos y PMO estratégica: modelo de ROI claro, OKRs, tableros de riesgos, y capacitación a mandos para decisiones ejecutivas sólidas.",
    keywords: ["gerencia", "pmo", "roi", "okrs", "gobierno de datos", "riesgo"]
  },
  {
    id: "beneficios",
    title: "Beneficios estratégicos",
    answer:
      "Decisiones basadas en datos, eficiencia operativa, reducción de riesgos y crecimiento escalable. Impacto tangible con indicadores de negocio.",
    keywords: ["beneficios", "eficiencia", "riesgos", "crecimiento", "datos"]
  },
  {
    id: "roi",
    title: "ROI",
    answer:
      "Rentabilidad estratégica: medimos retorno por inversión y traducimos resultados financieros en conocimiento accionable.",
    keywords: ["roi", "rentabilidad", "retorno", "financieros"]
  },
  {
    id: "foda",
    title: "FODA",
    answer:
      "Visión analítica: FODA como herramienta dinámica que anticipa riesgos, potencia fortalezas y orienta decisiones.",
    keywords: ["foda", "fortalezas", "oportunidades", "debilidades", "amenazas", "riesgos"]
  },
  {
    id: "kpis",
    title: "KPIs",
    answer:
      "Gobierno de desempeño: indicadores que conectan visión y ejecución, asegurando foco, trazabilidad y crecimiento sostenido.",
    keywords: ["kpi", "indicadores", "desempeño", "trazabilidad", "ejecución"]
  },
  {
    id: "cta",
    title: "Contacto",
    answer:
      "Queremos entender su negocio antes de transformarlo. Inicie la conversación con nuestro equipo en metodiko.com.mx",
    keywords: ["contacto", "conversación", "metodiko", "metodiko.com.mx", "equipo"]
  }
];

/** ===== Matching muy ligero (sin APIs) ===== */
const tokenize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9\s]/gi, " ").split(/\s+/).filter(Boolean);

function scoreQuery(query: string, item: KBItem): number {
  const qTokens = tokenize(query);
  const kTokens = new Set(item.keywords.map(k => k.toLowerCase()));
  let score = 0;

  // Coincidencia por keywords
  qTokens.forEach(t => { if (kTokens.has(t)) score += 3; });

  // Coincidencia por título
  tokenize(item.title).forEach(t => { if (qTokens.includes(t)) score += 1; });

  // Bonus por frase exacta en answer
  if (item.answer.toLowerCase().includes(query.toLowerCase())) score += 2;

  return score;
}

function retrieveAnswers(query: string, k: number = 2): KBItem[] {
  const ranked = KB.map(item => ({ item, s: scoreQuery(query, item) }))
    .filter(r => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .map(r => r.item);
  return ranked;
}

/** ===== Helper UI ===== */
const INITIAL_GREETING: Message = {
  role: "model",
  text: "Hola 👋 Soy Metodiko AI. Pregúntame sobre nuestro enfoque, pilares, servicios, beneficios, ROI/FODA/KPIs o cómo empezar."
};

function useAutoScroll(dep: unknown) {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [dep]);
  return endRef;
}

/** ===== Componente principal ===== */
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem("metodiko_chat_history");
      return saved ? (JSON.parse(saved) as Message[]) : [INITIAL_GREETING];
    } catch { return [INITIAL_GREETING]; }
  });
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const endRef = useAutoScroll(messages.length + (isThinking ? 1 : 0));

  useEffect(() => {
    localStorage.setItem("metodiko_chat_history", JSON.stringify(messages));
  }, [messages]);

  const suggestions = useMemo(
    () => ["Pilares del modelo", "Servicios para Ventas", "¿Cómo miden el ROI?", "Quiero hablar con el equipo"],
    []
  );

  const toggle = () => setIsOpen(o => !o);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || isThinking) return;

    setMessages(prev => [...prev, { role: "user", text: q }]);
    setInput("");
    setIsThinking(true);

    // Recuperación local + respuesta compuesta
    const hits = retrieveAnswers(q, 3);
    let answer: string;

    if (hits.length > 0) {
      answer = hits.map(h => `**${h.title}**\n${h.answer}`).join("\n\n");
    } else {
      // Fallback neutral
      answer =
        "Puedo ayudarte con nuestro Enfoque, Pilares, Servicios (Adm/Logística/RRHH/Tecnología/Ventas/Gerencia), Beneficios, ROI/FODA/KPIs y próximos pasos. " +
        "Si lo prefieres, te conecto con el equipo: visita metodiko.com.mx.";
    }

    // Simular “pensando”
    await new Promise(r => setTimeout(r, 450));

    setMessages(prev => [...prev, { role: "model", text: answer }]);
    setIsThinking(false);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={isOpen}
        className="
          fixed bottom-5 right-5 z-40 rounded-full p-4 shadow-lg
          bg-brand-primary text-white hover:opacity-90 transition
          md:bottom-6 md:right-6
        "
      >
        {isOpen ? <IconClose className="w-5 h-5" /> : <IconChat className="w-5 h-5" />}
      </button>

      {/* Panel */}
      <div
        role="dialog"
        aria-labelledby="chatbot-title"
        className={`
          fixed z-40 bottom-20 right-4 md:right-6
          w-[92vw] max-w-md h-[72vh]
          rounded-2xl border border-brand-border shadow-xl
          bg-brand-bg/95 backdrop-blur
          ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
          transition-all duration-200
        `}
      >
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <h2 id="chatbot-title" className="text-base md:text-lg font-semibold text-brand-text">
              Metodiko AI
            </h2>
          </div>
          <button
            onClick={toggle}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition"
            aria-label="Cerrar chat"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </header>

        {/* Mensajes */}
        <div className="h-[calc(72vh-56px-64px)] overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`
                max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed
                ${m.role === "user"
                  ? "self-end bg-brand-primary text-white"
                  : "self-start bg-muted text-brand-text"}
              `}
            >
              {/* Render simple con soportito a negritas Markdown **...** */}
              <span
                dangerouslySetInnerHTML={{
                  __html: m.text
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\n/g, "<br/>"),
                }}
              />
            </div>
          ))}
          {isThinking && (
            <div className="self-start bg-muted text-brand-text rounded-2xl px-3 py-2">
              Pensando…
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Sugerencias rápidas */}
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="text-xs md:text-sm px-3 py-1 rounded-full border border-brand-border text-brand-text-secondary hover:text-brand-text"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={send} className="p-4 border-t border-brand-border flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta…"
            className="flex-grow px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={isThinking}
            aria-label="Mensaje para el chatbot"
          />
          <button
            type="submit"
            disabled={isThinking || !input.trim()}
            className="button p-3 flex items-center justify-center disabled:opacity-50"
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
