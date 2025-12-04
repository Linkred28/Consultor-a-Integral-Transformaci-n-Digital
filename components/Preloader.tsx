import React from 'react';
import Logo from './Logo';

const Preloader = ({
  isVisible,
  theme,
}: {
  isVisible: boolean;
  theme: 'light' | 'dark';
}) => (
  <div id="preloader" className={`preloader ${!isVisible ? 'hidden' : ''}`}>
    <div className="preloader-content">
      {/* Contenedor con efecto de carga sutil */}
      <div className="flex items-center gap-4 text-brand-text animate-pulse">
        {/* Logo más grande */}
        <Logo className="w-20 h-20" />
        {/* Texto un poco más grande y elegante */}
        <span className="text-3xl font-bold tracking-tight">Metodiko</span>
      </div>
    </div>
  </div>
);

export default Preloader;
