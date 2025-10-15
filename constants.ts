
import type { Video, TickerItem } from './types';
import { IconData, IconClock, IconRisk, IconAgility, IconStrategy, IconAudit } from './components/Icons';

export const videos: Video[] = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/cex78KRJ3Po',
      shareUrl: 'https://www.youtube.com/embed/cex78KRJ3Po',
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
              <li><strong>Menos Ventas Perdidas:</strong> Mejoramos su 'fill rate' para que siempre tenga el producto que sus clientes buscan.</li>
              <li><strong>Entregas más Rápidas:</strong> Reducimos el tiempo total desde el pedido hasta la entrega (Lead Time).</li>
          </ul>`
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/TRh3kR4jlRU',
      title: 'Digitalización de Recursos Humanos',
      benefit: 'Eleve su gestión de talento a un nivel estratégico. Digitalice el ciclo de vida del talento, alinee a su equipo con los objetivos de negocio y anticipe la rotación con datos.',
      summary: '<ul><li>Ingresos más rápidos al rol (ramp-up)</li><li>Menos tareas repetitivas de RRHH</li><li>Objetivos individuales alineados al negocio</li><li>Visibilidad clara del clima laboral</li></ul>',
      imageId: 367,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Su equipo es su activo más valioso. Lo ayudamos a crear una experiencia de empleado moderna y eficiente, desde la contratación hasta el desarrollo, liberando a su equipo de RRHH de tareas manuales para que puedan enfocarse en lo que realmente importa: las personas.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Roles Claros:</strong> Creamos un 'libro de puestos' que define expectativas y rutas de crecimiento para cada rol.</li>
              <li><strong>Onboarding Exitoso:</strong> Digitalizamos el proceso de bienvenida, haciendo que los nuevos talentos sean productivos desde el primer día.</li>
              <li><strong>Crecimiento Continuo:</strong> Implementamos un sistema de gestión del desempeño que alinea los objetivos individuales con la estrategia de la empresa.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Equipo:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Talento Productivo, Más Rápidos:</strong> Disminuimos el tiempo de contratación y el 'ramp-up' de nuevos empleados.</li>
              <li><strong>Mayor Retención:</strong> Reducimos la rotación voluntaria al mejorar la experiencia y el desarrollo del empleado.</li>
              <li><strong>Cultura Positiva:</strong> Incrementamos el nivel de satisfacción y compromiso de su equipo (eNPS).</li>
          </ul>`
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/D8QJunhvPjc',
      title: 'Modernización de la Arquitectura Tecnológica',
      benefit: 'Convierta su área de TI en un motor de innovación. Reduzca la fricción operativa con una arquitectura segura, procesos automatizados y datos 100% confiables para su estrategia de IA.',
      summary: '<ul><li>Menos incidentes y recuperación más rápida</li><li>Procesos más seguros y automáticos</li><li>Onboarding de usuarios rápido y seguro</li><li>Datos confiables para IA</li></ul>',
      imageId: 1078,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Una base tecnológica sólida es el cimiento del crecimiento futuro. Modernizamos su infraestructura para que sea más segura, escalable y eficiente, convirtiendo su área de TI en un verdadero habilitador de negocio y preparando sus datos para la era de la IA.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Operación Resiliente:</strong> Entregamos manuales de operación (runbooks) que garantizan una respuesta rápida y estandarizada ante cualquier incidente.</li>
              <li><strong>Seguridad Proactiva:</strong> Implementamos las mejores prácticas de 'modern workplace' para proteger sus datos y asegurar el cumplimiento normativo.</li>
              <li><strong>Automatización Inteligente:</strong> Desarrollamos bots y flujos de trabajo que automatizan tareas repetitivas de alto impacto.</li>
              <li><strong>Datos para Decisiones:</strong> Construimos un modelo de datos confiable y tableros en Power BI que se convierten en la única fuente de verdad.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Operación:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Menos Interrupciones:</strong> Reducimos drásticamente el tiempo de inactividad (MTTR).</li>
              <li><strong>Riesgo Controlado:</strong> Aumentamos el cumplimiento de políticas de seguridad, minimizando vulnerabilidades.</li>
              <li><strong>TI como Aliado:</strong> Mejoramos la percepción y satisfacción de los usuarios con el servicio del área de TI.</li>
          </ul>`
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/netzvrojPvI',
      title: 'Estructura Comercial para Crecimiento Acelerado',
      benefit: 'Instale una máquina de ventas predecible. Estructure su proceso comercial para acortar ciclos, aumentar la conversión y tomar decisiones de crecimiento con un forecast de alta precisión.',
      summary: '<ul><li>Mayor conversión y ciclos más cortos</li><li>Mejor rentabilidad (CAC/LTV)</li><li>Forecast de ventas confiable</li><li>Equipo comercial alineado y repetible</li></ul>',
      imageId: 119,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Transforme sus ventas de un arte a una ciencia. Implementamos un sistema comercial predecible y escalable que le permita acortar ciclos de venta, mejorar la rentabilidad de cada cliente y tener un 'forecast' en el que realmente puede confiar.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Proceso Estandarizado:</strong> Configuramos su CRM para reflejar un pipeline de ventas claro y efectivo que todo el equipo pueda seguir.</li>
              <li><strong>Foco en las Oportunidades Correctas:</strong> Implementamos un sistema de 'scoring' para que su equipo invierta tiempo en los leads con mayor potencial.</li>
              <li><strong>Equipo Imparable:</strong> Creamos una 'librería comercial' con los guiones, plantillas y casos de éxito que su equipo necesita para cerrar más tratos.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en sus Ingresos:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Más Cierres, Menos Esforzo:</strong> Aumentamos la tasa de conversión en cada etapa del embudo de ventas.</li>
              <li><strong>Ventas más Rápidas:</strong> Acortamos el tiempo promedio que toma convertir un prospecto en cliente.</li>
              <li><strong>Crecimiento Rentable:</strong> Optimizamos la relación entre el costo de adquirir un cliente (CAC) y su valor a largo plazo (LTV).</li>
          </ul>`
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/l7mnhWuUmAY',
      title: 'Gobernanza de Datos para Estrategia de IA',
      benefit: 'Convierta sus datos en su activo más valioso. Establezca una gobernanza sólida que garantice datos confiables, seguros y listos para potenciar su estrategia de Inteligencia Artificial.',
      summary: '<ul><li>Decisiones basadas en datos confiables</li><li>Cumplimiento normativo asegurado</li><li>Activos de datos listos para IA</li><li>Reducción de riesgos de seguridad</li></ul>',
      imageId: 431,
      description: `
          <p class='mb-4 text-brand-text-secondary'>En la era de la IA, la calidad de sus datos determina su éxito. Le ayudamos a construir una base de gobernanza de datos que no solo protege su información, sino que la convierte en un activo estratégico confiable y listo para ser explotado por modelos de inteligencia artificial.</p>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Su Transformación, en la Práctica:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Fuente Única de Verdad:</strong> Creamos un catálogo de datos centralizado para que toda la organización hable el mismo idioma.</li>
              <li><strong>Políticas Claras:</strong> Definimos roles y responsabilidades sobre los datos (Data Stewardship) para asegurar su calidad y consistencia.</li>
              <li><strong>Seguridad y Cumplimiento:</strong> Implementamos controles para proteger sus datos y asegurar el cumplimiento de normativas como GDPR o CCPA.</li>
          </ul>
          <h4 class='font-bold text-brand-text mt-4 mb-2'>Resultados que Verá en su Estrategia:</h4>
          <ul class='list-disc list-inside space-y-1'>
              <li><strong>Confianza en los Datos:</strong> Aumentamos el índice de calidad de datos (DQI) en toda la organización.</li>
              <li><strong>Decisiones Inteligentes:</strong> Reducimos el tiempo necesario para preparar datos para análisis y modelos de IA.</li>
              <li><strong>Riesgo Mitigado:</strong> Mejoramos el cumplimiento de las políticas de seguridad de datos.</li>
          </ul>`
    }
];

export const tickerItems: TickerItem[] = [
  { icon: IconData, text: 'Decisiones con datos confiables' },
  { icon: IconClock, text: 'Cierres puntuales, sin sorpresas' },
  { icon: IconRisk, text: 'Riesgos visibles desde el inicio' },
  { icon: IconAgility, text: 'Operación ágil y segura' },
  { icon: IconStrategy, text: 'Ejecución estratégica en tiempo real' },
  { icon: IconAudit, text: 'Procesos claros y auditables' },
];

export const teleprompterTexts: string[] = [
    "Alineamos estrategia, procesos y tecnología para liderar el futuro digital.",
    "La transformación digital no es solo adoptar tecnología: es gobernar el cambio, elevar la visión y trascender como referente en tu sector.",
    "Convertimos datos en decisiones, procesos en ventajas competitivas y la visión en una realidad rentable.",
    "El liderazgo digital no se improvisa: se construye con estrategia clara, ejecución impecable y gobierno corporativo sólido.",
    "Donde otros ven complejidad, nosotros diseñamos claridad: orquestamos su ecosistema digital para un rendimiento sin precedentes.",
    "Aceleramos el futuro de su negocio, no solo actualizando sistemas, sino redefiniendo lo que es posible en su industria."
];
