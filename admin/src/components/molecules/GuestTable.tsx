'use client';

import { useState } from 'react';

const guestUsersData = [
  { id: 'G1', name: 'Jamie Cooper', tcAcceptedDate: '22/04/2026', tcAcceptedTime: '09:30 Am', personalisation: ['Stress', 'Sleep'] },
  { id: 'G2', name: 'Morgan Blake', tcAcceptedDate: '21/04/2026', tcAcceptedTime: '02:15 Pm', personalisation: ['Anxiety', 'Self esteem', 'Focus'] },
  { id: 'G3', name: 'Riley Jordan', tcAcceptedDate: '20/04/2026', tcAcceptedTime: '11:00 Am', personalisation: ['Relationships'] },
  { id: 'G4', name: 'Avery Smith', tcAcceptedDate: '19/04/2026', tcAcceptedTime: '04:45 Pm', personalisation: ['Stress', 'Anxiety', 'Sleep'] },
  { id: 'G5', name: 'Quinn Davis', tcAcceptedDate: '18/04/2026', tcAcceptedTime: '08:20 Am', personalisation: ['Focus', 'Self esteem'] },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

export default function GuestTable() {
  const [nameFilter, setNameFilter] = useState('');

  const filtered = guestUsersData.filter(g =>
    g.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[900px]">
        <thead className="sticky top-0 z-10 bg-[var(--surface)]">
          <tr>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)] w-[5%]">ID</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)] w-[25%]">
              <div className="flex items-center gap-1">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Search name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className="px-2 py-1 rounded-md border border-[var(--primary)] text-[12px] font-normal outline-none bg-white shadow-[0_0_0_2px_rgba(42,115,212,0.1)] w-32"
                />
              </div>
            </th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)] w-[25%]">T&C Accepted</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)] w-[30%]">Personalisation</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 border-b border-[var(--border-light)] w-[15%] text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((g) => (
            <tr key={g.id} className="hover:bg-[#f8fafc]">
              <td className="py-3 pr-3 pl-0 border-b border-[var(--border-light)] text-[13px] text-[#334155]">{g.id}</td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {getInitials(g.name)}
                  </div>
                  <span className="font-semibold text-[var(--text-dark)] text-sm">{g.name}</span>
                </div>
              </td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <div className="flex flex-col">
                  <span className="text-[13px] text-[#334155]">{g.tcAcceptedDate}</span>
                  <span className="text-[11px] text-[#94a3b8] mt-1">{g.tcAcceptedTime}</span>
                </div>
              </td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <div className="flex gap-0.5 flex-wrap">
                  {g.personalisation.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-[11px] font-semibold border border-[#bfdbfe]">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 border-b border-[var(--border-light)] text-center">
                <button className="text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium">
                  Convert
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
