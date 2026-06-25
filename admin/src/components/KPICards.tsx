const kpis = [
  { label: 'Total Users', value: '12,470', change: '+12.5%', trend: 'up' },
  { label: 'Active Sessions', value: '1,842', change: '+8.2%', trend: 'up' },
  { label: 'Revenue (MTD)', value: '$48,250', change: '+23.1%', trend: 'up' },
  { label: 'Churn Rate', value: '2.4%', change: '-0.8%', trend: 'down' },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">{kpi.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className={`text-xs font-medium ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
              {kpi.trend === 'up' ? '↑' : '↓'} {kpi.change}
            </span>
            <span className="text-xs text-gray-400">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
