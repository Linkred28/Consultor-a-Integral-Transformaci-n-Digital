import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { IconMoon, IconSun, IconMenu, IconClose } from './Icons';

interface HeaderProps {
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
}

const Header = ({ theme, onThemeToggle }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
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
            const headerOffset = headerEl ? headerEl.offsetHeight : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
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
                    <a href="#gx-hero" onClick={handleNavClick} className="flex items-center gap-2 md:gap-3 text-brand-text hover:opacity-80 transition-opacity duration-300">
                        <Logo className="w-10 h-10 md:w-12 md:h-12" />
                        <span className="block text-sm md:text-base font-semibold leading-tight">Consultoría Integral + Transformación Digital</span>
                    </a>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#gx-hero" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Nuestro Enfoque</a>
                            <a href="#pilares-estrategicos" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Pilares</a>
                            <a href="#servicios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Servicios</a>
                            <a href="#beneficios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Beneficios</a>
                            <a href="#impacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Impacto</a>
                            <a href="#contacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Comenzar</a>
                        </nav>
                        <button onClick={onThemeToggle} type="button" className="flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted" aria-label="Toggle light/dark theme">
                            {theme === 'light' ? <IconMoon className="w-5 h-5" /> : <IconSun className="w-5 h-5" />}
                        </button>
                        {/* Hamburger Menu Button */}
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
                className={`mobile-menu-overlay fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
            >
                <div className="container mx-auto px-6 h-full flex flex-col">
                    {/* Top bar */}
                    <div className="flex justify-between items-center py-4 flex-shrink-0">
                        <a href="#gx-hero" onClick={handleMobileNavClick} className="flex items-center gap-3 text-brand-text">
                            <Logo className="w-10 h-10" />
                            <span className="text-sm font-semibold leading-tight">Consultoría Integral +<br/>Transformación Digital</span>
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

                    {/* Navigation Links */}
                    <nav className="mobile-nav-links flex-grow flex flex-col items-center justify-center gap-4 text-center">
                        <span id="mobile-menu-title" className="sr-only">Menú Principal</span>
                        <a href="#gx-hero" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Nuestro Enfoque</a>
                        <a href="#pilares-estrategicos" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Pilares</a>
                        <a href="#servicios" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Servicios</a>
                        <a href="#beneficios" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Beneficios</a>
                        <a href="#impacto" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Impacto</a>
                        <a href="#contacto" onClick={handleMobileNavClick} className="mobile-nav-link text-3xl font-bold text-brand-text hover:text-brand-primary">Comenzar</a>
                    </nav>
                    
                    {/* Footer area */}
                    <div className="py-8 text-center text-brand-text-secondary text-sm flex-shrink-0">
                        <p>&copy; {new Date().getFullYear()} Metodiko. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;