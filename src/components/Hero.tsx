const FlowIllustration = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Grid dots */}
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 13 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 40 + 20}
          cy={row * 42 + 20}
          r="1.5"
          fill="#2a2a2a"
        />
      ))
    )}

    {/* Flow nodes */}
    <rect x="40" y="80" width="100" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="90" y="100" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">TRIGGER</text>
    <text x="90" y="116" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">New Lead</text>

    <rect x="200" y="60" width="100" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="250" y="80" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">ACTION</text>
    <text x="250" y="96" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Enrich Data</text>

    <rect x="200" y="140" width="100" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="250" y="160" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">ACTION</text>
    <text x="250" y="176" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Score Lead</text>

    <rect x="360" y="100" width="110" height="52" rx="4" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="1" />
    <text x="415" y="120" textAnchor="middle" fill="#6a6a6a" fontSize="9" fontFamily="Inter">NOTIFY</text>
    <text x="415" y="136" textAnchor="middle" fill="#c0c0c0" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Slack + CRM</text>

    <rect x="40" y="240" width="100" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="90" y="260" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">TRIGGER</text>
    <text x="90" y="276" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Invoice Due</text>

    <rect x="200" y="240" width="100" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="250" y="260" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">ACTION</text>
    <text x="250" y="276" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Send Reminder</text>

    <rect x="360" y="240" width="110" height="52" rx="4" fill="#161616" stroke="#2e2e2e" strokeWidth="1" />
    <text x="415" y="260" textAnchor="middle" fill="#5a5a5a" fontSize="9" fontFamily="Inter">LOG</text>
    <text x="415" y="276" textAnchor="middle" fill="#9a9a9a" fontSize="11" fontFamily="Inter Tight" fontWeight="600">Update Sheet</text>

    {/* Connector lines */}
    <line x1="140" y1="106" x2="200" y2="86" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="140" y1="106" x2="200" y2="166" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="300" y1="86" x2="360" y2="120" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="300" y1="166" x2="360" y2="130" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="140" y1="266" x2="200" y2="266" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="300" y1="266" x2="360" y2="266" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 3" />

    {/* Highlight node — the active automation */}
    <rect x="200" y="320" width="140" height="58" rx="4" fill="#1c1c1c" stroke="#484848" strokeWidth="1.5" />
    <text x="270" y="342" textAnchor="middle" fill="#7a7a7a" fontSize="9" fontFamily="Inter" letterSpacing="2">RUNNING NOW</text>
    <text x="270" y="362" textAnchor="middle" fill="#e8e8e8" fontSize="13" fontFamily="Inter Tight" fontWeight="700">Weekly Report</text>
    {/* Pulse dot */}
    <circle cx="216" cy="349" r="4" fill="#4ade80" opacity="0.9" />
    <circle cx="216" cy="349" r="7" fill="#4ade80" opacity="0.15" />

    {/* Arrow heads on connectors */}
    <polygon points="200,84 192,80 192,88" fill="#2a2a2a" />
    <polygon points="200,164 192,160 192,168" fill="#2a2a2a" />
    <polygon points="360,118 352,114 352,122" fill="#2a2a2a" />
    <polygon points="200,266 192,262 192,270" fill="#2a2a2a" />
    <polygon points="360,266 352,262 352,270" fill="#2a2a2a" />
  </svg>
);

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] flex flex-col">
      {/* Nav */}
      <header className="px-8 lg:px-14 py-6 flex items-center justify-between border-b border-[#1e1e1e]">
        <img
          src="/logo.png"
          alt="StreamlineFlo"
          className="h-8 w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <nav className="flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-[#5a5a5a] hover:text-[#c0c0c0] transition-colors hidden md:block"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-[#5a5a5a] hover:text-[#c0c0c0] transition-colors hidden md:block"
          >
            How it works
          </a>
          <button
            onClick={scrollToForm}
            className="text-sm text-[#f0f0f0] border border-[#2e2e2e] px-5 py-2 hover:border-[#5a5a5a] hover:bg-[#161616] transition-all"
          >
            Get in touch
          </button>
        </nav>
      </header>

      {/* Hero body */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — text */}
        <div className="flex flex-col justify-end px-8 lg:px-14 pb-16 pt-16 lg:border-r border-[#1a1a1a]">
          <div className="mb-6">
            <span className="inline-block text-xs tracking-[0.25em] text-[#5a5a5a] uppercase border border-[#222] px-3 py-1.5">
              Workflow Automation
            </span>
          </div>
          <h1
            className="text-[#f0f0f0] font-black mb-8"
            style={{
              fontSize: 'clamp(3.2rem, 6.5vw, 6.4rem)',
              lineHeight: 0.93,
              letterSpacing: '-0.045em',
            }}
          >
            Stop paying<br />
            people to do<br />
            robot work.
          </h1>
          <p className="text-[#9a9a9a] text-lg leading-relaxed max-w-md mb-10">
            We build automation that replaces the manual work your team keeps doing by hand. Less overhead. More output.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 border-t border-[#1e1e1e] pt-8">
            <button
              onClick={scrollToForm}
              className="text-base text-[#0e0e0e] bg-[#f0f0f0] px-8 py-4 font-semibold hover:bg-white transition-colors whitespace-nowrap"
            >
              Book a free audit →
            </button>
            <a
              href="#how-it-works"
              className="text-base text-[#5a5a5a] hover:text-[#9a9a9a] transition-colors py-4"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right — illustration */}
        <div className="hidden lg:flex items-center justify-center px-8 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
          <FlowIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
