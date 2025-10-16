import React from 'react';
import Logo from './Logo';
import { IconMoon, IconSun } from './Icons';

interface HeaderProps {
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
}

const Header = ({ theme, onThemeToggle }: HeaderProps) => {

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

    return (
        <header className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur-lg border-b border-hairline">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#gx-hero" onClick={handleNavClick} className="flex items-center gap-3 text-brand-text hover:opacity-80 transition-opacity duration-300">
                    <Logo className="w-8 h-8" titleId="logoTitle" />
                    <span className="hidden sm:inline text-xl font-bold">Consultoría Integral + Transformación Digital</span>
                </a>
                <div className="flex items-center space-x-4">
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
                </div>
            </div>
        </header>
    );
};

export default Header;