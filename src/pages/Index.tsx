import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <Helmet>
        <title>StreamlineFlo — Workflow Automation</title>
        <meta
          name="description"
          content="StreamlineFlo builds custom automation systems that handle your repetitive processes — so your team can focus on work that actually moves your business forward."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://streamlineflo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StreamlineFlo — Workflow Automation" />
        <meta property="og:description" content="Custom automation systems for businesses that have outgrown doing things manually." />
        <meta property="og:url" content="https://streamlineflo.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero />
      <Stats />
      <Problem />
      <Services />
      <HowItWorks />
      <Testimonials />
      <AuditForm />
      <Footer />
    </div>
  );
};

export default Index;
