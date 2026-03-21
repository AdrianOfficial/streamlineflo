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
    <section className="bg-[#f0f0ee] border-t border-[#e8e8e6] px-8 lg:px-16 py-28">
      <div className="mb-16">
        <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-5">Client results</p>
        <h2
          className="font-semibold text-[#0a0a0a]"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
        >
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#f8f8f6] border border-[#e8e8e6] p-10 flex flex-col justify-between">
            <div>
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-8" aria-hidden="true">
                <path d="M0 22V13C0 5.6 3.5 1.5 10.5 0l1.2 2C8 3.4 6 6.1 5.8 10.5H10V22H0zm16 0V13C16 5.6 19.5 1.5 26.5 0l1.2 2c-3.7 1.4-5.7 4.1-5.9 8.5H26V22H16z" fill="#e8e8e6" />
              </svg>
              <p className="text-[#222] text-2xl leading-relaxed mb-10">{t.quote}</p>
            </div>
            <div className="border-t border-[#e8e8e6] pt-6">
              <p className="text-[#111] font-medium text-lg">{t.name}</p>
              <p className="text-[#888] text-base mt-1">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
