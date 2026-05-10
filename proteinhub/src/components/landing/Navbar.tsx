"use client";

import Link from "next/link";
import { isAuthenticated } from "@/lib/mockAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
 
   useEffect(() => {
     setIsLoggedIn(isAuthenticated());
   }, []);

  const handleReserve = () => {
    if (isLoggedIn) {
      router.push("/register");
    } else {
      router.push("/login?reason=no_account");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Protein Hub
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden items-center gap-4 lg:gap-8 lg:flex">
          <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            About Us
          </Link>
          <Link href="#products" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            Products
          </Link>
          <Link href="#features" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            Services
          </Link>
          {isLoggedIn ? (
            <Link href="/dashboard" className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Go to Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                Login
              </Link>
              <button 
                onClick={handleReserve}
                className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-zinc-200 transition-all hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-black dark:shadow-none dark:hover:bg-zinc-200"
              >
                Reserve Now!
              </button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 lg:hidden dark:bg-zinc-900"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-zinc-100 bg-white p-6 lg:hidden dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-4">
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-zinc-900 dark:text-white">About Us</Link>
            <Link href="#products" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-zinc-900 dark:text-white">Products</Link>
            <Link href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-zinc-900 dark:text-white">Services</Link>
            <div className="pt-4 border-t border-zinc-50 dark:border-zinc-800 space-y-3">
              {isLoggedIn ? (
                <Link href="/dashboard" className="block w-full rounded-2xl bg-zinc-900 py-4 text-center font-bold text-white dark:bg-white dark:text-black">Go to Dashboard</Link>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleReserve();
                    }} 
                    className="block w-full rounded-2xl bg-zinc-900 py-4 text-center font-bold text-white dark:bg-white dark:text-black"
                  >
                    Reserve Now!
                  </button>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block w-full border border-zinc-200 py-4 text-center font-bold text-zinc-900 rounded-2xl dark:border-zinc-800 dark:text-white">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
