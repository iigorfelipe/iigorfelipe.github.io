import { useEffect, useRef, useState } from 'react';

const PERCENT_THRESHOLD = 0.1; // 10%
export function useIntersectionObserver(
  threshold: number = PERCENT_THRESHOLD,
  once: boolean = false,
  callback?: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting && callback) {
            callback(entry);
          }

          if (once) observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: threshold,
        ...options,
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
  }, [ref, threshold, callback, once, options]);

  return { ref, isIntersecting };
}
