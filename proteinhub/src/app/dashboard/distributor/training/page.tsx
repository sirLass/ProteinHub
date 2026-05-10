"use client";

const scheduledTrainings = [
  { id: "1", name: "Product Costing 101", date: "2026-05-14", time: "14:00", place: "Zoom", details: "https://zoom.us/j/123456789" },
  { id: "2", name: "Effective Sales Closing", date: "2026-05-16", time: "10:00", place: "Main Office", details: "Floor 3, Building A, Metro Manila" },
  { id: "3", name: "Inventory Management", date: "2026-05-18", time: "09:00", place: "Google Meet", details: "https://meet.google.com/abc-defg-hij" },
  { id: "4", name: "Logistics Workshop", date: "2026-05-20", time: "13:00", place: "Establishment", details: "Warehouse Complex, Cavite" },
];

export default function TrainingPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Training Schedule</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">View and join your upcoming live training sessions.</p>
      </header>

      {/* Stats Summary */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Upcoming Today</p>
          <p className="mt-2 text-3xl font-bold text-red-600">0</p>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">This Week</p>
          <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">3</p>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Total Attended</p>
          <p className="mt-2 text-3xl font-bold text-green-600">12</p>
        </div>
      </div>

      <section>
        <div className="overflow-hidden rounded-3xl border border-zinc-200/50 bg-white shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50/50 border-b border-zinc-100 dark:bg-zinc-800/50 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Training Session</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Schedule</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Location</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {scheduledTrainings.map((t) => (
                <tr key={t.id} className="group hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-bold text-zinc-900 dark:text-white">{t.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-widest font-bold">Session ID: TR-{t.id}00</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-medium text-zinc-900 dark:text-white">
                      {new Date(t.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-xs text-zinc-500">{t.time}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-bold mb-1 ${
                        t.place === 'Zoom' || t.place === 'Google Meet' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                      }`}>
                        {t.place}
                      </span>
                      <span className="text-[10px] text-zinc-400 truncate max-w-[150px]">{t.details}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    {t.place === 'Zoom' || t.place === 'Google Meet' ? (
                      <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-red-600 dark:bg-white dark:text-black dark:hover:bg-red-600 dark:hover:text-white shadow-lg shadow-zinc-900/10">
                        Join Meeting
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    ) : (
                      <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-bold text-zinc-900 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 shadow-sm">
                        View Directions
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
