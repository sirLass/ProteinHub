"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl dark:text-white">
            Scale Your Distribution <span className="text-zinc-500">Effortlessly</span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The all-in-one platform for Protein Hub distributors. Onboard, train, and manage your business network with a system designed for growth.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-12 rounded-full bg-zinc-900 px-8 text-base font-bold text-white transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black">
              Register for Presentation
            </button>
            <button className="h-12 rounded-full border border-zinc-200 bg-transparent px-8 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Mock Teaser Video Placeholder */}
        <div className="mt-20 flex aspect-video w-full max-w-5xl items-center justify-center rounded-3xl border border-zinc-200/50 bg-zinc-50/50 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/50 mx-auto overflow-hidden shadow-2xl">
          <div className="flex flex-col items-center gap-4">
             <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black shadow-xl">
               <svg fill="currentColor" viewBox="0 0 24 24" className="ml-1 h-10 w-10">
                 <path d="M8 5v14l11-7z" />
               </svg>
             </div>
             <p className="text-sm font-medium text-zinc-500">Watch the 3-min Teaser</p>
          </div>
        </div>
      </div>
    </section>
  );
}
