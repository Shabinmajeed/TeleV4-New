export default function HealiInsights() {
  const insights = [
    { priority: 'high', text: '3 therapists have >5 pending sessions' },
    { priority: 'medium', text: 'Guest conversion rate up 15% this week' },
    { priority: 'low', text: 'New content pending review: 7 items' },
  ];

  const priorityColors: Record<string, string> = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🐾</span>
        <h3 className="text-sm font-medium text-gray-700">Heali Insights</h3>
      </div>
      <div className="space-y-3">
        {insights.map((insight, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${priorityColors[insight.priority]}`}>
              {insight.priority}
            </span>
            <p className="text-sm text-gray-600">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
