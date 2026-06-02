"use client";

import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/mockAuth";
import { useEffect, useState } from "react";

const heroStories = [
  {
    name: "Signature Protein Blend",
    story:
      "Positioned as the everyday confidence drink for busy professionals who want strength and consistency.",
    image: "/product_protein_powder_1778123206280.png",
  },
  {
    name: "Ready-to-Drink Shakes",
    story:
      "Shared as the on-the-go wellness habit for students, parents, and creators building better routines.",
    image: "/product_rtd_shake_bottle_1778123315766.png",
  },
  {
    name: "Performance Hydration",
    story:
      "Framed as a simple recovery ritual for active lifestyles, team events, and weekend community fitness.",
    image: "/product_hydration_drink_1778123449418.png",
  },
  {
    name: "Energy & Focus Blends",
    story:
      "Presented as a productivity ally for people chasing goals, side hustles, and long-term growth.",
    image: "/product_energy_focus_container_1778123581067.png",
  },
];

export default function Hero() {
  const router = useRouter();
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % heroStories.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const handleReserve = () => {
    if (isAuthenticated()) {
      router.push("/register");
    } else {
      router.push("/login?reason=no_account");
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden border-b border-zinc-100 pt-28 md:pt-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />

      <div className="container mx-auto grid min-h-[calc(100vh-7rem)] items-center gap-16 px-6 py-10 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Distributor Training Platform
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
            Build Your Own Health & Wellness Business
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600">
            Learn the proven system used by successful distributors to attract customers, build teams, and create long-term income.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            Designed to inspire every generation, from Gen Z to boomers: customer-first stories that naturally lead to business growth.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleReserve}
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-zinc-900 px-9 text-base font-bold text-white transition hover:bg-zinc-800"
            >
              Start Training
            </button>
            <a
              href="#success-stories"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-9 text-base font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Watch Success Stories
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-56 overflow-hidden rounded-2xl bg-zinc-100 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                  alt="Successful distributor lifestyle"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="h-56 overflow-hidden rounded-2xl bg-zinc-100 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                  alt="Team training event"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:mt-6 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Story spotlight</p>
              <div className="mt-4 flex items-start gap-4 sm:gap-5">
                <img
                  src={heroStories[activeStory].image}
                  alt={heroStories[activeStory].name}
                  className="h-20 w-20 rounded-xl border border-zinc-200 bg-white object-cover sm:h-24 sm:w-24"
                />
                <div>
                  <p className="text-lg font-bold leading-snug text-zinc-900 sm:text-xl">{heroStories[activeStory].name}</p>
                  <p className="mt-2 text-base leading-relaxed text-zinc-700 sm:text-lg">{heroStories[activeStory].story}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-3">
            {heroStories.map((story, index) => (
              <button
                key={story.name}
                onClick={() => setActiveStory(index)}
                aria-label={`View story for ${story.name}`}
                className={`h-3.5 rounded-full transition-all ${
                  activeStory === index ? "w-10 bg-zinc-900" : "w-3.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
