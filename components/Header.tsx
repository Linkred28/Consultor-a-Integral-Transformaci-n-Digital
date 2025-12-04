import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { IconMoon, IconSun, IconMenu, IconClose } from "./Icons";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

/** Íconos sociales locales (sin lucide-react) */
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1s2.5 1.12 2.5 2.5zM.32 8.16h4.32V23H.32zM8.36 8.16h4.14v2.01h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V23h-4.32v-7.13c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V23H8.36z" />
  </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.5" />
  </svg>
);

const Header = ({ theme, onThemeToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId) return;
    const el = document.querySelector(targetId);
    if (el) {
      const headerEl = document.querySelector("header");
      const offset = headerEl ? (headerEl as HTMLElement).offsetHeight : 80;
      const top =
        (el as HTMLElement).getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-brand-bg/80 backdrop-blur-lg border-b border-hairline">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#gx-hero"
            onClick={handleNavClick}
            className="flex items-center gap-8 md:gap-11 lg:gap-11 text-brand-text hover:opacity-80 transition-opacity duration-300 -ml-6 md:-ml-10 lg:-ml-10"
          >
            {/* Logo ligeramente más grande sin cambiar la altura del header */}
            <Logo className="w-14 h-14 md:w-16 md:h-16 origin-left scale-[1.35] md:scale-[1.65]" />
            <span className="block text-sm md:text-base font-semibold leading-tight">
              Consultoría Integral + Transformación Digital
            </span>
          </a>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#gx-hero"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Nuestro Enfoque
              </a>
              <a
                href="#pilares-estrategicos"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Pilares
              </a>
              <a
                href="#servicios"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Beneficios
              </a>
              <a
                href="#impacto"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Impacto
              </a>
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
              >
                Contacto
              </a>
            </nav>

            {/* Íconos sociales desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/metodiko-m%C3%A9xico/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Metodiko en LinkedIn"
                className="flex items-center justify-center p-2 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              {/* Mail: abre correo a arely@metodiko.com.mx */}
              <a
                href="mailto:arely@metodiko.com.mx"
                aria-label="Contacto por correo"
                className="flex items-center justify-center p-2 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
              >
                <MailIcon className="w-5 h-5" />
              </a>

              <button
                type="button"
                aria-label="Metodiko en Instagram"
                className="flex items-center justify-center p-2 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={onThemeToggle}
              type="button"
              className="flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
              aria-label="Toggle light/dark theme"
            >
              {theme === "light" ? (
                <IconMoon className="w-5 h-5" />
              ) : (
                <IconSun className="w-5 h-5" />
              )}
            </button>

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

      {/* Modern Fullscreen Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? "open" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="container mx-auto px-6 h-full flex flex-col">
          {/* Top bar */}
          <div className="flex justify-between items-center py-4 flex-shrink-0">
            <a
              href="#gx-hero"
              onClick={handleMobileNavClick}
              className="flex items-center gap-7 text-brand-text -ml-6"
            >
              <Logo className="w-12 h-12 origin-left scale-[1.35]" />
              <span className="text-sm font-semibold leading-tight">
                Consultoría Integral +
                <br />
                Transformación Digital
              </span>
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

          {/* Navigation Links: vertical */}
          <nav className="mobile-nav-links flex-grow flex flex-col items-center justify-center gap-4 text-center">
            <span id="mobile-menu-title" className="sr-only">
              Menú Principal
            </span>
            <a
              href="#gx-hero"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Nuestro Enfoque
            </a>
            <a
              href="#pilares-estrategicos"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Pilares
            </a>
            <a
              href="#servicios"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Servicios
            </a>
            <a
              href="#beneficios"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Beneficios
            </a>
            <a
              href="#impacto"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Impacto
            </a>
            <a
              href="#contacto"
              onClick={handleMobileNavClick}
              className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary"
            >
              Contacto
            </a>
          </nav>

          {/* Íconos sociales mobile */}
          <div className="flex items-center justify-center gap-6 py-4 flex-shrink-0">
            <a
              href="https://www.linkedin.com/company/metodiko-m%C3%A9xico/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Metodiko en LinkedIn"
              className="flex items-center justify-center p-3 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>

            {/* Mail mobile: mismo correo */}
            <a
              href="mailto:arely@metodiko.com.mx"
              aria-label="Contacto por correo"
              className="flex items-center justify-center p-3 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <MailIcon className="w-6 h-6" />
            </a>

            <button
              type="button"
              aria-label="Metodiko en Instagram"
              className="flex items-center justify-center p-3 rounded-full text-brand-text-secondary hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <InstagramIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="py-8 text-center text-brand-text-secondary text-sm flex-shrink-0">
            <p>
              &copy; {new Date().getFullYear()} Metodiko. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
