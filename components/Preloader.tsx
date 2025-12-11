import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Misma lógica de duración suave que el preloader 1
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
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Animación y halo de luz tipo book fotográfico de alta gama */}
      <style>{`
        @keyframes metodikoGlowElite {
          0% {
            transform: scale(0.96);
            box-shadow:
              0 42px 70px rgba(0, 0, 0, 0.85),
              0 0 0 0 rgba(56, 189, 248, 0.0);
          }
          45% {
            transform: scale(1.0);
            box-shadow:
              0 52px 96px rgba(0, 0, 0, 0.95),
              0 0 52px 18px rgba(56, 189, 248, 0.40);
          }
          100% {
            transform: scale(0.96);
            box-shadow:
              0 42px 70px rgba(0, 0, 0, 0.85),
              0 0 0 0 rgba(56, 189, 248, 0.0);
          }
        }
      `}</style>

      <div className="preloader-content flex flex-col items-center gap-6">
        {/* WRAPPER GENERAL DEL CÍRCULO */}
        <div
          className="
            relative flex items-center justify-center
            h-64 w-64
            md:h-[22rem] md:w-[22rem]
            lg:h-[24rem] lg:w-[24rem]
          "
        >
          {/* HALO AZUL EXTERIOR – luz suave alrededor del marco */}
          <div
            className="
              pointer-events-none
              absolute inset-[-16%]
              rounded-full
              opacity-80
              blur-sm
              bg-[radial-gradient(circle,rgba(37,99,235,0.45),transparent_60%)]
            "
          />

          {/* MARCO ELEGANTE – similar al logo 2 */}
          <div
            className="
              relative flex items-center justify-center
              h-full w-full
              rounded-full
              bg-gradient-to-b from-slate-200/96 via-slate-100 to-slate-200/98
              ring-[10px] ring-slate-300/70
              border border-white/80
              overflow-hidden
            "
            style={{
              animation: "metodikoGlowElite 2300ms ease-in-out infinite",
            }}
          >
            {/* CÍRCULO INTERIOR – superficie principal tipo estudio */}
            <div
              className="
                relative flex items-center justify-center
                h-[82%] w-[82%]
                rounded-full
                bg-[radial-gradient(circle_at_18%_18%,#ffffff,#e5e7eb_45%,#d4d4f7_95%)]
                shadow-inner
                overflow-hidden
              "
            >
              {/* Reflejo superior tipo softbox */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_58%)]
                "
              />

              {/* LOGO METODIKO – muy protagonista dentro del círculo */}
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
