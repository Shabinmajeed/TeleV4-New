import KPICard from '@/components/molecules/KPICard';
import HealisaysPanel from '@/components/molecules/HealisaysPanel';
import LineChart from '@/components/molecules/LineChart';
import AreaChart from '@/components/molecules/AreaChart';
import BarChart from '@/components/molecules/BarChart';
import QuickActionsWidget from '@/components/molecules/QuickActionsWidget';

const kpis = [
  { icon: 'barChart', trend: '+8% from yesterday', value: '₹ 123 K', label: 'Total Sales', trendDirection: 'up' as const },
  { icon: 'clipboard', trend: '+5% from yesterday', value: '300', label: 'Completed Sessions', trendDirection: 'up' as const },
  { icon: 'tag', trend: '-1,2% from yesterday', value: '5', label: 'Session Cancellation', trendDirection: 'up' as const },
  { icon: 'users', trend: '-0.5% from yesterday', value: '8', label: 'New Customers', trendDirection: 'down' as const },
];

export default function DashboardPage() {
  return (
    <div className="space-5">
      {/* Header */}
      <header className="flex justify-between items-end pt-5 mb-3">
        <div className="text-xl font-bold text-[var(--text-dark)] pb-2 border-b-2 border-[var(--border)] relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[3px] after:bg-[var(--text-dark)] after:rounded-t-sm">
          Dashboard
        </div>
        <img src="/assets/Heali.png" className="h-12" alt="Heali AI" />
      </header>

      {/* Row 1: Sales + Heali Says */}
      <div className="grid grid-cols-[1.8fr_1fr] gap-4">
        <section className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="flex justify-between items-start mb-5">
            <div>
              <h2 className="text-base font-bold text-[var(--text-dark)]">This Week&apos;s Sales</h2>
              <p className="text-[13px] text-[var(--text-soft)] mt-0">Weekly performance overview</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#cbd5e1] rounded-md bg-transparent text-[12px] font-semibold text-[#334155] hover:bg-[#f8fafc] hover:border-[#94a3b8]">
              Generate Report
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {kpis.map((kpi) => <KPICard key={kpi.label} {...kpi} />)}
          </div>
        </section>
        <HealisaysPanel />
      </div>

      {/* Row 2: Line + Area Charts */}
      <div className="grid grid-cols-[1.3fr_1fr] gap-4">
        <section className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-base font-bold text-[var(--text-dark)] mb-1">User Insights</h3>
          <LineChart />
        </section>
        <section className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-base font-bold text-[var(--text-dark)] mb-1">Number of Bookings</h3>
          <AreaChart />
        </section>
      </div>

      {/* Row 3: Bar Chart + Heali Insights */}
      <div className="grid grid-cols-2 gap-4">
        <section className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-base font-bold text-[var(--text-dark)] mb-1">Total Revenue</h3>
          <BarChart />
        </section>
        <section className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-base font-bold text-[var(--text-dark)] mb-1">Heali Insights</h3>
          <div className="flex flex-col gap-4">
            <p className="text-[13px] text-[#334155] leading-relaxed relative pl-5 before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-[#ef4444]">
              Churn Risk: 3 users who signed up in March (see &quot;New Users&quot; dip) haven&apos;t booked a second session. Action: Trigger &quot;Reengagement Email&quot; with a 10% discount code.
            </p>
            <p className="text-[13px] text-[#334155] leading-relaxed relative pl-5 before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-[#22c55e]">
              Revenue Optimization: Wednesday&apos;s revenue peak (₹23k) is tied to the &quot;Premium Wellness&quot; package. Action: Feature this package on the homepage for the upcoming weekend.
            </p>
            <p className="text-[13px] text-[#334155] leading-relaxed relative pl-5 before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-[#f59e0b]">
              Marketing ROI: The &quot;Promotion &amp; Offers&quot; campaign from Monday resulted in an 8% lift in &quot;New Customers.&quot; Follow-up: Extend the campaign for another 48 hours to capitalize on the trend.
            </p>
          </div>
        </section>
      </div>

      <QuickActionsWidget />
    </div>
  );
}
