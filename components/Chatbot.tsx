import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

/* =================== Tipos =================== */
type Role = "user" | "model";
interface Message { role: Role; text: string; }

type Topic =
  | "saludo" | "enfoque" | "pilares" | "beneficios" | "medicion"
  | "ventas" | "logistica" | "administracion" | "rrhh" | "tecnologia" | "gerencia"
  | "agendar" | "precio" | "desconocido";

type Phase = "idle" | "await_area" | "await_yes_no" | "chatting" | "await_paleta_tipo";

/* =================== UX =================== */
const BASE_CHAR_DELAY = 65;
const PAUSE_DOT = 320;
const PAUSE_COMMA = 180;
const PAUSE_SPACE = 24;

const FAB_OFFSET_BOTTOM = "7.25rem";
const FAB_OFFSET_RIGHT = "1.25rem";

/* =================== Utiles =================== */
const AFFIX = { ok: "✅", light: "💡", chart: "📊", gear: "⚙️", wave: "👋" };

const AFFIRM = ["si","sí","claro","de acuerdo","va","ok","dale","me parece","correcto"];
const NEGATE  = ["no","nah","no gracias","luego","después","despues"];
const AREAS = ["Ventas","Logística","Administración","RH","TI","Gerencia"];

const OOS_WORDS = [
  "clima","tiempo","broma","chiste","receta","película","pelicula","serie","fútbol","futbol","bitcoin",
  "dólar","dolar","horóscopo","horoscopo","música","musica","medicina","diagnóstico","diagnostico","abogado",
  "mapa","trámite","tramite"
];

function sleep(ms:number){ return new Promise(r=>setTimeout(r,ms)); }
async function typeOut(text:string, set:(t:string)=>void){
  let buf=""; for (let i=0;i<text.length;i++){ const ch=text[i]; buf+=ch; set(buf);
    let d = BASE_CHAR_DELAY; if(".!?".includes(ch)) d=PAUSE_DOT; else if(",;:".includes(ch)) d=PAUSE_COMMA; else if(ch===" ") d=PAUSE_SPACE;
    await sleep(d);
  }
}
const pick = <T,>(arr:T[]) => arr[Math.floor(Math.random()*arr.length)];
const includesAny = (t:string, list:string[]) => list.some(w => t.includes(w.toLowerCase()));
const isAffirm = (t:string) => AFFIRM.some(w => t === w || t.includes(` ${w} `));
const isNegate = (t:string) => NEGATE.some(w => t === w || t.includes(` ${w} `));

/* =================== Conocimiento (respuestas por tema/área) =================== */
const OPENERS = [
  "Con gusto. ","Gracias por la consulta. ","Claro, vamos al punto. ","Encantado de apoyar. ","Perfecto, aquí va. "
];

