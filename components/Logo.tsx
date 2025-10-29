import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 354 221"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Metodiko Logo"
    role="img"
  >
    {/* The 'M' icon, built from two symmetrical, overlapping shapes. Centered via transform. */}
    <g transform="translate(88.5, 0)">
      {/* Dark teal part of the M (left side) */}
      <path
        d="M0 108 L0 0 L88.5 88.5 L44.25 88.5 L0 44.25Z"
        fill="#0A505F"
      />
      {/* Light teal part of the M (right side) - created by mirroring the left part */}
      <path
        d="M88.5 108 L88.5 0 L0 88.5 L44.25 88.5 L88.5 44.25Z"
        fill="#32A39A"
        transform="translate(177, 0) scale(-1, 1)"
      />
    </g>
    {/* The text "METODIKO" */}
    <text
      x="177"
      y="200"
      fontFamily="Montserrat, sans-serif"
      fontSize="58"
      fontWeight="700"
      fill="#32A39A"
      textAnchor="middle"
      letterSpacing="1"
    >
      METODIKO
    </text>
  </svg>
);

export default Logo;
