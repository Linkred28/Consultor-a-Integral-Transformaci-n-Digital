import React, { useRef, useState } from 'react';
import Teleprompter from './Teleprompter';
import { teleprompterTexts } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Cta = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});
    // FIX: The `React.CSSProperties` type does not include CSS custom properties by default.
    // This change extends the type to allow for `--mouse-x` and `--mouse-y`, which are used for the glow effect.
    const [glowStyle, setGlowStyle] = useState<React.CSSProperties & { '--mouse-x'?: string; '--mouse-y'?: string }>({});
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.2, triggerOnce: true });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = (y / height - 0.5) * -15; // Max 7.5 deg rotation
        const rotateY = (x / width - 0.5) * 15;   // Max 7.5 deg rotation

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: 'transform 0.1s linear'
        });
        
        setGlowStyle({
            '--mouse-x': `${x}px`,
            '--mouse-y': `${y}px`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
        });
        setGlowStyle({});
    };

    return (
        <section 
            id="contacto" 
            ref={ref}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="relative z-10 container mx-auto px-6 text-center stagger-children">
                <h2 className="cta-title">
                    El verdadero riesgo es no evolucionar.
                </h2>
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={style}
                    className="frosted-card max-w-4xl mx-auto"
                >
                    <div style={glowStyle} className="glow" aria-hidden="true"></div>
                    <div className="text-xl sm:text-2xl leading-relaxed text-brand-text p-6 text-left md:text-center md:max-w-[65ch] mx-auto md:h-20 md:flex md:items-center md:justify-center md:p-4" aria-live="polite">
                        <Teleprompter texts={teleprompterTexts} />
                    </div>
                </div>

                <p className="mt-8 text-lg text-slate-300">
                    Queremos entender su negocio antes de transformarlo. Inicie la conversación con nuestro equipo en{' '}
                    <a 
                        href="mailto:contacto@metodiko.com.mx" 
                        className="font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-300 hover:underline underline-offset-4"
                        title="Enviar un correo a metodiko.com.mx"
                    >
                        metodiko.com.mx
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Cta;