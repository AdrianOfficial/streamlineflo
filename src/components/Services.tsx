import { Bot, Workflow, BarChart3, Clock, Cpu, Check } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Process Automation",
    description: "Intelligent automation that learns and adapts to your business processes, eliminating repetitive manual work around the clock.",
    features: ["Smart decision making", "Machine learning algorithms", "24/7 automated operation"]
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline complex workflows with advanced automation tools, workflow management systems, and seamless third-party integrations.",
    features: ["Automated workflows", "Process optimization", "Enterprise integration"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven visibility into your automated processes — measure ROI, track performance, and find new opportunities to optimize.",
    features: ["Performance metrics", "Process analytics", "ROI tracking"]
  },
  {
    icon: Clock,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your automations running smoothly. We monitor, optimize, and resolve issues before they impact your business.",
    features: ["24/7 monitoring", "Performance optimization", "Expert technical support"]
  },
  {
    icon: Cpu,
    title: "Custom Automation Development",
    description: "Bespoke automation solutions built around your exact requirements — including legacy system integration and unique business logic.",
    features: ["Custom-built solutions", "Legacy system integration"]
  }
];

const Services = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What we do
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            End-to-end automation services designed to cut manual work, reduce errors,
            and give your team more time for what matters.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
