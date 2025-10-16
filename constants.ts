import type { Video, TickerItem } from './types';
import { IconData, IconClock, IconRisk, IconAgility, IconStrategy, IconAudit } from './components/Icons';

export const videos: Video[] = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/cex78KRJ3Po',
      shareUrl: 'https://www.youtube.com/watch?v=cex78KRJ3Po',
      title: 'Optimización Administrativa y Financiera',
      benefit: 'Convierta la incertidumbre financiera en control absoluto. Automatice cierres, optimice su flujo de efectivo y tome decisiones con total visibilidad.',
      summary: '<ul><li>Cierres puntuales y auditables</li><li>Capital de trabajo bajo control</li><li>Menos reprocesos y errores</li><li>Trazabilidad de extremo a extremo</li></ul>',
      imageId: 180,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Este servicio está diseñado para darle control total sobre sus finanzas. Transformamos procesos manuales y propensos a errores en un sistema automatizado y transparente que le permite tomar decisiones estratégicas con confianza.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Claridad Absoluta:</strong> Recibirá mapas de procesos que definen quién hace qué, eliminando ambigüedades.</li>
              <li><strong>Control Automatizado:</strong> Implementaremos flujos de aprobación automáticos y conciliaciones que minimizan el error humano.</li>
              <li><strong>Visibilidad Instantánea:</strong> Obtendrá tableros en tiempo real para monitorear la salud financiera de su empresa al momento.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en sus Números:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Cierres más Rápidos:</strong> Reducimos drásticamente los días necesarios para el cierre mensual.</li>
              <li><strong>Flujo de Caja Optimizado:</strong> Mejoramos sus ciclos de cobro y pago (DSO/DPO).</li>
              <li><strong>Confianza en los Datos:</strong> Disminuimos a casi cero los errores en la información financiera.</li>
          </ul>`
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/ummonxRIgns',
      shareUrl: 'https://www.youtube.com/watch?v=ummonxRIgns',
      title: 'Logística Inteligente y Cadena de Suministro',
      benefit: 'Transforme su logística de un centro de costos a una ventaja competitiva. Optimice inventarios, garantice entregas perfectas (OTIF) y obtenga visibilidad total.',
      summary: '<ul><li>Menos quiebres y sobrestock</li><li>Menor costo por entrega</li><li>Mejor cumplimiento (OTIF)</li><li>Visibilidad total de la operación</li></ul>',
      imageId: 1063,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Deje de ver su logística como un costo y conviértala en su mayor ventaja competitiva. Le ayudamos a construir una cadena de suministro resiliente, eficiente y totalmente visible, asegurando que sus clientes recebam lo que quieren, cuando lo quieren.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Almacén Eficiente:</strong> Rediseñamos la distribución de su almacén para agilizar la preparación de pedidos.</li>
              <li><strong>Control en su Bolsillo:</strong> Implementamos una aplicación de gestión logística (WMS) para una operación sin papeles y sin errores.</li>
              <li><strong>Decisiones Proactivas:</strong> Creamos tableros con alertas que le permiten anticipar problemas de inventario antes de que ocurran.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en sus Entregas:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Clientes Satisfechos:</strong> Aumentamos su tasa de entregas perfectas (OTIF) de forma consistente.</li>
              <li><strong>Menos Ventas Perdidas:</strong> Mejoramos su exactitud de inventario para evitar quiebres de stock.</li>
          </ul>`
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/O79AN4k7_4w',
      shareUrl: 'https://www.youtube.com/watch?v=O79AN4k7_4w',
      title: 'Digitalización de Recursos Humanos',
      benefit: 'Eleve su gestión de talento a un nivel estratégico. Digitalice el ciclo de vida del talento, alinee a su equipo con los objetivos de negocio y anticipe la rotación con datos.',
      summary: '<ul><li>Experiencia del empleado mejorada</li><li>Reducción de la rotación</li><li>Decisiones de talento basadas en datos</li><li>Mayor agilidad organizacional</li></ul>',
      imageId: 24,
      description: `
          <p class='mb-4 text-brand-text-secondary'>El talento es su recurso más valioso. Ayudamos a su área de RRHH a evolucionar de un rol administrativo a un socio estratégico del negocio, utilizando tecnología para atraer, desarrollar y retener a los mejores.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Ciclo de Vida Digital:</strong> Automatizamos desde el reclutamiento hasta el offboarding, creando una experiencia fluida para el empleado.</li>
              <li><strong>Planes de Carrera Claros:</strong> Implementamos sistemas para gestionar el desempeño y la capacitación, alineados a los objetivos de la empresa.</li>
              <li><strong>Análisis Predictivo:</strong> Usamos datos para identificar patrones de rotación y anticipar necesidades de talento.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Equipo:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Menor Rotación:</strong> Aumentamos la retención de talento clave.</li>
              <li><strong>Equipos más Productivos:</strong> Mejoramos el compromiso y la satisfacción del empleado.</li>
              <li><strong>Decisiones de Contratación Inteligentes:</strong> Reducimos el tiempo y costo de contratación.</li>
          </ul>`
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/DXtMg-4C-dM',
      shareUrl: 'https://www.youtube.com/watch?v=DXtMg-4C-dM',
      title: 'Modernización de la Arquitectura Tecnológica',
      benefit: 'Convierta su área de TI en un motor de innovación. Reduzca la fricción operativa con una arquitectura segura, procesos automatizados y datos 100% confiables para su estrategia de IA.',
      summary: '<ul><li>Escalabilidad para el futuro</li><li>Reducción de la deuda técnica</li><li>Mayor seguridad y cumplimiento</li><li>Plataforma lista para la innovación</li></ul>',
      imageId: 1079,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Su infraestructura tecnológica debe ser un acelerador, no un freno. Modernizamos sus sistemas legados para crear una arquitectura ágil, escalable y segura que responda a la velocidad del negocio actual y futuro.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Ecosistema Integrado:</strong> Diseñamos una estrategia de APIs que conecta sus sistemas y datos de forma segura.</li>
              <li><strong>Automatización de Infraestructura:</strong> Implementamos procesos de DevOps para acelerar el despliegue de nuevas funcionalidades.</li>
              <li><strong>Datos Centralizados:</strong> Creamos una fuente única de verdad para sus datos, eliminando silos y garantizando consistencia.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Operación:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>TI más Ágil:</strong> Reducimos el tiempo de salida al mercado (Time to Market) de nuevas iniciativas.</li>
              <li><strong>Menores Costos de Mantenimiento:</strong> Optimizamos el costo total de propiedad (TCO) de su tecnología.</li>
              <li><strong>Mayor Resiliencia:</strong> Disminuimos el tiempo de recuperación ante incidentes (MTTR).</li>
          </ul>`
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/Cj-80hPtz34',
      shareUrl: 'https://www.youtube.com/watch?v=Cj-80hPtz34',
      title: 'Estructura Comercial para Crecimiento Acelerado',
      benefit: 'Instale una máquina de ventas predecible. Estructure su proceso comercial para acortar ciclos, aumentar la conversión y tomar decisiones de crecimiento con un forecast de alta precisión.',
      summary: '<ul><li>Visión 360 del cliente</li><li>Mayor retorno de inversión (ROI)</li><li>Procesos de venta escalables</li><li>Menor costo de adquisición (CAC)</li></ul>',
      imageId: 5,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Convertimos sus datos de marketing y ventas en un motor de crecimiento predecible. Integramos sus sistemas para crear una visión 360 del cliente, permitiéndole tomar decisiones que impactan directamente en la rentabilidad.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>CRM como Eje Central:</strong> Centralizamos la información del cliente para personalizar interacciones y automatizar seguimientos.</li>
              <li><strong>Marketing Basado en Datos:</strong> Implementamos tableros para medir el rendimiento de sus campañas en tiempo real y optimizar la inversión.</li>
              <li><strong>Procesos Escalables:</strong> Definimos un proceso de ventas claro y digital que su equipo puede seguir para cerrar más negocios, más rápido.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Crecimiento:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Decisiones Comerciales Inteligentes:</strong> Reducimos el Costo de Adquisición de Clientes (CAC).</li>
              <li><strong>Retención y Lealtad:</strong> Aumentamos el Valor de Vida del Cliente (LTV).</li>
              <li><strong>Pronósticos Precisos:</strong> Mejoramos la predictibilidad de sus ingresos.</li>
          </ul>`
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/5aK-6_zJS6o',
      shareUrl: 'https://www.youtube.com/watch?v=5aK-6_zJS6o',
      title: 'Gobierno de Datos y PMO Estratégica',
      benefit: 'Implementamos un marco de gobierno de datos ágil que conecta la estrategia con la ejecución. A través de una PMO, traducimos las inversiones en modelos de ROI claros y medimos el avance con OKRs, fortaleciendo la toma de decisiones con un modelo financiero ejecutivo, tableros de riesgos y una sólida capacitación a mandos.',
      summary: '<ul><li>Foco en prioridades de alto impacto</li><li>Decisiones rápidas basadas en datos</li><li>Seguimiento cuantificado con ROI</li><li>Riesgos visibles y controlados</li></ul>',
      imageId: 225,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Implementamos un marco de gobierno de datos ágil que conecta la estrategia con la ejecución. A través de una PMO, traducimos las inversiones en modelos de ROI claros y medimos el avance con OKRs, fortaleciendo la toma de decisiones con un modelo financiero ejecutivo, tableros de riesgos y una sólida capacitación a mandos.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Beneficios Claros:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Foco real en lo importante:</strong> Menos dispersión y más avance en prioridades.</li>
              <li><strong>Riesgos visibles desde el inicio:</strong> Menos resultados inesperados y cierres más seguros.</li>
              <li><strong>Decisiones más rápidas y con datos:</strong> El tiempo de decisión baja porque la evidencia está a la mano.</li>
              <li><strong>Seguimiento cuantificado:</strong> El avance se mide en ROI y resultados concretos, no en opiniones.</li>
          </ul>`
    }
];

export const tickerItems: TickerItem[] = [
  { icon: IconData, text: "Decisiones Basadas en Datos" },
  { icon: IconClock, text: "Agilidad Competitiva" },
  { icon: IconRisk, text: "Menor Riesgo Operativo" },
  { icon: IconAgility, text: "Procesos Optimizados" },
  { icon: IconStrategy, text: "Estrategia Conectada a la Ejecución" },
  { icon: IconAudit, text: "Trazabilidad y Gobierno Corporativo" },
];

export const teleprompterTexts: string[] = [
  "Analicemos juntos cómo la integración de procesos y tecnología puede reducir costos operativos y acelerar su crecimiento.",
  "¿Está listo para convertir sus datos en su activo más valioso y tomar decisiones con total confianza?",
  "Descubra cómo podemos construir una ventaja competitiva sostenible para su negocio en el entorno digital actual.",
  "Es el momento de alinear su estrategia con una ejecución impecable. Contáctenos para un diagnóstico sin compromiso."
];