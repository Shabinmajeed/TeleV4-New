import LoginCard from '@/components/molecules/LoginCard';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-[#eef5fc] to-[#7aaaf6]">
      {/* Brand Header */}
      <div className="text-center mb-5">
        <img src="/assets/logo.png" alt="Telehealings Logo" className="w-[90px] h-[90px] mx-auto mb-3 object-contain" />
        <h1 className="text-[42px] font-bold tracking-tight text-[var(--primary-dark)] mb-1.5">Telehealings</h1>
        <p className="text-sm font-medium text-[var(--primary-subtitle)] mb-9">Continuity-First Wellness Care Platform</p>
        <h2 className="text-[26px] font-bold text-[var(--text-muted)] text-center mb-6">Admin Login</h2>
      </div>

      <LoginCard />

      {/* Heali Mascot Footer */}
      <div className="text-center mt-6">
        <p className="text-xs text-[var(--text-soft)]">Powered by Heali</p>
      </div>
    </div>
  );
}
