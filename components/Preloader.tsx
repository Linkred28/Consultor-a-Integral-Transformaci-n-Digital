// Preloader.tsx (VERSIÓN AJUSTADA CON EFECTO DEL PRELOADER 1)
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

interface PreloaderProps {
  isVisible: boolean;
  theme: "light" | "dark";
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Mantener montado para permitir fade-out elegante (igual que código 1)
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
        fixed inset-0 z-[80] flex items-center justify-center
        bg-gradient-to-b from-[#020617] to-[#020c1b]
        transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        {/* CONTENEDOR REDONDO GRANDE COMO EL PRELOADER 1 */}
        <div
          className="
            relative flex items-center justify-center
            h-56 w-56 md:h-80 md:w-80 lg:h-96 lg:w-96
            rounded-full bg-white shadow-2xl shadow-black/40
            ring-4 md:ring-[6px] lg:ring-8 ring-white/70
            transform scale-95
            animate-[pulse_2200ms_ease-in-out_infinite]
          "
        >
          {/* AQUI VA TU LOGO, CONSERVANDO TU MISMA IMPLEMENTACIÓN */}
          <Logo className="h-40 w-40 md:h-60 md:w-60 lg:h-72 lg:w-72 object-contain" />
        </div>

        {/* Texto accesible (como en código 1) */}
        <span className="sr-only">
          El contenido está cargando, por favor espera.
        </span>
      </div>
    </div>
  );
};

export default Preloader;
