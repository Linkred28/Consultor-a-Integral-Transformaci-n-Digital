import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
}

const Typewriter = ({ text }: TypewriterProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const span = spanRef.current;
    if (span) {
      // Set the number of characters for the steps() function in CSS
      span.style.setProperty('--typewriter-chars', String(text.length));
    }
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
