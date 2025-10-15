
import React from 'react';
import Teleprompter from './Teleprompter';
import { teleprompterTexts } from '../constants';

const Cta = () => {
    return (
        <section id="contacto" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary to-brand-primary-darker py-16 sm:py-20 relative overflow-hidden">
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="relative mb-12 md:mb-16">
                    <h2 className="absolute inset-0 text-4xl md:text-5xl font-extrabold text-white opacity-40 blur-lg pointer-events-none tracking-tight leading-tight" aria-hidden="true">
                        El verdadero riesgo es no evolucionar.
                    </h2>
                    <h2 className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent tracking-tight leading-tight">
                        El verdadero riesgo es no evolucionar.
                    </h2>
                </div>
                <div id="cta-card" className="card max-w-4xl mx-auto py-8 sm:py-10 px-6 sm:px-8 shadow-2">
                    <div className="text-xl sm:text-2xl max-w-[65ch] mx-auto leading-relaxed text-brand-text-secondary h-24 sm:h-20 flex items-center justify-center" aria-live="polite">
                        <Teleprompter texts={teleprompterTexts} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
