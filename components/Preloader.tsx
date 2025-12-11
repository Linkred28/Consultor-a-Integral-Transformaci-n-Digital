// Preloader.tsx – Versión elite con halo de luz sutil y marco fino
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Igual que tu código 1: fade-out suave ~900 ms
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
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#020c1b]
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Animaciones: scale suave + halo que recorre el logo */}
      <style>{`
        /* Respiración muy sutil del círculo (NO brillo exagerado) */
        @keyframes metodikoScaleSoft {
          0% { transform: scale(0.98); }
          50% { transform: scale(1.0); }
          100% { transform: scale(0.98); }
        }

        /* Halo de luz que pasa sobre el logo */
        @keyframes metodikoSweep {
          0% {
            transform: translateX(-140%);
            opacity: 0;
          }
          15% {
            opacity: 0.18;
          }
          40% {
            opacity: 0.30;
          }
          70% {
            opacity: 0.12;
          }
          100% {
            transform: translateX(140%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="preloader-content flex flex-col items-center gap-6">
        {/* WRAPPER GENERAL DEL CÍRCULO */}
        <div className="relative flex items-center justify-center h-64 w-64 md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem]">
          {/* Halo exterior muy sutil, sin brillo agresivo */}
          <div className="pointer-events-none absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.1),rgba(37,99,235,0.3),transparent_65%)] opacity-90" />

          {/* MARCO ELEGANTE – mucho más fino */}
          <div
            className="
              relative flex items-center justify-center
              h-full w-full
              rounded-full
              bg-gradient-to-b from-slate-200/95 via-slate-100 to-slate-200/98
              ring-[3px] md:ring-4 lg:ring-[5px] ring-slate-300/80
              border border-white/70
              shadow-[0_42px_80px_rgba(0,0,0,0.85)]
              overflow-hidden
            "
            style={{
              // ⏱ Duración del efecto: ~4600 ms (el doble que antes)
              animation: "metodikoScaleSoft 4600ms ease-in-out infinite",
            }}
          >
            {/* CÍRCULO INTERIOR – superficie tipo estudio fotográfico */}
            <div
              className="
                relative flex items-center justify-center
                h-[82%] w-[82%]
                rounded-full
                bg-[radial-gradient(circle_at_18%_18%,#ffffff,#e5e7eb_45%,#d4d4f7_95%)]
                overflow-hidden
              "
            >
              {/* Reflejo fijo superior tipo softbox */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]" />

              {/* HALO DE LUZ QUE RECORRE EL LOGO */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
                  mixBlendMode: "screen",
                  animation: "metodikoSweep 4600ms ease-in-out infinite",
                }}
              />

              {/* LOGO METODIKO – muy protagonista */}
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
          </div>
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

