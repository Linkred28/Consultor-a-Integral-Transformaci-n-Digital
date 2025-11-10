import React, { useEffect, useRef, useState, FormEvent } from "react";
import { IconChat, IconClose, IconSend } from "./Icons";
import Logo from "./Logo";

type Role = "user" | "model";

interface Message {
  role: Role;
  text: string;
}

const STARTER_SUGGESTIONS = [
  "Cómo encaramos tu negocio",
  "Pilares del modelo",
  "Servicios para Ventas",
  "Beneficios estratégicos",
  "ROI / FODA / KPIs",
  "Agendar contacto",
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hola. Soy Metodiko AI. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  const toggle = () => setIsOpen((v) => !v);

  const quickAsk = (text: string) => {
    setInput(text);
    setTimeout(() => {
      void handleSend(text);
    }, 0);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    void handleSend(input.trim());
  };

  const handleSend = async (text: string) => {
    if (isLoading) return;
    setIsLoading(true);

    // usuario
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    // *** MODO SIN API (demo local con contexto de tu página)
    // Aquí “simulamos” una respuesta potente usando el contexto que me diste.
    const ctx =
      "Metodiko combina Consultoría Integral, Transformación Digital y Formaciones. " +
      "Ejes: estrategia conectada a la ejecución, trazabilidad y gobierno corporativo, crecimiento escalable, innovación continua y decisiones basadas en datos. " +
      "Propuesta: pasar del control operativo a un gobierno empresarial con visión digital; foco, velocidad e impacto. " +
      "Servicios transversales por áreas: Administración (automatización y tableros), Logística (WMS ligero y trazabilidad), RH (onboarding, desempeño y clima), " +
      "Tecnología (seguridad, automatización y datos confiables), Ventas (CRM con scoring y playbooks), Gerencia (gobierno de datos, PMO, OKRs, ROI y riesgos). " +
      "Beneficios: decisiones confiables en tiempo real, eficiencia operativa end-to-end, reducción de riesgos y crecimiento escalable. " +
      "Indicadores: ROI, FODA dinámico y KPIs para gobierno del desempeño. CTA: ‘Inicie la conversación en metodiko.com.mx’.";
    const faq: Record<string, string> = {
      "cómo encaramos tu negocio":
        "1) Dilema actual: procesos fragmentados, datos poco confiables y decisiones tardías. " +
        "2) Visión integrada: trazabilidad de extremo a extremo, decisiones basadas en datos y anticipación de riesgos. " +
        "3) Salto estratégico: gobierno empresarial con visión digital para más foco, velocidad e impacto.",
      "pilares del modelo":
        "Pilares: (1) Consultoría Integral (modelos operativos integrados, gobierno y riesgos). " +
        "(2) Transformación Digital (gobierno del cambio, automatizaciones, innovación, herramientas e IA). " +
        "(3) Formaciones (coaching ejecutivo, entrenamiento de equipos, laboratorios y formación continua).",
      "servicios para ventas":
        "Ventas: CRM organizado con scoring de leads y playbooks; proceso predecible, mayor conversión, ciclos más cortos y forecast confiable.",
      "beneficios estratégicos":
        "Beneficios: decisiones basadas en datos en tiempo real, eficiencia operativa end-to-end, reducción de riesgos y crecimiento escalable.",
      "roi / foda / kpis":
        "ROI: medimos retorno e impacto financiero claro. FODA: dinámico y accionable para prevención y enfoque. KPIs: gobierno del desempeño con indicadores que conectan visión y ejecución.",
      "agendar contacto":
        "Con gusto. Compártenos tu correo o agenda una llamada. También puedes iniciar la conversación en metodiko.com.mx.",
    };

    const key = text.trim().toLowerCase();
    const reply =
      faq[key] ??
      `Resumen ejecutivo: ${ctx}\n\nSi deseas, puedo detallar cómo aplicarlo en tu contexto (área, objetivos y KPIs).`;

    // “respuesta” del modelo
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
      setIsLoading(false);
    }, 400);
  };

  return (
    <>
      {/* FAB chatbot — separado del botón de scroll y con z-60 */}
      <button
        className="chatbot-fab fixed z-[60]"
        onClick={toggle}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <IconClose className="w-6 h-6" />
        ) : (
          <IconChat className="w-6 h-6" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`chatbot-panel ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-labelledby="chatbot-title"
      >
        <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            {/* LOGO LIMPIO Y MÁS GRANDE (sin marco) */}
            <Logo className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
            <h2
              id="chatbot-title"
              className="text-lg md:text-xl font-semibold text-brand-text leading-tight"
            >
              Metodiko AI
            </h2>
          </div>
          <button
            onClick={toggle}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar chat"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        {/* Sugerencias rápidas */}
        <div className="px-4 pt-3 flex flex-wrap gap-2">
          {STARTER_SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="px-3 py-1.5 text-sm rounded-full bg-muted text-brand-text-secondary hover:text-brand-text hover:bg-brand-border transition"
              onClick={() => quickAsk(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message-bubble ${
                m.role === "user" ? "message-user" : "message-model"
              }`}
            >
              {m.text}
            </div>
          ))}
          {isLoading && (
            <div className="message-bubble message-model loading-dots">
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
              <span className="inline-block w-2 h-2 rounded-full" />
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-shrink-0 p-4 border-t border-brand-border flex items-center gap-2 bg-brand-bg"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta..."
            className="flex-grow w-full px-3 py-2 bg-muted border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text placeholder:text-brand-text-secondary"
            disabled={isLoading}
            aria-label="Mensaje para el chatbot"
          />
          <button
            type="submit"
            className="button p-3"
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
