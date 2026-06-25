'use client';

import { useState } from 'react';
import ClientTable from '@/components/ClientTable';

type FilterTab = 'all' | 'active' | 'flagged' | 'guest';

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const counts = {
    all: 1247,
    active: 983,
    flagged: 12,
    guest: 252,
  };

  const tabs: { key: FilterTab; label: string }[] = [
    { key: 'all', label: 'All Clients' },
    { key: 'active', label: 'Active' },
    { key: 'flagged', label: 'Flagged' },
    { key: 'guest', label: 'Guest' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-500 mt-1">Manage your platform users</p>
        </div>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add User
        </button>
      </div>

      {/* Heali Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex items-center gap-4">
          <span className="text-4xl">🐾</span>
          <div>
            <h2 className="text-lg font-semibold">Heali says...</h2>
            <p className="text-teal-100 text-sm mt-1">
              You have 12 flagged users that need review. 3 new guest conversions today!
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 text-sm font-medium transition ${
                activeTab === tab.key
                  ? 'text-teal-700 border-b-2 border-teal-600 bg-teal-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.key ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        <ClientTable activeTab={activeTab} />
      </div>
    </div>
  );
}
