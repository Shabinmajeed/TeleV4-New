import { ReactNode } from 'react';

interface TypoProps {
  variant: 'page-title' | 'card-title' | 'card-subtitle' | 'header-tab' | 'kpi-value' | 'kpi-label' | 'info-label' | 'info-text' | 'nav-text' | 'brand-name' | 'brand-tagline';
  children: ReactNode;
  className?: string;
}

export default function Typography({ variant, children, className = '' }: TypoProps) {
  const styles: Record<string, string> = {
    'page-title': 'text-[26px] font-bold text-[var(--text-muted)] text-center mb-6',
    'card-title': 'text-base font-bold text-[var(--text-dark)]',
    'card-subtitle': 'text-[13px] text-[var(--text-soft)]',
    'header-tab': 'text-xl font-bold text-[var(--text-dark)] pb-2 border-b-2 border-[var(--border)] relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[3px] after:bg-[var(--text-dark)] after:rounded-[2px_2px_0_0]',
    'kpi-value': 'text-xl font-bold text-[var(--text-dark)] mb-1',
    'kpi-label': 'text-xs text-[#475569] leading-tight w-[60%]',
    'info-label': 'text-[11px] font-bold text-[var(--primary)] uppercase tracking-wide flex items-center gap-1.5',
    'info-text': 'text-sm italic text-[#334155] leading-relaxed',
    'nav-text': 'text-sm font-semibold overflow-hidden',
    'brand-name': 'text-[42px] font-bold tracking-tight text-[var(--primary-dark)]',
    'brand-tagline': 'text-sm font-medium text-[var(--primary-subtitle)]',
  };

  return <div className={`${styles[variant]} ${className}`}>{children}</div>;
}
