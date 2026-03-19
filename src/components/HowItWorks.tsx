const steps = [
  {
    num: '01',
    title: 'Discovery call',
    body: 'We spend 30 minutes understanding your current workflows, the tools you use, and where time is being lost. No prep needed on your end.',
    detail: '30 min — free, no commitment',
  },
  {
    num: '02',
    title: 'Automation blueprint',
    body: 'We map out exactly what can be automated, what it will cost, and what you stand to gain — delivered as a clear written plan before any work begins.',
    detail: 'Delivered within 48 hours',
  },
  {
    num: '03',
    title: 'Build & test',
    body: 'We build your automations in a staging environment, test every edge case, and only move to production when everything works exactly as expected.',
    detail: 'Typically 1–3 weeks',
  },
  {
    num: '04',
    title: 'Handover & support',
    body: 'You get full documentation, a walkthrough of everything we built, and ongoing support to keep your systems running as your business evolves.',
    detail: 'Ongoing — no lock-in',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0b0b0b] border-t border-[#1e1e1e] px-8 lg:px-14 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-5">How it works</p>
          <h2
            className="text-[#f0f0f0] font-black"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
            }}
          >
            From conversation<br />to live automation.
          </h2>
        </div>
        <p className="text-[#7a7a7a] text-base leading-relaxed max-w-sm">
          A straightforward process with no surprises — you'll know exactly what's happening at every stage.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#181818]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[#0b0b0b] p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-[#1e1e1e] font-black"
                  style={{ fontSize: '4rem', letterSpacing: '-0.05em', lineHeight: 1 }}
                >
                  {s.num}
                </span>
                {/* Connecting arrow — not on last */}
                {s.num !== '04' && (
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none" className="hidden lg:block">
                    <line x1="0" y1="6" x2="22" y2="6" stroke="#2a2a2a" strokeWidth="1" />
                    <polyline points="18,2 24,6 18,10" stroke="#2a2a2a" strokeWidth="1" fill="none" />
                  </svg>
                )}
              </div>
              <h3
                className="text-[#d8d8d8] font-bold mb-4"
                style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}
              >
                {s.title}
              </h3>
              <p className="text-[#7a7a7a] text-base leading-relaxed">{s.body}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#181818]">
              <span className="text-xs text-[#4a4a4a] tracking-wide">{s.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
