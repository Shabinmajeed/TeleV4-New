'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../atoms/Icon';
import UserProfileCard from './UserProfileCard';

const navSections = [
  {
    items: [
      { href: '/dashboard', label: 'Dashboard', icon: 'grid' },
      { href: '/therapist', label: 'Therapist', icon: 'user' },
      { href: '/dashboard/clients', label: 'Clients', icon: 'users' },
    ],
  },
  {
    items: [
      { href: '/schedule', label: 'Sessions & Schedule', icon: 'calendar' },
      { href: '/content', label: 'Content Management', icon: 'book' },
      { href: '/communications', label: 'Communications', icon: 'message' },
      { href: '/compliance', label: 'Compliance', icon: 'shield' },
    ],
  },
  {
    items: [
      { href: '/financials', label: 'Financials', icon: 'dollar' },
      { href: '/analytics', label: 'Analytics & Reporting', icon: 'chart' },
      { href: '/promotions', label: 'Promotion & Offers', icon: 'promotion' },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`h-full flex flex-col border-r border-[rgba(0,0,0,0.05)] bg-[var(--surface)] flex-shrink-0 relative transition-all duration-300 overflow-visible z-100 ${
        collapsed ? 'w-[var(--sidebar-collapsed)] px-2.5 pt-[30px]' : 'w-[var(--sidebar-width)] px-5 pt-[30px]'
      }`}
    >
      {/* Brand */}
      <div className={`flex justify-between items-center w-full mb-[30px] px-2.5 box-border ${collapsed ? '!flex-row !p-0 !justify-center !gap-1' : ''}`}>
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Telehealings" className="w-9 h-9" />
          {!collapsed && <span className="text-xl font-bold text-black">Telehealings</span>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[var(--text-soft)] cursor-pointer p-1 rounded-md flex items-center justify-center hover:bg-[var(--border-light)] hover:text-[var(--text-main)] transition-all"
        >
          <Icon name="chevronLeft" size={20} className={collapsed ? 'rotate-180' : ''} />
        </button>
      </div>

      {/* Search */}
      <div className={`relative mb-5 ${collapsed ? 'w-10 h-10 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto cursor-pointer' : ''}`}>
        {!collapsed && (
          <Icon name="search" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-soft)]" />
        )}
        {!collapsed && (
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pr-3 pl-10 rounded-[20px] border border-[var(--border)] bg-[#f8fafc] text-sm outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(42,115,212,0.1)]"
          />
        )}
        {collapsed && <Icon name="search" size={18} className="text-[var(--text-soft)]" />}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 flex-grow overflow-y-auto overflow-x-hidden mb-5">
        {navSections.map((section, si) => (
          <div key={si}>
            {si > 0 && <div className="h-px bg-[var(--border)] my-0.5 mx-4 flex-shrink-0" />}
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 ${collapsed ? 'p-3 justify-center' : 'px-4 py-2.5'} rounded-[var(--radius)] text-[#475569] font-semibold text-[15px] transition-all whitespace-nowrap ${
                    isActive ? 'bg-[#1c52b8] text-white' : 'hover:bg-[var(--border-light)] hover:text-[var(--text-main)]'
                  }`}
                >
                  <Icon name={item.icon} size={20} className={isActive ? 'text-white' : ''} />
                  {!collapsed && <span className="overflow-hidden">{item.label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <UserProfileCard />
    </aside>
  );
}
