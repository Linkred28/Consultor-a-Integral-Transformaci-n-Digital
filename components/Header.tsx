import React, { useState, useEffect } from 'react';
import { IconMoon, IconSun, IconMenu, IconClose } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Header = ({ theme, onThemeToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerEl = document.querySelector('header');
      const headerOffset = headerEl ? (headerEl as HTMLElement).offsetHeight : 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER COMPACTO */}
      <header className="sticky top-0 z-30 bg-brand-bg/80 backdrop-blur border-b border-hairline">
        {/* Alto fijo, sin padding vertical */}
        <div className="container mx-auto px-4 h-[56px] md:h-[60px] flex items-center justify-between">
          {/* Marca */}
          <a
            href="#gx-hero"
            onClick={handleNavClick}
            className="flex items-center gap-3 overflow-hidden"
          >
            <img
              src={theme === 'light' ? '/METODIKO fondo claro2.png' : '/METODIKO fondo obscuro.png'}
              alt="METODIKO"
              className="block h-[40px] md:h-[44px] w-auto object-contain"
              decoding="async"
            />
            {/* título en una sola línea, sin envolver */}
            <span className="hidden sm:block text-sm md:text-base font-bold leading-none whitespace-nowrap">
              Consultoría Integral + Transformación Digital
            </span>
          </a>

          {/* Navegación + controles */}
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:flex items-center gap-5 text-sm leading-none">
              <a href="#gx-hero" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Nuestro Enfoque</a>
              <a href="#pilares-estrategicos" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Pilares</a>
              <a href="#servicios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Servicios</a>
              <a href="#beneficios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Beneficios</a>
              <a href="#impacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Impacto</a>
              <a href="#contacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Comenzar</a>
            </nav>

            {/* Toggle tema (iconos compactos) */}
            <button
              onClick={onThemeToggle}
              type="button"
              className="flex items-center justify-center p-1.5 rounded-full hover:bg-muted text-brand-text-secondary hover:text-brand-primary transition-colors"
              aria-label="Toggle light/dark theme"
            >
              {theme === 'light' ? <IconMoon className="w-4 h-4" /> : <IconSun className="w-4 h-4" />}
            </button>

            {/* Hamburguesa móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              type="button"
              className="md:hidden flex items-center justify-center p-1.5 rounded-full hover:bg-muted text-brand-text-secondary hover:text-brand-primary transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-brand-bg/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          id="mobile-menu"
          className={`relative z-50 w-full max-w-sm h-full bg-brand-bg-secondary shadow-2xl ml-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <a
                href="#gx-hero"
                onClick={handleMobileNavClick}
                className="flex items-center"
              >
                <img
                  src={theme === 'light' ? '/METODIKO fondo claro2.png' : '/METODIKO fondo obscuro.png'}
                  alt="METODIKO"
                  className="block h-10 w-auto object-contain"
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                type="button"
                className="flex items-center justify-center p-1.5 rounded-full hover:bg-muted text-brand-text-secondary hover:text-brand-primary transition-colors"
                aria-label="Close navigation menu"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-5 text-lg">
              <span id="mobile-menu-title" className="sr-only">Menú Principal</span>
              <a href="#gx-hero" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Nuestro Enfoque</a>
              <a href="#pilares-estrategicos" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Pilares</a>
              <a href="#servicios" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Servicios</a>
              <a href="#beneficios" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Beneficios</a>
              <a href="#impacto" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Impacto</a>
              <a href="#contacto" onClick={handleMobileNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors">Comenzar</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
