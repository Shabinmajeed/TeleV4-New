import KPICards from '@/components/KPICards';
import HealiInsights from '@/components/HealiInsights';
import QuickActionsWidget from '@/components/QuickActionsWidget';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Insights */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">User Insights</h3>
          <div className="h-48 flex items-end justify-around gap-2">
            {[65, 45, 78, 52, 88, 60, 72].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 bg-teal-500 rounded-t"
                  style={{ height: `${h}%` }}
                />
                <span className="text-xs text-gray-400">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Bookings</h3>
          <div className="h-48 flex items-end justify-around gap-2">
            {[40, 60, 35, 70, 55, 80, 45].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 bg-cyan-500 rounded-t"
                  style={{ height: `${h}%` }}
                />
                <span className="text-xs text-gray-400">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Revenue</h3>
          <div className="h-48 flex items-end justify-around gap-2">
            {[500, 750, 600, 900, 1100, 850, 950].map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 bg-emerald-500 rounded-t"
                  style={{ height: `${(v / 1100) * 100}%` }}
                />
                <span className="text-xs text-gray-400">${v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heali Insights */}
        <HealiInsights />
      </div>

      {/* Quick Actions */}
      <QuickActionsWidget />
    </div>
  );
}
