// Preloader.tsx – Versión Elite DOWNLOAD: pulsaciones muy marcadas + halo fuerte + zoom out EXAGERADO
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Igual que tu código 1: mantener montado un poco más para el fade-out suave
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
      {/* Animaciones: pulsaciones (download) + halo de luz muy evidente + zoom out EXAGERADO */}
      <style>{`
        /* Pulsaciones muy claras + zoom out FUERTE (scale + sombra)
           Ciclo largo (~26.4s) para sensación premium y calmada */
        @keyframes metodikoBreathSoft {
          0% {
            transform: scale(1.30);                /* arranca MUY cerca, casi encima */
            box-shadow: 0 70px 140px rgba(15, 23, 42, 0.45);
          }
          10% {
            transform: scale(1.20);                /* primer pulso muy alto */
            box-shadow: 0 78px 150px rgba(15, 23, 42, 0.48);
          }
          25% {
            transform: scale(1.12);
            box-shadow: 0 62px 126px rgba(15, 23, 42, 0.40);
          }
          40% {
            transform: scale(1.05);
            box-shadow: 0 52px 108px rgba(15, 23, 42, 0.34);
          }
          55% {
            transform: scale(1.00);                /* punto medio estable */
            box-shadow: 0 42px 86px rgba(15, 23, 42, 0.28);
          }
          70% {
            transform: scale(1.12);                /* segundo pulso muy alto = sensación fuerte de carga */
            box-shadow: 0 66px 136px rgba(15, 23, 42, 0.42);
          }
          85% {
            transform: scale(0.96);
            box-shadow: 0 34px 70px rgba(15, 23, 42, 0.24);
          }
          100% {
            transform: scale(0.78);                /* zoom out EXAGERADO, muy lejos */
            box-shadow: 0 22px 46px rgba(15, 23, 42, 0.18);
          }
        }

        /* Halo de luz muy evidente que recorre el logo (look alta gama) */
        @keyframes metodikoSweepSoft {
          0% {
            transform: translateX(-190%);
            opacity: 0;
          }
          10% {
            opacity: 0.38;
          }
          30% {
            opacity: 0.78;                         /* halo muy marcado pero elegante */
          }
          55% {
            opacity: 0.40;
          }
          80% {
            opacity: 0.18;
          }
          100% {
            transform: translateX(190%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-4">
        {/* Círculo principal – estilo sello premium */}
        <div
          className="
            relative flex items-center justify-center
            h-56 w-56
            md:h-80 md:w-80
            lg:h-96 lg:w-96
            rounded-full
            overflow-hidden
            bg-[radial-gradient(circle_at_30%_20%,#ffffff,#e5e7eb_55%,#e2e8f0_100%)]
            ring-[2px] md:ring-[3px] lg:ring-[4px] ring-slate-300/95
            border border-slate-200/90
          "
          style={{
            // Tiempo total del ciclo: 26.4s (zoom out EXAGERADO + dos pulsos muy marcados)
            animation: "metodikoBreathSoft 26400ms ease-in-out infinite",
          }}
        >
          {/* Halo de luz mucho más marcado que cruza el logo */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
              mixBlendMode: "screen",
              animation: "metodikoSweepSoft 26400ms ease-in-out infinite",
            }}
          />

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
