"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { registerUser } from "@/lib/actions";

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrerId = searchParams.get("ref");

  const handleFormAction = async (formData: FormData) => {
    setIsLoading(true);
    const result = await registerUser(formData);
    if (result?.error) {
      alert(result.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      <Link 
        href="/" 
        className="absolute left-8 top-8 flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>
      
      <div className="w-full max-w-xl">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white" />
            <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Protein Hub
            </span>
          </Link>
          <h1 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
            Reserve Your Business Presentation Slot
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Learn how to launch your own protein distribution business.
          </p>
        </div>

        <form action={handleFormAction} className="mt-6 space-y-6">
          <input type="hidden" name="referrerId" value={referrerId || ""} />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="John"
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Doe"
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                required
                placeholder="0917 123 4567"
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Age Range
              </label>
              <select
                name="ageRange"
                required
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              >
                <option value="">Select Range</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-60">55-60</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                How did you hear about us?
              </label>
              <select
                name="source"
                required
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              >
                <option value="">Select Source</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="friend">Friend / Referral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Preferred Schedule Slot
              </label>
              <select
                name="scheduleSlot"
                required
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              >
                <option value="">Select Slot</option>
                <option value="tuesday">Tuesday (7:00 PM)</option>
                <option value="thursday">Thursday (7:00 PM)</option>
                <option value="saturday">Saturday (2:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Interest Level
              </label>
              <select
                name="interestLevel"
                required
                className="mt-2 block w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
              >
                <option value="">Select Interest</option>
                <option value="casual">Casual (Just curious)</option>
                <option value="serious">Serious (Ready to start)</option>
                <option value="urgent">Urgent (Want to start ASAP)</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-2xl bg-zinc-900 py-5 text-base font-bold text-white shadow-2xl shadow-zinc-200 transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:shadow-none dark:hover:bg-zinc-200"
            >
              {isLoading ? "Reserving Slot..." : "Confirm My Reservation"}
            </button>
            <p className="mt-4 text-[10px] text-zinc-500 leading-relaxed text-center uppercase tracking-widest font-semibold">
              By confirming, you agree to receive presentation details via email & SMS.
            </p>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already a distributor?{" "}
          <Link href="/login" className="font-bold text-zinc-900 hover:underline dark:text-white">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-zinc-500">Loading registration form...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
