import { ReactNode } from 'react';

interface BadgeProps {
  variant: 'booked' | 'pending' | 'new' | 'inactive' | 'nav';
  count?: number | string;
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function Badge({ variant, count, children, active, onClick }: BadgeProps) {
  if (variant === 'nav') {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border transition-all ${
          active
            ? 'bg-[var(--text-dark)] text-white border-[var(--text-dark)]'
            : 'bg-[var(--surface)] text-[var(--text-soft)] border-[var(--border)] hover:border-[#94a3b8] hover:text-[var(--text-dark)]'
        }`}
      >
        {children}
        {count !== undefined && <span className="font-bold ml-1">{count}</span>}
      </button>
    );
  }

  const statusStyles: Record<string, string> = {
    booked: 'bg-[#f0fdf4] text-[#166534] border-[#bbf7d0]',
    pending: 'bg-[#fffbeb] text-[#92400e] border-[#fde68a]',
    new: 'bg-[#eff6ff] text-[#1e40af] border-[#bfdbfe]',
    inactive: 'bg-[#f1f5f9] text-[#475569] border-[#e2e8f0]',
  };

  const dotColors: Record<string, string> = {
    booked: 'bg-[#22c55e]',
    pending: 'bg-[#f59e0b]',
    new: 'bg-[#3b82f6]',
    inactive: 'bg-[#94a3b8]',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusStyles[variant]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      {children}
    </span>
  );
}
