// Preloader.tsx – Versión Elite con efecto “download”
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Mantener montado un poco más para permitir el fade-out suave (igual que código 1)
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
        bg-white
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Animación para la barra de “download” */}
      <style>{`
        @keyframes metodikoProgressScan {
          0% {
            transform: translateX(-120%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(120%);
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-4">
        {/* Sello principal */}
        <div
          className="
            relative flex items-center justify-center
            h-56 w-56
            md:h-80 md:w-80
            lg:h-96 lg:w-96
            rounded-full
            bg-[radial-gradient(circle_at_30%_20%,#ffffff,#e5e7eb_55%,#e2e8f0_100%)]
            ring-[2px] md:ring-[3px] lg:ring-[4px] ring-slate-300/95
            border border-slate-200/90
            shadow-2xl shadow-black/35
            transform scale-95
            animate-[pulse_6600ms_ease-in-out_infinite]  /* 3x más largo */
          "
        >
          {/* Logo METODIKO protagonista */}
          <Logo
            className="
              relative
              h-40 w-40
              md:h-60 md:w-60
              lg:h-72 lg:w-72
              object-contain
            "
          />

          {/* Barra de progreso tipo “download” dentro del círculo */}
          <div
            className="
              absolute
              bottom-[14%]
              left-1/2
              -translate-x-1/2
              w-[60%]
              h-1.5 md:h-[7px]
              rounded-full
              bg-slate-200/90
              overflow-hidden
            "
          >
            <div
              className="h-full rounded-full"
              style={{
                backgroundColor: "#0f766e", // tono teal/metodiko
                animation: "metodikoProgressScan 6600ms ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Texto solo para lector de pantalla */}
        <span className="sr-only">
          El contenido está cargando, por favor espera.
        </span>
      </div>
    </div>
  );
};

export default Preloader;
