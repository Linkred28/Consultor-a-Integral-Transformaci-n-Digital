import React from 'react';
import Logo from './Logo';

const Preloader = ({ isVisible }: { isVisible: boolean }) => (
  <div id="preloader" className={`preloader ${!isVisible ? 'hidden' : ''}`}>
    <div className="preloader-content">
      <div className="flex items-center gap-3 text-brand-text">
        <Logo className="w-16 h-16" titleId="logoTitlePreloader" />
        <span className="text-2xl font-bold">Consultoría Integral + Transformación Digital</span>
      </div>
    </div>
  </div>
);

export default Preloader;