"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/mockAuth";
export default function Hero() {
  const router = useRouter();

  const handleReserve = () => {
    if (isAuthenticated()) {
      router.push("/register");
    } else {
      router.push("/login?reason=no_account");
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50 opacity-50 blur-3xl dark:bg-zinc-900/30" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-500 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50">
             Official Distributor Portal
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white leading-[1.1]">
            Fueling the Future of <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
              Protein Distribution
            </span>
          </h1>
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0">
            Launch <strong className="text-zinc-900 dark:text-white">your own business</strong> with a proven roadmap. Leverage our premium product line and <strong className="text-zinc-900 dark:text-white">direct founder-led mentorship</strong> to master the blueprint for scaling any independent venture.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={handleReserve}
              className="h-14 flex items-center rounded-2xl bg-zinc-900 px-10 text-base font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
            >
              Reserve Your Slot
            </button>
            <button className="h-14 rounded-2xl border border-zinc-200 bg-white/50 px-10 text-base font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-zinc-900">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Mock Teaser Video Placeholder with more WOW factor */}
        <div className="mt-24 relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-zinc-200 to-zinc-100 opacity-20 blur-xl transition-opacity group-hover:opacity-40 dark:from-zinc-800 dark:to-zinc-900" />
          <div className="relative aspect-video w-full items-center justify-center rounded-[32px] border border-zinc-200/50 bg-white/80 p-2 shadow-2xl backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/80 overflow-hidden">
            <div className="h-full w-full rounded-[24px] bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center gap-6 relative group/video">
              {/* This is where the teaser video or image would go */}
              <div className="absolute inset-0 opacity-10 grayscale hover:grayscale-0 transition-all duration-700">
                 {/* Placeholder for background image */}
              </div>
              
              <div className="z-10 flex flex-col items-center gap-4">
                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="ml-1 h-10 w-10">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
                 <div className="text-center">
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">Watch the 3-minute Intro</p>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-semibold">How Protein Blends PH Works</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
