const steps = [
  {
    num: '01',
    title: 'Discovery call',
    description:
      'We spend 30 minutes understanding your current workflows, the tools you use, and where time is being lost. No prep needed on your end.',
  },
  {
    num: '02',
    title: 'Automation blueprint',
    description:
      'We map out exactly what can be automated, what it will cost, and what you stand to gain — delivered as a clear written plan before any work begins.',
  },
  {
    num: '03',
    title: 'Build & test',
    description:
      'We build your automations in a staging environment, test every edge case, and only move to production when everything works exactly as expected.',
  },
  {
    num: '04',
    title: 'Handover & support',
    description:
      'You get full documentation, a walkthrough of everything we built, and ongoing support to keep your systems running as your business evolves.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0c0c0c] border-t border-[#1e1e1e] px-8 lg:px-14 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <p className="text-xs text-[#6a6a6a] tracking-[0.25em] uppercase">How it works</p>
        <p className="text-[#9a9a9a] text-sm max-w-sm leading-relaxed">
          From first conversation to live automation — a straightforward process with no surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[#0c0c0c] p-8 flex flex-col gap-6">
            <span className="text-xs text-[#3a3a3a] font-mono">{s.num}</span>
            <div>
              <h3 className="text-[#d0d0d0] font-medium text-sm mb-3">{s.title}</h3>
              <p className="text-[#7a7a7a] text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
