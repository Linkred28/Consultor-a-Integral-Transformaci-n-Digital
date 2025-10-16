import React, { useState } from 'react';
import Typewriter from './Typewriter';
import { 
    IconPillarCertified, IconPillarModel, IconPillarGov, IconPillarChangeGov,
    IconPillarAutomation, IconPillarInnovation, IconPillarTools, IconPillarAI, 
    IconPillarCoaching, IconPillarTraining, IconPillarLabs
} from './Icons';

const pillarData = [
    {
        number: "1",
        title: "Consultoría Integral",
        description: "Diseñamos un roadmap transversal que alinea personas, procesos y gobierno corporativo. Diagnosticamos brechas, priorizamos iniciativas de alto impacto y acompañamos la ejecución para asegurar adopción y retorno.",
        features: [
            { icon: IconPillarModel, title: "Modelos operativos integrados", description: "Orquestamos áreas clave con indicadores compartidos para acelerar decisiones." },
            { icon: IconPillarGov, title: "Gobierno y riesgos", description: "Definimos políticas, controles y tableros que brindan visibilidad ejecutiva." }
        ]
    },
    {
        number: "2",
        title: "Transformación Digital",
        description: "Materializamos la visión estratégica en soluciones digitales escalables, asegurando adopción y evolución continua.",
        sideNote: {
            icon: IconPillarChangeGov,
            title: "Gobierno del cambio digital",
            description: "Acompañamos el despliegue con métricas de impacto y adopción por unidad de negocio."
        },
        features: [
            { icon: IconPillarAutomation, title: "Automatizaciones", description: "Digitalizamos flujos críticos para eliminar tareas repetitivas y asegurar trazabilidad." },
            { icon: IconPillarInnovation, title: "Innovación Tecnológica", description: "Introducimos plataformas y arquitecturas modernas alineadas a su estrategia de crecimiento." },
            { icon: IconPillarTools, title: "Herramientas Informáticas", description: "Seleccionamos y configuramos soluciones que integran datos, equipos y procesos end-to-end." },
            { icon: IconPillarAI, title: "Herramientas de IA", description: "Aplicamos IA para anticipar escenarios, optimizar operaciones y personalizar experiencias." }
        ]
    },
    {
        number: "3",
        title: "Formaciones",
        description: "Construimos una academia corporativa evolutiva que asegura el upgrade de capacidades, acompaña el cambio cultural y consolida la adopción de la transformación.",
        features: [
            { icon: IconPillarCoaching, title: "Coaching ejecutivo", description: "Mentoría estratégica para directivos y sponsors del cambio con foco en liderazgo digital y gobierno." },
            { icon: IconPillarTraining, title: "Entrenamiento de equipos", description: "Programas inmersivos que desarrollan nuevas formas de trabajo colaborativas y data-driven." },
            { icon: IconPillarLabs, title: "Laboratorios de adopción", description: "Workshops con casos reales que aceleran el dominio de IA, automatización y herramientas innovadoras." },
            { icon: IconPillarCertified, title: "Formación continua", description: "Planes de capacitación evolutivos que mantienen a los equipos actualizados en tecnologías emergentes y nuevas metodologías." }
        ]
    }
];

type Pillar = typeof pillarData[0];

const PillarContent = ({ pillar }: { pillar: Pillar }) => (
    <>
        <p className="text-xl text-brand-text-secondary leading-relaxed mb-8">{pillar.description}</p>
        
        {pillar.sideNote && pillar.number === '2' && (
             <div className="relative rounded-xl bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-transparent border border-brand-primary/25 dark:from-brand-primary/20 dark:via-brand-primary/10 p-6 shadow-sm mb-6">
                <div className="flex items-start gap-3">
                    <pillar.sideNote.icon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-base font-bold text-brand-text">{pillar.sideNote.title}</h4>
                        <p className="text-base text-brand-text-secondary leading-relaxed mt-1">{pillar.sideNote.description}</p>
                    </div>
                </div>
            </div>
        )}
        
        <div className={`grid gap-4 ${pillar.features.length > 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            {pillar.features.map(feature => (
                <div key={feature.title} className="pillar-feature-card">
                    <div className="pillar-feature-icon">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-brand-text">{feature.title}</h4>
                        <p className="text-base text-brand-text-secondary leading-relaxed mt-1">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {pillar.sideNote && pillar.number === '3' && (
            <div className="mt-8 flex justify-start">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-primary/15 to-brand-primary/10 dark:from-brand-primary/25 dark:to-brand-primary/15 border border-brand-primary/30 px-5 py-2.5 shadow-sm">
                    <pillar.sideNote.icon className="h-5 w-5 text-brand-primary" />
                    <span className="text-sm font-semibold text-brand-primary">{pillar.sideNote.title}</span>
                </div>
            </div>
        )}
    </>
);


const Pillars = () => {
    const [activePillar, setActivePillar] = useState(pillarData[0].number);

    const handleSetPillar = (pillarId: string) => {
        setActivePillar(pillarId);
    };
    
    return (
        <section id="pilares-estrategicos" className="relative bg-brand-bg-secondary dark:bg-[#050608] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 dark:from-black/50 dark:via-[#050608] dark:to-black/50"></div>
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(13,51,88,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(13,51,88,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 py-32">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-brand-primary/[0.08] border border-brand-primary/20">
                            <span className="uppercase tracking-[0.25em] text-[14px] sm:text-[20px] font-bold text-brand-primary">Nuestro acompañamiento</span>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
                    </div>
                    <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-brand-text leading-[1.1] tracking-tight mb-8">
                        Pilares que alinean la consultoría integral<br />
                        <span className="text-brand-primary">con la transformación digital</span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                       <Typewriter text="Combinamos estrategia, operaciones y tecnología para entregar resultados visibles desde el diagnóstico hasta la ejecución continua." />
                    </div>
                </div>

                {/* Mobile Layout: Stacked */}
                <div className="md:hidden">
                    {pillarData.map(pillar => (
                        <div key={pillar.number} className="mb-12">
                            <div className="pillar-nav-item active">
                                <div className="pillar-nav-content">
                                    <div className="pillar-nav-badge">{pillar.number}</div>
                                    <h3 className="pillar-nav-title">{pillar.title}</h3>
                                </div>
                            </div>
                            <div className="pillar-content-pane active">
                                <PillarContent pillar={pillar} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Layout: Static Showcase */}
                <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-16 lg:gap-24 items-start">
                    <div className="col-span-1 flex flex-col justify-center space-y-4">
                        {pillarData.map(pillar => (
                            <div key={pillar.number} 
                                className={`pillar-nav-item ${activePillar === pillar.number ? 'active' : ''}`}
                                onClick={() => handleSetPillar(pillar.number)}
                                onMouseEnter={() => handleSetPillar(pillar.number)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSetPillar(pillar.number)}
                            >
                                <div className="pillar-nav-content">
                                    <div className="pillar-nav-badge">{pillar.number}</div>
                                    <h3 className="pillar-nav-title">{pillar.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-2 pillar-content-wrapper">
                        {pillarData.map(pillar => (
                            <div key={pillar.number} className={`pillar-content-pane ${activePillar === pillar.number ? 'active' : ''}`}>
                                <PillarContent pillar={pillar} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;