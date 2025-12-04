import React from "react";

/** Íconos sociales locales (mismos estilo que en el header, sin lucide-react) */
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1s2.5 1.12 2.5 2.5zM.32 8.16h4.32V23H.32zM8.36 8.16h4.14v2.01h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V23h-4.32v-7.13c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V23H8.36z" />
  </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-bg-secondary border-t border-hairline">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-brand-text-secondary">
            &copy; {new Date().getFullYear()} Metodiko Consultoría Integral +
            Transformación Digital. Todos los derechos reservados.
          </p>

          {/* Íconos sociales centrados */}
          <div className="flex items-center justify-center gap-4 text-brand-text-secondary">
            <a
              href="https://www.linkedin.com/company/metodiko-m%C3%A9xico/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Metodiko en LinkedIn"
              className="flex items-center justify-center p-2 rounded-full hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>

            {/* Mail: abre correo a arely@consultaclave.com */}
            <a
              href="mailto:arely@consultaclave.com"
              aria-label="Contacto por correo"
              className="flex items-center justify-center p-2 rounded-full hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <MailIcon className="w-6 h-6" />
            </a>

            {/* Instagram placeholder: luego agregas el href real */}
            <button
              type="button"
              aria-label="Metodiko en Instagram"
              className="flex items-center justify-center p-2 rounded-full hover:text-brand-primary hover:bg-muted transition-colors duration-200"
            >
              <InstagramIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
