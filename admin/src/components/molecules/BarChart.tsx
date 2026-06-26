export default function BarChart() {
  const data = [
    { thisWeek: 55, lastWeek: 45 },
    { thisWeek: 70, lastWeek: 50 },
    { thisWeek: 25, lastWeek: 85 },
    { thisWeek: 60, lastWeek: 25 },
    { thisWeek: 45, lastWeek: 40 },
    { thisWeek: 65, lastWeek: 55 },
    { thisWeek: 85, lastWeek: 35 },
  ];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <div className="flex justify-between items-end h-40 ml-[30px] border-b border-[var(--border)] relative">
        {/* Y-axis */}
        <div className="absolute -left-[30px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#94a3b8]">
          <span>25k</span><span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>0</span>
        </div>
        {/* Grid lines */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between z-0">
          {[...Array(6)].map((_, i) => <div key={i} className="w-full h-px bg-[var(--border-light)]" />)}
        </div>
        {/* Bars */}
        {data.map((d, i) => (
          <div key={i} className="flex gap-1 items-end z-1 h-full w-[12%] justify-center">
            <div className="w-2.5 bg-[#2563eb] rounded-t-sm" style={{ height: `${d.thisWeek}%` }} />
            <div className="w-2.5 bg-[#94a3b8] opacity-50 rounded-t-sm" style={{ height: `${d.lastWeek}%` }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-[#94a3b8] mb-4 pl-[30px]">
        {days.map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="flex justify-center gap-4">
        <span className="flex items-center gap-1.5 text-[11px] text-[#475569]">
          <span className="w-3 h-3 bg-[#2563eb] rounded-sm" /> This Week
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-[#475569]">
          <span className="w-3 h-3 bg-[#94a3b8] opacity-50 rounded-sm" /> Last Week
        </span>
      </div>
    </div>
  );
}
