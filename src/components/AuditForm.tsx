import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_uf4mka8';
const EMAILJS_TEMPLATE_ID = 'template_pq7ii6s';
const EMAILJS_PUBLIC_KEY = 'WjT4D4l5GOzfZPMao';

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
        title: "We'll be in touch.",
        description: "Expect a message from us within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Please email us directly at hello@streamlineflo.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-24 bg-[#f9fafb] border-t border-[#e5e7eb]">
      <div className="container mx-auto px-8">
        <div className="max-w-lg">
          <p className="text-sm text-[#6b7280] tracking-wide uppercase font-medium mb-4">Free Audit</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4 leading-tight">
            See where you're losing time.
          </h2>
          <p className="text-[#6b7280] mb-10 leading-relaxed">
            In a free 30-minute call, we'll map out exactly which parts of your workflow
            can be automated and what that would mean for your team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Smith"
                className="w-full h-10 px-3 text-sm border border-[#d1d5db] rounded-md bg-white text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#111827] focus:border-[#111827] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@company.com"
                className="w-full h-10 px-3 text-sm border border-[#d1d5db] rounded-md bg-white text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#111827] focus:border-[#111827] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#374151] mb-1.5">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Your Company Inc."
                className="w-full h-10 px-3 text-sm border border-[#d1d5db] rounded-md bg-white text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#111827] focus:border-[#111827] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#111827] text-white text-sm font-medium h-10 px-6 rounded-md hover:bg-[#1f2937] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Book free audit
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-[#9ca3af] text-center pt-1">
              No commitment. We won't share your details with anyone.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
