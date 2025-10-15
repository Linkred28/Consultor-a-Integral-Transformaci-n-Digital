import React from 'react';
import Typewriter from './Typewriter';
import { IconTickerCheck } from './Icons';

const Pillars = () => {
    return (
        <section id="pilares-estrategicos" className="relative py-32 bg-brand-bg-secondary dark:bg-[#050608]">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 dark:from-black/50 dark:via-[#050608] dark:to-black/50"></div>
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(13,51,88,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(13,51,88,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-primary/40"></div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-md bg-brand-primary/[0.08] border border-brand-primary/20">
                            <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
                            <span className="uppercase tracking-[0.25em] text-[14px] sm:text-[20px] font-bold text-brand-primary">Nuestro acompañamiento</span>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-primary/40"></div>
                    </div>
                    <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-[1.1] tracking-tight mb-8">
                        Pilares que alinean la consultoría integral<br />
                        <span className="text-brand-primary">con la transformación digital</span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                       <Typewriter text="Combinamos estrategia, operaciones y tecnología para entregar resultados visibles desde el diagnóstico hasta la ejecución continua." />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto space-y-6">
                    {/* PILLAR 1: Consultoría Integral */}
                    <article className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-primary/30 dark:hover:border-brand-primary/50 transition-all duration-500">
                        <div className="p-8 lg:p-12">
                            <div className="flex items-start gap-8 mb-10">
                                <div className="relative flex-shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary/90 flex items-center justify-center shadow-lg shadow-brand-primary/25">
                                        <span className="text-white text-2xl font-bold">01</span>
                                    </div>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Consultoría Integral</h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Diseñamos un roadmap transversal que alinea personas, procesos y gobierno corporativo. Diagnosticamos brechas, priorizamos iniciativas de alto impacto y acompañamos la ejecución para asegurar adopción y retorno.
                                    </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5 ml-0 lg:ml-24">
                                <div className="group/item relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand-primary/0 group-hover/item:bg-brand-primary transition-colors"></div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mb-2">Modelos operativos integrados</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Orquestamos áreas clave con indicadores compartidos para acelerar decisiones.</p>
                                </div>
                                <div className="group/item relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand-primary/0 group-hover/item:bg-brand-primary transition-colors"></div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mb-2">Gobierno y riesgos</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Definimos políticas, controles y tableros que brindan visibilidad ejecutiva.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* PILLAR 2: Transformación Digital */}
                    <article className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-primary/30 dark:hover:border-brand-primary/50 transition-all duration-500">
                        <div className="p-8 lg:p-12">
                            <div className="grid lg:grid-cols-[1fr,300px] gap-8 mb-10">
                                <div className="flex items-start gap-8">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary/90 flex items-center justify-center shadow-lg shadow-brand-primary/25">
                                            <span className="text-white text-2xl font-bold">02</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Transformación Digital</h3>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Materializamos la visión estratégica en soluciones digitales escalables, asegurando adopción y evolución continua.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-transparent border-2 border-brand-primary/25 dark:from-brand-primary/20 dark:via-brand-primary/10 p-6 shadow-md">
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                                    <div className="flex items-start gap-3 mb-3">
                                        <IconTickerCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                        <h4 className="text-base font-bold text-slate-900 dark:text-slate-200">Gobierno del cambio digital</h4>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Acompañamos el despliegue con métricas de impacto y adopción por unidad de negocio.</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 ml-0 lg:ml-24">
                                <div className="group/item relative p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-3">2.1</div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">Automatizaciones</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Digitalizamos flujos críticos para eliminar tareas repetitivas y asegurar trazabilidad.</p>
                                </div>
                                <div className="group/item relative p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-3">2.2</div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">Innovación Tecnológica</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Introducimos plataformas y arquitecturas modernas alineadas a su estrategia de crecimiento.</p>
                                </div>
                                <div className="group/item relative p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-3">2.3</div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">Herramientas Informáticas</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Seleccionamos y configuramos soluciones que integran datos, equipos y procesos end-to-end.</p>
                                </div>
                                <div className="group/item relative p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-3">2.4</div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">Herramientas de IA</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Aplicamos IA para anticipar escenarios, optimizar operaciones y personalizar experiencias.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* PILLAR 3: Formaciones */}
                    <article className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-primary/30 dark:hover:border-brand-primary/50 transition-all duration-500">
                        <div className="p-8 lg:p-12">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-10">
                                <div className="flex items-start gap-8 flex-1">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary/90 flex items-center justify-center shadow-lg shadow-brand-primary/25">
                                            <span className="text-white text-2xl font-bold">03</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Formaciones</h3>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Construimos una academia corporativa evolutiva que asegura el upgrade de capacidades, acompaña el cambio cultural y consolida la adopción de la transformación.
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:ml-auto flex flex-col gap-3 lg:items-end">
                                    <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-primary/15 to-brand-primary/10 dark:from-brand-primary/25 dark:to-brand-primary/15 border border-brand-primary/30 px-5 py-2.5 shadow-sm">
                                        <IconTickerCheck className="h-4 w-4 text-brand-primary" />
                                        <span className="text-sm font-semibold text-brand-primary">Formación continua certificada</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 font-bold">Roadmap 360°</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-5 ml-0 lg:ml-24">
                                <div className="group/item relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-4">3.1</div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mb-2">Coaching ejecutivo</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Mentoría estratégica para directivos y sponsors del cambio con foco en liderazgo digital y gobierno.</p>
                                </div>
                                <div className="group/item relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-4">3.2</div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mb-2">Entrenamiento de equipos</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Programas inmersivos que desarrollan nuevas formas de trabajo colaborativas y data-driven.</p>
                                </div>
                                <div className="group/item relative p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-primary/30 dark:hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-bold mb-4">3.3</div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mb-2">Laboratorios de adopción</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Workshops con casos reales que aceleran el dominio de IA, automatización y herramientas innovadoras.</p>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default Pillars;
