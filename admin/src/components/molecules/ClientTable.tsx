'use client';

import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

const clientsData = [
  { id: 1, name: 'Ajesh Anand', email: 'ajeshanand@gmail.com', therapist: 'Dr. Ajesh Anand', phone: '+971 123456789', lastActiveDate: '22/04/2026', lastActiveTime: '11:10 Am', sessionStatus: 'Schedule Booked', sessionDate: '25/04/2026 10:00 Am', status: 'booked' },
  { id: 2, name: 'Nathaniel Jacob', email: 'nathanieljacob@gmail.com', therapist: 'Dr. Sarah Smith', phone: '+971 123456789', lastActiveDate: '22/04/2026', lastActiveTime: '11:10 Am', sessionStatus: 'Schedule Booked', sessionDate: '25/04/2026 10:00 Am', status: 'booked' },
  { id: 3, name: 'Bethany Kay', email: 'bethanykay@gmail.com', therapist: 'Dr. Ajesh Anand', phone: '+971 123456789', lastActiveDate: '22/04/2026', lastActiveTime: '11:10 Am', sessionStatus: 'Schedule Booked', sessionDate: '25/04/2026 10:00 Am', status: 'booked' },
  { id: 7, name: 'Max Mayfield', email: 'maxmayfield@gmail.com', therapist: 'Dr. Ajesh Anand', phone: '+971 123456789', lastActiveDate: '22/04/2026', lastActiveTime: '11:10 Am', sessionStatus: 'Pending', sessionDate: '', status: 'pending' },
  { id: 8, name: 'Mike Wheeler', email: 'mikewheel@gmail.com', therapist: 'Dr. Sarah Smith', phone: '+971 123456789', lastActiveDate: '22/04/2026', lastActiveTime: '11:10 Am', sessionStatus: 'Pending', sessionDate: '', status: 'pending' },
  { id: 11, name: 'Lucas Sinclair', email: 'lucass@gmail.com', therapist: 'Unassigned', phone: '+971 509876543', lastActiveDate: '20/04/2026', lastActiveTime: '03:20 Pm', sessionStatus: 'New', sessionDate: '', status: 'new' },
];

export default function ClientTable() {
  const [nameFilter, setNameFilter] = useState('');

  const filtered = clientsData.filter(c =>
    c.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[900px]">
        <thead className="sticky top-0 z-10 bg-[var(--surface)]">
          <tr>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">Sl No</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">
              <div className="flex items-center gap-1">
                <span>User Name</span>
                <input
                  type="text"
                  placeholder="Search name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className="px-2 py-1 rounded-md border border-[var(--primary)] text-[12px] font-normal outline-none bg-white shadow-[0_0_0_2px_rgba(42,115,212,0.1)] w-32"
                />
              </div>
            </th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">Therapist</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">Contact Number</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">Last Active</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 pr-3 border-b border-[var(--border-light)]">Session Details</th>
            <th className="text-left text-[13px] font-medium text-[var(--text-soft)] py-2 border-b border-[var(--border-light)]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c.id} className="hover:bg-[#f8fafc]">
              <td className="py-3 pr-3 pl-0 border-b border-[var(--border-light)] text-[13px] text-[#334155]">{c.id}</td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <div className="flex items-center gap-3">
                  <Avatar name={c.name} size="md" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[var(--text-dark)] text-sm">{c.name}</span>
                    <span className="text-xs text-[var(--text-soft)] mt-0.5">{c.email}</span>
                  </div>
                </div>
              </td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)] text-[13px] text-[#334155]">{c.therapist}</td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)] text-[13px] text-[#334155]">{c.phone}</td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <div className="flex flex-col">
                  <span className="text-[13px] text-[#334155]">{c.lastActiveDate}</span>
                  <span className="text-[11px] text-[#94a3b8] mt-1">{c.lastActiveTime}</span>
                </div>
              </td>
              <td className="py-3 pr-3 border-b border-[var(--border-light)]">
                <Badge variant={c.status as 'booked' | 'pending' | 'new' | 'inactive'}>{c.sessionStatus}</Badge>
                {c.sessionDate && <span className="text-[11px] text-[#94a3b8] mt-1 block">{c.sessionDate}</span>}
              </td>
              <td className="py-3 border-b border-[var(--border-light)]">
                <button className="bg-transparent border-none text-[var(--text-soft)] cursor-pointer p-2.5 rounded-full hover:bg-[#f1f5f9] hover:text-[var(--text-dark)] transition-all">
                  <Icon name="moreVertical" size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
