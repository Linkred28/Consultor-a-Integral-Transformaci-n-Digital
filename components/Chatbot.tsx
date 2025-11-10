import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { IconClose, IconSend, IconChat } from './Icons';
import Logo from './Logo';

type Role = 'user' | 'model';
interface Message {
  role: Role;
  text: string;
}

/** ──────────────────────────────────────────────────────────────────────────
 *  Conocimiento local (sin APIs): resumen curado de la página de Metodiko
 *  ────────────────────────────────────────────────────────────────────────── */
const knowledgeBase: Array<{
  title: string;
  content: string;
  keywords: string[];
}> = [
  {
    title: 'Cómo encaramos tu negocio',
    content:
      '1) Dilema Actual: procesos fragmentados, información poco confiable y decisiones tardías. 2) Visión Integrada: trazabilidad end-to-end, decisiones basadas en datos y anticipación de riesgos. 3) Salto Estratégico: gobierno empresarial con visión digital para más foco, velocidad e impacto.',
    keywords: ['dilema', 'visión', 'salto', 'enfocamos', 'encaramos', 'cómo']
  },
  {
    title: 'Pilares del modelo',
    content:
      'Combinamos estrategia, operaciones y tecnología. Pilares: (1) Consultoría Integral, (2) Transformación Digital y (3) Formaciones. Entregamos resultados visibles desde el diagnóstico hasta la ejecución continua.',
    keywords: ['pilares', 'modelo', 'estrategia', 'operaciones', 'tecnología']
  },
  {
    title: 'Servicios para Administración',
    content:
      'Administración: mapeo de procesos, reglas de aprobación y automatización de tareas clave. Control total con tableros en tiempo real para decisiones financieras claras y eficientes.',
    keywords: ['administración', 'procesos', 'finanzas', 'aprobación', 'tableros']
  },
  {
    title: 'Servicios para Logística',
    content:
      'Logística: optimización de rutas y almacenes con WMS ligero, trazabilidad total de pedidos e inventario inteligente. Eficiencia operativa y entregas confiables.',
    keywords: ['logística', 'rutas', 'almacenes', 'wms', 'inventario', 'trazabilidad']
  },
  {
    title: 'Servicios para Recursos Humanos',
    content:
      'RRHH: digitalización del ciclo de vida del talento (onboarding, desempeño, automatizaciones). Visibilidad del clima laboral y alineación con objetivos del negocio.',
    keywords: ['rrhh', 'recursos humanos', 'onboarding', 'desempeño', 'talento']
  },
  {
    title: 'Servicios para Tecnología',
    content:
      'Tecnología: seguridad, automatización y datos confiables. Preparación para analítica avanzada e IA, con sistemas estables y entorno moderno de trabajo.',
    keywords: ['tecnología', 'seguridad', 'automatización', 'datos', 'ia']
  },
  {
    title: 'Servicios para Ventas',
    content:
      'Ventas: CRM organizado, scoring de leads y playbooks. Proceso predecible, mayor conversión, ciclos más cortos y forecast confiable.',
    keywords: ['ventas', 'crm', 'leads', 'playbook', 'forecast', 'comercial']
  },
  {
    title: 'Servicios para Gerencia',
    content:
      'Gerencia: gobierno de datos y PMO estratégica. Modelos de ROI, seguimiento con OKRs, tableros de riesgos y capacitación a mandos para conectar estrategia y ejecución.',
    keywords: ['gerencia', 'gobierno de datos', 'pmo', 'roI', 'okrs', 'riesgos']
  },
  {
    title: 'Beneficios Estratégicos',
    content:
      'Decisiones basadas en datos, eficiencia operativa, reducción de riesgos y crecimiento escalable. Tableros ejecutivos, automatizaciones y gobernanza clara.',
    keywords: ['beneficios', 'eficiencia', 'riesgos', 'crecimiento', 'datos']
  },
  {
    title: 'ROI, FODA y KPIs',
    content:
      'ROI: medimos retorno y convertimos resultados en conocimiento accionable. FODA: visión analítica y dinámica para anticipar riesgos y potenciar fortalezas. KPIs: gobierno de desempeño que conecta visión con ejecución.',
    keywords: ['roi', 'foda', 'kpis', 'indicadores', 'desempeño']
  },
  {
    title: 'CTA',
    content:
      'El verdadero riesgo es no evolucionar. Iniciemos la conversación: analizamos cómo integrar procesos y tecnología para reducir costos y acelerar crecimiento. Visita metodiko.com.mx.',
    keywords: ['contacto', 'conversación', 'analicemos', 'metodiko', 'cta']
  }
];

