const services = [
  {
    num: '01',
    title: 'AI Process Automation',
    description:
      'Intelligent automation that handles the repetitive decisions your team makes every day — routing, approvals, notifications, data entry — without anyone lifting a finger.',
  },
  {
    num: '02',
    title: 'Business Process Automation',
    description:
      'End-to-end workflow automation that connects your tools and removes manual hand-offs. Operations that used to need constant supervision run on their own.',
  },
  {
    num: '03',
    title: 'Reporting & Analytics',
    description:
      'Automated dashboards and scheduled reports so you always know how your processes are performing — without anyone pulling data by hand.',
  },
  {
    num: '04',
    title: 'Maintenance & Support',
    description:
      'Ongoing monitoring and rapid updates as your stack evolves. When something breaks or a tool changes its API, we fix it before it becomes your problem.',
  },
  {
    num: '05',
    title: 'Custom Development',
    description:
      'When nothing off-the-shelf fits — bespoke automation built around your exact systems, including legacy software and complex internal business logic.',
  },
];

const Services = () => {
  return (
    <section className="bg-[#0e0e0e] px-8 lg:px-14 py-20 border-t border-[#1e1e1e]">
      <p className="text-xs text-[#6a6a6a] tracking-[0.25em] uppercase mb-16">
        What we do
      </p>

      <div>
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`flex flex-col md:flex-row gap-6 md:gap-12 py-7 ${
              i !== services.length - 1 ? 'border-b border-[#1a1a1a]' : ''
            }`}
          >
            <span className="text-xs text-[#5a5a5a] font-mono flex-shrink-0 mt-0.5 w-6">
              {s.num}
            </span>
            <h3 className="text-[#c0c0c0] font-medium text-sm flex-shrink-0 md:w-48">
              {s.title}
            </h3>
            <p className="text-[#9a9a9a] text-sm leading-relaxed max-w-xl">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
