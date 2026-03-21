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
    <section className="bg-[#0e0e0e] border-t border-[#1a1a1a] px-8 lg:px-14 py-24">
      <div className="mb-16">
        <p className="text-xs text-[#666] tracking-[0.2em] uppercase mb-5">Client results</p>
        <h2
          className="text-[#f0f0f0] font-semibold"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
        >
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#151515]">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#0e0e0e] p-8 flex flex-col justify-between">
            <div>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="mb-6" aria-hidden="true">
                <path d="M0 16V9.5C0 4.2 2.6 1.2 7.8 0l.9 1.5C6 2.4 4.6 4.3 4.4 7.5H7.5V16H0zm10.5 0V9.5C10.5 4.2 13.1 1.2 18.3 0l.9 1.5C16.5 2.4 15.1 4.3 14.9 7.5H18V16H10.5z" fill="#1a1a1a" />
              </svg>
              <p className="text-[#aaa] text-lg leading-relaxed mb-8">{t.quote}</p>
            </div>
            <div className="border-t border-[#161616] pt-5">
              <p className="text-[#b0b0b0] font-medium text-base">{t.name}</p>
              <p className="text-[#666] text-sm mt-1">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
