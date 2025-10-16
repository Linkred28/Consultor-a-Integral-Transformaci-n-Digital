import React from 'react';

const Logo = ({ className, titleId }: { className?: string, titleId: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby={titleId}>
    <title id={titleId}>Logo de Consultoría Integral y Transformación Digital</title>

    {/*
      "DIGITAL TRANSFORMATION CORE"
      Concepto: Una esfera de transformación digital con elementos que representan:
      - Círculo completo = Consultoría INTEGRAL (360°)
      - Flechas de evolución = TRANSFORMACIÓN constante
      - Nodos conectados = Ecosistema DIGITAL
      - Gradientes vibrantes = Innovación e IMPACTO

      Diseño memorable, moderno y tecnológico que representa evolución digital completa.
    */}

    <defs>
      {/* Gradiente vibrante para impacto visual */}
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>

      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>

    {/* Círculo exterior - Representa INTEGRAL (completo, 360°) */}
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="url(#primaryGradient)"
      strokeWidth="2.5"
      opacity="0.3"
    />

    {/* Anillos orbitales con gaps - Representa TRANSFORMACIÓN en movimiento */}
    <g stroke="url(#primaryGradient)" strokeWidth="2" strokeLinecap="round">
      <path
        d="M 50 32 A 18 18 0 0 1 32 50"
        opacity="0.8"
      />
      <path
        d="M 32 50 A 18 18 0 0 1 14 32"
        opacity="0.6"
      />
      <path
        d="M 14 32 A 18 18 0 0 1 32 14"
        opacity="0.8"
      />
      <path
        d="M 32 14 A 18 18 0 0 1 50 32"
        opacity="0.6"
      />
    </g>

    {/* Núcleo central - Hexágono que representa estructura sólida */}
    <path
      d="M 32 20 L 40 25 L 40 35 L 32 40 L 24 35 L 24 25 Z"
      fill="none"
      stroke="url(#accentGradient)"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* Flechas de transformación saliendo del núcleo */}
    <g fill="url(#primaryGradient)">
      {/* Flecha superior - Crecimiento */}
      <path d="M 32 20 L 29 16 L 32 12 L 35 16 Z" />

      {/* Flecha derecha - Expansión */}
      <path d="M 40 30 L 44 27 L 48 30 L 44 33 Z" />

      {/* Flecha inferior - Profundidad */}
      <path d="M 32 40 L 29 44 L 32 48 L 35 44 Z" />

      {/* Flecha izquierda - Integración */}
      <path d="M 24 30 L 20 27 L 16 30 L 20 33 Z" />
    </g>

    {/* Nodos de conexión digital - Representa ecosistema conectado */}
    <g>
      <circle cx="32" cy="12" r="2.5" fill="#0EA5E9" opacity="0.9" />
      <circle cx="48" cy="30" r="2.5" fill="#06B6D4" opacity="0.9" />
      <circle cx="32" cy="48" r="2.5" fill="#0EA5E9" opacity="0.9" />
      <circle cx="16" cy="30" r="2.5" fill="#06B6D4" opacity="0.9" />

      {/* Nodos secundarios */}
      <circle cx="43" cy="19" r="1.8" fill="#0EA5E9" opacity="0.7" />
      <circle cx="43" cy="41" r="1.8" fill="#06B6D4" opacity="0.7" />
      <circle cx="21" cy="41" r="1.8" fill="#0EA5E9" opacity="0.7" />
      <circle cx="21" cy="19" r="1.8" fill="#06B6D4" opacity="0.7" />
    </g>

    {/* Conexiones sutiles entre nodos - Red digital */}
    <g stroke="#0EA5E9" strokeWidth="1" opacity="0.15" strokeLinecap="round">
      <line x1="32" y1="12" x2="43" y2="19" />
      <line x1="43" y1="19" x2="48" y2="30" />
      <line x1="48" y1="30" x2="43" y2="41" />
      <line x1="43" y1="41" x2="32" y2="48" />
      <line x1="32" y1="48" x2="21" y2="41" />
      <line x1="21" y1="41" x2="16" y2="30" />
      <line x1="16" y1="30" x2="21" y2="19" />
      <line x1="21" y1="19" x2="32" y2="12" />
    </g>

    {/* Punto central brillante - El core de la transformación */}
    <circle cx="32" cy="30" r="3" fill="#06B6D4" opacity="0.9" />
    <circle cx="32" cy="30" r="1.5" fill="#fff" opacity="0.9" />

  </svg>
);

export default Logo;