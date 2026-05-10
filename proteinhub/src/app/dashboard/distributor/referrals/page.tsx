"use client";

export default function ReferralsPage() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <div className="mb-8 rounded-3xl bg-zinc-100 p-8 dark:bg-zinc-900">
        <svg className="mx-auto h-16 w-16 text-zinc-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Referral System</h1>
      <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
        Referral is under Development for a meantime.
      </p>
      <div className="mt-10 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-bounce [animation-delay:-0.3s]" />
        <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-bounce [animation-delay:-0.15s]" />
        <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-bounce" />
      </div>
    </div>
  );
}
