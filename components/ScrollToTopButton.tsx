import React, { useState, useEffect } from 'react';
import { IconArrowUp } from './Icons';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="scroll-to-top-btn button"
            aria-label="Volver al inicio"
            // Separación clara respecto al chat flotante (vertical y horizontal)
            // Ajusta los valores si quieres moverlo un poco más.
            style={{
                position: 'fixed',
                bottom: '8rem',  // más arriba del chat
                right: '6rem',   // más hacia adentro, lejos del chat
                zIndex: 40
            }}
        >
            <IconArrowUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;
