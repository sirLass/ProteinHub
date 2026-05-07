"use client";

import TrainingCalendar from "@/components/dashboard/TrainingCalendar";

export default function TrainingPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Training Hub</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Manage your learning journey and upcoming sessions.</p>
      </header>

      {/* Progress Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
           <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Global Progress</span>
           <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">65%</p>
                <p className="text-xs text-zinc-500 mt-1">4 of 6 lessons completed</p>
              </div>
              <div className="h-10 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-900 dark:bg-white w-[65%]" />
              </div>
           </div>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
           <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Time Spent</span>
           <div className="mt-4">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">12.5 hrs</p>
              <p className="text-xs text-zinc-500 mt-1">Active learning this month</p>
           </div>
        </div>
        <div className="rounded-3xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900">
           <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Certificates</span>
           <div className="mt-4">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">2</p>
              <p className="text-xs text-zinc-500 mt-1">Modules fully mastered</p>
           </div>
        </div>
      </div>

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Training Schedule</h2>
          <p className="text-sm text-zinc-500">Booked sessions and upcoming live trainings.</p>
        </div>
        <TrainingCalendar />
      </section>

      {/* Curriculum Section */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Learning Path</h2>
          <div className="flex gap-2">
             <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">All Modules</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 1, title: "Module 1: Foundations", lessons: 6, completed: 4, status: "In Progress" },
            { id: 2, title: "Module 2: Product Knowledge", lessons: 8, completed: 0, status: "Locked" },
            { id: 3, title: "Module 3: Sales Mastery", lessons: 5, completed: 0, status: "Locked" },
          ].map((module) => (
            <div key={module.id} className={`rounded-2xl border border-zinc-100 p-6 transition-all dark:border-zinc-800/50 ${module.status === 'In Progress' ? 'bg-white shadow-md dark:bg-zinc-900' : 'bg-zinc-50/50 opacity-60 dark:bg-zinc-900/30'}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1">
                   <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{module.title}</h3>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${module.status === 'In Progress' ? 'bg-zinc-900 text-white dark:bg-white dark:text-black' : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800'}`}>
                        {module.status}
                      </span>
                   </div>
                   <p className="mt-1 text-sm text-zinc-500">{module.lessons} lessons • {module.completed} completed</p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="text-right">
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">{Math.round((module.completed / module.lessons) * 100)}%</p>
                      <div className="mt-1 h-1 w-24 rounded-full bg-zinc-100 dark:bg-zinc-800">
                         <div className="h-full bg-zinc-400" style={{ width: `${(module.completed / module.lessons) * 100}%` }} />
                      </div>
                   </div>
                   <button className={`rounded-full p-2 ${module.status === 'In Progress' ? 'bg-zinc-900 text-white dark:bg-white dark:text-black' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800'}`}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
