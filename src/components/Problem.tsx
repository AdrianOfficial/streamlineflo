import Reveal from './Reveal';

const CostIllustration = () => (
  <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 11 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 42 + 20} r="1.2" fill="#e0e0de" />
      ))
    )}
    {[
      { x: 60,  h: 60,  label: 'Data entry' },
      { x: 130, h: 100, label: 'Reporting' },
      { x: 200, h: 80,  label: 'Follow-ups' },
      { x: 270, h: 130, label: 'Approvals' },
      { x: 340, h: 90,  label: 'Scheduling' },
    ].map((bar) => (
      <g key={bar.label}>
        <rect x={bar.x} y={260 - bar.h} width="50" height={bar.h} rx="3" fill="#e8e8e6" stroke="#d8d8d6" strokeWidth="1" />
        <rect x={bar.x} y={260 - bar.h} width="50" height={bar.h * 0.65} rx="3" fill="#dddddB" />
        <text x={bar.x + 25} y="278" textAnchor="middle" fill="#aaa" fontSize="9" fontFamily="Inter Tight">{bar.label}</text>
        <text x={bar.x + 25} y={260 - bar.h - 8} textAnchor="middle" fill="#777" fontSize="10" fontFamily="Inter Tight" fontWeight="500">{Math.round(bar.h / 10)}h</text>
      </g>
    ))}
    <line x1="40" y1="260" x2="400" y2="260" stroke="#d8d8d6" strokeWidth="1" />
    <line x1="40" y1="210" x2="400" y2="210" stroke="#e8e8e6" strokeWidth="1" strokeDasharray="3 5" />
    <line x1="40" y1="160" x2="400" y2="160" stroke="#e8e8e6" strokeWidth="1" strokeDasharray="3 5" />
    <rect x="100" y="40" width="240" height="48" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="220" y="60" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">AVG PER EMPLOYEE / WEEK</text>
    <text x="220" y="79" textAnchor="middle" fill="#333" fontSize="14" fontFamily="Inter Tight" fontWeight="500">~12 hours on manual tasks</text>
  </svg>
);

const Problem = () => (
  <section className="bg-[#f8f8f6] border-t border-[#e8e8e6] px-8 lg:px-16 py-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
      <div>
        <Reveal>
          <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-8">The problem</p>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="font-semibold mb-10 text-[#0a0a0a]"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            Manual work is<br />eating your margin.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[#333] text-2xl leading-relaxed mb-8">
            The average employee spends 12 hours a week on tasks a machine could do.
            Copy-paste. Reformatting. Chasing approvals. Following up.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[#555] text-xl leading-relaxed mb-12">
            It's invisible until it isn't. A 10-person team losing 12 hours each is 120 hours a week
            three full-time roles doing zero-value work.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="border-l-2 border-[#ddd] pl-6">
            <p className="text-[#333] text-xl leading-relaxed italic">
              "We didn't realise how much time we were losing until we stopped losing it."
            </p>
            <p className="text-[#999] text-base mt-3">Operations Director, logistics firm</p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={100} className="flex items-center justify-center bg-[#f0f0ee] rounded-lg p-8">
        <CostIllustration />
      </Reveal>
    </div>
  </section>
);

export default Problem;
