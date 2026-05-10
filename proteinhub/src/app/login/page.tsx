"use client";

import Link from "next/link";
import { loginUser } from "@/lib/mockAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("reason") === "no_account") {
      setErrorMsg("No account detected. You need to login first to reserve a slot.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      loginUser(); // Save to localStorage
      
      // Role-based redirection
      if (email === "admin@example.com") {
        router.push("/dashboard/admin");
      } else {
        // Redirect to registration form after login as requested
        router.push("/register");
      }
    }, 1000);
  };

  const handleQuickLogin = (role: 'admin' | 'distributor') => {
    setIsLoading(true);
    if (role === 'admin') {
      setEmail("admin@example.com");
      setPassword("123456");
      setTimeout(() => {
        setIsLoading(false);
        loginUser();
        router.push("/dashboard/admin");
      }, 800);
    } else {
      setEmail("test@example.com");
      setPassword("123456");
      setTimeout(() => {
        setIsLoading(false);
        loginUser();
        router.push("/register");
      }, 800);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 dark:bg-black">
      <Link 
        href="/" 
        className="absolute left-8 top-8 flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
            <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Protein Hub
            </span>
          </Link>
          <h1 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Login to your dashboard
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errorMsg}
            </div>
          </div>
        )}

        <div className="space-y-3 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-center mb-4">Quick Access for Testing</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleQuickLogin('distributor')}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-white group"
            >
              <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                 <svg className="h-4 w-4 text-zinc-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-white">Distributor</span>
            </button>
            <button
              onClick={() => handleQuickLogin('admin')}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-red-600 group"
            >
              <div className="h-8 w-8 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                 <svg className="h-4 w-4 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-white">Admin</span>
            </button>
          </div>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-50 px-2 text-zinc-400 dark:bg-black dark:text-zinc-500">
              Or login manually
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <a href="#" className="text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Not a distributor yet?{" "}
          <Link href="/register" className="font-bold text-zinc-900 hover:underline dark:text-white">
            Join Us
          </Link>
        </p>
      </div>
    </div>
  );
}
