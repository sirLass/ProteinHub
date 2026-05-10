"use client";

import Link from "next/link";

const stats = [
  { name: "Total Distributors", value: "128", change: "+14%", trend: "up" },
  { name: "Monthly Revenue", value: "PHP 320k", change: "+8.2%", trend: "up" },
  { name: "Active Trainings", value: "12", change: "0%", trend: "stable" },
];

const recentDistributors = [
  { id: "PH-2026-128", name: "Maria Clara", joined: "2 hours ago", status: "Active" },
  { id: "PH-2026-127", name: "Juan Dela Cruz", joined: "5 hours ago", status: "Pending" },
  { id: "PH-2026-126", name: "Sarah Geronimo", joined: "1 day ago", status: "Active" },
  { id: "PH-2026-125", name: "Jose Rizal", joined: "2 days ago", status: "Active" },
];

export default function AdminDashboardOverview() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Admin Overview</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Welcome back, Boss. Here is the status of your distribution network.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{stat.name}</p>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                stat.trend === 'up' ? 'text-green-600 bg-green-50' : 
                stat.trend === 'down' ? 'text-blue-600 bg-blue-50' : 
                'text-zinc-600 bg-zinc-50'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Main Content: Table */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Recent Distributors</h2>
            <Link href="/dashboard/admin/distributors" className="text-sm font-medium text-red-600 hover:underline">View all</Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-800/50 dark:bg-zinc-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50/50 border-b border-zinc-100 dark:bg-zinc-800/50 dark:border-zinc-800">
                <tr>
                  <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">Distributor</th>
                  <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white">Status</th>
                  <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-white text-right">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {recentDistributors.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-zinc-900 dark:text-white">{user.name}</div>
                      <div className="text-xs text-zinc-500">{user.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ${
                        user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-zinc-500">{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Quick Actions</h2>
          <div className="grid gap-4">
            <button className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all text-left group">
               <div>
                  <p className="font-bold text-zinc-900 dark:text-white">Add New Training</p>
                  <p className="text-xs text-zinc-500">Upload a new video module</p>
               </div>
               <svg className="h-5 w-5 text-zinc-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
               </svg>
            </button>
            <button className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all text-left group">
               <div>
                  <p className="font-bold text-zinc-900 dark:text-white">Broadcast Message</p>
                  <p className="text-xs text-zinc-500">Notify all distributors</p>
               </div>
               <svg className="h-5 w-5 text-zinc-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
               </svg>
            </button>
            <button className="flex items-center justify-between rounded-2xl border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all text-left group">
               <div>
                  <p className="font-bold text-zinc-900 dark:text-white">Update Costs</p>
                  <p className="text-xs text-zinc-500">Adjust product logistics</p>
               </div>
               <svg className="h-5 w-5 text-zinc-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
