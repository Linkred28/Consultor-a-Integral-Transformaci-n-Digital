import React, { useRef, useState } from "react";
import Teleprompter from "./Teleprompter";
import { teleprompterTexts } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Logo from "./Logo";

const Cta = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowStyle, setGlowStyle] = useState<
    React.CSSProperties & { "--mouse-x"?: string; "--mouse-y"?: string }
  >({});
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    area: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s linear",
    });

    setGlowStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    });
    setGlowStyle({});
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Formulario de contacto Metodiko:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Si quisieras limpiar el formulario:
      // setFormData({ nombre: "", empresa: "", email: "", area: "", mensaje: "" });
    }, 600);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <h2 className="cta-title text-center">
          El verdadero riesgo es no evolucionar.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          {/* Columna izquierda: subimos contenido y agregamos logo abajo */}
          <div className="flex flex-col items-center gap-8 text-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={style}
              className="frosted-card w-full max-w-3xl"
            >
              <div
                style={glowStyle}
                className="glow"
                aria-hidden="true"
              ></div>
              <div className="text-2xl sm:text-3xl font-semibold text-white leading-relaxed p-6 md:p-7 md:max-w-[60ch] mx-auto">
                <Teleprompter texts={teleprompterTexts} />
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl font-semibold text-white leading-snug mb-2">
                Queremos entender su negocio antes de transformarlo.
              </p>
              <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed">
                Inicie la conversación con nuestro equipo en{" "}
                <a
                  href="https://metodiko.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link-highlight"
                  title="Visitar el sitio web de Metodiko"
                >
                  metodiko.com.mx
                </a>{" "}
                y exploremos juntos cómo convertir sus procesos y datos en una
                ventaja competitiva sostenible.
              </p>
            </div>

            {/* Contenedor para el logo Metodiko en la columna izquierda */}
            <div className="pt-4">
              <div className="inline-flex items-center justify-center rounded-2xl bg-brand-bg-secondary/70 border border-hairline px-6 py-4 shadow-lg shadow-black/30">
                <Logo className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="frosted-card w-full max-w-xl p-6 md:p-7 space-y-5"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1 text-center">
                Inicie una conversación estratégica
              </h3>
              <p className="text-sm md:text-base text-brand-text leading-relaxed mb-4 text-center">
                Compártanos un contexto breve. Revisaremos su mensaje con
                atención y le responderemos a la brevedad con posibles
                siguientes pasos para su organización.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm md:text-[0.95rem] font-medium text-brand-text mb-1"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-hairline bg-brand-bg-secondary/80 px-3 py-2 text-sm md:text-base text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Ej. Ana López, Director(a) General"
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm md:text-[0.95rem] font-medium text-brand-text mb-1"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-hairline bg-brand-bg-secondary/80 px-3 py-2 text-sm md:text-base text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Nombre de la organización"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-[0.95rem] font-medium text-brand-text mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-hairline bg-brand-bg-secondary/80 px-3 py-2 text-sm md:text-base text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm md:text-[0.95rem] font-medium text-brand-text mb-1"
                >
                  Área de mayor prioridad
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-hairline bg-brand-bg-secondary/80 px-3 py-2 text-sm md:text-base text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="direccion-general">
                    Dirección General / Gobierno corporativo
                  </option>
                  <option value="finanzas">Finanzas y control</option>
                  <option value="operaciones">Operaciones / Logística</option>
                  <option value="ventas">Ventas / Comercial</option>
                  <option value="rh">Recursos Humanos</option>
                  <option value="tecnologia">
                    Tecnología / Transformación Digital / IA
                  </option>
                  <option value="otro">Otro frente estratégico</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm md:text-[0.95rem] font-medium text-brand-text mb-1"
                >
                  Contexto y objetivo
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-hairline bg-brand-bg-secondary/80 px-3 py-2 text-sm md:text-base text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none"
                  placeholder="Cuéntenos brevemente la situación actual, retos clave y qué le gustaría lograr en los próximos meses."
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg hover:bg-brand-primary/90 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed mx-auto"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>

                {/* ✅ Texto con fuente más grande y centrado */}
                <p className="text-xs md:text-sm text-brand-text-secondary max-w-xs w-full text-center leading-relaxed mx-auto">
                  Agradecemos su interés en Metodiko. Revisaremos su mensaje con
                  atención y le responderemos a la brevedad con alternativas
                  claras para explorar cómo acompañar a su organización.
                </p>
              </div>

              {isSubmitted && (
                <p className="text-xs text-emerald-400 mt-2 text-center">
                  Gracias por compartirnos su contexto. Su mensaje ha sido
                  recibido correctamente.
                </p>
              )}
              {/* 🔴 Logo debajo del formulario eliminado (ahora solo está en la columna izquierda) */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
