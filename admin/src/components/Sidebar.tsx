'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/clients', label: 'Clients', icon: '👥' },
  { href: '/therapists', label: 'Therapists', icon: '🧑‍⚕️' },
  { href: '/sessions', label: 'Sessions', icon: '📅' },
  { href: '/content', label: 'Content', icon: '📝' },
  { href: '/reports', label: 'Reports', icon: '📈' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  currentPath: string;
}

export default function Sidebar({ open, currentPath }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-20 ${
        open ? 'w-64' : 'w-16'
      }`}
    >
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-sm">🐾</span>
        </div>
        {open && <span className="ml-3 font-bold text-gray-900 text-lg">Heali</span>}
      </div>

      {open && (
        <div className="px-4 py-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
      )}

      <nav className="px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              {open && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
