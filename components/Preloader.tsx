import React from 'react';
import Logo from './Logo';

const Preloader = ({ isVisible, theme }: { isVisible: boolean; theme: 'light' | 'dark' }) => (
  <div id="preloader" className={`preloader ${!isVisible ? 'hidden' : ''}`}>
    <div className="preloader-content">
      <div className="flex items-center gap-3 text-brand-text">
        <Logo className="w-16 h-16" theme={theme} />
        <span className="text-2xl font-bold">Metodiko</span>
      </div>
    </div>
  </div>
);

export default Preloader;