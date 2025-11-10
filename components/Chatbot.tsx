import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

/* ====================== Tipos ====================== */
type Role = "user" | "model";
interface Message { role: Role; text: string; }

/* ====================== Ajustes de UX ====================== */
const BASE_CHAR_DELAY = 65;
const PAUSE_DOT = 320;
const PAUSE_COMMA = 180;
const PAUSE_SPACE = 24;

// FAB separado del scroll-to-top
const FAB_OFFSET_BOTTOM = "7.25rem";
const FAB_OFFSET_RIGHT = "1.25rem";

/* ====================== Estilo conversacional ====================== */
const Style = {
  openers: [
    "Con gusto. ",
    "Gracias por la consulta. ",
    "Claro, vamos por partes. ",
    "Encantado de apoyar. ",
    "Perfecto, le doy el panorama. ",
  ],
  empathy: [
    "Entiendo lo que busca. ",
    "Tiene sentido lo que plantea. ",
    "Es una necesidad común al crecer. ",
    "Suele pasar con procesos dispersos. ",
  ],
  bridges: [
    "En concreto, ",
    "Poniéndolo simple, ",
    "Si vamos a lo esencial, ",
    "Bajándolo a lo práctico, ",
  ],
  closers: [
    "¿Quiere que lo aterrice a su área?",
    "¿Le muestro un mini flujo en 3 pasos?",
    "¿Lo vemos con KPIs y quick wins?",
    "¿Le comparto un ejemplo aplicado?",
  ],
  emojis: { ok: "✅", light: "💡", chart: "📊", gear: "⚙️", wave: "👋" },
  baseChips: [
    "Cómo encaramos tu negocio",
    "Pilares del modelo",
    "Servicios para Ventas",
    "Beneficios estratégicos",
    "ROI / FODA / KPIs",
    "Agendar contacto",
  ],
  farewells: [
    "Gracias por su tiempo. Quedo atento si desea continuar.",
    "Un gusto ayudarle. Estoy aquí cuando lo necesite.",
    "Con todo gusto seguimos cuando quiera.",
  ],
  oosIntro:
    "Para mantener precisión, estoy enfocado en Metodiko (estrategia, operaciones, transformación digital y medición). ",
  oosRedirect: [
    "Si gusta, puedo explicarle nuestro enfoque o beneficios.",
    "Puedo mostrarle un caso aplicado a Ventas/Operaciones/TI.",
    "También puedo ayudarle a estimar ROI con un ejemplo sencillo.",
  ],
};

/* ====================== Base de conocimientos con variaciones ====================== */
type Variant = { short: string[]; medium: string[]; explain?: string[]; chips?: string[]; followups?: string[]; cta?: string[]; };
type Entry = { triggers: string[]; data: Variant; };

