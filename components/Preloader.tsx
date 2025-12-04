import React from 'react';
import Logo from './Logo';

interface PreloaderProps {
  isVisible: boolean;
  theme: 'light' | 'dark';
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => (
  <div id="preloader" className={`preloader ${!isVisible ? 'hidden' : ''}`}>
    {/* Animación propia del preloader (zoom + fade elegante) */}
    <style>{`
      @keyframes metodikoZoom {
        0% {
          transform: scale(0.6);
          opacity: 0;
        }
        35% {
          transform: scale(1.08);
          opacity: 1;
        }
        70% {
          transform: scale(1.0);
          opacity: 1;
        }
        100% {
          transform: scale(1.0);
          opacity: 1;
        }
      }
    `}</style>

    <div className="preloader-content">
      <div
        className="flex items-center gap-4 text-brand-text"
        style={{
          animation: 'metodikoZoom 2.3s ease-out forwards',
        }}
      >
        {/* Logo más grande que el texto */}
        <Logo className="w-26 h-26" />
        <span className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
          METODIKO
        </span>
      </div>
    </div>
  </div>
);

export default Preloader;
