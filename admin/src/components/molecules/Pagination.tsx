'use client';

import { useState } from 'react';
import Icon from '../atoms/Icon';

export default function Pagination({ total = 117 }: { total?: number }) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <div className="flex justify-between items-center pt-4 border-t border-[var(--border-light)] mt-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-[13px] text-[var(--text-soft)]">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
            className="px-2 py-1 rounded-[var(--radius)] border border-[var(--border)] text-[13px] outline-none bg-white text-[var(--text-dark)]"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="text-[12px] font-bold text-[#94a3b8] tracking-wider uppercase">
          Showing {(page - 1) * rowsPerPage + 1}-{Math.min(page * rowsPerPage, total)} of {total}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-[var(--radius)] border-none bg-[#f1f5f9] text-[#334155] text-[13px] font-semibold hover:bg-[#e2e8f0] disabled:opacity-50"
        >
          <Icon name="chevronLeft" size={16} />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-8 h-8 flex items-center justify-center rounded-[var(--radius)] border-none text-[13px] font-semibold transition-all ${
              page === i + 1 ? 'bg-[#2563eb] text-white' : 'bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-[var(--radius)] border-none bg-[#f1f5f9] text-[#334155] text-[13px] font-semibold hover:bg-[#e2e8f0] disabled:opacity-50"
        >
          <Icon name="chevronRight" size={16} />
        </button>
      </div>
    </div>
  );
}
