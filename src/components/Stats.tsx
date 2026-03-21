const stats = [
  { value: '50+', label: 'Automations built' },
  { value: '10k+', label: 'Hours saved for clients' },
  { value: '48h', label: 'Avg. time to first prototype' },
  { value: '100%', label: 'Client retention rate' },
];

const Stats = () => {
  return (
    <section className="bg-[#f0f0ee] border-t border-[#e8e8e6]">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#e8e8e6]">
        {stats.map((s) => (
          <div key={s.label} className="px-10 py-14">
            <p
              className="font-semibold mb-3 leading-none text-[#0a0a0a]"
              style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
            >
              {s.value}
            </p>
            <p className="text-[#666] text-lg mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
