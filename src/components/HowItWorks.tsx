const steps = [
  {
    num: '01',
    title: 'Discovery call',
    body: '30 minutes. You walk us through what your team does. We identify where time is going. No prep needed.',
    detail: '30 min — free, no commitment',
  },
  {
    num: '02',
    title: 'Automation blueprint',
    body: "We map what's automatable, estimate the return, and write it up as a clear plan — before any code gets written.",
    detail: 'Delivered within 48 hours',
  },
  {
    num: '03',
    title: 'Build & test',
    body: "Everything is built in staging and tested edge-case by edge-case. We push to production when it's solid.",
    detail: 'Typically 1–3 weeks',
  },
  {
    num: '04',
    title: 'Handover & support',
    body: 'Full docs, a walkthrough, and ongoing support. If something breaks or your tools change, we handle it.',
    detail: 'Ongoing — no lock-in',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0b0b0b] border-t border-[#1a1a1a] px-8 lg:px-14 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-5">How it works</p>
          <h2
            className="text-[#f0f0f0] font-semibold"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            From conversation<br />to live automation.
          </h2>
        </div>
        <p className="text-[#b8b8b8] text-lg leading-relaxed max-w-sm">
          Four steps. No surprises. You know what's happening at every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#151515]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[#0b0b0b] p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-[#1e1e1e] font-semibold"
                  style={{ fontSize: '4rem', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {s.num}
                </span>
                {s.num !== '04' && (
                  <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="hidden lg:block">
                    <line x1="0" y1="5" x2="18" y2="5" stroke="#222" strokeWidth="0.75" />
                    <polyline points="15,2 20,5 15,8" stroke="#222" strokeWidth="0.75" fill="none" />
                  </svg>
                )}
              </div>
              <h3 className="text-[#d0d0d0] font-medium mb-4 text-xl">{s.title}</h3>
              <p className="text-[#c0c0c0] text-lg leading-relaxed">{s.body}</p>
            </div>
            <div className="mt-8 pt-5 border-t border-[#1a1a1a]">
              <span className="text-sm text-[#888] tracking-wide">{s.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
