const stats = [
  { value: '50+', label: 'Automations built' },
  { value: '10k+', label: 'Hours saved for clients' },
  { value: '48h', label: 'Avg. time to first prototype' },
  { value: '100%', label: 'Client retention rate' },
];

const Stats = () => {
  return (
    <section className="bg-[#0e0e0e] border-t border-[#1e1e1e]">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1a1a1a]">
        {stats.map((s) => (
          <div key={s.label} className="px-10 py-12">
            <p
              className="text-[#f0f0f0] font-black mb-2 leading-none"
              style={{ fontSize: 'clamp(2.6rem, 4vw, 3.8rem)', letterSpacing: '-0.04em' }}
            >
              {s.value}
            </p>
            <p className="text-[#6a6a6a] text-base mt-3">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
