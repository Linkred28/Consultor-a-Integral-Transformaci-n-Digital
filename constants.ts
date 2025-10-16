
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
              <li><strong>Menos Ventas Perdidas:</strong> Mejoramos su '