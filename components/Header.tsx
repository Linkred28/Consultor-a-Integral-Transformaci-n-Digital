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
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerEl = document.querySelector('header');
      const headerOffset = headerEl ? headerEl.offsetHeight : 80;
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
      <header className="sticky top-0 z-30 bg-brand-bg/80 backdrop-blur-lg border-b border-hairline">
        {/* ↓↓ más fino: menos padding vertical */}
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a
            href="#gx-hero"
            onClick={handleNavClick}
            className="flex items-center gap-3 text-brand-text hover:opacity-80 transition-opacity duration-300"
          >
            {/* ↓↓ wrapper con aire para que el PNG NO se corte */}
            <div className="brand-logo pt-[1px] pb-[6px] flex items-center">
              <img
                src={theme === 'light' ? '/METODIKO fondo claro2.png' : '/METODIKO fondo obscuro.png'}
                alt="METODIKO"
                /* ↓↓ un poco más pequeño en altura total */
                className="block h-12 sm:h-14 w-auto object-contain"
                decoding="async"
              />
            </div>
            <span className="text-[0.95rem] sm:text-[1.05rem] font-bold leading-none whitespace-nowrap">
              Consultoría Integral + Transformación Digital
            </span>
          </a>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#gx-hero" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                Nuestro Enfoque
              </a>
              <a href="#pilares-estrategicos" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                Pilares
              </a>
              <a href="#servicios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                Servicios
              </a>
              <a href="#beneficios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                Beneficios
              </a>
              <a href="#impacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duración-200">
                Impacto
              </a>
              <a href="#contacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">
                Comenzar
              </a>
            </nav>

            <button
              onClick={onThemeToggle}
              type="button"
              className="flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
              aria-label="Toggle light/dark theme"
            >
              {theme === 'light' ? <IconMoon className="w-5 h-5" /> : <IconSun className="w-5 h-5" />}
            </button>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              type="button"
              className="md:hidden flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <IconMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
            <div className="flex justify-between items-center mb-10">
              <a
                href="#gx-hero"
                onClick={handleMobileNavClick}
                className="flex items-center text-brand-text hover:opacity-80 transition-opacity duration-300"
              >
                <div className="brand-logo pt-[1px] pb-[6px] flex items-center">
                  <img
                    src={theme === 'light' ? '/METODIKO fondo claro2.png' : '/METODIKO fondo obscuro.png'}
                    alt="METODIKO"
                    className="block h-12 w-auto object-contain"
                    decoding="async"
                  />
                </div>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                type="button"
                className="flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 -mr-2 rounded-full hover:bg-muted"
                aria-label="Close navigation menu"
              >
                <IconClose className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <span id="mobile-menu-title" className="sr-only">Menú Principal</span>
              <a href="#gx-hero" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Nuestro Enfoque</a>
              <a href="#pilares-estrategicos" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Pilares</a>
              <a href="#servicios" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Servicios</a>
              <a href="#beneficios" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Beneficios</a>
              <a href="#impacto" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Impacto</a>
              <a href="#contacto" onClick={handleMobileNavClick} className="text-xl font-semibold text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Comenzar</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;