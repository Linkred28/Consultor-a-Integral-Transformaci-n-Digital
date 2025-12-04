import React, { useRef, useState } from "react";
import Teleprompter from "./Teleprompter";
import { teleprompterTexts } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Logo from "./Logo";

const CONTACT_EMAIL = "arely@metodiko.com.mx";

const AREA_OPTIONS = [
  {
    value: "direccion-general",
    label: "Dirección General / Gobierno corporativo",
  },
  { value: "finanzas", label: "Finanzas y control" },
  { value: "operaciones", label: "Operaciones / Logística" },
  { value: "ventas", label: "Ventas / Comercial" },
  { value: "rh", label: "Recursos Humanos" },
  {
    value: "tecnologia",
    label: "Tecnología / Transformación Digital / IA",
  },
  { value: "otro", label: "Otro frente estratégico" },
];

const Cta: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowStyle, setGlowStyle] = useState<
    React.CSSProperties & { "--mouse-x"?: string; "--mouse-y"?: string }
  >({});
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<{
    nombre: string;
    empresa: string;
    email: string;
    areas: string[];
    mensaje: string;
  }>({
    nombre: "",
    empresa: "",
    email: "",
    areas: [],
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isSubmitted) setIsSubmitted(false);
  };

  const handleAreaCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      let nextAreas = prev.areas;
      if (checked) {
        if (!nextAreas.includes(value)) {
          nextAreas = [...nextAreas, value];
        }
      } else {
        nextAreas = nextAreas.filter((area) => area !== value);
      }

      return {
        ...prev,
        areas: nextAreas,
      };
    });

    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Formulario de contacto Metodiko:", {
      destinatario: CONTACT_EMAIL,
      ...formData,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Limpiar formulario para que nadie vea datos de otros usuarios
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        areas: [],
        mensaje: "",
      });
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
          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col items-center justify-center gap-8 text-center min-h-[480px]">
            {/* Card con teleprompter */}
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
              <div className="text-base sm:text-lg md:text-xl font-medium text-white/95 leading-relaxed p-6 md:p-7 md:max-w-[60ch] mx-auto">
                <Teleprompter texts={teleprompterTexts} />
              </div>
            </div>

            {/* Copy institucional */}
            <div className="max-w-2xl mx-auto mt-3 md:mt-4">
              <p className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-3">
                Queremos entender su negocio antes de transformarlo.
              </p>
              <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                Inicie la conversación con nuestro equipo y exploremos juntos
                cómo convertir sus procesos y datos en una ventaja competitiva
                sostenible.
              </p>
            </div>

            {/* Logo Metodiko */}
            <div className="w-full max-w-3xl mt-1 flex items-center justify-center">
              <Logo className="h-56 sm:h-64 md:h-72 w-auto" />
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="frosted-card w-full max-w-xl p-6 md:p-7 space-y-5"
            >
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 text-center">
                Compártanos un contexto breve. Revisaremos su mensaje con
                atención y le responderemos a la brevedad con posibles
                siguientes pasos para su organización.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm md:text-[0.95rem] font-medium text-white mb-1"
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
                    className="w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm md:text-base text-[#0b1535] placeholder:text-[#0b1535]/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Ej. Ana López, Director(a) General"
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm md:text-[0.95rem] font-medium text-white mb-1"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm md:text-base text-[#0b1535] placeholder:text-[#0b1535]/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Nombre de la organización"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-[0.95rem] font-medium text-white mb-1"
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
                  className="w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm md:text-base text-[#0b1535] placeholder:text-[#0b1535]/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  placeholder="nombre@empresa.com"
                />
              </div>

              {/* Área de mayor prioridad - checkboxes */}
              <div>
                <p className="block text-sm md:text-[0.95rem] font-medium text-white mb-2">
                  Área de mayor prioridad (puede seleccionar varias)
                </p>
                <div className="space-y-2">
                  {AREA_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-start gap-2 text-sm md:text-[0.95rem] text-white"
                    >
                      <input
                        type="checkbox"
                        value={opt.value}
                        checked={formData.areas.includes(opt.value)}
                        onChange={handleAreaCheckboxChange}
                        className="mt-1 h-4 w-4 rounded border-hairline bg-white text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-left">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm md:text-[0.95rem] font-medium text-white mb-1"
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
                  className="w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm md:text-base text-[#0b1535] placeholder:text-[#0b1535]/60 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none"
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
              </div>

              {isSubmitted && (
                <p className="text-xs text-emerald-400 mt-2 text-center">
                  Gracias por compartirnos su contexto. Su mensaje ha sido
                  recibido correctamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
