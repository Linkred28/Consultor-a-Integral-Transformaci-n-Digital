<header className="sticky top-0 z-30 bg-brand-bg/80 backdrop-blur-lg border-b border-hairline">
  {/* ↓↓ Reducimos padding vertical a py-1 y ajustamos gap */}
  <div className="container mx-auto px-6 py-1 flex justify-between items-center">
    <a
      href="#gx-hero"
      onClick={handleNavClick}
      className="flex items-center gap-3 text-brand-text hover:opacity-80 transition-opacity duration-300"
    >
      <div className="brand-logo flex items-center">
        <img
          src="/metodiko-logo.png"
          alt="Metodiko"
          className="h-[62px] w-auto md:h-[70px] object-contain" // 👈 Logo más grande sin ampliar el header
          decoding="async"
        />
      </div>
      <span className="block text-sm md:text-base font-semibold leading-tight">
        Consultoría Integral + Transformación Digital
      </span>
    </a>

    <div className="flex items-center space-x-2 sm:space-x-4">
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#gx-hero" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Nuestro Enfoque</a>
        <a href="#pilares-estrategicos" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Pilares</a>
        <a href="#servicios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Servicios</a>
        <a href="#beneficios" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Beneficios</a>
        <a href="#impacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Impacto</a>
        <a href="#contacto" onClick={handleNavClick} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Comenzar</a>
      </nav>

      <button
        onClick={onThemeToggle}
        type="button"
        className="flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
        aria-label="Toggle light/dark theme"
      >
        {theme === 'light' ? <IconMoon className="w-5 h-5" /> : <IconSun className="w-5 h-5" />}
      </button>

      <button
        onClick={() => setIsMobileMenuOpen(true)}
        type="button"
        className="md:hidden flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
        aria-label="Open navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <IconMenu className="w-6 h-6" />
      </button>
    </div>
  </div>
</header>
