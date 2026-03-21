import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;       // ms
  y?: number;           // initial Y offset in px (default 24)
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Uses IntersectionObserver — no library needed.
 */
const Reveal = ({ children, delay = 0, y = 24, className = '', style }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state immediately (before paint)
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.72s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.72s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
