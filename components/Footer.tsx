
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-bg-secondary border-t border-hairline">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-brand-text-secondary">
                        &copy; {new Date().getFullYear()} Metodiko Consultoría Integral + Transformación Digital. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;