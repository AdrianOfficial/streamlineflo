import HeroCanvas from './HeroCanvas';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#f8f8f6] flex flex-col relative overflow-hidden">
      {/* Interactive dot-grid background */}
      <HeroCanvas />

      {/* Nav */}
      <header className="relative z-10 px-8 lg:px-16 py-5 flex items-center justify-between border-b border-[#e8e8e6] bg-[#f8f8f6]/80 backdrop-blur-sm">
        <img
          src="/logo.png"
          alt="StreamlineFlo"
          className="h-8 w-auto"
          style={{ filter: 'brightness(0)' }}
        />
        <nav className="flex items-center gap-8">
          <a href="#services"     className="text-base text-[#666] hover:text-[#111] transition-colors hidden md:block">Services</a>
          <a href="#how-it-works" className="text-base text-[#666] hover:text-[#111] transition-colors hidden md:block">How it works</a>
          <button
            onClick={scrollToForm}
            className="text-base text-[#f8f8f6] bg-[#111] px-5 py-2.5 hover:bg-[#333] transition-colors magnetic"
          >
            Get in touch
          </button>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 lg:px-16 pb-20 pt-20 max-w-4xl">
        {/* Badge */}
        <div
          className="mb-8 hero-enter"
          style={{ '--delay': '0ms' } as React.CSSProperties}
        >
          <span className="inline-block text-xs tracking-[0.2em] text-[#999] uppercase border border-[#ddd] px-3 py-1.5 bg-[#f8f8f6]/70">
            Workflow Automation
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-semibold mb-10 text-[#0a0a0a] hero-enter"
          style={{
            fontSize: 'clamp(3rem, 6.5vw, 6rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            '--delay': '80ms',
          } as React.CSSProperties}
        >
          Stop paying<br />
          people to do<br />
          robot work.
        </h1>

        {/* Body */}
        <p
          className="text-[#444] text-2xl leading-relaxed max-w-xl mb-12 hero-enter"
          style={{ '--delay': '180ms' } as React.CSSProperties}
        >
          We build automation that replaces the manual work your team keeps doing by hand.
          Less overhead. More output.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start gap-4 border-t border-[#e8e8e6] pt-8 hero-enter"
          style={{ '--delay': '280ms' } as React.CSSProperties}
        >
          <button
            onClick={scrollToForm}
            className="text-lg text-[#f8f8f6] bg-[#111] px-8 py-4 font-medium hover:bg-[#333] transition-colors whitespace-nowrap magnetic"
          >
            Book a free audit →
          </button>
          <a
            href="#how-it-works"
            className="text-lg text-[#888] hover:text-[#333] transition-colors py-4"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
