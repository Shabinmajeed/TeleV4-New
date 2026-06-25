'use client';

import { useState } from 'react';

const actions = [
  { label: 'Add Therapist', icon: '🧑‍⚕️' },
  { label: 'Session Override', icon: '⏰' },
  { label: 'Flagged Content Review', icon: '🚩' },
];

export default function QuickActionsWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {open && (
        <div className="mb-3 bg-white rounded-xl shadow-lg border border-gray-200 p-2 space-y-1">
          {actions.map((action) => (
            <button
              key={action.label}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition text-left"
              onClick={() => setOpen(false)}
            >
              <span className="text-lg">{action.icon}</span>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition flex items-center justify-center"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </button>
    </div>
  );
}
