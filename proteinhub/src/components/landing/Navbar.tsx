"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Protein Hub
          </span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            Features
          </Link>
          <Link href="#faq" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            FAQ
          </Link>
          <Link href="/login" className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
