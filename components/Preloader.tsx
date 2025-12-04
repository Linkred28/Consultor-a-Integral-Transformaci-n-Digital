import React from 'react';
import Logo from './Logo';

const Preloader = ({
  isVisible,
  theme,
}: {
  isVisible: boolean;
  theme: 'light' | 'dark';
}) => (
  <div
    id="preloader"
    className={`preloader ${!isVisible ? 'hidden' : ''}`}
  >
    <div className="preloader-content">
      <div className="preloader-brand flex items-center gap-5 text-brand-text">
        {/* Wrapper para el efecto glow + zoom */}
        <div className="preloader-logo-wrapper">
          <Logo className="w-28 h-28" />
          <div className="preloader-logo-glow" aria-hidden="true" />
        </div>

        <span className="preloader-title text-3xl font-bold tracking-tight">
          Metodiko
        </span>
      </div>
    </div>
  </div>
);

export default Preloader;
