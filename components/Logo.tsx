import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <img
    src="/logo.png"
    alt="Metodiko Logo"
    className={className}
  />
);

export default Logo;