const KB: Record<Topic,string[]> = {
  saludo: [
    `Hola ${AFFIX.wave} Soy Metodiko AI. Puedo ayudarle con nuestro enfoque, pilares, beneficios o un caso aplicado a su área.`,
    `Bienvenido ${AFFIX.wave} ¿Quiere ver enfoque general, beneficios o un ejemplo práctico en su operación?`
  ],
  enfoque: [
    `Ordenamos procesos, unificamos datos confiables y conectamos áreas para decidir con claridad y velocidad ${AFFIX.ok}`,
    `Pasamos de operación dispersa a gobierno ejecutivo con tableros y reglas claras.`
  ],
  pilares: [
    `Tres frentes: 1) Consultoría Integral (procesos, roles y controles), 2) Transformación Digital (automatización y datos confiables), 3) Formaciones (adopción real) ${AFFIX.gear}`,
    `Combinamos estrategia + operación + tecnología para resultados visibles del diagnóstico a la ejecución continua.`
  ],
  beneficios: [
    `Decisiones con datos confiables y a tiempo, menos fricción operativa y riesgos bajo control. Base lista para crecer sin fricciones ${AFFIX.ok}`,
    `Trazabilidad end-to-end, procesos estables y tableros ejecutivos para priorizar con evidencia.`
  ],
  medicion: [
    `ROI por iniciativa, FODA vivo y KPIs con responsables, todo en un tablero ejecutivo ${AFFIX.chart}`,
    `Conectamos estrategia con ejecución usando OKRs, revisiones periódicas y métricas de adopción.`
  ],
  ventas: [
    `CRM ordenado con scoring y playbooks. Resultado: más conversión, ciclos más cortos y forecast confiable ${AFFIX.chart}`,
    `Flujo base: captación → calificación → propuesta/seguimiento → cierre. Tablero con tasa de conversión y ciclo.`
  ],
  logistica: [
    `WMS ligero con trazabilidad end-to-end, inventario inteligente y rutas optimizadas: menor costo por entrega y cumplimiento (OTIF) ${AFFIX.ok}`,
    `KPIs sugeridos: rotación, exactitud de inventario, costo por entrega, % OTIF y tiempos por etapa.`
  ],
  administracion: [
    `Mapeamos procesos, reglas de aprobación y automatizamos tareas clave. Finanzas en tiempo real para decidir con claridad ${AFFIX.ok}`,
    `Indicadores: tiempo de aprobación, errores, desvío vs presupuesto y aging.`
  ],
  rrhh: [
    `Onboarding digital, desempeño y automatizaciones de RH. Visibilidad del clima y objetivos alineados por equipo ${AFFIX.ok}`,
    `Formación continua para sostener la adopción del cambio.`
  ],
  tecnologia: [
    `Seguridad reforzada, automatización y datos confiables para análisis avanzado e IA. Operación estable ${AFFIX.gear}`,
    `Gobierno de datos: catálogo, calidad, ETL trazable y accesos controlados.`
  ],
  gerencia: [
    `Gobierno de datos ágil y PMO conectada a la estrategia. OKRs con seguimiento y riesgos visibles ${AFFIX.chart}`,
    `Traducimos inversiones en modelos de ROI y tablero ejecutivo consolidado.`
  ],
  agendar: [
    `Con gusto coordinamos. Compártame un correo o franja de horario y lo agendamos ${AFFIX.ok}`,
    `Podemos empezar con 15 minutos para priorizar dolores y quick wins.`
  ],
  precio: [
    `Estimamos inversión tras un diagnóstico breve. Objetivo: cada iniciativa con ROI claro y plazos razonables ${AFFIX.chart}`
  ],
  desconocido: [
    `Puedo apoyar con enfoque, beneficios o un ejemplo aplicado a Ventas/Logística/RH/TI/Gerencia. ¿Qué tema le interesa? ${AFFIX.light}`
  ]
};

/* Detalle por área cuando piden “beneficios por área” */
const BENEFICIOS_AREA: Record<string,string> = {
  Ventas: "Ventas: mayor conversión con CRM y playbooks claros, ciclos más cortos, forecast confiable y visibilidad del pipeline.",
  Logística: "Logística: menos quiebres y errores, inventario exacto, costo por entrega controlado y OTIF alto.",
  Administración: "Administración: aprobaciones claras, menos errores y cierre financiero más rápido con datos limpios.",
  RH: "RH: onboarding sin papeles, objetivos alineados y visibilidad de clima y desempeño.",
  TI: "TI: menos incidentes, automatizaciones estables y datos listos para analítica/IA.",
  Gerencia: "Gerencia: tablero ejecutivo, OKRs visibles y riesgos gestionados con responsables."
};

/* =================== Intents & parsing =================== */
function detectTopic(text:string): Topic {
  const t = text.toLowerCase();
  if (/\b(hola|buen[oa]s|qué tal|que tal)\b/.test(t)) return "saludo";
  if (/enfoque|encaramos|metodolog[ií]a|metodologia|c[oó]mo trabajan|como trabajan/.test(t)) return "enfoque";
  if (/pilares?|modelo de trabajo/.test(t)) return "pilares";
  if (/beneficio|valor|impacto|ventaja/.test(t)) return "beneficios";
  if (/\broi\b|foda|kpi|indicador|tablero|m[eé]trica|okrs?\b/.test(t)) return "medicion";
  if (/venta|crm|pipeline|forecast|comercial|prospect/.test(t)) return "ventas";
  if (/log[ií]stica|wms|inventario|almac[eé]n|rutas|otif/.test(t)) return "logistica";
  if (/administra(ci[oó]n)|finanzas|aprobaci[oó]n|contable|gasto|pago/.test(t)) return "administracion";
  if (/\b(rrhh|rh|talento|desempeñ|onboarding|clima)\b/.test(t)) return "rrhh";
  if (/\b(ti|tecnolog[ií]a|seguridad|automatiza|arquitectura|datos confiables)\b/.test(t)) return "tecnologia";
  if (/gerencia|gobierno de datos|pmo|riesgos/.test(t)) return "gerencia";
  if (/agenda(r)?|contact(o)?|llamada|reuni[oó]n|cita/.test(t)) return "agendar";
  if (/precio|costo|inversi[oó]n|presupuesto|cu[aá]nto cuesta/.test(t)) return "precio";
  return "desconocido";
}