const starterChips = [
  'Cómo encaramos tu negocio',
  'Pilares del modelo',
  'Servicios para Ventas',
  'Beneficios estratégicos',
  'ROI / FODA / KPIs',
  'Agendar contacto'
];

/** Búsqueda simple por similitud */
const score = (query: string, item: { keywords: string[]; title: string; content: string }) => {
  const q = query.toLowerCase();
  const kws = item.keywords.join(' ');
  let s = 0;
  for (const token of q.split(/\s+/)) {
    if (!token) continue;
    if (item.title.toLowerCase().includes(token)) s += 3;
    if (kws.includes(token)) s += 2;
    if (item.content.toLowerCase().includes(token)) s += 1;
  }
  return s;
};

const findAnswer = (query: string) => {
  let best = knowledgeBase[0];
  let bestScore = -1;
  for (const item of knowledgeBase) {
    const sc = score(query, item);
    if (sc > bestScore) {
      bestScore = sc;
      best = item;
    }
  }
  return `**${best.title}**\n${best.content}`;
};

/** ──────────────────────────────────────────────────────────────────────────
 *  Componente
 *  ────────────────────────────────────────────────────────────────────────── */
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola. Soy Metodiko AI. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages, isLoading, isOpen]);

  const toggleChat = () => setIsOpen((v) => !v);

  const send = async (text: string) => {
    const user = text.trim();
    if (!user || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', text: user }]);
    setInput('');
    setIsLoading(true);

    try {
      // “Mini-RAG” local sin API
      const reply = findAnswer(user);
      // Render simple markdown **negritas** -> fuerte
      const normalized = reply.replace(/\*\*(.+?)\*\*/g, (_, m1) => `${m1.toUpperCase()}`);
      setMessages((prev) => [...prev, { role: 'model', text: normalized }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: 'Tu consulta es válida, pero algo falló al procesarla.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  return (
    <>
      {/* FAB: logo más visible dentro del botón flotante */}
      <button
        className="chatbot-fab"
        onClick={toggleChat}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <IconClose className="w-6 h-6" />
        ) : (
          <div className="p-1.5 rounded-lg bg-brand-bg ring-1 ring-brand-primary/30 shadow-sm">
            <Logo className="w-7 h-7" />
          </div>
        )}
      </button>

      <div
        className={`chatbot-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-labelledby="chatbot-title"
        aria-modal="true"
      >
        {/* Header con logo grande y visible */}
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-brand-bg ring-1 ring-brand-primary/30 shadow-sm">
              <Logo className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 id="chatbot-title" className="text-base md:text-lg font-semibold text-brand-text">
              Metodiko AI
            </h2>
          </div>
          <button
            onClick={toggleChat}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar chat"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        {/* Chips de inicio rápidos */}
        <div className="px-4 pt-3 pb-1 flex flex-wrap gap-2">
          {starterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => send(chip)}
              className="px-3 py-1.5 text-sm rounded-full border border-brand-border hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Mensajes */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <div key={i} className={`message-bubble ${m.role === 'user' ? 'message-user' : 'message-model'}`}>
              {m.text}
            </div>
          ))}
          {isLoading && (
            <div className="message-bubble message-model loading-dots">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-text-secondary" />
              <span className="inline-block w-2 h-2 rounded-full bg-brand-text-secondary" />
              <span className="inline-block w-2 h-2 rounded-full bg-brand-text-secondary" />
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta…"
            className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={isLoading}
            aria-label="Mensaje para el chatbot"
          />
          <button
            type="submit"
            className="flex-shrink-0 button p-3 disabled:opacity-60"
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
