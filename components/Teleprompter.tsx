import React, { useState, useEffect, useRef } from 'react';

interface TeleprompterProps {
  texts: string[];
}

const config = {
  // Velocidad más lenta para una lectura cómoda
  typingSpeed: 380, // ms entre palabras (antes 300)
  // Pausas muy cortas para que no se sienta "congelado"
  endPause: 120,
  fadeOut: 450,
  postFadeDelay: 200,
};

const Teleprompter = ({ texts }: TeleprompterProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(texts[0] || '');
  const [wordSpans, setWordSpans] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    // Modo accesible: sin animación, sólo texto estático
    if (reducedMotionQuery.matches) {
      const words = texts[0].split(' ');
      setWordSpans(
        words.map((word, index) => (
          <React.Fragment key={index}>
            <span className="tp-word">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))
      );
      return;
    }

    let phraseIndex = 0;
    let wordIndex = 0;
    let animationTimeout: ReturnType<typeof setTimeout>;
    let isPaused = false;
    let isVisible = false;

    const runAnimation = () => {
      if (isPaused || !isVisible) return;

      const container = containerRef.current;
      if (!container) return;

      const words = texts[phraseIndex].split(' ');

      if (wordIndex < words.length) {
        // Escribimos palabra por palabra
        setWordSpans(
          words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className={`tp-word ${
                  index < wordIndex ? 'tp-passed' : ''
                } ${index === wordIndex ? 'tp-current' : ''}`}
              >
                {word}
              </span>
              {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))
        );
        wordIndex++;
        animationTimeout = setTimeout(runAnimation, config.typingSpeed);
      } else {
        // Frase terminada: dejamos todas como "pasadas"
        setWordSpans(
          words.map((word, index) => (
            <React.Fragment key={index}>
              <span className="tp-word tp-passed">{word}</span>
              {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))
        );

        // Pequeña pausa + fade-out elegante entre frases
        animationTimeout = setTimeout(() => {
          if (container) container.classList.add('tp-fading-out');

          animationTimeout = setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % texts.length;
            wordIndex = 0;
            setCurrentPhrase(texts[phraseIndex]);

            if (container) container.classList.remove('tp-fading-out');

            animationTimeout = setTimeout(runAnimation, config.postFadeDelay);
          }, config.fadeOut);
        }, config.endPause);
      }
    };

    const pause = () => {
      isPaused = true;
      clearTimeout(animationTimeout);
    };

    const resume = () => {
      isPaused = false;
      runAnimation();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) resume();
        else pause();
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) pause();
      else resume();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    containerRef.current?.addEventListener('mouseover', pause);
    containerRef.current?.addEventListener('mouseout', resume);
    containerRef.current?.addEventListener('focusin', pause);
    containerRef.current?.addEventListener('focusout', resume);

    runAnimation();

    return () => {
      clearTimeout(animationTimeout);
      if (containerRef.current) observer.unobserve(containerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts]);

  return (
    <p
      ref={containerRef}
      className="tp-container"
      style={{ '--tp-fade-out': `${config.fadeOut}ms` } as React.CSSProperties}
      aria-label={currentPhrase}
    >
      {wordSpans}
    </p>
  );
};

export default Teleprompter;
