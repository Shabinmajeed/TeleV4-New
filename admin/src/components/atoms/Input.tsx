import { InputHTMLAttributes, ReactNode } from 'react';
import Icon from './Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  showPassword?: boolean;
}

export default function Input({
  icon,
  error,
  showPasswordToggle,
  onTogglePassword,
  showPassword,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none">
          <Icon name={icon} size={20} />
        </div>
      )}
      <input
        className={`w-full py-4 ${icon ? 'pr-12 pl-12' : 'px-6'} bg-[var(--border-light)] border border-[var(--border)] rounded-[var(--radius)] text-[15px] font-[var(--font)] text-[var(--text-main)] transition-colors placeholder:text-[var(--text-placeholder)] placeholder:font-medium focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(42,115,212,0.12)] ${className}`}
        {...props}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-[var(--text-placeholder)] hover:text-[var(--text-muted)] transition-colors"
        >
          <Icon name={showPassword ? 'eye' : 'eyeOff'} size={20} />
        </button>
      )}
      {error && <p className="mt-1 text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}
