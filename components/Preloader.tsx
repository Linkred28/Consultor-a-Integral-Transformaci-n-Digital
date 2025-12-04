import React from 'react';
import Logo from './Logo';

interface PreloaderProps {
  isVisible: boolean;
  theme: 'light' | 'dark';
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible, theme }) => (
  <div
    id="preloader"
    className={`preloader ${!isVisible ? 'hidden' : ''}`}
    data-theme={theme}
  >
    <div className="preloader-content">
      <div className="flex items-center gap-4 text-brand-text animate-pulse">
        {/* Logo un poco más grande para que se perciba mejor */}
        <Logo className="w-20 h-20" />
        {/* Nombre también ligeramente más grande */}
        <span className="text-3xl font-bold tracking-wide">Metodiko</span>
      </div>
    </div>
  </div>
);

export default Preloader;
