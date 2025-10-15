
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
}

const Typewriter = ({ text }: TypewriterProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateMetrics = () => {
      const span = spanRef.current;
      if (!span) return;
      
      const container = span.closest<HTMLElement>('.typewriter-container');
      
      // Use a clone to measure width without affecting layout
      const clone = span.cloneNode(true) as HTMLElement;
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.style.maxWidth = 'none';
      clone.style.animation = 'none'; // Prevent animation from affecting width
      document.body.appendChild(clone);
      const width = clone.getBoundingClientRect().width;
      document.body.removeChild(clone);

      const widthValue = `${width}px`;
      span.style.setProperty('--typewriter-text-width', widthValue);
      if (container) {
        container.style.setProperty('--typewriter-text-width', widthValue);
      }
    };

    // Initial calculation
    updateMetrics();

    // Recalculate on resize and font load
    window.addEventListener('resize', updateMetrics);
    document.fonts?.ready.then(updateMetrics);

    return () => {
      window.removeEventListener('resize', updateMetrics);
    };
  }, [text]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text">
        <span ref={spanRef}>{text}</span>
      </p>
    </div>
  );
};

export default Typewriter;
