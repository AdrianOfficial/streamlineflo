const FlowIllustration = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 13 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 42 + 20} r="1" fill="#1e1e1e" />
      ))
    )}

    <rect x="40" y="80" width="100" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="90" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">TRIGGER</text>
    <text x="90" y="116" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">New Lead</text>

    <rect x="200" y="60" width="100" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="250" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="250" y="96" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Enrich Data</text>

    <rect x="200" y="140" width="100" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="250" y="160" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="250" y="176" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Score Lead</text>

    <rect x="360" y="100" width="110" height="52" rx="6" fill="#161616" stroke="#282828" strokeWidth="0.75" />
    <text x="415" y="120" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">NOTIFY</text>
    <text x="415" y="136" textAnchor="middle" fill="#a0a0a0" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Slack + CRM</text>

    <rect x="40" y="240" width="100" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="90" y="260" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">TRIGGER</text>
    <text x="90" y="276" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Invoice Due</text>

    <rect x="200" y="240" width="100" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="250" y="260" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">ACTION</text>
    <text x="250" y="276" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Send Reminder</text>

    <rect x="360" y="240" width="110" height="52" rx="6" fill="#141414" stroke="#222" strokeWidth="0.75" />
    <text x="415" y="260" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">LOG</text>
    <text x="415" y="276" textAnchor="middle" fill="#8a8a8a" fontSize="11" fontFamily="Inter Tight" fontWeight="500">Update Sheet</text>

    <line x1="140" y1="106" x2="200" y2="86" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />
    <line x1="140" y1="106" x2="200" y2="166" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />
    <line x1="300" y1="86" x2="360" y2="126" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />
    <line x1="300" y1="166" x2="360" y2="126" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />
    <line x1="140" y1="266" x2="200" y2="266" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />
    <line x1="300" y1="266" x2="360" y2="266" stroke="#222" strokeWidth="0.75" strokeDasharray="4 4" />

    <rect x="200" y="320" width="140" height="58" rx="6" fill="#161616" stroke="#333" strokeWidth="1" />
    <text x="270" y="342" textAnchor="middle" fill="#5a5a5a" fontSize="8" fontFamily="Inter Tight" letterSpacing="1.5">RUNNING NOW</text>
    <text x="270" y="362" textAnchor="middle" fill="#d0d0d0" fontSize="12" fontFamily="Inter Tight" fontWeight="500">Weekly Report</text>
    <circle cx="216" cy="349" r="3.5" fill="#4ade80" opacity="0.8" />
    <circle cx="216" cy="349" r="6" fill="#4ade80" opacity="0.1" />

    <polygon points="200,86 193,82 193,90" fill="#222" />
    <polygon points="200,166 193,162 193,170" fill="#222" />
    <polygon points="360,126 353,122 353,130" fill="#222" />
    <polygon points="200,266 193,262 193,270" fill="#222" />
    <polygon points="360,266 353,262 353,270" fill="#222" />
  </svg>
);

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] flex flex-col">
      <header className="px-8 lg:px-14 py-6 flex items-center justify-between border-b border-[#1a1a1a]">
        <img src="/logo.png" alt="StreamlineFlo" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-base text-[#999] hover:text-[#b0b0b0] transition-colors hidden md:block">Services</a>
          <a href="#how-it-works" className="text-base text-[#999] hover:text-[#b0b0b0] transition-colors hidden md:block">How it works</a>
          <button
            onClick={scrollToForm}
            className="text-base text-[#e0e0e0] border border-[#2a2a2a] px-5 py-2.5 hover:border-[#555] hover:bg-[#141414] transition-all"
          >
            Get in touch
          </button>
        </nav>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="flex flex-col justify-end px-8 lg:px-14 pb-16 pt-16 lg:border-r border-[#1a1a1a]">
          <div className="mb-6">
            <span className="inline-block text-xs tracking-[0.2em] text-[#888] uppercase border border-[#222] px-3 py-1.5">
              Workflow Automation
            </span>
          </div>
          <h1
            className="text-[#f0f0f0] font-semibold mb-8"
            style={{ fontSize: 'clamp(3.2rem, 6.5vw, 6.4rem)', lineHeight: 0.93, letterSpacing: '-0.04em' }}
          >
            Stop paying<br />
            people to do<br />
            robot work.
          </h1>
          <p className="text-[#c8c8c8] text-xl leading-relaxed max-w-md mb-10">
            We build automation that replaces the manual work your team keeps doing by hand. Less overhead. More output.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 border-t border-[#1a1a1a] pt-8">
            <button
              onClick={scrollToForm}
              className="text-base text-[#0e0e0e] bg-[#e8e8e8] px-8 py-4 font-medium hover:bg-white transition-colors whitespace-nowrap"
            >
              Book a free audit →
            </button>
            <a href="#how-it-works" className="text-base text-[#999] hover:text-[#c8c8c8] transition-colors py-4">
              See how it works
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center px-8 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0c0c0c] pointer-events-none" />
          <FlowIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
