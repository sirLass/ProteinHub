"use client";

import Link from "next/link";

const upcomingTrainings = [
  { id: "1", name: "Product Costing 101", date: "2026-05-14", time: "14:00", place: "Zoom", details: "https://zoom.us/j/123456789" },
  { id: "2", name: "Effective Sales Closing", date: "2026-05-16", time: "10:00", place: "Main Office", details: "Floor 3, Building A, Metro Manila" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">Welcome, Distributor</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-4 border-t border-zinc-100 pt-6 sm:border-t-0 sm:pt-0 dark:border-zinc-800">
           <div className="text-left sm:text-right">
             <p className="text-sm font-medium text-zinc-900 dark:text-white">Member ID: PH-2026-001</p>
             <p className="text-xs text-zinc-500">Tier: Gold Distributor</p>
           </div>
           <div className="h-10 w-10 rounded-full bg-zinc-100 p-0.5 border-2 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
              <div className="h-full w-full rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold dark:bg-white dark:text-black">
                D1
              </div>
           </div>
        </div>
      </header>

      {/* Stats Grid - Restored 3-card layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Attendance Status</span>
             <span className="text-xs font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">Month: May</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">85%</p>
              <p className="text-xs text-zinc-500 mt-1">12 of 14 sessions attended</p>
            </div>
            <div className="h-16 w-16">
              <div className="h-full w-full rounded-full border-4 border-zinc-100 dark:border-zinc-800 border-t-red-600 dark:border-t-red-500" style={{ transform: 'rotate(-45deg)' }} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
               <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Total Referrals</span>
               <span className="text-[8px] font-bold text-zinc-400 border border-zinc-200 px-1 rounded">UNDER DEV</span>
             </div>
             <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">+12% this month</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">24</p>
              <p className="text-xs text-zinc-500 mt-1">Active prospects: 8</p>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800">
               <svg className="h-6 w-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Upcoming Training</span>
             <span className="text-xs font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">Live</span>
          </div>
          <div className="flex flex-col justify-between h-full pt-1">
             <p className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">{upcomingTrainings[0].name}</p>
             <p className="text-sm text-zinc-500 mt-2">{new Date(upcomingTrainings[0].date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })} • {upcomingTrainings[0].time}</p>
             <Link href="/dashboard/distributor/training" className="mt-4 w-full block text-center rounded-xl bg-zinc-900 py-2 text-xs font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black shadow-lg shadow-zinc-900/10">View Training</Link>
          </div>
        </div>
      </div>

      {/* Consistent Training Section */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Scheduled Training</h2>
          <Link href="/dashboard/distributor/training" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">View full schedule</Link>
        </div>
        
        <div className="overflow-hidden rounded-3xl border border-zinc-200/50 bg-white shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50/50 border-b border-zinc-100 dark:bg-zinc-800/50 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">Meeting Name</th>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">Date & Time</th>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">Place</th>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {upcomingTrainings.map((t) => (
                <tr key={t.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white">{t.name}</td>
                  <td className="px-6 py-4">
                    <div className="text-zinc-900 dark:text-white">{new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    <div className="text-xs text-zinc-500">{t.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      t.place === 'Zoom' || t.place === 'Google Meet' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                    }`}>
                      {t.place}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-lg bg-zinc-900 px-4 py-1.5 text-xs font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black">
                      {t.place === 'Zoom' || t.place === 'Google Meet' ? 'Join Now' : 'Details'}
                    </button>
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
