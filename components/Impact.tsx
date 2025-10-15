
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Impact = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <section id="impacto" className="py-20 bg-brand-bg">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text">El Valor Medible de la Transformación Digital</h2>
                    <p className="mt-4 text-lg text-brand-text-secondary max-w-2xl mx-auto">Más allá de la implementación, nos enfocamos en mover los indicadores que definen el éxito de su negocio.</p>
                    <div className="mt-4 w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
                </div>
                <div className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${isVisible ? 'stagger-children is-visible' : ''}`}>
                    <div className="card">
                        <p className="text-4xl lg:text-5xl font-extrabold text-brand-primary">OTIF</p>
                        <p className="mt-2 text-brand-text-secondary">Aumento de la <strong>Lealtad del Cliente</strong> a través de una cadena de suministro que cumple sus promesas. Menos costos, más satisfacción.</p>
                    </div>
                    <div className="card">
                        <p className="text-4xl lg:text-5xl font-extrabold text-brand-primary">CAC/LTV</p>
                        <p className="mt-2 text-brand-text-secondary">Impulso al <strong>Crecimiento Rentable</strong>. Optimizamos su motor comercial para adquirir clientes de alto valor a un costo sostenible.</p>
                    </div>
                    <div className="card">
                        <p className="text-4xl lg:text-5xl font-extrabold text-brand-primary">MTTR</p>
                        <p className="mt-2 text-brand-text-secondary">Fortalecimiento de la <strong>Resiliencia Operativa</strong>. Minimizamos el impacto de las interrupciones, protegiendo sus ingresos y la confianza del cliente.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
