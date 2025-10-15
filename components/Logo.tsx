
import React from 'react';

const Logo = ({ className, titleId }: { className?: string, titleId: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby={titleId}>
    <title id={titleId}>Logo de Consultoría Integral + Transformación Digital</title>
    <defs>
      <linearGradient id={`${titleId}-gradient`} x1="8" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--primary)"></stop>
        <stop offset="50%" stopColor="var(--brand-secondary)"></stop>
        <stop offset="100%" stopColor="var(--primary)"></stop>
      </linearGradient>
      <linearGradient id={`${titleId}-orbit`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--brand-secondary)"></stop>
        <stop offset="100%" stopColor="var(--primary)"></stop>
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="13" stroke={`url(#${titleId}-orbit)`} strokeWidth="1.8" opacity="0.9"></circle>
    <circle cx="16" cy="16" r="9.5" stroke="var(--primary)" strokeWidth="1.1" strokeDasharray="4 3" opacity="0.35"></circle>
    <path d="M8.6 14.8c2.4-4.5 8.6-6.6 13.4-4.7 1.7 0.7 3 1.7 4.1 3" stroke={`url(#${titleId}-orbit)`} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"></path>
    <path d="M23.2 20.6c-2.2 2.8-6 4.7-9.6 4.1-2.3-0.4-4.3-1.8-5.7-3.6" stroke={`url(#${titleId}-orbit)`} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"></path>
    <path d="M16 10.5L21.2 16L16 21.5L10.8 16L16 10.5Z" fill={`url(#${titleId}-gradient)`} stroke="var(--brand-bg)" strokeWidth="0.7"></path>
    <path d="M16 12.8V16M16 16l2.4 2.4M16 16l-2.4 2.4" stroke="var(--bg)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"></path>
    <circle cx="10.8" cy="16" r="1.3" fill="var(--bg)" stroke={`url(#${titleId}-gradient)`} strokeWidth="0.8"></circle>
    <circle cx="21.2" cy="16" r="1.3" fill="var(--bg)" stroke={`url(#${titleId}-gradient)`} strokeWidth="0.8"></circle>
    <circle cx="16" cy="10.5" r="1.3" fill="var(--bg)" stroke={`url(#${titleId}-gradient)`} strokeWidth="0.8"></circle>
    <circle cx="16" cy="21.5" r="1.3" fill="var(--bg)" stroke={`url(#${titleId}-gradient)`} strokeWidth="0.8"></circle>
    <circle cx="25.4" cy="11.6" r="1.4" fill={`url(#${titleId}-gradient)`}></circle>
    <circle cx="19.3" cy="25" r="1.1" fill={`url(#${titleId}-gradient)`} opacity="0.8"></circle>
    <circle cx="8.3" cy="21.4" r="1" fill={`url(#${titleId}-gradient)`} opacity="0.7"></circle>
  </svg>
);

export default Logo;