/* =================== Componente =================== */
const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [phase, setPhase] = useState<Phase>("idle");
  const [currentTopic, setCurrentTopic] = useState<Topic>("saludo");
  const [pendingArea, setPendingArea] = useState<string | null>(null);
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);

  const [chips, setChips] = useState<string[]>([
    "Cómo encaramos tu negocio",
    "Pilares del modelo",
    "Servicios para Ventas",
    "Beneficios estratégicos",
    "ROI / FODA / KPIs",
    "Agendar contacto",
  ]);

  const bodyRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  /* ---------- helpers visuales ---------- */
  const scrollToBottom = () => { endRef.current?.scrollIntoView({ behavior:"smooth" }); setShowScrollDown(false); };
  useEffect(() => { scrollToBottom(); }, [messages, typing]);

  const onBodyScroll = () => {
    const el = bodyRef.current; if(!el) return;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 120;
    setShowScrollDown(!nearBottom);
  };

  /* ---------- abrir/cerrar limpia conversación ---------- */
  const resetConversation = () => {
    setMessages([{ role:"model", text: pick(KB.saludo) }]);
    setInput(""); setTyping(false);
    setPhase("chatting"); setCurrentTopic("saludo");
    setPendingArea(null); setLastQuestion(null);
    setChips([
      "Cómo encaramos tu negocio","Pilares del modelo","Servicios para Ventas",
      "Beneficios estratégicos","ROI / FODA / KPIs","Agendar contacto"
    ]);
    setTimeout(()=>scrollToBottom(),50);
  };

  useEffect(() => {
    if (open) resetConversation();
    else {
      setMessages([]); setInput(""); setTyping(false);
      setPhase("idle"); setShowScrollDown(false);
    }
  }, [open]);

  /* ---------- responder ---------- */
  const addModelMessage = async (text:string) => {
    let idx=-1;
    setMessages(prev => { const next=[...prev,{role:"model",text:""}]; idx=next.length-1; return next; });
    await typeOut(text, (partial)=> {
      setMessages(prev => { const next=[...prev]; next[idx]={role:"model",text:partial}; return next; });
    });
  };

  const replyTopic = async (topic:Topic, opts?:{ askArea?:boolean; explain?:boolean }) => {
    setCurrentTopic(topic);
    const base = pick(KB[topic]);
    let text = `${pick(OPENERS)}${base}`;
    await addModelMessage(text);

    // si hay que pedir área
    if (opts?.askArea) {
      await addModelMessage("¿En qué área desea enfocarse ahora? Puede elegir: Ventas, Logística, Administración, RH, TI o Gerencia.");
      setPhase("await_area");
      setLastQuestion("elige_area");
    } else {
      setPhase("chatting");
      setLastQuestion(null);
    }
  };

  const replyBenefitsByArea = async (area:string) => {
    const body = BENEFICIOS_AREA[area] || "Puedo detallarlo por área si me indica una de la lista.";
    await addModelMessage(`${pick(OPENERS)}${body}`);
    setPhase("chatting"); setLastQuestion(null); setPendingArea(area);
  };

  const replyMiniFlujoVentas = async () => {
    const flujo =
      "Mini flujo de Ventas (3 pasos):\n" +
      "1) Calificar leads (fuente, perfil, valor). \n" +
      "2) Playbook por etapa con tareas automáticas y responsables. \n" +
      "3) Tablero con conversión, ciclo y forecast. ¿Quiere checklist de CRM en 5 puntos?";
    await addModelMessage(`${pick(OPENERS)}${flujo}`);
  };

  /* ---------- envío de usuario ---------- */
  const onSubmit = (e:FormEvent) => { e.preventDefault(); if (!input.trim() || typing) return; void handleUser(input.trim()); };

  const handleUser = async (textRaw:string) => {
    const text = textRaw.trim();
    setMessages(prev => [...prev, { role:"user", text }]);
    setInput("");
    setTyping(true);

    const lower = text.toLowerCase();

    // 1) cierre / negación amable
    if (isNegate(lower)) {
      await addModelMessage("De acuerdo. Quedo aquí por si desea continuar más tarde. ¿Le comparto un resumen por correo si gusta?");
      setTyping(false); setPhase("chatting"); setLastQuestion(null); return;
    }

    // 2) estados pendientes
    if (phase === "await_area") {
      const found = AREAS.find(a => lower.includes(a.toLowerCase()));
      if (found) { await replyBenefitsByArea(found); setTyping(false); return; }
      // si respondió "sí", insistimos en elegir área
      if (isAffirm(lower)) {
        await addModelMessage("Indíqueme por favor un área: Ventas, Logística, Administración, RH, TI o Gerencia.");
        setTyping(false); return;
      }
    }

    if (phase === "await_yes_no" && currentTopic==="ventas" && lastQuestion==="ver_flujo3") {
      if (isAffirm(lower)) { await replyMiniFlujoVentas(); setPhase("chatting"); setLastQuestion(null); setTyping(false); return; }
      if (isNegate(lower)) { await addModelMessage("Perfecto. Si prefiere, puedo compartir beneficios tangibles por área."); setPhase("await_area"); setLastQuestion("elige_area"); setTyping(false); return; }
    }

    if (phase === "await_paleta_tipo") {
      if (lower.includes("colores")) {
        await addModelMessage("La paleta de colores del sitio no está en este asistente. Si gusta, nuestro equipo puede compartirla por correo o agendar 15 min para revisarla.");
        setPhase("chatting"); setLastQuestion(null); setTyping(false); return;
      }
      if (lower.includes("servicios") || lower.includes("portafolio")) {
        await replyTopic("pilares"); setTyping(false); return;
      }
    }

    // 3) fuera de alcance explícito
    if (includesAny(lower, OOS_WORDS)) {
      await addModelMessage(
        "Para mantener precisión, estoy enfocado en Metodiko (estrategia, operaciones, transformación digital y medición). " +
        "Si gusta, puedo explicarle nuestro enfoque, beneficios o un ejemplo aplicado a su área."
      );
      setTyping(false); return;
    }

    // 4) intención principal
    // handle “paleta” como aclaración
    if (lower.includes("paleta")) {
      await addModelMessage("¿Se refiere a la paleta de colores del sitio o al portafolio de servicios? (puede escribir “colores” o “servicios”).");
      setPhase("await_paleta_tipo"); setLastQuestion("paleta_tipo"); setTyping(false); return;
    }

    const topic = detectTopic(lower);

    // Beneficios → pedir área
    if (topic === "beneficios") {
      await replyTopic("beneficios", { askArea: true });
      setTyping(false); return;
    }

    // Ventas → ofrecer mini flujo
    if (topic === "ventas") {
      await replyTopic("ventas");
      await addModelMessage("¿Quiere que lo baje a un mini flujo de 3 pasos?");
      setPhase("await_yes_no"); setLastQuestion("ver_flujo3"); setTyping(false); return;
    }

    // Otros temas estándar
    if (topic !== "desconocido") {
      await replyTopic(topic);
      setTyping(false); return;
    }

    // 5) ambiguo → preguntar área o tema
    await addModelMessage("Puedo ayudarle con enfoque, beneficios o un ejemplo aplicado a Ventas/Logística/RH/TI/Gerencia. ¿Qué tema le interesa revisar?");
    setTyping(false);
  };

  /* ---------- UI ---------- */
  const suggestions = [
    { key:"ventas", title:"Ventas predecibles", blurb:"CRM con scoring, playbooks y forecast." },
    { key:"logistica", title:"Logística con trazabilidad", blurb:"WMS ligero, OTIF alto." },
    { key:"administracion", title:"Administración eficiente", blurb:"Aprobaciones claras y finanzas en tiempo real." },
    { key:"rrhh", title:"Talento y desempeño", blurb:"Onboarding y objetivos alineados." },
    { key:"tecnologia", title:"TI confiable", blurb:"Automatización y datos listos para IA." },
    { key:"medicion", title:"ROI / FODA / KPIs", blurb:"Decisiones con evidencia." }
  ] as Array<{key:Topic,title:string,blurb:string}>;

  const showSuggestions = !messages.some(m => m.role === "user");

  return (
    <>
      {/* animación typing */}
      <style>{`
        @keyframes typingBlink { 0%, 80%, 100% { opacity: .2 } 40% { opacity: 1 } }
        .typing-dot { width:6px; height:6px; margin-right:6px; border-radius:9999px; background: var(--brand-text-secondary,#6b7280); display:inline-block; animation: typingBlink 1.2s infinite ease-in-out; }
        .typing-dot.delay-150 { animation-delay:.15s }
        .typing-dot.delay-300 { animation-delay:.30s }
      `}</style>

      {/* FAB solo cuando el chat está cerrado (para no encimar el botón Enviar) */}
      {!open && (
        <button
          className="chatbot-fab fixed z-[60]"
          style={{ bottom: FAB_OFFSET_BOTTOM, right: FAB_OFFSET_RIGHT }}
          onClick={()=>setOpen(true)}
          aria-label="Abrir chat"
          aria-expanded={open}
        >
          <IconChat className="w-6 h-6" />
        </button>
      )}

      <div className={`chatbot-panel ${open ? "open" : ""}`} role="dialog" aria-labelledby="chatbot-title">
        {/* Header sticky con botón de cerrar */}
        <header className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-brand-border bg-brand-bg/95 backdrop-blur">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
            <h2 id="chatbot-title" className="text-lg md:text-xl font-semibold text-brand-text">Metodiko AI</h2>
          </div>
          <button
            onClick={()=>setOpen(false)}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar chat"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        {/* Cuerpo scrollable */}
        <div ref={bodyRef} onScroll={onBodyScroll} className="relative flex-1 overflow-y-auto p-4 flex flex-col gap-3 md:gap-4 text-[15px] leading-relaxed">

          {/* Sugerencias iniciales */}
          {showSuggestions && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestions.map(s => (
                <button
                  key={s.title}
                  onClick={()=>{ setMessages(prev=>[...prev,{role:"user",text:s.title}]); void replyTopic(s.key as Topic, { askArea: s.key==="beneficios" }); }}
                  className="text-left rounded-2xl border border-brand-border/70 bg-muted/60 hover:bg-muted transition p-3"
                >
                  <div className="text-base font-semibold text-brand-text">{s.title}</div>
                  <div className="text-sm text-brand-text-secondary mt-1">{s.blurb}</div>
                </button>
              ))}
            </div>
          )}

          {/* Chips contextuales */}
          <div className="pt-1 flex flex-wrap gap-2">
            {chips.map((c) => (
              <button
                key={c}
                className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
                onClick={()=>void handleUser(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Mensajes */}
          {messages.map((m, i) => (
            <div key={i} className={`message-bubble ${m.role==="user" ? "message-user" : "message-model"} text-[15px] leading-relaxed`}>
              {m.text}
            </div>
          ))}

          {typing && (
            <div className="message-bubble message-model px-3 py-2">
              <span className="typing-dot" />
              <span className="typing-dot delay-150" />
              <span className="typing-dot delay-300" />
            </div>
          )}
          <div ref={endRef} />

          {/* Scroll down dentro del panel */}
          {showScrollDown && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-24 right-4 w-9 h-9 rounded-full shadow-lg bg-brand-bg border border-brand-border text-brand-text-secondary hover:text-brand-text"
              aria-label="Ir al último mensaje"
              title="Ir al último mensaje"
            >
              ▼
            </button>
          )}
        </div>

        {/* Input */}
        <form onSubmit={onSubmit} className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg">
          <input
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
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



