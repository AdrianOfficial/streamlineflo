import { useEffect, useRef } from 'react';

/**
 * Interactive dot-grid canvas for the hero section.
 *
 * - Precise grid of small circles
 * - Each dot rides a gentle sine-wave (ambient drift)
 * - Mouse proximity pushes dots away — they spring back as cursor moves
 * - Dots closest to cursor are slightly larger and brighter
 */
const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    let width  = 0;
    let height = 0;
    let dpr    = window.devicePixelRatio || 1;

    // Mouse state (in CSS pixels)
    const mouse = { x: -9999, y: -9999 };

    // ── Resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      const rect  = canvas.getBoundingClientRect();
      width       = rect.width;
      height      = rect.height;
      dpr         = window.devicePixelRatio || 1;
      canvas.width  = width  * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Mouse ─────────────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    // Also listen on window so cursor entering from the parent section works
    window.addEventListener('mousemove', onMouseMove);

    // ── Animation ─────────────────────────────────────────────────────────────
    let time = 0;
    let raf: number;

    const SPACING   = 42;   // grid cell size
    const BASE_R    = 1.4;  // dot radius at rest
    const PUSH_R    = 3.5;  // dot radius near cursor
    const PUSH_DIST = 130;  // influence radius (css px)
    const PUSH_MAG  = 28;   // max displacement from cursor
    const BASE_A    = 0.22; // baseline dot opacity
    const HOVER_A   = 0.7;  // opacity at cursor centre

    const draw = () => {
      time += 0.007;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width  / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Grid rest position (offset slightly so grid doesn't start at corner)
          const gx = col * SPACING - (SPACING / 2);
          const gy = row * SPACING - (SPACING / 2);

          // Ambient wave offsets
          const phase = col * 0.38 + row * 0.24 + time;
          let px = Math.cos(phase * 0.9 + 1.3) * 2.2;
          let py = Math.sin(phase) * 3.2;

          // Mouse push
          const dx = gx + px - mouse.x;
          const dy = gy + py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let alpha  = BASE_A;
          let radius = BASE_R;

          if (dist < PUSH_DIST) {
            const t = 1 - dist / PUSH_DIST;
            const force = t * t * PUSH_MAG;
            px -= (dx / (dist || 1)) * force;
            py -= (dy / (dist || 1)) * force;
            alpha  = BASE_A + t * (HOVER_A - BASE_A);
            radius = BASE_R + t * (PUSH_R - BASE_R);
          }

          ctx.beginPath();
          ctx.arc(gx + px, gy + py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(150, 148, 145, ${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
};

export default HeroCanvas;
