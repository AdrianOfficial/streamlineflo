const services = [
  {
    number: "01",
    title: "AI Process Automation",
    description: "We automate the repetitive decisions and tasks your team deals with daily — data entry, routing, approvals, notifications — using AI that adapts to how your business works.",
  },
  {
    number: "02",
    title: "Business Process Automation",
    description: "End-to-end workflow automation that connects your tools, eliminates manual hand-offs, and keeps your operations running without constant human input.",
  },
  {
    number: "03",
    title: "Analytics & Reporting",
    description: "Automated dashboards and reports delivered on schedule, so you always know how your processes are performing without pulling the data yourself.",
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description: "We keep your automations running. Ongoing monitoring, updates as your tools change, and fast turnaround if something breaks.",
  },
  {
    number: "05",
    title: "Custom Development",
    description: "When off-the-shelf doesn't cut it — bespoke automation built around your specific systems, including legacy software and complex internal workflows.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-24 border-t border-[#e5e7eb]">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-[#6b7280] tracking-wide uppercase font-medium mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] max-w-lg leading-tight">
            Everything you need to run on autopilot.
          </h2>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-[#e5e7eb]">
          {services.map((service) => (
            <div
              key={service.number}
              className="py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 group"
            >
              <div>
                <span className="text-xs text-[#9ca3af] font-mono">{service.number}</span>
                <h3 className="text-base font-semibold text-[#111827] mt-1">{service.title}</h3>
              </div>
              <p className="text-[#6b7280] leading-relaxed text-sm md:text-base max-w-2xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
