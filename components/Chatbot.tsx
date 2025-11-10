 // components/Chatbot.tsx
import React, { useEffect, useRef, useState, FormEvent } from 'react';
import Logo from './Logo';
import { IconChat, IconClose, IconSend } from './Icons';

/** ===== Tipos ===== */
type Message = { role: 'user' | 'assistant'; text: string };
type KnowledgeItem = { id: string; title: string; text: string; tags?: string[] };

/** ===== Modelo local (sin API) ===== */
const MODEL_CANDIDATES = [
  'Phi-3.5-mini-instruct-q4f16_1-MLC',
  'Llama-3.2-3B-Instruct-q4f16_1-MLC',
  'Qwen2.5-3B-Instruct-q4f16_1-MLC'
];

/** ===== KB comprimida (resumen ejecutivo de tu página) =====
  Mantuvimos textos concisos y accionables para no inflar el prompt.
  Si quieres más profundidad, agrega ítems o expande textos. */
const KB: KnowledgeItem[] = [
  {
    id: 'enfoque',
    title: 'Nuestro Enfoque',
    text:
      'Reestructuración, normalización y estandarización de procesos de forma transversal. ' +
      'Integra personas, procesos, tecnología y gobierno corporativo para decisiones oportunas y confiables.',
    tags: ['enfoque', 'procesos', 'estandarización']
  },
  {
    id: 'dilema',
    title: 'Dilema Actual',
    text:
      'Problemas típicos: procesos fragmentados, datos poco confiables, decisiones tardías. ' +
      'Metodiko resuelve con trazabilidad y gobierno, acelerando ejecución y foco estratégico.',
    tags: ['dolores', 'problemas']
  },
  {
    id: 'vision',
    title: 'Visión Integrada',
    text:
      'Integra finanzas, operaciones y talento. Logras trazabilidad end-to-end, confiabilidad de datos y ' +
      'capacidad de anticipar riesgos operativos y de mercado.',
    tags: ['visión', 'integración', 'trazabilidad']
  },
  {
    id: 'salto',
    title: 'Salto Estratégico',
    text:
      'De control operativo a gobierno empresarial con visión digital: más foco, velocidad y ' +
      'impacto directo en resultados y rentabilidad.',
    tags: ['gobierno', 'estrategia']
  },
  {
    id: 'pilares',
    title: 'Pilares',
    text:
      '1) Consultoría Integral: roadmap transversal, indicadores compartidos, gobierno y riesgos. ' +
      '2) Transformación Digital: cambio, automatizaciones, datos confiables, plataformas modernas. ' +
      '3) Formaciones: coaching ejecutivo, entrenamiento de equipos, laboratorios de adopción, formación continua.',
    tags: ['pilares', 'consultoría', 'transformación', 'formaciones']
  },
  {
    id: 'serv-admin',
    title: 'Administración',
    text:
      'Mapeo y reglas de aprobación, automatizaciones, tableros en tiempo real para decisiones financieras claras.',
    tags: ['servicios', 'administración', 'finanzas']
  },
  {
    id: 'serv-log',
    title: 'Logística',
    text:
      'Optimización de rutas y almacenes, WMS ligero, trazabilidad total de pedidos e inventario inteligente.',
    tags: ['servicios', 'logística', 'wms', 'trazabilidad']
  },
  {
    id: 'serv-rrhh',
    title: 'Recursos Humanos',
    text:
      'Digitaliza ciclo de vida del talento, onboarding sin papeles, desempeño, automatizaciones y visibilidad del clima.',
    tags: ['servicios', 'rrhh', 'talento']
  },
  {
    id: 'serv-tech',
    title: 'Tecnología',
    text:
      'Seguridad, automatización, datos 100% confiables, base para analítica e IA con sistemas estables.',
    tags: ['servicios', 'tecnología', 'seguridad', 'datos']
  },
  {
    id: 'serv-ventas',
    title: 'Ventas',
    text:
      'CRM organizado, scoring de leads, playbooks; proceso predecible, ciclos cortos y forecast confiable.',
    tags: ['servicios', 'ventas', 'crm']
  },
  {
    id: 'serv-gerencia',
    title: 'Gerencia',
    text:
      'Gobierno de datos y PMO: conecta estrategia con ejecución, ROI claro, OKRs, tableros de riesgos y capacitación a mandos.',
    tags: ['servicios', 'gerencia', 'pmo', 'gobierno de datos', 'okrs']
  },
  {
    id: 'beneficios',
    title: 'Beneficios Estratégicos',
    text:
      'Decisiones basadas en datos; eficiencia operativa con automatización; reducción de riesgos con visibilidad temprana; ' +
      'crecimiento escalable con base tecnológica y comercial sólida.',
    tags: ['beneficios', 'datos', 'eficiencia', 'riesgos', 'escalabilidad']
  },
  {
    id: 'roi',
    title: 'ROI',
    text:
      'Rentabilidad estratégica: cada inversión se mide y traduce en conocimiento accionable y valor.',
    tags: ['roi', 'finanzas']
  },
  {
    id: 'foda',
    title: 'FODA',
    text:
      'Visión analítica dinámica: anticipa riesgos, potencia fortalezas y orienta decisiones con prevención y respuesta ágil.',
    tags: ['foda', 'análisis']
  },
  {
    id: 'kpis',
    title: 'KPIs',
    text:
      'Gobierno de desempeño: indicadores que conectan visión con ejecución, foco y trazabilidad.',
    tags: ['kpis', 'desempeño', 'gobierno']
  },
  {
    id: 'cta',
    title: 'CTA',
    text:
      'El verdadero riesgo es no evolucionar. Analicemos cómo integrar procesos y tecnología para reducir costos ' +
      'y acelerar crecimiento. Inicie la conversación en metodiko.com.mx.',
    tags: ['cta', 'contacto']
  }
];

