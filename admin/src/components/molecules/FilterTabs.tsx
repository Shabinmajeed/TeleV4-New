'use client';

import { useState } from 'react';

const filters = [
  { key: 'all', label: 'All', count: 120 },
  { key: 'active', label: 'Active', count: 89 },
  { key: 'pending', label: 'Pending', count: 12 },
  { key: 'new', label: 'New', count: 8 },
  { key: 'inactive', label: 'Inactive', count: 3 },
  { key: 'guest', label: 'Guest', count: 5 },
];

export default function FilterTabs() {
  const [active, setActive] = useState('all');

  return (
    <div className="flex gap-2 flex-shrink-0">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => setActive(f.key)}
          className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all ${
            active === f.key
              ? 'bg-[var(--text-dark)] text-white border-[var(--text-dark)]'
              : 'bg-[var(--surface)] text-[var(--text-soft)] border-[var(--border)] hover:border-[#94a3b8] hover:text-[var(--text-dark)]'
          }`}
        >
          {f.label} <span className="font-bold ml-1">{f.count}</span>
        </button>
      ))}
    </div>
  );
}
