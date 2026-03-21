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
    <section className="bg-[#0e0e0e] border-t border-[#1a1a1a] px-8 lg:px-16 py-28">
      <div className="mb-16">
        <p className="text-sm text-[#999] tracking-[0.2em] uppercase mb-5">Client results</p>
        <h2
          className="text-[#f0f0f0] font-semibold"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
        >
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#151515]">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#0e0e0e] p-10 flex flex-col justify-between">
            <div>
              <svg width="24" height="20" viewBox="0 0 22 18" fill="none" className="mb-8" aria-hidden="true">
                <path d="M0 18V10.5C0 4.6 2.9 1.3 8.7 0l1 1.7C6.7 2.7 5.1 4.8 4.9 8.5H8.5V18H0zm12 0V10.5C12 4.6 14.9 1.3 20.7 0l1 1.7c-3 1-4.6 3.1-4.8 6.8H20.5V18H12z" fill="#252525" />
              </svg>
              <p className="text-[#d0d0d0] text-2xl leading-relaxed mb-10">{t.quote}</p>
            </div>
            <div className="border-t border-[#1a1a1a] pt-6">
              <p className="text-[#e0e0e0] font-medium text-lg">{t.name}</p>
              <p className="text-[#888] text-base mt-1">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
