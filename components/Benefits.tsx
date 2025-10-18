import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IconExpand, IconLightning, IconShieldCheck, IconGrowth } from './Icons';

// FIX: Defined props interface for BenefitCard to ensure type safety and proper component typing.
interface BenefitCardProps {
    icon: React.ComponentType<{className?: string}>;
    title: string;
    description: string;
}

const benefitData: BenefitCardProps[] = [
    {
        icon: IconExpand,
        title: "Decisiones Basadas en Datos",
        description: "Tome decisiones estratégicas más rápidas con información confiable y tableros ejecutivos en tiempo real."
    },
    {
        icon: IconLightning,
        title: "Eficiencia Operativa",
        description: "Automatice procesos, elimine errores manuales y obtenga trazabilidad de extremo a extremo en sus operaciones."
    },
    {
        icon: IconShieldCheck,
        title: "Reducción de Riesgos",
        description: "Anticipe desviaciones y fortalezca la seguridad con visibilidad temprana de riesgos y políticas claras de gobernanza."
    },
    {
        icon: IconGrowth,
        title: "Crecimiento Escalable",
        description: "Construya una base tecnológica y comercial que soporte su crecimiento futuro sin fricciones."
    }
];

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
    <div className="benefit-card">
        <div className="benefit-icon">
            <Icon />
        </div>
        <h3 className="text-xl font-semibold text-brand-text mb-2">{title}</h3>
        <p className="text-brand-text-secondary">{description}</p>
    </div>
);


const Benefits = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <section id="beneficios" className="py-20 bg-brand-bg-secondary">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-primary/[0.08] border border-brand-primary/20 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Beneficios Estratégicos para tu Negocio</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-brand-text-secondary max-w-4xl mx-auto">Más allá de la tecnología, generamos un impacto tangible en las áreas críticas de su negocio.</p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'stagger-children is-visible' : ''}`}>
                    {benefitData.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;