import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'sm-outline' | 'sm-primary';
  children: ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants: Record<string, string> = {
    primary: 'w-full py-4 px-6 bg-[var(--primary)] text-white rounded-[var(--radius)] text-base hover:bg-[var(--primary-hover)]',
    outline: 'px-3 py-1.5 border border-[#cbd5e1] rounded-md bg-transparent text-xs font-semibold text-[#334155] hover:bg-[#f8fafc] hover:border-[#94a3b8]',
    'sm-outline': 'px-3.5 py-1.5 border border-[var(--border)] rounded-lg bg-[var(--surface)] text-[var(--text-soft)] text-sm font-semibold hover:border-[#94a3b8] hover:text-[var(--text-dark)] hover:bg-[#f8fafc]',
    'sm-primary': 'px-3.5 py-1.5 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--primary-hover)]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
