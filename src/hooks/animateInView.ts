import { useEffect, useState } from 'react';

export function animateInView<T extends HTMLElement>(
  element: React.RefObject<T>,
  threshold: number = 0.2
): boolean {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const current = element.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    current && observer?.observe(current);

    return () => observer.disconnect();
  }, [element.current, threshold]);

  return hasAnimated;
}
