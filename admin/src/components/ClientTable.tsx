'use client';

import { useState } from 'react';

interface ClientTableProps {
  activeTab: 'all' | 'active' | 'flagged' | 'guest';
}

const normalClients = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', therapist: 'Dr. Smith', status: 'Active', sessions: 12 },
  { id: 2, name: 'Mike Chen', email: 'mike@example.com', therapist: 'Dr. Patel', status: 'Active', sessions: 8 },
  { id: 3, name: 'Emma Wilson', email: 'emma@example.com', therapist: 'Dr. Lee', status: 'Flagged', sessions: 3 },
  { id: 4, name: 'James Brown', email: 'james@example.com', therapist: 'Dr. Smith', status: 'Active', sessions: 15 },
  { id: 5, name: 'Lisa Garcia', email: 'lisa@example.com', therapist: 'Dr. Patel', status: 'Active', sessions: 6 },
];

const guestUsers = [
  { id: 'G001', name: 'Alex T.', initials: 'AT', tcDate: '2026-06-20', tags: ['anxiety', 'new'] },
  { id: 'G002', name: 'Maria S.', initials: 'MS', tcDate: '2026-06-19', tags: ['depression'] },
  { id: 'G003', name: 'Tom K.', initials: 'TK', tcDate: '2026-06-18', tags: ['stress', 'returning'] },
  { id: 'G004', name: 'Nina P.', initials: 'NP', tcDate: '2026-06-17', tags: ['anxiety', 'premium'] },
];

export default function ClientTable({ activeTab }: ClientTableProps) {
  const [nameFilter, setNameFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const isGuest = activeTab === 'guest';

  const filteredNormal = normalClients.filter(c =>
    c.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const filteredGuests = guestUsers.filter(g =>
    g.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <div className="px-6 py-3 border-b border-gray-200 flex items-center gap-4">
        <div className="relative flex-1 max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Filter by name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
          More filters
        </button>
        <button className="ml-auto text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1">
          Export CSV
        </button>
      </div>

      {isGuest ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">TC Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tags</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredGuests.map((g) => (
                <tr key={g.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">{g.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-teal-700">{g.initials}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{g.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{g.tcDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {g.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                      Convert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Therapist</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sessions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredNormal.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">{c.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{c.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{c.therapist}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{c.sessions}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="text-sm text-gray-600 hover:text-gray-900">View</button>
                      <button className="text-sm text-red-600 hover:text-red-700">Flag</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{isGuest ? filteredGuests.length : filteredNormal.length}</span> of{' '}
          <span className="font-medium">{isGuest ? guestUsers.length : normalClients.length}</span> results
        </p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded text-sm font-medium transition ${
                currentPage === page ? 'bg-teal-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
