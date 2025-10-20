import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
    IconProcessFragmented, IconInfoUnreliable, IconLateDecisions, 
    IconTraceability, IconMobileClarity, IconShieldCheck,
    IconGlobeAnticipate, IconLightning, IconGrowth 
} from './Icons';

// FIX: Defined props interface for StepCard to ensure type safety and proper component typing.
interface StepCardProps {
    number: string;
    title: string;
    description: React.ReactNode;
    items: {
        icon: React.ComponentType<{ className?: string }>;
        text: React.ReactNode;
    }[];
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, items }) => (
    <div>
        <div className="flex items-baseline">
            <span className="text-8xl font-extrabold text-brand-primary leading-none">{number}</span>
            <h3 className="ml-4 text-3xl font-bold text-brand-text">{title}</h3>
        </div>
        <div className="mt-6 glow-border-card p-6">
            <p className="text-brand-text-secondary text-base">
                {description}
            </p>
            <ul className="mt-4 space-y-3 text-brand-text-secondary text-base">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <item.icon className="flex-shrink-0 h-6 w-6 text-brand-primary mr-3 mt-1" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Hero = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    
    const steps: StepCardProps[] = [
        {
            number: '01',
            title: 'Dilema Actual',
            description: 'Hoy, las empresas líderes enfrentan un dilema que frena su crecimiento y agilidad:',
            items: [
                { icon: IconProcessFragmented, text: <><strong className="font-semibold text-brand-primary">Procesos fragmentados</strong> que generan ineficiencia y costos ocultos.</> },
                { icon: IconInfoUnreliable, text: <><strong className="font-semibold text-brand-primary">Información poco confiable</strong> que lleva a malas decisiones estratégicas.</> },
                { icon: IconLateDecisions, text: <><strong className="font-semibold text-brand-primary">Decisiones que llegan tarde</strong> en un entorno de alta velocidad competitiva.</> },
            ]
        },
        {
            number: '02',
            title: 'Visión Integrada',
            description: 'Al integrar finanzas, operaciones y talento bajo una visión digital, su organización obtiene:',
            items: [
                { icon: IconTraceability, text: <><strong className="font-semibold text-brand-primary">Trazabilidad total</strong> para un control absoluto de extremo a extremo.</> },
                { icon: IconMobileClarity, text: <><strong className="font-semibold text-brand-primary">Decisiones basadas en datos</strong> que son 100% confiables y oportunos.</> },
                { icon: IconShieldCheck, text: <><strong className="font-semibold text-brand-primary">Capacidad de anticiparse</strong> a los riesgos operativos y de mercado.</> },
            ]
        },
        {
            number: '03',
            title: 'Salto Estratégico',
            description: <>Es el momento de pasar del control operativo al <strong className="font-semibold text-brand-primary">gobierno empresarial con visión digital</strong>, logrando:</>,
            items: [
                { icon: IconGlobeAnticipate, text: <><strong className="font-semibold text-brand-primary">Más foco,</strong> alineando cada acción a la estrategia corporativa.</> },
                { icon: IconLightning, text: <><strong className="font-semibold text-brand-primary">Más velocidad</strong> para acelerar la ejecución y la toma de decisiones.</> },
                { icon: IconGrowth, text: <><strong className="font-semibold text-brand-primary">Mayor impacto</strong> directo en los resultados y la rentabilidad del negocio.</> },
            ]
        }
    ];

    return (
        <section id="gx-hero" className="pt-10 md:pt-14 pb-16 md:pb-24">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-brand-primary/[0.08] border border-brand-primary/20 mb-3">
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Nuestro Enfoque</h1>
                    </div>
                    <p className="text-xl md:text-2xl text-brand-text-secondary">
                        Reestructuración, Normalización y Estandarización de procesos de forma transversal en todos los sectores del negocio
                    </p>
                </div>

                <h2 className="mt-12 text-3xl md:text-4xl font-bold text-brand-text text-center">
                    Cómo encaramos tu negocio
                </h2>

                <div
                    ref={ref}
                    className={`max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 fade-in-section ${isVisible ? 'is-visible stagger-children' : ''}`}
                >
                   {steps.map(step => <StepCard key={step.number} {...step} />)}
                </div>
            </div>
        </section>
    );
};

export default Hero;
