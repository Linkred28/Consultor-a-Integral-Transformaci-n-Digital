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
      <div className="flex items-center gap-5 text-brand-text animate-pulse">
        {/* Logo más grande */}
        <Logo className="w-24 h-24" />
        {/* Texto más grande */}
        <span className="text-2xl font-bold tracking-tight">Metodiko</span>
      </div>
    </div>
  </div>
);

export default Preloader;
