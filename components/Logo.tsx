import React from 'react';

const Logo = ({ className, titleId }: { className?: string, titleId: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby={titleId}>
    <title id={titleId}>Logo de Consultoría Integral y Transformación Digital</title>
    
    {/* 
      Este nuevo diseño, "El Núcleo Catalizador", aborda directamente el feedback:
      1. Estética Tecnológica: Utiliza líneas nítidas, geometría precisa y una composición que evoca un núcleo digital, circuitos y flujos de datos. Se elimina cualquier similitud con formas orgánicas o de "pan".
      2. Visibilidad en Modo Oscuro: El color principal del logo es `var(--text)`, que se traduce a blanco en modo oscuro, garantizando máximo contraste. Los acentos usan `var(--primary)`, que en modo oscuro es un azul brillante y visible.
    */}

    {/* Elementos Estructurales Principales - Usan var(--text) para visibilidad */}
    <g stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      
      {/* Órbita Exterior Discontinua - Evoca un escáner o HUD */}
      <path d="M56 32C56 18.745 45.255 8 32 8S8 18.745 8 32" strokeDasharray="4 4" opacity="0.7" />
      <path d="M8 32C8 45.255 18.745 56 32 56S56 45.255 56 32" strokeDasharray="4 4" opacity="0.3" />

      {/* Núcleo Central Hexagonal Abierto (Letra C estilizada) */}
      <path d="M39 17L51 24.5V39.5L39 47" />
      <path d="M25 47L13 39.5V24.5L25 17" />
      
      {/* Conexiones del núcleo a la órbita interior */}
      <path d="M32 21V14" />
      <path d="M21.5 40L17 44" />
      <path d="M42.5 40L47 44" />
    </g>

    {/* Acentos y Nodos - Usan var(--primary) para color de marca */}
    <g fill="var(--primary)">
      {/* Catalizador Central */}
      <path d="M32 25L37 32L32 39L27 32L32 25Z" stroke="var(--primary)" strokeWidth="1.5" />
      
      {/* Nodos en las órbitas */}
      <circle cx="32" cy="14" r="2.5" />
      <circle cx="17" cy="44" r="2.5" />
      <circle cx="47" cy="44" r="2.5" />

      {/* Pequeños puntos de datos para dinamismo */}
      <circle cx="13" cy="24.5" r="1.5" opacity="0.8" />
      <circle cx="51" cy="39.5" r="1.5" opacity="0.8" />
    </g>

  </svg>
);

export default Logo;