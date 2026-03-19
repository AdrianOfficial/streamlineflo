import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_uf4mka8';
const EMAILJS_TEMPLATE_ID = 'template_pq7ii6s';
const EMAILJS_PUBLIC_KEY = 'WjT4D4l5GOzfZPMao';

const benefits = [
  "Comprehensive workflow analysis",
  "Custom automation recommendations",
  "ROI projections and cost savings",
  "Implementation roadmap",
  "Priority automation opportunities",
];

const AuditForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: `Company: ${formData.company}`,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Request received!",
        description: "We'll be in touch within 24 hours to schedule your free audit.",
      });

      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@streamlineflo.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Get your free workflow audit
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                In a 30-minute call, we'll map out where automation can save your team
                the most time — with zero commitment or cost.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 font-medium">No commitment required.</strong>{" "}
                  This audit is completely free. We'll provide honest insights whether or not you
                  choose to work with us.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Book your free audit</h3>
              <p className="text-slate-500 text-sm mb-6">Takes less than 2 minutes. We'll respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Smith"
                    className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Business email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@company.com"
                    className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                    Company name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Company Inc."
                    className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Book Free Audit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-400 text-center leading-relaxed">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
