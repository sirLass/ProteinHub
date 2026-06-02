"use client";

import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/mockAuth";

export default function FinalCTA() {
  const router = useRouter();

  const handleStart = () => {
    if (isAuthenticated()) {
      router.push("/register");
    } else {
      router.push("/login?reason=no_account");
    }
  };

  return (
    <section id="get-started" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-zinc-900 px-8 py-16 text-center text-white sm:px-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Ready to Build Your Business?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-200 sm:text-lg">
            Join a growing community of distributors and start your journey today.
          </p>
          <button
            onClick={handleStart}
            className="mt-9 inline-flex h-14 items-center justify-center rounded-2xl bg-white px-10 text-base font-bold text-zinc-900 transition hover:bg-zinc-100"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
