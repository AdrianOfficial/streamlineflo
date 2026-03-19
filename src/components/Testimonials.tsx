const testimonials = [
  {
    quote: "Reporting used to take us three days. Now it runs itself every Monday. No one touches it.",
    name: 'Sarah M.',
    role: 'Head of Operations',
    company: 'Logistics firm',
  },
  {
    quote: "They showed us exactly where we were losing time and put a number on it. Six weeks later, those processes are gone.",
    name: 'James T.',
    role: 'Founder & CEO',
    company: 'B2B SaaS',
  },
  {
    quote: "When our CRM changed its API they had it fixed before we even noticed something was different.",
    name: 'Priya K.',
    role: 'Director of RevOps',
    company: 'Professional services',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0e0e0e] border-t border-[#1e1e1e] px-8 lg:px-14 py-24">
      <div className="mb-16">
        <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-5">Client results</p>
        <h2
          className="text-[#f0f0f0] font-black"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', lineHeight: 1.0, letterSpacing: '-0.04em' }}
        >
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#181818]">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#0e0e0e] p-8 flex flex-col justify-between">
            <div>
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-6" aria-hidden="true">
                <path d="M0 18V11C0 4.9 3.1 1.4 9.3 0l1.1 1.8C7.2 2.8 5.5 5.1 5.2 9H9v9H0zm13 0V11C13 4.9 16.1 1.4 22.3 0L23.4 1.8C20.2 2.8 18.5 5.1 18.2 9H22v9H13z" fill="#222" />
              </svg>
              <p className="text-[#9a9a9a] text-lg leading-relaxed mb-8">{t.quote}</p>
            </div>
            <div className="border-t border-[#181818] pt-6">
              <p className="text-[#d0d0d0] font-semibold text-base">{t.name}</p>
              <p className="text-[#5a5a5a] text-sm mt-1">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
