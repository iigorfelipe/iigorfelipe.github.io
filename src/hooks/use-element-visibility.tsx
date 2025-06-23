import { useEffect, useRef, useState } from 'react';

type UseElementVisibilityProps = {
  threshold?: number;
  once?: boolean;
  onVisible?: (entry: IntersectionObserverEntry) => void;
  options?: IntersectionObserverInit;
};

export const useElementVisibility = ({
  threshold = 0.5,
  once = false,
  onVisible,
  options = {},
}: UseElementVisibilityProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;

        setIsVisible(isElementVisible);

        if (isElementVisible && onVisible) {
          onVisible(entry);
        }

        if (once && isElementVisible) {
          observer.disconnect();
        }
      },
      { threshold, ...options },
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold, once, onVisible, options]);

  return { elementRef, isVisible };
};
