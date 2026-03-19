import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>StreamlineFlo | AI Automation to Save Time & Boost Efficiency</title>
        <meta
          name="description"
          content="StreamlineFlo helps businesses save time, reduce manual work, and boost efficiency with AI-powered workflow automation. Automate processes, optimize operations, and scale smarter."
        />
        <meta
          name="keywords"
          content="StreamlineFlo, AI automation, workflow automation, business automation, process optimization, intelligent automation, save time, boost efficiency"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://streamlineflo.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="StreamlineFlo | Save Time & Boost Efficiency with AI Automation" />
        <meta property="og:description" content="StreamlineFlo helps businesses save time, reduce manual work, and boost efficiency with AI-powered workflow automation." />
        <meta property="og:url" content="https://streamlineflo.com/" />
        <meta property="og:image" content="https://streamlineflo.com/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StreamlineFlo | Save Time & Boost Efficiency with AI Automation" />
        <meta name="twitter:description" content="StreamlineFlo helps businesses save time, reduce manual work, and boost efficiency with AI-powered workflow automation." />
        <meta name="twitter:image" content="https://streamlineflo.com/og-image.png" />
      </Helmet>

      <Hero />
      <Services />
      <AuditForm />
      <Footer />
    </div>
  );
};

export default Index;
