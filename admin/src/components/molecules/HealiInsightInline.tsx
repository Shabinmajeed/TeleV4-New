import Icon from '../atoms/Icon';

export default function HealiInsightInline({ text, onDismiss }: { text: string; onDismiss?: () => void }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#eff6ff] to-[#dbeafe] border border-[#bfdbfe] rounded-lg flex-shrink-0">
      <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center flex-shrink-0">
        <Icon name="lightbulb" size={12} />
      </div>
      <div className="flex flex-col gap-0">
        <span className="text-[9px] font-bold text-[#2563eb] uppercase tracking-wide">Heali Insight</span>
        <span className="text-[11px] text-[#1e40af] leading-tight whitespace-nowrap">{text}</span>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="text-[#93c5fd] hover:bg-[rgba(37,99,235,0.1)] hover:text-[#2563eb] p-1 rounded flex-shrink-0">
          <Icon name="x" size={12} />
        </button>
      )}
    </div>
  );
}
