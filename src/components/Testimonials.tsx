const testimonials = [
  {
    quote:
      "We were spending three days a week on manual reporting across three different tools. StreamlineFlo automated the entire thing. Now it just happens — every Monday morning, no one touches it.",
    name: 'Sarah M.',
    role: 'Head of Operations',
    company: 'Logistics & fulfilment firm',
  },
  {
    quote:
      "I was sceptical about the ROI before the audit. They showed me exactly where we were losing time and put a number on it. Six weeks later, those processes don't exist anymore.",
    name: 'James T.',
    role: 'Founder & CEO',
    company: 'B2B SaaS company',
  },
  {
    quote:
      "What I appreciated most was that they didn't just build something and disappear. The documentation was thorough, and when our CRM changed their API, they had it fixed before we even noticed.",
    name: 'Priya K.',
    role: 'Director of Revenue Operations',
    company: 'Professional services firm',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0e0e0e] border-t border-[#1e1e1e] px-8 lg:px-14 py-24">
      <div className="mb-16">
        <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-5">Client results</p>
        <h2
          className="text-[#f0f0f0] font-black"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
          }}
        >
          What our clients say.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#181818]">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#0e0e0e] p-8 flex flex-col justify-between">
            <div>
              {/* Quote mark */}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="mb-6" aria-hidden="true">
                <path d="M0 20V12C0 5.373 3.582 1.56 10.746 0l1.254 2C8.36 3.12 6.4 5.787 6 10h4v10H0zm16 0V12C16 5.373 19.582 1.56 26.746 0L28 2c-3.64 1.12-5.6 3.787-6 8h4v10H16z" fill="#2a2a2a" />
              </svg>
              <p className="text-[#9a9a9a] text-base leading-relaxed mb-8">{t.quote}</p>
            </div>
            <div className="border-t border-[#181818] pt-6">
              <p className="text-[#d0d0d0] font-semibold text-base">{t.name}</p>
              <p className="text-[#5a5a5a] text-sm mt-1">{t.role}</p>
              <p className="text-[#3a3a3a] text-sm">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
