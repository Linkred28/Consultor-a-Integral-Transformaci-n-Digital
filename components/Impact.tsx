

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IconImpactROI, IconImpactFODA, IconImpactKPIs } from './Icons';

const Impact = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <section id="impacto" className="py-20 bg-brand-bg">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="text-center mb-12">
                    <div className="section-title-container">
                        <h2 className="text-3xl md:text-4xl font-bold">Impacto con Propósito de Negocio</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-brand-text-secondary max-w-4xl mx-auto">Traducimos la estrategia en indicadores que impulsan rentabilidad, eficiencia y crecimiento sostenible</p>
                </div>
                <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${isVisible ? 'stagger-children is-visible' : ''}`}>
                    <div className="impact-card">
                        <IconImpactROI className="impact-icon w-12 h-12 mx-auto" />
                        <p className="text-2xl font-bold text-brand-primary">ROI</p>
                        <h3 className="text-lg font-semibold text-brand-text mt-2 mb-3">Rentabilidad Estratégica</h3>
                        <p className="text-brand-text-secondary">Medimos el <strong className="font-semibold text-brand-primary">retorno</strong> de cada inversión y transformamos los resultados financieros en <strong className="font-semibold text-brand-primary">conocimiento accionable</strong>. Cada decisión debe generar <strong className="font-semibold text-brand-primary">valor</strong>, no solo costo.</p>
                    </div>
                    <div className="impact-card">
                        <IconImpactFODA className="impact-icon w-12 h-12 mx-auto" />
                        <p className="text-2xl font-bold text-brand-primary">FODA</p>
                        <h3 className="text-lg font-semibold text-brand-text mt-2 mb-3">Visión Analítica</h3>
                        <p className="text-brand-text-secondary">Convertimos el análisis FODA en una herramienta dinámica que <strong className="font-semibold text-brand-primary">anticipa riesgos</strong>, <strong className="font-semibold text-brand-primary">potencia fortalezas</strong> y <strong className="font-semibold text-brand-primary">orienta la toma de decisiones</strong>. Prevención, enfoque y respuesta ágil.</p>
                    </div>
                    <div className="impact-card">
                        <IconImpactKPIs className="impact-icon w-12 h-12 mx-auto" />
                        <p className="text-2xl font-bold text-brand-primary">KPIs</p>
                        <h3 className="text-lg font-semibold text-brand-text mt-2 mb-3">Gobierno de Desempeño</h3>
                        <p className="text-brand-text-secondary">Diseñamos y monitoreamos indicadores que <strong className="font-semibold text-brand-primary">conectan la visión con la ejecución</strong>, asegurando <strong className="font-semibold text-brand-primary">foco, trazabilidad y crecimiento sostenido</strong>. Lo que se mide, evoluciona.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;