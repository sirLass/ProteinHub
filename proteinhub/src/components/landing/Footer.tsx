"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 py-12 dark:border-zinc-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-zinc-900 dark:bg-white" />
            <span className="text-lg font-bold text-zinc-900 dark:text-white">Protein Hub</span>
          </div>
          
          <div className="text-sm text-zinc-500">
            © 2026 Protein Hub. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/proteinblendsph" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Facebook</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Privacy</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
