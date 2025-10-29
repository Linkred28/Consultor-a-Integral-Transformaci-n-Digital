import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <img 
    src="/metodiko-logo-nobg.png" 
    alt="Metodiko Logo" 
    className={className}
  />
);

export default Logo;