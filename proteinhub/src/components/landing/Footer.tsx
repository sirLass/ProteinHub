"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 pt-20 pb-12 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Protein Hub</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              Empowering independent entrepreneurs since 2024 through premium nutrition distribution and expert mentorship.
            </p>
          </div>

          {/* Details Column */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="h-4 w-4 text-zinc-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>No. 18 M.H. Del Pilar St. Unit B, Angsico Bldg. Bgy 3., Lucena, Philippines, 4301</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l5-2.5L19.553 7.224A1 1 0 0121 8.118v10.764a1 1 0 01-1.447.894L15 17l-6 3z"/></svg>
                Lucena, Philippines
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">Contact info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                0976 672 2231
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:theproteinhub.business@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">theproteinhub.business@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                The Protein Hub PH
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#training-system" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Training System</a></li>
              <li><a href="#success-stories" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#products" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Product Stories</a></li>
              <li><a href="/login" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Distributor Login</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200/50 pt-8 md:flex-row dark:border-zinc-800/50">
          <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-600">
            © 2026 Protein Hub. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
