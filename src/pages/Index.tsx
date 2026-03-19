import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>StreamlineFlo — Workflow Automation</title>
        <meta
          name="description"
          content="StreamlineFlo builds custom automation systems that handle your repetitive processes — so your team can focus on work that moves the business forward."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://streamlineflo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="StreamlineFlo — Workflow Automation" />
        <meta property="og:description" content="Custom automation systems that handle your repetitive processes." />
        <meta property="og:url" content="https://streamlineflo.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero />
      <Services />
      <AuditForm />
      <Footer />
    </div>
  );
};

export default Index;