const KB: Record<string, Entry> = {
  saludo: {
    triggers: ["hola","buenos días","buenas tardes","que tal","qué tal","saludo"],
    data: {
      short: [
        `Hola ${Style.emojis.wave} Soy Metodiko AI. Puedo ayudarle con enfoque, pilares, beneficios o un caso aplicado a su área.`,
        `¡Bienvenido! ${Style.emojis.wave} ¿Vemos enfoque general, beneficios o un ejemplo práctico en su operación?`,
      ],
      medium: [
        `Trabajo con la información de Metodiko para explicar **cómo encaramos el negocio**, **nuestros pilares** y **cómo medimos impacto** (ROI, FODA, KPIs). ¿Por dónde desea empezar?`,
      ],
      chips: Style.baseChips,
      followups: [
        "¿Prefiere ver un mini flujo en Ventas?",
        "¿Quiere un resumen de beneficios tangibles?",
        "¿Le explico los 3 pilares con un ejemplo?",
      ],
    },
  },
  enfoque: {
    triggers: ["enfoque","metodología","metodologia","cómo trabajan","como trabajan","encaramos"],
    data: {
      short: [
        `Ordenamos procesos, unificamos **datos confiables** y conectamos áreas para decidir con claridad y velocidad ${Style.emojis.ok}`,
        `Pasamos de operación dispersa a **gobierno ejecutivo** con tableros y reglas claras.`,
      ],
      medium: [
        `Alineamos personas, procesos y gobierno corporativo; priorizamos iniciativas de alto impacto y acompañamos la ejecución para asegurar adopción y retorno.`,
      ],
      explain: [
        `Así trabajamos: 1) relevamos procesos y datos actuales; 2) detectamos cuellos de botella y riesgos; 3) definimos estándares y responsables; 4) automatizamos lo repetitivo; 5) montamos tableros ejecutivos; 6) medimos adopción y ROI.`,
        `Si hoy hay procesos fragmentados, primero hacemos un mapa end-to-end, normalizamos reglas y sólo después digitalizamos. Eso evita “tecnología sobre desorden”.`,
      ],
      chips: ["Pilares del modelo","Beneficios estratégicos","ROI / FODA / KPIs"],
      followups: ["¿Le muestro un ejemplo con tableros y responsables?"],
    },
  },
  pilares: {
    triggers: ["pilares","modelo de trabajo"],
    data: {
      short: [
        `Tres frentes: 1) **Consultoría Integral** (procesos, roles y controles), 2) **Transformación Digital** (automatización, datos confiables), 3) **Formaciones** (adopción real) ${Style.emojis.gear}`,
        `Estrategia + operación + tecnología para resultados visibles del diagnóstico a la ejecución continua.`,
      ],
      medium: [
        `Orquestamos áreas con indicadores compartidos y definimos políticas/tableros para visibilidad ejecutiva; acompañamos el cambio con métricas de adopción.`,
      ],
      explain: [
        `Cómo se conectan: el frente 1 ordena y prioriza; el 2 habilita eficiencia y trazabilidad; el 3 asegura que la gente lo use y se mantenga en el tiempo.`,
      ],
      chips: ["Beneficios estratégicos","Servicios para Ventas","ROI / FODA / KPIs"],
      followups: ["¿Desea verlo aplicado a Ventas o Logística?"],
    },
  },
  beneficios: {
    triggers: ["beneficios","valor","impacto","ventajas"],
    data: {
      short: [
        `**Decisiones con datos confiables y a tiempo**, menos fricción operativa y **riesgos bajo control** ${Style.emojis.ok}`,
        `Base lista para **crecer sin fricciones**: automatización, trazabilidad end-to-end y tableros ejecutivos.`,
      ],
      medium: [
        `Claridad para decidir, eficiencia con procesos estandarizados, previsibilidad financiera y **velocidad competitiva**.`,
      ],
      explain: [
        `Ejemplo breve: si hoy tarda en cerrar mes por datos sucios, limpiamos fuentes, definimos dueños de datos y conectamos un tablero financiero. Resultado: cierres más rápidos y decisiones con evidencia.`,
      ],
      chips: ["Cómo encaramos tu negocio","ROI / FODA / KPIs","Agendar contacto"],
      followups: ["¿Quiere priorizar beneficios por área?"],
      cta: ["¿Agendamos 15 min para mapear su caso y ROI potencial?"],
    },
  },
  medicion: {
    triggers: ["roi","foda","kpi","indicadores","tableros","métricas","metricas","okrs","okr"],
    data: {
      short: [
        `**ROI** por iniciativa, **FODA vivo** y **KPIs** con responsables. Todo en un tablero ejecutivo ${Style.emojis.chart}`,
        `Medimos retorno, riesgos y desempeño conectando estrategia con ejecución.`,
      ],
      medium: [
        `Operamos con OKRs, tableros por área y métricas de adopción. Lo que se mide, evoluciona.`,
      ],
      explain: [
        `Cómo lo medimos: definimos objetivos, elegimos 3–5 KPIs por área, fijamos metas trimestrales y revisiones quincenales. Si un KPI se desvía, hay plan de acción y dueño.`,
      ],
      chips: ["Beneficios estratégicos","Pilares del modelo","Agendar contacto"],
      followups: ["¿Desea un set de KPIs por área?"],
    },
  },
  ventas: {
    triggers: ["ventas","crm","pipeline","forecast","comercial","prospecto","prospectos"],
    data: {
      short: [
        `**CRM ordenado** con scoring y playbooks: **más conversión**, ciclos más cortos y forecast confiable ${Style.emojis.chart}`,
        `Estructuramos etapas, responsables y reglas para predecir y acelerar cierres.`,
      ],
      medium: [
        `Mini flujo: captación → calificación → propuesta/seguimiento → cierre. Tablero con conversión, ciclo, valor del pipeline y forecast.`,
      ],
      explain: [
        `Si hoy no hay visibilidad: definimos etapas claras, criterios de avance, tareas automáticas y tableros. Así detecta cuellos de botella y proyecta ingresos con mayor certeza.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
      followups: ["¿Quiere un checklist de CRM en 5 puntos?"],
    },
  },
  logistica: {
    triggers: ["logística","logistica","wms","inventario","almacén","almacen","rutas","pedido","otif"],
    data: {
      short: [
        `WMS ligero con **trazabilidad end-to-end**, inventario inteligente y rutas optimizadas. Menor costo por entrega y **cumplimiento (OTIF)** ${Style.emojis.ok}`,
        `Visibilidad total: recepción → almacenaje → preparación → despacho → entrega.`,
      ],
      medium: [
        `KPIs: rotación, exactitud de inventario, costo por entrega, % OTIF y tiempos por etapa.`,
      ],
      explain: [
        `Para reducir errores: códigos únicos por movimiento, validaciones en picking, y tablero con alarmas de quiebres de stock.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
    },
  },
  administracion: {
    triggers: ["administración","administracion","finanzas","aprobación","aprobacion","contable","gastos","pagos"],
    data: {
      short: [
        `Mapeamos procesos, definimos **reglas de aprobación** y **automatizamos** tareas clave. Tableros financieros en tiempo real ${Style.emojis.ok}`,
        `Más control y menos errores: compras, gastos y pagos estandarizados.`,
      ],
      medium: [
        `KPIs: tiempo de aprobación, % de errores, desvío vs presupuesto, aging y eficiencia P2P.`,
      ],
      explain: [
        `Ejemplo: política de 3 cotizaciones, tope por rol y aprobaciones por monto; se integra a pagos y queda rastro en el tablero.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
    },
  },
  rrhh: {
    triggers: ["rrhh","rh","talento","desempeño","desempeno","onboarding","clima"],
    data: {
      short: [
        `Onboarding **sin papeles**, desempeño y **automatizaciones** de RH. Visibilidad del clima y objetivos alineados ${Style.emojis.ok}`,
        `Formación continua para sostener la adopción del cambio.`,
      ],
      medium: [
        `Indicadores: tiempo de cobertura, rotación, eNPS/clima, % objetivos cumplidos y avance de formación.`,
      ],
      explain: [
        `Para elevar desempeño: metas trimestrales claras por rol, feedback breve quincenal y tableros accesibles al líder y al colaborador.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
    },
  },
  tecnologia: {
    triggers: ["ti","tecnología","tecnologia","seguridad","datos confiables","automatización","automatizacion","arquitectura"],
    data: {
      short: [
        `Seguridad reforzada, **automatización** y **datos confiables** para análisis avanzado e IA. Operación estable ${Style.emojis.gear}`,
        `Plataformas y arquitecturas alineadas a su estrategia de crecimiento.`,
      ],
      medium: [
        `KPIs: incidentes, MTTR/MTBF, calidad de datos, % automatizaciones, disponibilidad.`,
      ],
      explain: [
        `Ruta típica: catálogo de datos, controles de calidad, ETL trazable y gobierno de accesos; luego analítica avanzada/IA.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
    },
  },
  gerencia: {
    triggers: ["gerencia","gobierno de datos","pmo","riesgos"],
    data: {
      short: [
        `**Gobierno de datos ágil** y **PMO** conectada a la estrategia. OKRs con seguimiento y riesgos visibles ${Style.emojis.chart}`,
        `Traducimos inversiones en **modelos de ROI** y medimos avance con tableros ejecutivos.`,
      ],
      medium: [
        `Artefactos: portafolio priorizado, roadmap, matriz de riesgos, financial model y tablero consolidado.`,
      ],
      explain: [
        `Para ejecutar estrategia: priorizamos el portafolio, definimos OKRs por frente y rituales de seguimiento; riesgos con dueños y planes.`,
      ],
      chips: ["Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"],
    },
  },
  agendar: {
    triggers: ["agendar","contacto","cita","reunión","reunion","llamada"],
    data: {
      short: [
        `Con todo gusto coordinamos. Compártame correo o franja de horario y lo agendamos ${Style.emojis.ok}`,
        `Podemos empezar con una llamada de 15 minutos para priorizar dolores y quick wins.`,
      ],
      medium: [
        `También puede escribirnos en metodiko.com.mx. Recomendación: diagnóstico breve y pragmático.`,
      ],
      explain: [
        `Siguiente paso sugerido: 15 min para identificar 3 objetivos y 3 restricciones; luego pre-diagnóstico con estimación de ROI.`,
      ],
      chips: ["Cómo encaramos tu negocio","Beneficios estratégicos","ROI / FODA / KPIs"],
      cta: ["¿Qué horario le acomoda esta semana?"],
    },
  },
  precio: {
    triggers: ["precio","costo","inversión","inversion","presupuesto","cuanto cuesta","cuánto cuesta"],
    data: {
      short: [
        `Estimamos inversión tras un diagnóstico breve. Enfoque: **cada iniciativa con ROI claro y plazos razonables** ${Style.emojis.chart}`,
        `Proponemos fases para capturar valor temprano (quick wins) y reducir riesgo.`,
      ],
      medium: [
        `Le acercamos un rango al validar alcance y prioridades. Objetivo: rentabilidad, eficiencia y trazabilidad medibles.`,
      ],
      explain: [
        `Modelo típico: fase 0 (diagnóstico), fase 1 (quick wins + estándares), fase 2 (automatización + tableros), fase 3 (optimización/IA).`,
      ],
      chips: ["ROI / FODA / KPIs","Beneficios estratégicos","Agendar contacto"],
    },
  },
  despedida: {
    triggers: ["gracias","eso es todo","está bien","esta bien","no necesito","listo","perfecto","luego","adiós","adios","bye","nos vemos","ok gracias","ok, gracias"],
    data: {
      short: Style.farewells,
      medium: [
        "Gracias por su tiempo. Si más tarde desea revisar beneficios, ROI o un caso aplicado, con gusto le ayudo.",
      ],
      chips: ["Beneficios estratégicos","Agendar contacto"],
    },
  },
  desconocido: {
    triggers: ["*"],
    data: {
      short: [
        `Puedo apoyar con **enfoque**, **beneficios** o un ejemplo aplicado a Ventas/Operaciones/TI. ¿Qué tema le interesa? ${Style.emojis.light}`,
        `Si me indica su área (Ventas, Logística, RH, TI, Gerencia), le doy un ejemplo directo.`,
      ],
      medium: [
        `También puedo sugerir un punto de partida con KPIs y quick wins. ¿Le parece si priorizamos 3 objetivos?`,
      ],
      explain: [
        `Para orientar mejor, dígame su objetivo (ahorrar costos, acelerar ventas, más control). Le propongo pasos y KPIs acordes.`,
      ],
      chips: Style.baseChips,
    },
  },
};

/* ====================== Sugerencias iniciales (tarjetas) ====================== */
const SUGGESTIONS: Array<{ key: keyof typeof KB; title: string; blurb: string }> = [
  { key: "ventas", title: "Ventas predecibles", blurb: "CRM con scoring, playbooks y forecast confiable." },
  { key: "logistica", title: "Logística con trazabilidad", blurb: "WMS ligero, menos errores y OTIF alto." },
  { key: "administracion", title: "Administración eficiente", blurb: "Aprobaciones claras y finanzas en tiempo real." },
  { key: "rrhh", title: "Talento y desempeño", blurb: "Onboarding digital, clima y objetivos alineados." },
  { key: "tecnologia", title: "TI confiable", blurb: "Seguridad, automatización y datos listos para IA." },
  { key: "medicion", title: "ROI / FODA / KPIs", blurb: "Decisiones con evidencia y tableros ejecutivos." },
];

/* ====================== OOS / utilidad ====================== */
const OOS_WORDS = [
  "clima","tiempo","chiste","broma","receta","película","pelicula","serie","fútbol","futbol","partido","bitcoin",
  "dólar","dolar","horóscopo","horoscopo","música","musica","medicina","diagnóstico","diagnostico","abogado",
  "código","codigo","programación","programacion","impuestos","trámite","tramite","radio","mapa"
];

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

function includesAny(text: string, list: string[]) {
  const t = text.toLowerCase();
  return list.some(w => t.includes(w));
}

function findIntent(text: string): keyof typeof KB {
  const t = text.toLowerCase();
  for (const key of Object.keys(KB) as Array<keyof typeof KB>) {
    if (key === "desconocido") continue;
    const entry = KB[key];
    if (entry.triggers.some(tr => t.includes(tr))) return key;
  }
  return "desconocido";
}

function pick<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }

function needsExplanation(text: string) {
  const t = text.toLowerCase();
  return /\b(cómo|como|por qué|porque|para qué|para que|ejemplo|caso|pasos|implementar|medir|kpi|kpIs)\b/.test(t);
}

function buildReply(topic: keyof typeof KB, size: "short" | "medium", opts?: { forceOOS?: boolean; explain?: boolean }) {
  if (opts?.forceOOS) {
    const body = Style.oosIntro + " " + pick(Style.oosRedirect);
    return compose(body);
  }
  const entry = KB[topic] ?? KB.desconocido;
  let pool = entry.data[size] ?? KB.desconocido.data.short;
  if (opts?.explain && entry.data.explain && entry.data.explain.length) {
    pool = entry.data.explain;
  }
  let body = pick(pool);
  if (entry.data.followups && Math.random() < 0.45) body += " " + pick(entry.data.followups);
  else if (entry.data.cta && Math.random() < 0.35) body += " " + pick(entry.data.cta);
  return compose(body);

  function compose(main: string) {
    const opener = pick(Style.openers);
    const maybeEmpathy = Math.random() < 0.45 ? pick(Style.empathy) : "";
    const maybeBridge = Math.random() < 0.55 ? pick(Style.bridges) : "";
    const maybeCloser = Math.random() < 0.45 ? " " + pick(Style.closers) : "";
    return `${opener}${maybeEmpathy}${maybeBridge}${main}${maybeCloser}`;
  }
}

/* ====================== Componente ====================== */
const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(Style.baseChips);
  const endRef = useRef<HTMLDivElement>(null);

  // Inicializa conversación
  const resetConversation = () => {
    setMessages([
      { role: "model", text: buildReply("saludo", "short") }
    ]);
    setChips(Style.baseChips);
    setInput("");
    setTyping(false);
  };

  // Al abrir/cerrar: al cerrar limpia; al abrir inicia de cero
  useEffect(() => {
    if (open) {
      resetConversation();
    } else {
      // al cerrar, dejar todo limpio
      setMessages([]);
      setInput("");
      setTyping(false);
    }
  }, [open]);

  // Scroll suave siempre que hay nuevos mensajes o typing
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false); // esto dispara el reset por el efecto
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || typing) return;
    void answer(input.trim());
  };

  const answerFromSuggestion = (key: keyof typeof KB) => {
    if (!typing) void answer(key);
  };

  async function answer(userText: string) {
    // Si el usuario clickeó una sugerencia (key), convertimos a intención directa
    const directKey = (Object.keys(KB) as Array<keyof typeof KB>).find(k => userText === k);

    setMessages(prev => [...prev, { role: "user", text: directKey ? KB[directKey].triggers[0] || String(directKey) : userText }]);
    setInput("");
    setTyping(true);

    const lower = (directKey ? KB[directKey].triggers[0] : userText).toLowerCase();

    // Despedida
    if (findIntent(lower) === "despedida") {
      await respond(buildReply("despedida", "short"));
      setChips(KB.despedida.data.chips ?? Style.baseChips);
      setTyping(false);
      return;
    }

    // OOS
    if (includesAny(lower, OOS_WORDS)) {
      await respond(buildReply("desconocido", "short", { forceOOS: true }));
      setChips(Style.baseChips);
      setTyping(false);
      return;
    }

    const intent = directKey ?? findIntent(lower);
    const size: "short" | "medium" = lower.length > 120 ? "medium" : "short";
    const explain = needsExplanation(lower);

    const text = buildReply(intent, size, { explain });
    await respond(text);

    const entry = KB[intent];
    const nextChips = entry?.data?.chips ?? Style.baseChips;
    const merged = Array.from(new Set([...(nextChips || []), ...Style.baseChips])).slice(0, 6);
    setChips(merged);

    setTyping(false);
  }

  async function respond(text: string) {
    // Placeholder “pensando…”
    let idx = -1;
    setMessages(prev => {
      const next = [...prev, { role: "model", text: "" }];
      idx = next.length - 1;
      return next;
    });

    // Tipeo humano
    await typeOut(text, (partial) => {
      setMessages(prev => {
        const next = [...prev];
        if (idx >= 0) next[idx] = { role: "model", text: partial };
        return next;
      });
    });
  }

  const hasUserMessage = messages.some(m => m.role === "user");

  return (
    <>
      {/* Estilos locales para puntos “pensando…” */}
      <style>{`
        @keyframes typingBlink { 0%, 80%, 100% { opacity: .2 } 40% { opacity: 1 } }
        .typing-dot { width:6px; height:6px; margin-right:6px; border-radius:9999px; background: var(--brand-text-secondary, #6b7280); display:inline-block; animation: typingBlink 1.2s infinite ease-in-out; }
        .typing-dot.delay-150 { animation-delay: .15s; }
        .typing-dot.delay-300 { animation-delay: .30s; }
      `}</style>

      {/* FAB: solo cuando el chat está CERRADO (para evitar cualquier encimado con el botón Enviar) */}
      {!open && (
        <button
          className="chatbot-fab fixed z-[60]"
          style={{ bottom: FAB_OFFSET_BOTTOM, right: FAB_OFFSET_RIGHT }}
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
          aria-expanded={open}
        >
          <IconChat className="w-6 h-6" />
        </button>
      )}

      <div className={`chatbot-panel ${open ? "open" : ""}`} role="dialog" aria-labelledby="chatbot-title">
        {/* Header limpio: logo más grande y SIN marco */}
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
            <h2 id="chatbot-title" className="text-lg md:text-xl font-semibold text-brand-text">
              Metodiko AI
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}  // Al cerrar, el efecto limpia toda la conversación
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar chat"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        {/* Sugerencias iniciales en tarjetas (solo antes de que el usuario escriba) */}
        {!hasUserMessage && (
          <div className="px-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUGGESTIONS.map(s => (
                <button
                  key={s.title}
                  onClick={() => answerFromSuggestion(s.key)}
                  className="text-left rounded-2xl border border-brand-border/70 bg-muted/60 hover:bg-muted transition p-3"
                >
                  <div className="text-base font-semibold text-brand-text">{s.title}</div>
                  <div className="text-sm text-brand-text-secondary mt-1">{s.blurb}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chips siempre activos */}
        <div className="px-4 pt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
              onClick={() => answer(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Conversación: más alto útil + fuente un poco menor */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 md:gap-4 min-h-[60vh] md:min-h-[66vh] text-[15px] leading-relaxed">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-bubble ${m.role === "user" ? "message-user" : "message-model"} text-[15px] leading-relaxed`}
            >
              {m.text}
            </div>
          ))}

          {/* Indicador de “pensando” con puntos sutiles */}
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
