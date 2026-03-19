const CostIllustration = () => (
  <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    {/* Background grid */}
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 11 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 42 + 20} r="1.2" fill="#1e1e1e" />
      ))
    )}

    {/* Bar chart — hours wasted per week */}
    {[
      { x: 60,  h: 60,  label: 'Data entry' },
      { x: 130, h: 100, label: 'Reporting' },
      { x: 200, h: 80,  label: 'Follow-ups' },
      { x: 270, h: 130, label: 'Approvals' },
      { x: 340, h: 90,  label: 'Scheduling' },
    ].map((bar) => (
      <g key={bar.label}>
        <rect
          x={bar.x}
          y={260 - bar.h}
          width="50"
          height={bar.h}
          fill="#1a1a1a"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
        {/* Fill line to show wasted portion */}
        <rect
          x={bar.x}
          y={260 - bar.h}
          width="50"
          height={bar.h * 0.7}
          fill="#272727"
        />
        <text
          x={bar.x + 25}
          y="278"
          textAnchor="middle"
          fill="#4a4a4a"
          fontSize="9"
          fontFamily="Inter"
        >
          {bar.label}
        </text>
        {/* Hour label */}
        <text
          x={bar.x + 25}
          y={260 - bar.h - 8}
          textAnchor="middle"
          fill="#6a6a6a"
          fontSize="10"
          fontFamily="Inter Tight"
          fontWeight="600"
        >
          {Math.round(bar.h / 10)}h
        </text>
      </g>
    ))}

    {/* Baseline */}
    <line x1="40" y1="260" x2="400" y2="260" stroke="#2a2a2a" strokeWidth="1" />

    {/* Y-axis label */}
    <text x="30" y="265" textAnchor="end" fill="#3a3a3a" fontSize="9" fontFamily="Inter">0</text>
    <text x="30" y="215" textAnchor="end" fill="#3a3a3a" fontSize="9" fontFamily="Inter">5h</text>
    <text x="30" y="165" textAnchor="end" fill="#3a3a3a" fontSize="9" fontFamily="Inter">10h</text>

    {/* Horizontal guides */}
    <line x1="40" y1="210" x2="400" y2="210" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 4" />
    <line x1="40" y1="160" x2="400" y2="160" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 4" />

    {/* Annotation */}
    <rect x="120" y="40" width="200" height="44" rx="3" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="220" y="58" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter" letterSpacing="1">AVG PER EMPLOYEE / WEEK</text>
    <text x="220" y="76" textAnchor="middle" fill="#c0c0c0" fontSize="15" fontFamily="Inter Tight" fontWeight="700">~12 hours on manual tasks</text>
  </svg>
);

const Problem = () => {
  return (
    <section className="bg-[#0a0a0a] border-t border-[#1e1e1e] px-8 lg:px-14 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — copy */}
        <div>
          <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-8">The problem</p>
          <h2
            className="text-[#f0f0f0] font-black mb-8"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
            }}
          >
            Manual work<br />is silently draining<br />your business.
          </h2>
          <p className="text-[#9a9a9a] text-lg leading-relaxed mb-6">
            The average knowledge worker spends nearly a third of their week on tasks a machine could handle — copy-pasting data, chasing approvals, formatting reports, sending routine emails.
          </p>
          <p className="text-[#7a7a7a] text-base leading-relaxed mb-10">
            It doesn't feel expensive because it's spread across everyone's day. But it adds up. A 10-person team losing 12 hours each per week is 120 hours — about three full-time employees — doing work that doesn't require human judgment.
          </p>
          <div className="border-l-2 border-[#2e2e2e] pl-6">
            <p className="text-[#c0c0c0] text-base leading-relaxed italic">
              "We didn't realise how much time we were losing until we stopped losing it."
            </p>
            <p className="text-[#5a5a5a] text-sm mt-2">— Operations Director, logistics firm</p>
          </div>
        </div>

        {/* Right — illustration */}
        <div className="flex items-center justify-center">
          <CostIllustration />
        </div>
      </div>
    </section>
  );
};

export default Problem;
