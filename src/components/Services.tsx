const AiIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="20" height="20" rx="2" stroke="#3a3a3a" strokeWidth="1.2" />
    <circle cx="11" cy="11" r="3" stroke="#5a5a5a" strokeWidth="1.2" />
    <line x1="11" y1="1" x2="11" y2="5" stroke="#3a3a3a" strokeWidth="1.2" />
    <line x1="11" y1="17" x2="11" y2="21" stroke="#3a3a3a" strokeWidth="1.2" />
    <line x1="1" y1="11" x2="5" y2="11" stroke="#3a3a3a" strokeWidth="1.2" />
    <line x1="17" y1="11" x2="21" y2="11" stroke="#3a3a3a" strokeWidth="1.2" />
  </svg>
);

const FlowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="4" width="7" height="6" rx="1.5" stroke="#3a3a3a" strokeWidth="1.2" />
    <rect x="14" y="4" width="7" height="6" rx="1.5" stroke="#3a3a3a" strokeWidth="1.2" />
    <rect x="7.5" y="13" width="7" height="6" rx="1.5" stroke="#5a5a5a" strokeWidth="1.2" />
    <line x1="8" y1="7" x2="14" y2="7" stroke="#3a3a3a" strokeWidth="1.2" />
    <line x1="11" y1="10" x2="11" y2="13" stroke="#3a3a3a" strokeWidth="1.2" />
  </svg>
);

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="20" x2="20" y2="20" stroke="#3a3a3a" strokeWidth="1.2" />
    <rect x="3" y="12" width="4" height="8" rx="1" stroke="#3a3a3a" strokeWidth="1.2" />
    <rect x="9" y="6" width="4" height="14" rx="1" stroke="#5a5a5a" strokeWidth="1.2" />
    <rect x="15" y="9" width="4" height="11" rx="1" stroke="#3a3a3a" strokeWidth="1.2" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3a4 4 0 0 1-4 6.5L4.5 15A2 2 0 1 0 7 17.5l5.5-5.5A4 4 0 0 1 14 3z" stroke="#3a3a3a" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="5.5" cy="16.5" r="1" fill="#5a5a5a" />
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="7,6 2,11 7,16" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="15,6 20,11 15,16" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="13" y1="4" x2="9" y2="18" stroke="#5a5a5a" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    num: '01',
    icon: <AiIcon />,
    title: 'AI Process Automation',
    description:
      'Intelligent automation that handles the repetitive decisions your team makes every day — routing, approvals, notifications, data entry — without anyone lifting a finger.',
    tags: ['LLM workflows', 'Decision logic', 'Auto-classification'],
  },
  {
    num: '02',
    icon: <FlowIcon />,
    title: 'Business Process Automation',
    description:
      'End-to-end workflow automation that connects your tools and removes manual hand-offs. Operations that used to need constant supervision run on their own.',
    tags: ['Tool integrations', 'Multi-step workflows', 'Zapier / Make / n8n'],
  },
  {
    num: '03',
    icon: <ChartIcon />,
    title: 'Reporting & Analytics',
    description:
      'Automated dashboards and scheduled reports so you always know how your processes are performing — without anyone pulling data by hand.',
    tags: ['Live dashboards', 'Scheduled reports', 'Data pipelines'],
  },
  {
    num: '04',
    icon: <WrenchIcon />,
    title: 'Maintenance & Support',
    description:
      'Ongoing monitoring and rapid updates as your stack evolves. When something breaks or a tool changes its API, we fix it before it becomes your problem.',
    tags: ['24h response', 'Proactive monitoring', 'API updates'],
  },
  {
    num: '05',
    icon: <CodeIcon />,
    title: 'Custom Development',
    description:
      'When nothing off-the-shelf fits — bespoke automation built around your exact systems, including legacy software and complex internal business logic.',
    tags: ['Legacy systems', 'Custom APIs', 'Internal tools'],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0e0e0e] px-8 lg:px-14 py-24 border-t border-[#1e1e1e]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs text-[#5a5a5a] tracking-[0.25em] uppercase mb-5">What we do</p>
          <h2
            className="text-[#f0f0f0] font-black"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
            }}
          >
            Everything you need<br />to run on autopilot.
          </h2>
        </div>
        <p className="text-[#7a7a7a] text-base leading-relaxed max-w-xs">
          We don't sell software licences. We build systems that work for your specific business, then we maintain them.
        </p>
      </div>

      <div className="border-t border-[#1a1a1a]">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`flex flex-col md:flex-row gap-6 md:gap-10 py-9 ${
              i !== services.length - 1 ? 'border-b border-[#161616]' : ''
            }`}
          >
            <div className="flex items-start gap-4 md:w-64 flex-shrink-0">
              <span className="text-xs text-[#3a3a3a] font-mono mt-1 w-5 flex-shrink-0">{s.num}</span>
              <div className="mt-0.5 flex-shrink-0">{s.icon}</div>
              <h3 className="text-[#d0d0d0] font-semibold text-base leading-snug">{s.title}</h3>
            </div>
            <p className="text-[#8a8a8a] text-base leading-relaxed max-w-xl flex-1">{s.description}</p>
            <div className="flex flex-wrap gap-2 md:w-52 flex-shrink-0 md:justify-end items-start">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#4a4a4a] border border-[#1e1e1e] px-2.5 py-1 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
