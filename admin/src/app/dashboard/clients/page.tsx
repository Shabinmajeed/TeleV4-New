'use client';

import { useState } from 'react';
import FilterTabs from '@/components/molecules/FilterTabs';
import ClientTable from '@/components/molecules/ClientTable';
import GuestTable from '@/components/molecules/GuestTable';
import Pagination from '@/components/molecules/Pagination';
import HealiInsightInline from '@/components/molecules/HealiInsightInline';
import Icon from '@/components/atoms/Icon';

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const isGuest = activeTab === 'guest';

  return (
    <div className="flex flex-col pb-10">
      {/* Sticky Zone */}
      <div className="sticky top-0 z-50 bg-gradient-to-br from-white via-[#eef5fc] to-[#7aaaf6] px-8 pb-1.5 -mx-8">
        <div className="max-w-full">
          {/* Header */}
          <header className="flex justify-between items-start pt-10 mb-3">
            <div className="text-xl font-bold text-[var(--text-dark)] pb-2 border-b-2 border-[var(--border)] relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[3px] after:bg-[var(--text-dark)] after:rounded-t-sm">
              Clients
            </div>
            <div className="flex items-center gap-3">
              <HealiInsightInline text='2 clients unmatched for 7+ days. Prioritize Max Mayfield & Mike Wheeler.' />
              <img src="/assets/Heali.png" className="h-8 flex-shrink-0" alt="Mascot" />
            </div>
          </header>

          {/* Filter Row */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <FilterTabs />
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[var(--border)] rounded-lg bg-[var(--surface)] text-[var(--text-soft)] text-sm font-semibold hover:border-[#94a3b8] hover:text-[var(--text-dark)] hover:bg-[#f8fafc]">
                <Icon name="download" size={14} /> Export CSV
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--primary-hover)]">
                <Icon name="plus" size={14} /> Add User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full max-w-full mx-auto flex flex-col">
        <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden">
          {isGuest ? <GuestTable /> : <ClientTable />}
          <Pagination total={isGuest ? 5 : 117} />
        </div>
      </div>
    </div>
  );
}
