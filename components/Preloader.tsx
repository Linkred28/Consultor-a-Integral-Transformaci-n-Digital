// Preloader.tsx – VERSIÓN PREMIUM (logo más grande + efecto alta gama)
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Misma lógica de duración que el código 1 (fade-out suave ~900ms)
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 900);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      id="preloader"
      className={`
        preloader
        fixed inset-0 z-[80] flex items-center justify-center
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#000000]
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Animación tipo “book” con glow suave y respiración elegante */}
      <style>{`
        @keyframes metodikoGlow {
          0% {
            transform: scale(0.9);
            box-shadow:
              0 40px 70px rgba(0, 0, 0, 0.8),
              0 0 0 0 rgba(56, 189, 248, 0.0);
          }
          40% {
            transform: scale(1.0);
            box-shadow:
              0 50px 90px rgba(0, 0, 0, 0.9),
              0 0 40px 14px rgba(59, 130, 246, 0.45);
          }
          70% {
            transform: scale(1.02);
            box-shadow:
              0 60px 110px rgba(0, 0, 0, 0.95),
              0 0 60px 18px rgba(56, 189, 248, 0.4);
          }
          100% {
            transform: scale(0.9);
            box-shadow:
              0 40px 70px rgba(0, 0, 0, 0.8),
              0 0 0 0 rgba(56, 189, 248, 0.0);
          }
        }
      `}</style>

      <div className="preloader-content flex flex-col items-center gap-6">
        {/* CÍRCULO PRINCIPAL – look tipo estudio fotográfico de alta gama */}
        <div
          className="
            relative flex items-center justify-center
            h-64 w-64
            md:h-[22rem] md:w-[22rem]
            lg:h-[24rem] lg:w-[24rem]
            rounded-full
            bg-[radial-gradient(circle_at_20%_20%,#fefefe,#e5e7eb_55%,#cbd5f5)]
            ring-4 md:ring-[6px] lg:ring-8 ring-white/85
            border border-white/80
            overflow-hidden
          "
          style={{
            animation: "metodikoGlow 2200ms ease-in-out infinite",
          }}
        >
          {/* Highlight superior tipo reflejo de luz de estudio */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),transparent_55%)]" />

          {/* LOGO MÁS GRANDE Y PROTAGÓNICO DENTRO DE LA CIRCUNFERENCIA */}
          <Logo
            className="
              relative
              h-44 w-44
              md:h-64 md:w-64
              lg:h-[17rem] lg:w-[17rem]
              object-contain
            "
          />
        </div>

        {/* Texto accesible para lectores de pantalla */}
        <span className="sr-only">
          El contenido está cargando, por favor espera.
        </span>
      </div>
    </div>
  );
};

export default Preloader;
