const CostIllustration = () => (
  <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 11 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 42 + 20} r="1" fill="#1a1a1a" />
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
        <rect x={bar.x} y={260 - bar.h} width="50" height={bar.h} rx="2" fill="#161616" stroke="#222" strokeWidth="0.75" />
        <rect x={bar.x} y={260 - bar.h} width="50" height={bar.h * 0.7} rx="2" fill="#1e1e1e" />
        <text x={bar.x + 25} y="278" textAnchor="middle" fill="#3a3a3a" fontSize="9" fontFamily="Inter Tight">{bar.label}</text>
        <text x={bar.x + 25} y={260 - bar.h - 8} textAnchor="middle" fill="#5a5a5a" fontSize="10" fontFamily="Inter Tight" fontWeight="500">{Math.round(bar.h / 10)}h</text>
      </g>
    ))}
    <line x1="40" y1="260" x2="400" y2="260" stroke="#222" strokeWidth="0.75" />
    <line x1="40" y1="210" x2="400" y2="210" stroke="#181818" strokeWidth="0.75" strokeDasharray="3 5" />
    <line x1="40" y1="160" x2="400" y2="160" stroke="#181818" strokeWidth="0.75" strokeDasharray="3 5" />
    <rect x="120" y="40" width="200" height="44" rx="4" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="220" y="57" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">AVG PER EMPLOYEE / WEEK</text>
    <text x="220" y="75" textAnchor="middle" fill="#a0a0a0" fontSize="14" fontFamily="Inter Tight" fontWeight="500">~12 hours on manual tasks</text>
  </svg>
);

const Problem = () => {
  return (
    <section className="bg-[#0a0a0a] border-t border-[#1a1a1a] px-8 lg:px-16 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        <div>
          <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-8">The problem</p>
          <h2
            className="text-[#f0f0f0] font-semibold mb-10"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            Manual work is<br />eating your margin.
          </h2>
          <p className="text-[#c8c8c8] text-2xl leading-relaxed mb-8">
            The average employee spends 12 hours a week on tasks a machine could do. Copy-paste. Reformatting. Chasing approvals. Following up.
          </p>
          <p className="text-[#b0b0b0] text-xl leading-relaxed mb-12">
            It's invisible until it isn't. A 10-person team losing 12 hours each is 120 hours a week — three full-time roles doing zero-value work.
          </p>
          <div className="border-l-2 border-[#252525] pl-6">
            <p className="text-[#d0d0d0] text-xl leading-relaxed italic">
              "We didn't realise how much time we were losing until we stopped losing it."
            </p>
            <p className="text-[#888] text-base mt-3">— Operations Director, logistics firm</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <CostIllustration />
        </div>
      </div>
    </section>
  );
};

export default Problem;
