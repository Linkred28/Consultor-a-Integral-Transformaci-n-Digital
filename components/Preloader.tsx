// Preloader.tsx – versión Metodiko usando efecto del código 1
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Igual que el código 1: fade-out suave ~900ms
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
      className={`preloader fixed inset-0 z-[80] flex items-center justify-center 
        bg-gradient-to-b from-[#020617] to-[#020c1b]
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Círculo principal – mismo estilo que código 1, marco más fino */}
        <div
          className="
            relative flex items-center justify-center
            h-56 w-56 
            md:h-80 md:w-80 
            lg:h-96 lg:w-96
            rounded-full bg-white
            shadow-2xl shadow-black/40
            ring-[2px] md:ring-[3px] lg:ring-4 ring-white/70
            transform scale-95
            animate-[pulse_4400ms_ease-in-out_infinite]
          "
        >
          {/* Logo METODIKO dentro del círculo */}
          <Logo
            className="
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
