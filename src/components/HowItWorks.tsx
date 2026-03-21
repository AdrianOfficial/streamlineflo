import Reveal from './Reveal';

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    body: '30 minutes. You walk us through what your team does. We identify where time is going. No prep needed.',
    detail: '30 min, free, no commitment',
  },
  {
    num: '02',
    title: 'Automation blueprint',
    body: "We map what's automatable, estimate the return, and write it up as a clear plan. Before any code gets written.",
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
    detail: 'Ongoing, no lock-in',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-[#f8f8f6] border-t border-[#e8e8e6] px-8 lg:px-16 py-28">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
      <Reveal>
        <div>
          <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-5">How it works</p>
          <h2
            className="font-semibold text-[#0a0a0a]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            From conversation<br />to live automation.
          </h2>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-[#555] text-xl leading-relaxed max-w-sm">
          Four steps. No surprises. You know what's happening at every stage.
        </p>
      </Reveal>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e8e6]">
      {steps.map((s, i) => (
        <Reveal key={s.num} delay={i * 80} className="bg-[#f8f8f6]">
          <div className="p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-semibold text-[#e0e0de]"
                  style={{ fontSize: '4rem', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {s.num}
                </span>
                {i !== steps.length - 1 && (
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none" className="hidden lg:block">
                    <line x1="0" y1="6" x2="22" y2="6" stroke="#ccc" strokeWidth="1" />
                    <polyline points="18,3 23,6 18,9" stroke="#ccc" strokeWidth="1" fill="none" />
                  </svg>
                )}
              </div>
              <h3 className="text-[#111] font-medium mb-5 text-2xl">{s.title}</h3>
              <p className="text-[#555] text-xl leading-relaxed">{s.body}</p>
            </div>
            <div className="mt-10 pt-6 border-t border-[#e8e8e6]">
              <span className="text-base text-[#999] tracking-wide">{s.detail}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default HowItWorks;
