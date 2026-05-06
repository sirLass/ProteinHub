"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Demo Login: In a production environment, this would authenticate against a database.");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 dark:bg-black">
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
            Login to access your distributor dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </label>
            <input
              type="email"
              required
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
          <Link href="/#register" className="font-bold text-zinc-900 hover:underline dark:text-white">
            Register for Presentation
          </Link>
        </p>
      </div>
    </div>
  );
}
