"use client";

export default function DashboardOverview() {
  return (
    <div>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Welcome, Distributor</h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-right">
             <p className="text-sm font-medium text-zinc-900 dark:text-white">Member ID: PH-2026-001</p>
             <p className="text-xs text-zinc-500">Tier: Gold Distributor</p>
           </div>
           <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </header>

      {/* Progress Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Training Progress</span>
             <span className="text-xs font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">Module 1 of 5</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">65%</p>
              <p className="text-xs text-zinc-500 mt-1">4 of 6 lessons completed</p>
            </div>
            <div className="h-16 w-16">
              {/* Simple CSS Progress Circle Placeholder */}
              <div className="h-full w-full rounded-full border-4 border-zinc-100 dark:border-zinc-800 border-t-zinc-900 dark:border-t-white" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Total Referrals</span>
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
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Upcoming Session</span>
             <span className="text-xs font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">Online</span>
          </div>
          <div className="flex flex-col justify-between h-full pt-1">
             <p className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Advanced Recipe Costing</p>
             <p className="text-sm text-zinc-500 mt-2">Thursday, May 14 • 2:00 PM</p>
             <button className="mt-4 w-full rounded-xl bg-zinc-900 py-2 text-xs font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black">Join Zoom</button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
         {/* Recent Training */}
         <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Continue Training</h2>
              <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white">View All</button>
            </div>
            <div className="space-y-4">
               {[1, 2].map((i) => (
                 <div key={i} className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:border-zinc-200 dark:border-zinc-800/50 dark:bg-zinc-900">
                    <div className="h-16 w-24 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                       {/* Mock video thumbnail */}
                       <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       </div>
                    </div>
                    <div className="flex-1">
                       <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Lesson {i + 3}: Costing for Beginners</h3>
                       <p className="text-xs text-zinc-500 mt-1">Module 1 • 12 minutes left</p>
                    </div>
                    <button className="rounded-full border border-zinc-200 p-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800">
                       <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                 </div>
               ))}
            </div>
         </section>

         {/* Quick Resources */}
         <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">New Recipes</h2>
              <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Explore Library</button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
               {["Mango Protein Shake", "Peanut Butter Blast"].map((recipe) => (
                 <div key={recipe} className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-4 transition-all hover:shadow-md dark:border-zinc-800/50 dark:bg-zinc-900">
                    <div className="aspect-square rounded-xl bg-zinc-50 dark:bg-zinc-800 mb-4" />
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">{recipe}</h3>
                    <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mt-1">High Protein</p>
                 </div>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
}
