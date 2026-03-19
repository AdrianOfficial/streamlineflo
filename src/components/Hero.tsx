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
        <button
          onClick={scrollToForm}
          className="text-xs text-[#5a5a5a] hover:text-[#f0f0f0] transition-colors tracking-widest uppercase"
        >
          Get in touch
        </button>
      </header>

      {/* Hero body — fills remaining height, content pins to bottom */}
      <div className="flex-1 flex flex-col justify-end px-8 lg:px-14 pb-16 pt-20">
        {/* Giant headline */}
        <h1
          className="text-[#f0f0f0] font-bold mb-12"
          style={{
            fontSize: 'clamp(2.8rem, 7.5vw, 7.2rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
          }}
        >
          Stop paying people<br />
          to do robot work.
        </h1>

        {/* Sub-row: description left, CTA right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#1e1e1e] pt-8">
          <p className="text-[#9a9a9a] text-base leading-relaxed max-w-xs">
            We build custom workflow automation for businesses that have outgrown doing things manually.
          </p>
          <button
            onClick={scrollToForm}
            className="self-start md:self-auto text-sm text-[#f0f0f0] border border-[#2e2e2e] px-7 py-3.5 hover:border-[#5a5a5a] hover:bg-[#161616] transition-all whitespace-nowrap"
          >
            Book a free audit →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
