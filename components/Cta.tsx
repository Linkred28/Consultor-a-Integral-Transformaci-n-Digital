import React, { useRef, useState } from "react";
import Teleprompter from "./Teleprompter";
import { teleprompterTexts } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Logo from "./Logo";

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
    areas: [] as string[], // ahora es un arreglo (multi-selección)
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
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleAreaToggle = (value: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.areas.includes(value);
      const newAreas = alreadySelected
        ? prev.areas.filter((v) => v !== value)
        : [...prev.areas, value];

      return { ...prev, areas: newAreas };
    });
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
      // setFormData({ nombre: "", empresa: "", email: "", areas: [], mensaje: "" });
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
              <div className="text-2xl sm:text-3xl font-semibold text-white leading-relaxed p-6 md:p-7 md:max-w-[60ch] mx-auto">
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
          <div className="flex justify-cent
