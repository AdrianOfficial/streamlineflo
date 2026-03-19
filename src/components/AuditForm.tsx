import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_uf4mka8';
const EMAILJS_TEMPLATE_ID = 'template_pq7ii6s';
const EMAILJS_PUBLIC_KEY = 'WjT4D4l5GOzfZPMao';

const AuditForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      toast({ title: "We'll be in touch.", description: "Expect a reply within 24 hours." });
      setFormData({ name: '', email: '', company: '' });
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Email us at hello@streamlineflo.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-[#0e0e0e] border border-[#272727] text-[#f0f0f0] placeholder-[#383838] px-4 py-3.5 text-base focus:border-[#5a5a5a] focus:outline-none transition-colors';

  return (
    <section
      id="audit-form"
      className="bg-[#0d0d0d] border-t border-[#1e1e1e] px-8 lg:px-14 py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        {/* Left */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-6">
              Free Audit
            </p>
            <h2
              className="text-[#f0f0f0] font-black mb-6"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
              }}
            >
              Find out what's costing your team time.
            </h2>
            <p className="text-[#8a8a8a] text-lg leading-relaxed mb-8">
              30 minutes. We'll map out exactly which parts of your workflow can be automated and what it's worth. No pitch. No commitment.
            </p>
            <div className="flex flex-col gap-4">
              {['Free, no obligation', 'Written summary delivered after the call', 'We work with any tool stack'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="#2e2e2e" strokeWidth="1" />
                    <polyline points="5,8 7,10.5 11,6" stroke="#5a5a5a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#7a7a7a] text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-[#7a7a7a] mb-2">Full name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-[#7a7a7a] mb-2">Work email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm text-[#7a7a7a] mb-2">Company</label>
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Your Company"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full bg-[#f0f0f0] text-[#0e0e0e] text-base font-bold py-4 hover:bg-white transition-colors disabled:opacity-40"
          >
            {isSubmitting ? 'Sending…' : 'Book free audit →'}
          </button>
          <p className="text-sm text-[#4a4a4a] text-center">
            No spam. Your details stay with us.
          </p>
        </form>
      </div>
    </section>
  );
};

export default AuditForm;
