import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/logo.png"
            alt="StreamlineFlo"
            className="h-10 w-auto"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToForm}
            className="border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium"
          >
            Get Free Audit
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              AI Workflow Automation
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 animate-fade-in-delay-1">
              Automate the work.{" "}
              <span className="text-blue-600">Scale the results.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-delay-2">
              StreamlineFlo helps businesses eliminate repetitive tasks with intelligent
              automation — so your team can focus on work that actually moves the needle.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-delay-3">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 h-12 rounded-lg font-medium shadow-sm"
              >
                Get Your Free Workflow Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-delay-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">90%</div>
                <div className="text-sm text-slate-500 mt-1">Time saved on manual tasks</div>
              </div>
              <div className="text-center border-x border-slate-100">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-500 mt-1">Automated operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">ROI</div>
                <div className="text-sm text-slate-500 mt-1">Measurable returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
