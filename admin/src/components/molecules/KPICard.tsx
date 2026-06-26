import Icon from '../atoms/Icon';

interface KPICardProps {
  icon: string;
  trend: string;
  value: string;
  label: string;
  trendDirection: 'up' | 'down';
}

export default function KPICard({ icon, trend, value, label, trendDirection }: KPICardProps) {
  return (
    <article className="border border-[var(--border)] rounded-[var(--radius-md)] p-4 flex flex-col">
      <div className="flex justify-between mb-3 items-start">
        <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center">
          <Icon name={icon} size={16} />
        </div>
        <div className="text-[10px] text-[#3b82f6] text-right leading-tight max-w-[60px]">{trend}</div>
      </div>
      <div className="text-xl font-bold text-[var(--text-dark)] mb-1">{value}</div>
      <div className="flex justify-between items-end">
        <span className="text-xs text-[#475569] leading-tight w-[60%]">{label}</span>
        <span className={`text-xl font-bold leading-none ${trendDirection === 'up' ? 'text-[var(--success)]' : 'text-[var(--danger)]'}`}>
          <Icon name={trendDirection === 'up' ? 'arrowUp' : 'arrowDown'} size={20} />
        </span>
      </div>
    </article>
  );
}
