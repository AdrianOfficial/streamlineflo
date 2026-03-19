import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col bg-white">
      {/* Nav */}
      <header className="border-b border-[#e5e7eb]">
        <div className="container mx-auto px-8 py-5 flex items-center justify-between">
          <img src="/logo.png" alt="StreamlineFlo" className="h-9 w-auto" />
          <button
            onClick={scrollToForm}
            className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors"
          >
            Get in touch
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm text-[#6b7280] mb-6 tracking-wide uppercase font-medium">
              Workflow Automation
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-[#111827] leading-[1.08] mb-8">
              Your team shouldn't be doing robot work.
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed mb-10 max-w-lg">
              We build custom automation systems that handle your repetitive processes —
              so your people can do the work that actually moves your business forward.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#111827] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-[#1f2937] transition-colors"
            >
              Book a free audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
