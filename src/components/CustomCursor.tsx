import { useEffect, useRef } from 'react';

/**
 * Premium custom cursor:
 * - Small sharp dot that follows the mouse exactly
 * - Larger hollow ring that follows with spring lag
 * - On hover over interactive elements: ring expands + fills slightly
 * - Hidden on touch devices
 */
const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ mx: -100, my: -100, rx: -100, ry: -100 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;
    const p = posRef.current;

    const onMove = (e: MouseEvent) => {
      p.mx = e.clientX;
      p.my = e.clientY;
      dot.style.transform = `translate(${p.mx}px, ${p.my}px) translate(-50%, -50%)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      p.rx = lerp(p.rx, p.mx, 0.11);
      p.ry = lerp(p.ry, p.my, 0.11);
      ring.style.transform = `translate(${p.rx}px, ${p.ry}px) translate(-50%, -50%)`;
      frameRef.current = requestAnimationFrame(tick);
    };

    const enter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      dot.classList.add('cursor--hover');
      ring.classList.add(isInput ? 'cursor--input' : 'cursor--hover');
    };

    const leave = () => {
      dot.classList.remove('cursor--hover');
      ring.classList.remove('cursor--hover', 'cursor--input');
    };

    document.addEventListener('mousemove', onMove);
    frameRef.current = requestAnimationFrame(tick);

    const targets = document.querySelectorAll('a, button, input, textarea, [role="button"], label');
    targets.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameRef.current);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
