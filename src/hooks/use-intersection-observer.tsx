import { useEffect, useRef, useState } from 'react';

const PERCENT_THRESHOLD = 0.1; // 10%

export function useIntersectionObserver(threshold: number = PERCENT_THRESHOLD) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        threshold: threshold,
      },
    );

    const observe = () => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    };

    const unobserve = () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };

    observe();

    window.addEventListener('resize', unobserve);
    window.addEventListener('resize', observe);

    return () => {
      unobserve();
      window.removeEventListener('resize', unobserve);
      window.removeEventListener('resize', observe);
    };
  }, [ref, threshold]);

  return { ref, isIntersecting };
}
