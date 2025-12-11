// Preloader.tsx – Versión Elite DOWNLOAD: pulsaciones muy marcadas + halo fuerte + zoom out claro
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
      {/* Animaciones: pulsaciones (download) + halo de luz muy evidente + zoom out marcado */}
      <style>{`
        /* Pulsaciones muy claras + zoom out fuerte (scale + sombra)
           Ciclo largo (~26.4s) para sensación premium y calmada */
        @keyframes metodikoBreathSoft {
          0% {
            transform: scale(1.18);                /* mucho más cerca al inicio */
            box-shadow: 0 60px 120px rgba(15, 23, 42, 0.40);
          }
          12% {
            transform: scale(1.10);                /* primer pulso alto */
            box-shadow: 0 68px 130px rgba(15, 23, 42, 0.44);
          }
          25% {
            transform: scale(1.05);
            box-shadow: 0 54px 110px rgba(15, 23, 42, 0.36);
          }
          40% {
            transform: scale(1.02);
            box-shadow: 0 46px 96px rgba(15, 23, 42, 0.32);
          }
          55% {
            transform: scale(1.00);                /* punto medio estable */
            box-shadow: 0 40px 80px rgba(15, 23, 42, 0.28);
          }
          70% {
            transform: scale(1.07);                /* segundo pulso alto = sensación de carga */
            box-shadow: 0 58px 118px rgba(15, 23, 42, 0.38);
          }
          82% {
            transform: scale(1.00);
            box-shadow: 0 40px 80px rgba(15, 23, 42, 0.26);
          }
          100% {
            transform: scale(0.90);                /* zoom out claramente visible */
            box-shadow: 0 26px 52px rgba(15, 23, 42, 0.20);
          }
        }

        /* Halo de luz mucho más evidente que recorre el logo (look alta gama) */
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
            // Tiempo total del ciclo: 26.4s (zoom out muy marcado + dos pulsos de “carga”)
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
