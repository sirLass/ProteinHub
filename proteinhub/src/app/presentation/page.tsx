"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PresentationContent() {
  const [hasWatched, setHasWatched] = useState(false);
  const searchParams = useSearchParams();
  const isConfirmed = searchParams.get("confirmed") === "true";

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Confirmation Banner */}
      {isConfirmed && (
        <div className="bg-zinc-900 py-3 text-center dark:bg-white">
          <p className="text-sm font-bold text-white dark:text-black">
            ✓ Reservation Confirmed! Check your email for presentation details.
          </p>
        </div>
      )}

      {/* Simple Navigation */}
      <nav className="border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-zinc-900 dark:bg-white" />
            <span className="font-bold tracking-tight text-zinc-900 dark:text-white">Protein Hub</span>
          </Link>
          <div className="flex items-center gap-4">
             <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Step 2: Business Overview</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            The Protein Hub Roadmap
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Watch the presentation below to understand how our distribution system works and how you can start your own venture.
          </p>
        </div>

        {/* Video Presentation Section */}
        <div className="mt-16 relative aspect-video w-full rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden">
          <div className="h-full w-full rounded-[24px] bg-zinc-950 flex items-center justify-center relative group">
             {/* Mock Video Player */}
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
                <button 
                  onClick={() => setHasWatched(true)}
                  className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 border border-white/20"
                >
                  <svg className="h-10 w-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="text-center">
                   <p className="font-bold text-lg">Protein Hub: Founder's Presentation</p>
                   <p className="text-sm text-zinc-400 mt-1">Duration: 3:12</p>
                </div>
             </div>
             
             {/* Progress Bar Mockup */}
             <div className="absolute bottom-6 left-6 right-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white" />
             </div>
          </div>
        </div>

        {/* Content & Call to Action */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
           <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What You'll Learn</h2>
              <ul className="space-y-4">
                 {[
                   "The 3 pillars of protein distribution success",
                   "Our premium product line and sourcing strategy",
                   "Costing blueprints and profit margin analysis",
                   "Step-by-step roadmap to launch in 14 days"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                      <svg className="h-5 w-5 text-zinc-900 dark:text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                   </li>
                 ))}
              </ul>
           </div>
           
           <div className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Ready to start?</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Join our network of independent distributors and get access to the full training portal and resource library.
              </p>
              <div className="mt-8 space-y-4">
                <Link 
                  href="/register-distributor"
                  className="flex w-full items-center justify-center rounded-2xl bg-zinc-900 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:shadow-none dark:hover:bg-zinc-200"
                >
                  Register as a Distributor
                </Link>
                <p className="text-center text-xs text-zinc-500 font-medium uppercase tracking-widest">
                  Official Partnership Program
                </p>
              </div>
           </div>
        </div>
      </main>
      
      <footer className="mt-20 border-t border-zinc-100 py-12 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-zinc-500">© 2026 Protein Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function PresentationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-zinc-500">Loading...</div>}>
      <PresentationContent />
    </Suspense>
  );
}
