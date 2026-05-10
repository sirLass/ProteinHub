"use client";

import Link from "next/link";
import { useState } from "react";

const newApplications = [
  { id: "APP-001", name: "Dindo Magpali", email: "dindo.m@example.com", date: "May 10, 2026", status: "Pending" },
  { id: "APP-002", name: "Elena Ramos", email: "elena.r@example.com", date: "May 09, 2026", status: "Pending" },
  { id: "APP-003", name: "Ricardo Dalisay", email: "cardoj@example.com", date: "May 08, 2026", status: "In Review" },
  { id: "APP-004", name: "Liza Soberano", email: "liza.s@example.com", date: "May 07, 2026", status: "Pending" },
];

export default function DistributorsAdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Distributors</h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Manage new applications and existing partners.</p>
        </div>
        <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20">
          Add New Distributor
        </button>
      </header>

      {/* Stats Summary */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Pending Apps</p>
          <p className="mt-2 text-3xl font-bold text-red-600">14</p>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Active Partners</p>
          <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">128</p>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 dark:border-zinc-800/50 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Total Revenue</p>
          <p className="mt-2 text-3xl font-bold text-green-600">PHP 3.2M</p>
        </div>
      </div>

      {/* Main Table Section */}
      <section>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Newly Applying</h2>
          <div className="relative w-full max-w-xs">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search applicants..."
              className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200/50 bg-white shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50/50 border-b border-zinc-100 dark:bg-zinc-800/50 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Applicant Name</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Email Address</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Date Applied</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white">Status</th>
                <th className="px-6 py-5 font-semibold text-zinc-900 dark:text-white text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {newApplications.map((app) => (
                <tr key={app.id} className="group hover:bg-red-50/30 dark:hover:bg-red-900/5 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-bold text-zinc-900 dark:text-white">{app.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mt-1">{app.id}</div>
                  </td>
                  <td className="px-6 py-5 text-zinc-500 dark:text-zinc-400">{app.email}</td>
                  <td className="px-6 py-5 text-zinc-500 dark:text-zinc-400">{app.date}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      app.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-red-600 dark:bg-zinc-800 dark:hover:bg-red-600">
                      View Detail
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-zinc-50/50 p-4 text-center dark:bg-zinc-800/30">
            <button className="text-xs font-bold text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-widest">
              Load More Applications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
