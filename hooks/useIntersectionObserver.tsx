import React, { useState, useEffect, useRef } from 'react';

interface ObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement,>(options: ObserverOptions) => {
  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { triggerOnce, ...observerOptions } = options;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      }
    }, observerOptions);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, triggerOnce, observerOptions]);

  return [containerRef, isVisible] as const;
};
