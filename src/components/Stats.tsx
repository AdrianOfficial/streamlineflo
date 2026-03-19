const stats = [
  { value: '50+', label: 'Automations built' },
  { value: '10,000+', label: 'Hours saved for clients' },
  { value: '48h', label: 'Average time to first prototype' },
  { value: '100%', label: 'Client retention rate' },
];

const Stats = () => {
  return (
    <section className="bg-[#0e0e0e] border-t border-[#1e1e1e] px-8 lg:px-14 py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0e0e0e] px-8 py-10">
            <p
              className="text-[#f0f0f0] font-bold mb-2"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', letterSpacing: '-0.03em' }}
            >
              {s.value}
            </p>
            <p className="text-xs text-[#6a6a6a] leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
