import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 md:pl-64">
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 bg-white p-4 md:hidden dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
            <span className="text-lg font-bold text-zinc-900 dark:text-white">Protein Hub</span>
          </div>
          {/* Burger menu trigger for mobile sidebar would go here */}
        </div>
        <div className="mx-auto max-w-7xl p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
