const FlowIllustration = () => (
  <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 13 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 42 + 20} r="1.2" fill="#e0e0de" />
      ))
    )}

    <rect x="40" y="80" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="95" y="101" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">TRIGGER</text>
    <text x="95" y="118" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">New Lead</text>

    <rect x="205" y="60" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="260" y="81" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="260" y="98" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Enrich Data</text>

    <rect x="205" y="140" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="260" y="161" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="260" y="178" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Score Lead</text>

    <rect x="365" y="100" width="110" height="52" rx="6" fill="#fff" stroke="#d0d0ce" strokeWidth="1" />
    <text x="420" y="121" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">NOTIFY</text>
    <text x="420" y="138" textAnchor="middle" fill="#333" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Slack + CRM</text>

    <rect x="40" y="240" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="95" y="261" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">TRIGGER</text>
    <text x="95" y="278" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Invoice Due</text>

    <rect x="205" y="240" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="260" y="261" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="260" y="278" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Send Reminder</text>

    <rect x="365" y="240" width="110" height="52" rx="6" fill="#fff" stroke="#e0e0de" strokeWidth="1" />
    <text x="420" y="261" textAnchor="middle" fill="#bbb" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">LOG</text>
    <text x="420" y="278" textAnchor="middle" fill="#555" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Update Sheet</text>

    {/* Connectors */}
    <line x1="150" y1="106" x2="205" y2="86" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="150" y1="106" x2="205" y2="166" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="315" y1="86" x2="365" y2="126" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="315" y1="166" x2="365" y2="126" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="150" y1="266" x2="205" y2="266" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="315" y1="266" x2="365" y2="266" stroke="#d0d0ce" strokeWidth="1" strokeDasharray="4 4" />

    {/* Running now */}
    <rect x="195" y="320" width="150" height="58" rx="6" fill="#fff" stroke="#c8c8c6" strokeWidth="1" />
    <text x="270" y="342" textAnchor="middle" fill="#aaa" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">RUNNING NOW</text>
    <text x="270" y="362" textAnchor="middle" fill="#333" fontSize="12" fontFamily="Inter Tight" fontWeight="500">Weekly Report</text>
    <circle cx="210" cy="349" r="3.5" fill="#16a34a" opacity="0.8" />
    <circle cx="210" cy="349" r="6" fill="#16a34a" opacity="0.12" />

    {/* Arrow heads */}
    <polygon points="205,86 198,82 198,90" fill="#d0d0ce" />
    <polygon points="205,166 198,162 198,170" fill="#d0d0ce" />
    <polygon points="365,126 358,122 358,130" fill="#d0d0ce" />
    <polygon points="205,266 198,262 198,270" fill="#d0d0ce" />
    <polygon points="365,266 358,262 358,270" fill="#d0d0ce" />
  </svg>
);

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#f8f8f6] flex flex-col">
      <header className="px-8 lg:px-16 py-5 flex items-center justify-between border-b border-[#e8e8e6]">
        <img src="/logo.png" alt="StreamlineFlo" className="h-8 w-auto" style={{ filter: 'brightness(0)' }} />
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-base text-[#666] hover:text-[#111] transition-colors hidden md:block">Services</a>
          <a href="#how-it-works" className="text-base text-[#666] hover:text-[#111] transition-colors hidden md:block">How it works</a>
          <button
            onClick={scrollToForm}
            className="text-base text-[#f8f8f6] bg-[#111] px-5 py-2.5 hover:bg-[#333] transition-colors"
          >
            Get in touch
          </button>
        </nav>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="flex flex-col justify-end px-8 lg:px-16 pb-20 pt-20 lg:border-r border-[#e8e8e6]">
          <div className="mb-8">
            <span className="inline-block text-xs tracking-[0.2em] text-[#999] uppercase border border-[#ddd] px-3 py-1.5">
              Workflow Automation
            </span>
          </div>
          <h1
            className="font-semibold mb-10 text-[#0a0a0a]"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em' }}
          >
            Stop paying<br />
            people to do<br />
            robot work.
          </h1>
          <p className="text-[#444] text-2xl leading-relaxed max-w-lg mb-12">
            We build automation that replaces the manual work your team keeps doing by hand. Less overhead. More output.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 border-t border-[#e8e8e6] pt-8">
            <button
              onClick={scrollToForm}
              className="text-lg text-[#f8f8f6] bg-[#111] px-8 py-4 font-medium hover:bg-[#333] transition-colors whitespace-nowrap"
            >
              Book a free audit →
            </button>
            <a href="#how-it-works" className="text-lg text-[#888] hover:text-[#333] transition-colors py-4">
              See how it works
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center px-8 py-16 bg-[#f8f8f6]">
          <FlowIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
