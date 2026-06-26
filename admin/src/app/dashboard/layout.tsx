import Sidebar from '@/components/molecules/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex overflow-hidden bg-gradient-to-br from-white via-[#eef5fc] to-[#7aaaf6]">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto bg-transparent min-w-0">
        <div className="w-full max-w-full mx-auto flex flex-col gap-5 pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}
