export default function AdminProfileCard() {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
        <span className="text-sm font-medium text-teal-700">SM</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">Shabin Majeed</p>
        <p className="text-xs text-gray-500 truncate">admin@heali.com</p>
      </div>
    </div>
  );
}
