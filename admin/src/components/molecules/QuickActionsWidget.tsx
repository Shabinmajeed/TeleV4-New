'use client';

import { useState } from 'react';
import Icon from '../atoms/Icon';

const actions = [
  { label: 'Add New Therapist', icon: 'userPlus' },
  { label: 'Manual Session Override', icon: 'calendar' },
  { label: 'Flagged Content Review', icon: 'flag' },
];

export default function QuickActionsWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-10 right-10 z-[1000] outline-none" tabIndex={0}>
      {open && (
        <div className="absolute bottom-[70px] right-0 bg-white rounded-[var(--radius-md)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[var(--border)] w-[240px] flex flex-col py-2 opacity-100 visible translate-y-0 scale-100 transition-all duration-200 origin-bottom-right">
          <div className="px-4 py-2.5 text-[12px] font-bold text-[#94a3b8] uppercase tracking-wider border-b border-[var(--border-light)] mb-1">
            Quick Actions
          </div>
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-[#334155] hover:bg-[#f8fafc] hover:text-[var(--text-dark)] transition-colors text-left"
              onClick={() => setOpen(false)}
            >
              <Icon name={action.icon} size={16} className="text-[var(--text-soft)]" />
              {action.label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#2563eb] text-white shadow-[0_4px_15px_rgba(37,99,235,0.4)] flex items-center justify-center hover:bg-[#1d4ed8] hover:scale-105 transition-all"
      >
        {open ? <Icon name="x" size={24} /> : <Icon name="grid" size={24} />}
      </button>
    </div>
  );
}
