export default function LineChart() {
  return (
    <div>
      <div className="relative w-full h-[180px] mb-3 ml-[30px] w-[calc(100%-30px)]">
        {/* Y-axis */}
        <div className="absolute -left-[30px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#94a3b8]">
          <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
        </div>
        {/* Grid lines */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between z-0">
          {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-[var(--border-light)]" />)}
        </div>
        {/* SVG Lines */}
        <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="absolute w-full h-full z-[1]">
          <path d="M0 60 C 50 20, 100 20, 150 100 C 200 150, 250 100, 300 60 C 350 20, 400 120, 400 120" fill="none" stroke="#60a5fa" strokeWidth="2" />
          <path d="M0 120 C 50 90, 100 140, 150 140 C 200 140, 250 20, 300 40 C 350 60, 400 140, 400 140" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M0 80 C 50 120, 100 160, 150 120 C 200 80, 250 40, 300 80 C 350 120, 400 100, 400 100" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <line x1="230" y1="25" x2="230" y2="160" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="230" cy="25" r="4" fill="#ef4444" />
        </svg>
      </div>
      <div className="flex justify-between text-[10px] text-[#94a3b8] mb-4 pl-[30px]">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        <span>Jun</span><span>Jul</span><span>Sept</span><span>Oct</span><span>Nov</span><span>Dec</span>
      </div>
      <div className="flex justify-center gap-4">
        <span className="flex items-center gap-1.5 text-[11px] text-[#475569]">
          <span className="w-3 h-3 bg-[#60a5fa] rounded-sm" /> Registered Users
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-[#475569]">
          <span className="w-3 h-3 bg-[#2563eb] rounded-sm" /> New Users
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-[#475569]">
          <span className="w-3 h-3 bg-[#94a3b8] rounded-sm" /> Others
        </span>
      </div>
    </div>
  );
}
