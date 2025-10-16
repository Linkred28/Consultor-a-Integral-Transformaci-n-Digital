import type { Video, TickerItem } from './types';
import { IconData, IconClock, IconRisk, IconAgility, IconStrategy, IconAudit } from './components/Icons';

export const videos: Video[] = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/cex78KRJ3Po',
      shareUrl: 'https://www.youtube.com/watch?v=cex78KRJ3Po',
      title: 'Administración: Control y Eficiencia de Procesos',
      benefit: 'Mapeamos sus procesos, definimos reglas de aprobación y automatizamos tareas clave. Obtenga control total con tableros en tiempo real para tomar decisiones financieras con absoluta claridad y eficiencia.',
      summary: '<ul><li>Cierres puntuales y auditables</li><li>Capital de trabajo bajo control</li><li>Menos reprocesos y errores</li><li>Trazabilidad de extremo a extremo</li></ul>',
      imageId: 180,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Creamos un mapa claro de cómo trabajan hoy y cómo deberían trabajar, definiendo responsabilidades en cada paso. Automatizamos flujos de aprobación, conciliaciones y recordatorios de cierre, mientras implementamos tableros en vivo para darle visibilidad total de su flujo de efectivo y organizar su documentación de forma segura y accesible.</p>
          
          <h4 class='font-bold text-brand-text mt-6 mb-2'>📊 Beneficios Claros:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li><strong>Cierres puntuales y auditables:</strong> Se eliminan retrasos y todo queda documentado para auditorías.</li>
              <li><strong>Capital de trabajo bajo control:</strong> Claridad sobre el dinero que entra, sale y los plazos de pago y cobro.</li>
              <li><strong>Menos reprocesos y errores manuales:</strong> El sistema evita la duplicidad de tareas y la pérdida de tiempo en correcciones.</li>
              <li><strong>Trazabilidad de extremo a extremo:</strong> Conozca qué pasó en cada paso del proceso, sin sorpresas.</li>
          </ul>

          <h4 class='font-bold text-brand-text mt-6 mb-2'>📦 Entregables Clave:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li>Mapas claros de procesos y responsabilidades (AS-IS y TO-BE).</li>
              <li>Reglas de aprobación por montos y roles, bien definidas.</li>
              <li>Automatización de conciliaciones, flujos de facturación y cierres.</li>
              <li>Tableros financieros en tiempo real (Cash Flow, DSO, DPO).</li>
              <li>Políticas documentales, de retención y sistema de alertas.</li>
          </ul>`
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/ummonxRIgns',
      shareUrl: 'https://www.youtube.com/watch?v=ummonxRIgns',
      title: 'Logística: Optimización y Trazabilidad Total',
      benefit: 'Optimizamos sus rutas y almacenes con un WMS ligero, garantizando trazabilidad total de pedidos y un inventario inteligente. Conectamos su operación para máxima eficiencia y entregas perfectas.',
      summary: '<ul><li>Inventarios balanceados</li><li>Menor costo por entrega</li><li>Mejor cumplimiento (OTIF)</li><li>Visibilidad total con trazabilidad</li></ul>',
      imageId: 1063,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Transformamos su operación logística en una ventaja competitiva. Optimizamos rutas y almacenes, implementamos un WMS ligero para digitalizar su gestión y conectamos sus sistemas para una visibilidad y eficiencia sin precedentes, asegurando que cada pedido sea monitoreado y cada recurso aprovechado al máximo.</p>
          
          <h4 class='font-bold text-brand-text mt-6 mb-2'>📊 Beneficios Directos:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li><strong>Menos quiebres y sobrestock:</strong> Gracias a inventarios balanceados con mínimos y máximos dinámicos.</li>
              <li><strong>Menor costo por entrega:</strong> Con rutas optimizadas y menos reprocesos en el almacén.</li>
              <li><strong>Mejor cumplimiento de entregas:</strong> Pedidos completos y a tiempo (OTIF) gracias a la trazabilidad y alertas.</li>
              <li><strong>Visibilidad total:</strong> Trazabilidad por cliente y pedido, con evidencia clara y digitalizada.</li>
          </ul>

          <h4 class='font-bold text-brand-text mt-6 mb-2'>📦 Entregables Clave:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li>Layout y slotting del almacén para optimizar zonas y recorridos de picking.</li>
              <li>App ligera de gestión logística (WMS) para una operación sin papeles.</li>
              <li>Tablero logístico centralizado con métricas clave y alertas proactivas.</li>
              <li>Políticas de reposición inteligentes y automatizadas.</li>
              <li>Integraciones con su e-commerce y ERP para un flujo de información sin fricciones.</li>
          </ul>`
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/O79AN4k7_4w',
      shareUrl: 'https://www.youtube.com/watch?v=O79AN4k7_4w',
      title: 'Recursos Humanos: Gestión y Desarrollo de Talento Estratégico',
      benefit: 'Digitalizamos el ciclo de vida del talento, desde un onboarding sin papeles hasta la gestión del desempeño y la automatización de procesos clave. Obtenga visibilidad total del clima laboral y alinee a su equipo con los objetivos del negocio.',
      summary: '<ul><li>Ingresos más rápidos al rol</li><li>Menos tareas repetitivas</li><li>Objetivos de negocio alineados</li><li>Visibilidad del clima laboral</li></ul>',
      imageId: 24,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Convertimos su área de Recursos Humanos en un motor estratégico para el negocio. Definimos roles y competencias, digitalizamos el onboarding con expedientes en la nube y automatizamos procesos clave como permisos y nómina. A través de evaluaciones trimestrales y analítica de personas, alineamos el talento con los objetivos corporativos y le damos visibilidad total sobre el clima laboral.</p>
          
          <h4 class='font-bold text-brand-text mt-6 mb-2'>📊 Beneficios Claros:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li><strong>Ingresos más rápidos en el rol:</strong> El personal nuevo se adapta y empieza a producir en menos tiempo.</li>
              <li><strong>Menos tareas repetitivas:</strong> Se eliminan los trámites manuales que consumen tiempo y generan errores.</li>
              <li><strong>Objetivos alineados con el negocio:</strong> Cada colaborador trabaja con metas conectadas a la estrategia general.</li>
              <li><strong>Visibilidad del clima laboral:</strong> Anticipe riesgos de rotación y comprenda mejor las necesidades de su equipo.</li>
          </ul>

          <h4 class='font-bold text-brand-text mt-6 mb-2'>📦 Entregables Clave:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li>Libro de puestos con competencias y responsabilidades documentadas.</li>
              <li>Proceso de onboarding digital con checklist y firmas electrónicas.</li>
              <li>Framework de gestión de desempeño trimestral.</li>
              <li>Automatización de procesos clave de RRHH (permisos, licencias, nómina).</li>
              <li>Tablero de analítica de personas (rotación, ausentismo, NPS interno).</li>
              <li>Academia interna con planes de desarrollo y rutas de capacitación en línea.</li>
          </ul>`
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/DXtMg-4C-dM',
      shareUrl: 'https://www.youtube.com/watch?v=DXtMg-4C-dM',
      title: 'Tecnología: Seguridad, Automatización y Datos Confiables',
      benefit: 'Reforzamos su seguridad, automatizamos procesos y garantizamos datos 100% confiables. Preparamos su operación para el análisis avanzado y la IA, con sistemas estables y un entorno de trabajo moderno.',
      summary: '<ul><li>Menos incidentes y recuperación rápida</li><li>Procesos seguros y automáticos</li><li>Onboarding de TI rápido y seguro</li><li>Datos confiables para IA</li></ul>',
      imageId: 1079,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Transformamos su área de TI en un motor de innovación y estabilidad. Reforzamos la seguridad con prácticas modernas, automatizamos procesos repetitivos para eliminar errores y estructuramos sus datos para que sean 100% confiables y estén listos para la analítica avanzada y la inteligencia artificial.</p>
          
          <h4 class='font-bold text-brand-text mt-6 mb-2'>📊 Beneficios Estratégicos:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li><strong>Menos incidentes y recuperación más rápida:</strong> Los sistemas son más estables y, ante cualquier falla, se resuelven en menor tiempo (MTTR).</li>
              <li><strong>Procesos más seguros y automáticos:</strong> Reducimos la carga de tareas manuales y el margen de error humano.</li>
              <li><strong>Onboarding más rápido y seguro:</strong> Los nuevos usuarios y equipos se integran en menos tiempo y con mayor protección.</li>
              <li><strong>Datos confiables y listos para IA:</strong> Su información queda validada y estructurada para análisis de negocio e inteligencia artificial.</li>
          </ul>

          <h4 class='font-bold text-brand-text mt-6 mb-2'>📦 Entregables Clave:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li>Blueprint y runbooks de seguridad y operación.</li>
              <li>Paquete de Modern Workplace (configuración centralizada y compliance).</li>
              <li>Bots y flujos de automatización con alto retorno de inversión (ROI).</li>
              <li>Modelo de datos y tableros de control en Power BI.</li>
              <li>Soporte técnico dedicado de hasta 48 horas mensuales.</li>
          </ul>`
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/Cj-80hPtz34',
      shareUrl: 'https://www.youtube.com/watch?v=Cj-80hPtz34',
      title: 'Ventas: Proceso Comercial Predecible y Escalable',
      benefit: 'Implementamos un CRM organizado con scoring de leads y playbooks comerciales para crear un proceso de ventas predecible. Aumente la conversión, acorte los ciclos de venta y obtenga un forecast confiable.',
      summary: '<ul><li>Mayor conversión y ciclos cortos</li><li>Mejor rentabilidad (CAC/LTV)</li><li>Forecast de ventas confiable</li><li>Equipo alineado y estandarizado</li></ul>',
      imageId: 5,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Instalamos una máquina de ventas predecible y escalable. Implementamos un CRM para organizar su pipeline, automatizamos el seguimiento de leads de alto potencial y estandarizamos el proceso con playbooks comerciales, asegurando un traspaso sin fricciones al área de postventa.</p>
          
          <h4 class='font-bold text-brand-text mt-6 mb-2'>📊 Beneficios Claros:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li><strong>Mayor conversión y ciclos más cortos:</strong> Los clientes avanzan más rápido en el embudo de ventas.</li>
              <li><strong>Mejor rentabilidad:</strong> Reducimos costos de adquisición (CAC) e incrementamos el valor de vida del cliente (LTV).</li>
              <li><strong>Forecast confiable:</strong> Las proyecciones de ventas son más certeras y ayudan a una mejor planificación.</li>
              <li><strong>Equipo alineado:</strong> Todos trabajan con procesos claros y repetibles, eliminando la improvisación.</li>
          </ul>

          <h4 class='font-bold text-brand-text mt-6 mb-2'>📦 Entregables Clave:</h4>
          <ul class='list-disc list-inside space-y-1 text-brand-text-secondary'>
              <li>CRM (Dynamics o HubSpot) configurado con un pipeline claro por etapas.</li>
              <li>Sistema de scoring y secuencias automatizadas para clientes potenciales.</li>
              <li>Librería comercial (Playbooks) con discursos, manejo de objeciones y casos de éxito.</li>
              <li>Tablero de ingresos y conversiones en Power BI para una visibilidad en tiempo real.</li>
              <li>Acuerdo de Nivel de Servicio (SLA) para el traspaso de información entre ventas y postventa.</li>
          </ul>`
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/5aK-6_zJS6o',
      shareUrl: 'https://www.youtube.com/watch?v=5aK-6_zJS6o',
      title: 'Gerencia: Gobierno de Datos y PMO Estratégica',
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