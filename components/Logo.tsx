import React from 'react';

const Logo = ({ className, theme }: { className?: string; theme: 'light' | 'dark' }) => {
  const logoSrc = theme === 'dark' ? '/metodiko-logo-dark.png' : '/metodiko-logo-light.png';

  return (
    <img 
      src={logoSrc} 
      alt="Logo de Metodiko Consultoría Integral y Transformación Digital" 
      className={className}
    />
  );
};

export default Logo;