import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

// Parse "50+" → { value: 50, suffix: '+' }
const parseStat = (raw: string) => {
  const match = raw.match(/^(\d+)(.*)$/);
  return match
    ? { num: parseInt(match[1], 10), suffix: match[2] }
    : { num: 0, suffix: raw };
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ raw, duration = 1600 }: { raw: string; duration?: number }) => {
  const { num, suffix } = parseStat(raw);
  const [display, setDisplay] = useState(0);
  const ref   = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(easeOut(t) * num));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const stats = [
  { value: '50+',   label: 'Automations built' },
  { value: '10k+',  label: 'Hours saved for clients' },
  { value: '48h',   label: 'Avg. time to first prototype' },
  { value: '100%',  label: 'Client retention rate' },
];

const Stats = () => (
  <section className="bg-[#f0f0ee] border-t border-[#e8e8e6]">
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#e8e8e6]">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80} className="px-10 py-14">
          <p
            className="font-semibold mb-3 leading-none text-[#0a0a0a]"
            style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            <CountUp raw={s.value} />
          </p>
          <p className="text-[#666] text-lg mt-2">{s.label}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stats;
