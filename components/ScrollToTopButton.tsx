import React, { useState, useEffect } from 'react';
import { IconArrowUp } from './Icons';

const ScrollToTopButton = () => {
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
      className={`scroll-to-top-btn button ${isVisible ? 'visible' : ''}`}
      aria-label="Volver al inicio"
    >
      <IconArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;