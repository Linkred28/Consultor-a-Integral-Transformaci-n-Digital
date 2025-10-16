import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
}

const Typewriter = ({ text }: TypewriterProps) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const p = pRef.current;
    if (p) {
      p.style.setProperty('--typewriter-chars', String(text.length));
    }
    
    const span = spanRef.current;
    if (!span) return;

    // Durations in milliseconds
    const typeDuration = 8000; // Increased from 4000 to slow down typing
    const pauseDuration = 3000;
    const rewindDuration = 1500; // Faster rewind

    const typingAnimation = `typing ${typeDuration / 1000}s steps(${text.length}, end) forwards`;
    // Using 'start' in steps makes it delete character by character from the end, which is the desired "rewind" effect.
    const rewindAnimation = `rewind ${rewindDuration / 1000}s steps(${text.length}, start) forwards`;
    const blinkAnimation = `blink-caret .75s step-end infinite`;
    
    let isMounted = true;

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const runAnimationLoop = async () => {
      // Loop indefinitely while the component is mounted
      while (isMounted) {
        if (!span) return;
        
        // 1. Typing phase
        span.style.animation = `${typingAnimation}, ${blinkAnimation}`;
        await delay(typeDuration);

        // 2. Pause phase
        await delay(pauseDuration);
        
        // Check if still mounted before next DOM manipulation
        if (!isMounted || !span) return;

        // 3. Rewind phase (caret stops blinking)
        span.style.animation = `${rewindAnimation}`;
        await delay(rewindDuration);

        // Brief pause before restarting loop
        await delay(500);
      }
    };

    runAnimationLoop();

    // Cleanup function to stop the loop when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [text]);

  return (
    <div className="typewriter-container">
      <p ref={pRef} className="typewriter-text">
        <span ref={spanRef}>{text}</span>
      </p>
    </div>
  );
};

export default Typewriter;