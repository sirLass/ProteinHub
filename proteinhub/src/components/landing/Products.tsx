"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Signature Protein Blend",
    description: "Gourmet fitness beverages designed for maximum post-workout recovery and taste.",
    tag: "Best Seller",
    price: "₱1,450.00",
    image: "/product_protein_powder_1778123206280.png",
  },
  {
    name: "Ready-to-Drink Shakes",
    description: "Our premium high-protein beverages, pre-mixed and ready for your active lifestyle.",
    tag: "Convenient",
    price: "₱1,200.00",
    image: "/product_rtd_shake_bottle_1778123315766.png",
  },
  {
    name: "Performance Hydration",
    description: "Refreshing fitness drinks formulated to keep you fueled, hydrated, and focused.",
    tag: "Hydration",
    price: "₱85.00",
    image: "/product_hydration_drink_1778123449418.png",
  },
  {
    name: "Energy & Focus Blends",
    description: "Targeted fitness beverages designed to boost your training performance and mental clarity.",
    tag: "Performance",
    price: "₱1,100.00",
    image: "/product_energy_focus_container_1778123581067.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Our Premium Lineup
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Scientifically formulated to fuel your fitness journey.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="group relative rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="aspect-square w-full relative mb-6 overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-800">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{product.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-zinc-900 dark:text-white">{product.price}</span>
                <button className="rounded-full bg-zinc-100 p-2 text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-white dark:hover:bg-white dark:hover:text-black">
                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