/** ===== Utilidades de “búsqueda” simple sobre KB (sin librerías) ===== */
function score(text: string, query: string) {
  const q = query.toLowerCase().split(/[\s,.;:()]+/).filter(Boolean);
  const t = text.toLowerCase();
  let s = 0;
  for (const k of q) s += t.includes(k) ? 1 : 0;
  return s;
}
function retrieveContext(query: string, topK = 5) {
  const ranked = KB.map(k => ({
    k,
    s: score(`${k.title} ${k.text} ${(k.tags || []).join(' ')}`, query)
  }))
    .sort((a, b) => b.s - a.s)
    .slice(0, topK)
    .map(({ k }) => `• ${k.title}: ${k.text}`);
  // fallback: si la query no matcheó nada, usa pilares/beneficios
  if (!ranked.length) {
    return [
      '• Pilares: ' + KB.find(x => x.id === 'pilares')?.text,
      '• Beneficios: ' + KB.find(x => x.id === 'beneficios')?.text
    ].filter(Boolean) as string[];
  }
  return ranked;
}

/** ===== Sugerencias rápidas ===== */
const SUGGESTIONS = [
  'Dame un roadmap inicial de transformación digital (90 días)',
  '¿Cómo implementar gobierno de datos + PMO sin frenar la operación?',
  'Quiero KPIs ejecutivos para dirección: 6 métricas críticas',
  'Propuesta de automatizaciones rápidas para Administración y Ventas',
  'Diseña un plan de adopción (formaciones) para 3 áreas'
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hola, soy Metodiko AI (local). ¿En qué te ayudo hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadMsg, setLoadMsg] = useState('Inicializando...');
  const [error, setError] = useState('');
  const [modelName, setModelName] = useState<string>('');

  // Motor WebLLM
  const engineRef = useRef<any>(null);

  // Scroll
  const endRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages, isLoading]);

  // Cargar modelo local
  useEffect(() => {
    (async () => {
      if (!(navigator as any).gpu) {
        setError('Tu navegador no soporta WebGPU. Usa Chrome/Edge recientes o habilita WebGPU.');
        setLoadMsg('');
        return;
      }
      try {
        setLoadMsg('Cargando motor local...');
        // @ts-ignore – import CDN ESM sin instalación
        const webllm = await import('https://esm.run/@mlc-ai/web-llm');
        const { CreateMLCEngine } = webllm;

        let engine: any = null;
        for (const id of MODEL_CANDIDATES) {
          try {
            setLoadMsg(`Descargando modelo ${id} ...`);
            engine = await CreateMLCEngine(id, {
              initProgressCallback: (p: { progress?: number; text?: string }) => {
                const pct = Math.round((p.progress ?? 0) * 100);
                setLoadMsg(`${p.text ?? 'Descargando'} (${pct}%)`);
              }
            });
            setModelName(id);
            break;
          } catch {
            // intenta el siguiente
          }
        }
        if (!engine) {
          setError('No fue posible cargar un modelo local. Prueba recargar o usar un modelo más pequeño.');
          setLoadMsg('');
          return;
        }
        engineRef.current = engine;
        setLoadMsg('Modelo local listo.');
        setTimeout(() => setLoadMsg(''), 600);
      } catch (e) {
        console.error(e);
        setError('Fallo al inicializar el motor local.');
        setLoadMsg('');
      }
    })();
  }, []);

  const toggleChat = () => setIsOpen(v => !v);

  const pushAssistant = (text: string) =>
    setMessages(prev => [...prev, { role: 'assistant', text }]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!engineRef.current) {
        pushAssistant('El modelo aún no está listo. Espera a que termine de cargar o verifica WebGPU.');
        return;
      }

      // Recupera contexto interno (mini-RAG)
      const ctxParts = retrieveContext(query, 5);
      const ctxText = ctxParts.join('\n');

      // Construcción del prompt con voz de marca
      const system =
        'Eres Metodiko AI, consultor ejecutivo en español de México. ' +
        'Tono: claro, directo y accionable. Evita jergas y promesas vacías. ' +
        'Prioriza pasos concretos, decisiones basadas en datos y gobierno corporativo. ' +
        'Si algo no está en el contexto, sé honesto y sugiere cómo levantar la información.\n\n' +
        'Contexto de Metodiko (extractos relevantes):\n' + ctxText;

      // Historial comprimido (últimos 10 turnos máx.)
      const recent = messages.slice(-10).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const payload = [
        { role: 'system', content: system },
        ...recent,
        { role: 'user', content: query }
      ];

      const completion = await engineRef.current.chat.completions.create({
        messages: payload,
        temperature: 0.7,
        max_tokens: 600
      });

      const text =
        completion?.choices?.[0]?.message?.content ||
        'No obtuve respuesta del modelo local. Intenta de nuevo.';

      pushAssistant(text);
    } catch (err) {
      console.error(err);
      pushAssistant('Ocurrió un error local al generar respuesta. Intenta de nuevo o recarga.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        className="chatbot-fab"
        onClick={toggleChat}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      {/* Panel */}
      <div className={`chatbot-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-labelledby="chatbot-title">
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <Logo c
