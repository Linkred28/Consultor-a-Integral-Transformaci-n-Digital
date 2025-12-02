import React, { useState, useEffect } from 'react';
import { IconArrowUp } from './Icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      // Usamos SOLO Tailwind para posicionar (nada de .scroll-to-top-btn)
      className={`
        button
        fixed
        z-50
        bottom-8 left-4
        md:bottom-10 md:left-6
      `}
    >
      <IconArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
