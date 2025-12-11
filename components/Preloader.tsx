// Preloader.tsx – Versión Elite DOWNLOAD: pulsaciones marcadas + halo de luz evidente + zoom out
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
      {/* Animaciones: pulsaciones (download) + halo de luz más evidente + zoom out */}
      <style>{`
        /* Pulsaciones claras + zoom out marcado (scale + sombra)
           Ciclo largo (~26.4s) para sensación premium y calmada */
        @keyframes metodikoBreathSoft {
          0% {
            transform: scale(1.10);                /* más grande, arranca “cerca” */
            box-shadow: 0 46px 96px rgba(15, 23, 42, 0.34);
          }
          15% {
            transform: scale(1.05);                /* primer pulso fuerte */
            box-shadow: 0 52px 104px rgba(15, 23, 42, 0.36);
          }
          30% {
            transform: scale(1.02);
            box-shadow: 0 42px 86px rgba(15, 23, 42, 0.30);
          }
          50% {
            transform: scale(1.00);                /* punto medio */
            box-shadow: 0 36px 72px rgba(15, 23, 42, 0.26);
          }
          70% {
            transform: scale(1.03);                /* segundo pulso, simula “carga” */
            box-shadow: 0 44px 90px rgba(15, 23, 42, 0.30);
          }
          85% {
            transform: scale(0.98);
            box-shadow: 0 32px 60px rgba(15, 23, 42, 0.22);
          }
          100% {
            transform: scale(0.94);                /* más pequeño, zoom out evidente */
            box-shadow: 0 26px 50px rgba(15, 23, 42, 0.18);
          }
        }

        /* Halo de luz más evidente que recorre el logo (look alta gama) */
        @keyframes metodikoSweepSoft {
          0% {
            transform: translateX(-170%);
            opacity: 0;
          }
          15% {
            opacity: 0.30;
          }
          35% {
            opacity: 0.52;                         /* halo más marcado */
          }
          60% {
            opacity: 0.26;
          }
          100% {
            transform: translateX(170%);
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
            // Tiempo total del ciclo: 26.4s (zoom out + dos pulsos de “carga”)
            animation: "metodikoBreathSoft 26400ms ease-in-out infinite",
          }}
        >
          {/* Halo de luz más marcado que cruza el logo */}
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


