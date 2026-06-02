"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-500 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50">
              Vision
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white leading-tight">
              Build a Business With Purpose, <br />
              <span className="text-zinc-400">Leadership, and Long-Term Freedom</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Protein Hub was built to help everyday people become confident business builders in health and wellness. We focus on opportunities, skills, and systems before products.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Through structured training, mentorship, and community accountability, distributors learn how to attract customers, build trust, and grow sustainable income over time.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-12 dark:border-zinc-800">
               <div>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">500+</p>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Business Builders</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">100%</p>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Community-Led Support</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-zinc-100 to-zinc-50 opacity-50 blur-2xl dark:from-zinc-900 dark:to-zinc-950" />
             <div className="relative aspect-[4/5] w-full rounded-[32px] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden shadow-2xl">
                {/* Visual Placeholder - Could be an image of the founder or a modern workspace */}
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                   <div className="space-y-4">
                      <div className="h-16 w-16 bg-zinc-900 dark:bg-white rounded-2xl mx-auto flex items-center justify-center">
                         <svg className="h-8 w-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <p className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">Protein Hub Academy</p>
                      <p className="text-sm text-zinc-500">Opportunity First. Story First. Customer First.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
