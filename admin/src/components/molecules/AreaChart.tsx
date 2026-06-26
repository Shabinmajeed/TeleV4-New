export default function AreaChart() {
  return (
    <div>
      <div className="relative w-full h-[180px] mb-6">
        <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(37,99,235,0.2)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0)" />
            </linearGradient>
            <linearGradient id="gray-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(148,163,184,0.2)" />
              <stop offset="100%" stopColor="rgba(148,163,184,0)" />
            </linearGradient>
          </defs>
          <path d="M0 80 L 50 100 L 100 110 L 150 110 L 200 100 L 250 100 L 300 80 L 300 120 L 0 120 Z" fill="url(#gray-grad)" />
          <path d="M0 80 L 50 100 L 100 110 L 150 110 L 200 100 L 250 100 L 300 80" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="0" cy="80" r="3" fill="#94a3b8" />
          <circle cx="50" cy="100" r="3" fill="#94a3b8" />
          <circle cx="100" cy="110" r="3" fill="#94a3b8" />
          <circle cx="150" cy="110" r="3" fill="#94a3b8" />
          <circle cx="200" cy="100" r="3" fill="#94a3b8" />
          <circle cx="250" cy="100" r="3" fill="#94a3b8" />
          <circle cx="300" cy="80" r="3" fill="#94a3b8" />
          <path d="M0 20 L 50 40 L 100 30 L 150 60 L 200 25 L 250 80 L 300 10 L 300 120 L 0 120 Z" fill="url(#blue-grad)" />
          <path d="M0 20 L 50 40 L 100 30 L 150 60 L 200 25 L 250 80 L 300 10" fill="none" stroke="#2563eb" strokeWidth="2" />
          <circle cx="0" cy="20" r="3" fill="#2563eb" />
          <circle cx="50" cy="40" r="3" fill="#2563eb" />
          <circle cx="100" cy="30" r="3" fill="#2563eb" />
          <circle cx="150" cy="60" r="3" fill="#2563eb" />
          <circle cx="200" cy="25" r="3" fill="#2563eb" />
          <circle cx="250" cy="80" r="3" fill="#2563eb" />
          <circle cx="300" cy="10" r="3" fill="#2563eb" />
        </svg>
      </div>
      <div className="flex justify-start gap-10 mt-1 pl-2.5">
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
            <span className="w-4 h-0.5 bg-[#94a3b8] relative after:absolute after:top-[-3px] after:left-1 after:w-2 after:h-2 after:rounded-full after:bg-[#94a3b8]" /> Last Month
          </div>
          <div className="text-sm font-bold text-[var(--text-dark)]">150</div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
            <span className="w-4 h-0.5 bg-[#2563eb] relative after:absolute after:top-[-3px] after:left-1 after:w-2 after:h-2 after:rounded-full after:bg-[#2563eb]" /> This Month
          </div>
          <div className="text-sm font-bold text-[#2563eb]">278</div>
        </div>
      </div>
    </div>
  );
}
