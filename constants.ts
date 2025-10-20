
import type { Video, TickerItem } from './types';
import { IconData, IconClock, IconRisk, IconAgility, IconStrategy, IconAudit, IconGrowthTrend, IconInnovation } from './components/Icons';

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
          <p class='mb-4 text-brand-text-secondary'>En muchas empresas, la falta de control operativo y la dispersión de la información financiera generan retrasos, errores y decisiones poco oportunas. Este video muestra cómo rediseñar los procesos administrativos con herramientas digitales que aportan orden, trazabilidad y visibilidad en tiempo real. Desde la automatización de aprobaciones hasta la consolidación de cierres contables, cada paso se vuelve más ágil, preciso y transparente.</p>
          <p class='text-brand-text-secondary'>Nuestro trabajo consiste en ayudar a las organizaciones a pasar del caos operativo a una gestión estratégica basada en datos. Implementamos metodologías que integran tecnología, disciplina y visión empresarial, logrando convertir la administración en una verdadera ventaja competitiva: un modelo que combina estructura, tecnología y claridad en la toma de decisiones. Acompañamos a cada empresa a construir procesos que no solo funcionen mejor, sino que impulsen eficiencia, confianza y crecimiento sostenible.</p>`
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
          <p class='mb-4 text-brand-text-secondary'>La eficiencia logística no depende solo de mover productos, sino de entender el flujo completo que los sostiene. En este video mostramos cómo optimizar rutas, almacenes e inventarios a través de sistemas ligeros y trazables que eliminan errores, reducen costos y garantizan entregas a tiempo. Cada movimiento —desde el picking hasta la reposición— se vuelve visible, medible y controlado.</p>
          <p class='text-brand-text-secondary'>Ayudamos a las empresas a transformar su operación logística en un ecosistema inteligente, donde la información fluye sin fricciones y las decisiones se basan en datos reales. Implementamos modelos que combinan tecnología, planeación y análisis predictivo para alcanzar el equilibrio perfecto entre agilidad, costo y servicio. Así, la logística deja de ser un reto operativo para convertirse en una ventaja competitiva que impulsa rentabilidad y confianza en toda la cadena.</p>`
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/TRh3kR4jlRU',
      shareUrl: 'https://youtu.be/TRh3kR4jlRU',
      title: 'Recursos Humanos: Gestión y Desarrollo de Talento Estratégico',
      benefit: 'Digitalizamos el ciclo de vida del talento, desde un onboarding sin papeles hasta la gestión del desempeño y la automatización de procesos clave. Obtenga visibilidad total del clima laboral y alinee a su equipo con los objetivos del negocio.',
      summary: '<ul><li>Ingresos más rápidos al rol</li><li>Menos tareas repetitivas</li><li>Objetivos de negocio alineados</li><li>Visibilidad del clima laboral</li></ul>',
      imageUrl: 'https://images.pexels.com/photos/7792845/pexels-photo-7792845.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: `
          <p class='mb-4 text-brand-text-secondary'>En muchas empresas, la gestión de personas sigue anclada en procesos lentos, dispersos y difíciles de medir. En este video mostramos cómo digitalizar y estructurar todo el ciclo de vida del colaborador: desde la definición de roles y competencias hasta la automatización de nómina, evaluaciones y desarrollo. El resultado es un entorno más ágil, transparente y conectado, donde cada persona sabe qué se espera de ella y cómo puede crecer.</p>
          <p class='text-brand-text-secondary'>Acompañamos a las organizaciones en la construcción de una cultura basada en datos, desempeño y bienestar. Diseñamos modelos que combinan estructura, tecnología y analítica para potenciar el talento, reducir la rotación y alinear los objetivos individuales con los estratégicos del negocio. Así, Recursos Humanos deja de ser un área operativa y se convierte en el motor que impulsa evolución, compromiso y resultados sostenibles.</p>`
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/D8QJunhvPjc',
      shareUrl: 'https://youtu.be/D8QJunhvPjc',
      title: 'Tecnología: Seguridad, Automatización y Datos Confiables',
      benefit: 'Reforzamos su seguridad, automatizamos procesos y garantizamos datos 100% confiables. Preparamos su operación para el análisis avanzado y la IA, con sistemas estables y un entorno de trabajo moderno.',
      summary: '<ul><li>Menos incidentes y recuperación rápida</li><li>Procesos seguros y automáticos</li><li>Onboarding de TI rápido y seguro</li><li>Datos confiables para IA</li></ul>',
      imageId: 1079,
      description: `
          <p class='mb-4 text-brand-text-secondary'>La tecnología dejó de ser un soporte para convertirse en el eje que define la eficiencia y resiliencia de una empresa. En este video mostramos cómo modernizar la arquitectura tecnológica con un enfoque práctico, seguro y adaptable: infraestructuras actualizadas, automatizaciones que eliminan errores humanos y entornos digitales que garantizan estabilidad continua. Todo diseñado para que la operación fluya sin interrupciones y los datos se conviertan en activos confiables para la toma de decisiones.</p>
          <p class='text-brand-text-secondary'>Ayudamos a las organizaciones a transformar su ecosistema tecnológico en una plataforma sólida, escalable y preparada para el futuro. Aplicamos metodologías que equilibran seguridad, agilidad y automatización, permitiendo que la tecnología deje de ser un costo o una preocupación, y se convierta en un habilitador estratégico del crecimiento, la eficiencia y la innovación sostenible.</p>`
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/netzvrojPvI',
      shareUrl: 'https://youtu.be/netzvrojPvI',
      title: 'Ventas: Proceso Comercial Predecible y Escalable',
      benefit: 'Implementamos un CRM organizado con scoring de leads y playbooks comerciales para crear un proceso de ventas predecible. Aumente la conversión, acorte los ciclos de venta y obtenha un forecast confiable.',
      summary: '<ul><li>Mayor conversión y ciclos cortos</li><li>Mejor rentabilidad (CAC/LTV)</li><li>Forecast de ventas confiable</li><li>Equipo alineado y estandarizado</li></ul>',
      imageId: 5,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Las ventas efectivas no dependen de la suerte, sino de procesos claros, datos confiables y equipos alineados. En este video mostramos cómo estructurar el área comercial con herramientas prácticas que permiten visualizar cada oportunidad, priorizar leads y dar seguimiento automático sin dejar escapar prospectos. Desde la definición del pipeline hasta la conexión con postventa, todo el flujo se vuelve predecible, medible y orientado a resultados.</p>
          <p class='text-brand-text-secondary'>Trabajamos junto a las organizaciones para transformar sus procesos comerciales en motores de crecimiento sostenido. Implementamos sistemas que combinan analítica, metodología y automatización, logrando que cada interacción con el cliente sume valor real. Así, el área de ventas deja de depender de esfuerzos individuales y se convierte en una estrategia integral que impulsa rentabilidad, confianza y expansión constante.</p>`
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/l7mnhWuUmAY',
      shareUrl: 'https://youtu.be/l7mnhWuUmAY',
      title: 'Gerencia: Gobierno de Datos y PMO Estratégica',
      benefit: 'Implementamos un marco de gobierno de datos ágil que conecta la estrategia con la ejecución. A través de una PMO, traducimos las inversiones en modelos de ROI claros y medimos el avance con OKRs, fortaleciendo la toma de decisiones con un modelo financiero ejecutivo, tableros de riesgos y una sólida capacitación a mandos.',
      summary: '<ul><li>Foco en prioridades de alto impacto</li><li>Decisiones rápidas basadas en datos</li><li>Seguimiento cuantificado con ROI</li><li>Riesgos visibles y controlados</li></ul>',
      imageId: 33,
      description: `
          <p class='mb-4 text-brand-text-secondary'>Una estrategia solo cobra valor cuando se ejecuta con claridad, enfoque y disciplina. En este video mostramos cómo estructurar la gestión directiva para que cada decisión se base en datos y cada acción sume al propósito general del negocio. A través de modelos de portafolio, revisiones ágiles y tableros ejecutivos, ayudamos a que los líderes mantengan el control sin perder velocidad, garantizando que los objetivos se traduzcan en resultados concretos.</p>
          <p class='text-brand-text-secondary'>Acompañamos a las organizaciones en la construcción de una gerencia moderna: capaz de alinear áreas, anticipar riesgos y medir el progreso con métricas reales. Implementamos metodologías que convierten la planeación en ejecución continua y la dirección en una práctica de liderazgo inteligente. Así, la estrategia deja de quedarse en los documentos para convertirse en una fuerza tangible que guía, impulsa y transforma.</p>`
    }
];

export const tickerItems: TickerItem[] = [
  { icon: IconData, text: "Decisiones Basadas en Datos" },
  { icon: IconClock, text: "Agilidad Competitiva" },
  { icon: IconRisk, text: "Menor Riesgo Operativo" },
  { icon: IconAgility, text: "Procesos Optimizados" },
  { icon: IconStrategy, text: "Estrategia Conectada a la Ejecución" },
  { icon: IconAudit, text: "Trazabilidad y Gobierno Corporativo" },
  { icon: IconGrowthTrend, text: "Crecimiento Escalable" },
  { icon: IconInnovation, text: "Innovación Continua" },
];

export const teleprompterTexts: string[] = [
  "Analicemos juntos cómo la integración de procesos y tecnología puede reducir costos operativos y acelerar su crecimiento.",
  "¿Está listo para convertir sus datos en su activo más valioso y tomar decisiones con total confianza?",
  "Descubra cómo podemos construir una ventaja competitiva sostenible para su negocio en el entorno digital actual.",
  "Es el momento de alinear su estrategia con una ejecución impecable."
];