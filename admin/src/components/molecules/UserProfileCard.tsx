'use client';

import { useState, useRef } from 'react';
import Icon from '../atoms/Icon';

export default function UserProfileCard({ name = 'Dr. Ajesh Anand', role = 'Admin', avatar }: { name?: string; role?: string; avatar?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className="bg-white p-4 rounded-[var(--radius-md)] flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] mt-auto border border-[var(--border-light)] cursor-pointer relative outline-none"
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <img
        src={avatar || '/assets/user-profile.jpg'}
        alt={name}
        className="w-[75px] h-[75px] rounded-full -mt-[45px] mb-2.5 object-cover border-4 border-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] bg-white"
      />
      <h4 className="text-sm text-[var(--text-main)] mb-0.5">{name}</h4>
      <p className="text-xs text-[var(--text-soft)]">{role}</p>

      {open && (
        <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-[var(--radius-md)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--border)] flex flex-col py-2 z-[1000]">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-[#475569] text-sm font-medium hover:bg-[#f8fafc] hover:text-[var(--text-main)]">
            <Icon name="user" size={16} /> My Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-[#475569] text-sm font-medium hover:bg-[#f8fafc] hover:text-[var(--text-main)]">
            <Icon name="settings" size={16} /> Account Settings
          </a>
          <div className="h-px bg-[var(--border-light)] my-1" />
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-[#475569] text-sm font-medium hover:bg-[#f8fafc] hover:text-[var(--text-main)]">
            <Icon name="help" size={16} /> Help & Support
          </a>
          <div className="h-px bg-[var(--border-light)] my-1" />
          <a href="/login" className="flex items-center gap-3 px-4 py-2.5 text-[#e11d48] text-sm font-medium hover:bg-[#fff1f2] hover:text-[#be123c]">
            <Icon name="logout" size={16} /> Logout
          </a>
        </div>
      )}
    </div>
  );
}
