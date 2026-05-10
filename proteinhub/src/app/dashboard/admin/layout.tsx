"use client";

import { useState } from "react";
import AdminSidebar from "@/components/dashboard/AdminSidebar";

const mockNotifications = [
  { id: 1, title: "New Distributor", message: "Maria Clara just joined as a Silver partner.", time: "2m ago", unread: true },
  { id: 2, title: "Revenue Alert", message: "Monthly target reached! PHP 320k milestone.", time: "1h ago", unread: true },
  { id: 3, title: "System Update", message: "Version 2.4 update successfully deployed.", time: "5h ago", unread: false },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>
      <main className="flex-1 md:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
          <div className="flex items-center gap-2 md:hidden">
             <div className="h-6 w-6 rounded bg-red-600" />
             <span className="font-bold text-zinc-900 dark:text-white">Admin Portal</span>
          </div>
          <div className="hidden md:block">
            {/* Left side empty for desktop header alignment */}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notification Bell & Popup */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`group relative rounded-full p-2 transition-all ${
                  showNotifications ? "bg-red-50 text-red-600 dark:bg-red-900/20" : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                <div className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600 dark:border-black" />
                <svg className="h-6 w-6 transition-transform group-active:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowNotifications(false)} />
                  <div className="absolute right-0 mt-3 w-80 rounded-3xl border border-zinc-200 bg-white p-4 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <h3 className="font-bold text-zinc-900 dark:text-white">Notifications</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 px-2 py-1 rounded-lg dark:bg-red-900/20">3 New</span>
                    </div>
                    <div className="space-y-2">
                      {mockNotifications.map((n) => (
                        <div key={n.id} className={`flex flex-col gap-1 rounded-2xl p-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer ${n.unread ? "bg-red-50/30 dark:bg-red-900/5" : ""}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white">{n.title}</span>
                            <span className="text-[10px] text-zinc-400">{n.time}</span>
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{n.message}</p>
                          {n.unread && <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />}
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 w-full py-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      Mark all as read
                    </button>
                  </div>
                </>
              )}
            </div>
            
            <div className="h-8 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-2" />
            
            {/* User Profile */}
            <div className="flex items-center gap-3">
               <div className="hidden text-right sm:block">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">Admin Hub</p>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-red-600">Master Owner</p>
               </div>
               <div className="h-10 w-10 rounded-full bg-zinc-100 p-0.5 border-2 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
                  <div className="h-full w-full rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                    AD
                  </div>
               </div>
            </div>
          </div>
        </header>
        
        <div className="p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
