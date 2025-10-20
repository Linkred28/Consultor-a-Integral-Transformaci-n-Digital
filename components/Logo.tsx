import React from 'react';

type Props = {
  className?: string;
  titleId: string;
};

/**
 * Isotipo en SVG con margen extra en el lienzo para evitar cualquier clipping.
 * - viewBox ampliado verticalmente
 * - contenido centrado con translate/scale
 * - svg como block + overflow-visible
 */
const Logo = ({ className, titleId }: Props) => (
  <svg
    className={`block overflow-visible ${className ?? ''}`}
    viewBox="0 -6 64 76"            // ↑ margen extra arriba y abajo (antes: 0 0 64 64)
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    preserveAspectRatio="xMidYMid meet"
  >
    <title id={titleId}>Logo de Consultoría Integral y Transformación Digital</title>

    {/* Centramos y dejamos aire interno adicional */}
    <g transform="translate(32 32) scale(0.88) translate(-32 -32)">
      {/* Estructura */}
      <g stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M56 32C56 18.745 45.255 8 32 8S8 18.745 8 32" strokeDasharray="4 4" opacity="0.7" />
        <path d="M8 32C8 45.255 18.745 56 32 56S56 45.255 56 32" strokeDasharray="4 4" opacity="0.3" />
        <path d="M39 17L51 24.5V39.5L39 47" />
        <path d="M25 47L13 39.5V24.5L25 17" />
        <path d="M32 21V14" />
        <path d="M21.5 40L17 44" />
        <path d="M42.5 40L47 44" />
      </g>

      {/* Acentos */}
      <g fill="var(--primary)">
        <path d="M32 25L37 32L32 39L27 32L32 25Z" stroke="var(--primary)" strokeWidth="1.5" />
        <circle cx="32" cy="14" r="2.5" />
        <circle cx="17" cy="44" r="2.5" />
        <circle cx="47" cy="44" r="2.5" />
        <circle cx="13" cy="24.5" r="1.5" opacity="0.8" />
        <circle cx="51" cy="39.5" r="1.5" opacity="0.8" />
      </g>
    </g>
  </svg>
);

export default Logo;

