import Icon from '../atoms/Icon';

export default function HealisaysPanel() {
  return (
    <aside className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col justify-center gap-3">
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--primary)] uppercase tracking-wide">
        <Icon name="lightbulb" size={16} />
        Heali says
      </div>
      <p className="text-sm italic text-[#334155] leading-relaxed">
        Wednesday is your peak revenue day. Launch a "Mid-Week Wellness" flash offer on Tuesday evenings targeting the "Others" user segment (the grey line in your User Insights). Converting just 10% of these visitors into active bookings could increase your weekly revenue by an estimated ₹12,000.
      </p>
    </aside>
  );
}
