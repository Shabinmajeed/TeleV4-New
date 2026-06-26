'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export default function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!email.includes('@')) { setError('Please enter a valid email address.'); return; }
    if (!password.trim()) { setError('Please enter your password.'); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto mb-10">
      {/* Mascot */}
      <img
        src="/assets/Heali-peak.png"
        alt="Heali Mascot"
        className="absolute -top-[170px] -right-[150px] w-[300px] h-auto z-0 pointer-events-none"
      />

      <div className="relative bg-[var(--surface)] rounded-[var(--radius-lg)] shadow-[0_15px_35px_rgba(0,0,0,0.08)] z-10 flex flex-col overflow-hidden">
        <div className="p-[35px_35px_25px]">
          {error && (
            <div className="flex items-center gap-2 p-3.5 mb-4 bg-[#fef2f2] border border-[#fecaca] rounded-[var(--radius)] text-sm text-[var(--danger)] font-medium">
              <Icon name="x" size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-[18px]">
              <Input
                icon="user"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                autoComplete="email"
              />
            </div>

            <div className="mb-[18px]">
              <Input
                icon="lock"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                autoComplete="current-password"
                showPasswordToggle
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />
            </div>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          <div className="text-center text-[13px] font-semibold mt-6">
            <a href="#">Forgot Password?</a>
          </div>
        </div>

        <div className="bg-[var(--surface-alt)] py-5.5 px-6 text-center text-[13px] font-semibold text-[var(--text-main)]">
          Having issues signing in? <a href="#">Contact Tech Team</a>
        </div>
      </div>
    </div>
  );
}
