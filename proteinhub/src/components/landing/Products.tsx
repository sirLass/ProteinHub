"use client";

const products = [
  {
    name: "Signature Protein Blend",
    story:
      "A confidence story for customers starting a healthier routine while giving distributors a relatable daily-use narrative.",
    tag: "Customer Story Tool",
    image: "/product_protein_powder_1778123206280.png",
  },
  {
    name: "Ready-to-Drink Shakes",
    story:
      "An easy-entry story for busy schedules, making wellness feel possible for students, parents, and working professionals.",
    tag: "Lifestyle Story Tool",
    image: "/product_rtd_shake_bottle_1778123315766.png",
  },
  {
    name: "Performance Hydration",
    story:
      "A community fitness story that connects active people through hydration, recovery, and everyday movement habits.",
    tag: "Community Story Tool",
    image: "/product_hydration_drink_1778123449418.png",
  },
  {
    name: "Energy & Focus Blends",
    story:
      "A productivity story for people building careers and side hustles, positioned around focus and consistent momentum.",
    tag: "Productivity Story Tool",
    image: "/product_energy_focus_container_1778123581067.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-zinc-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Product Lineup as Customer Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-zinc-600">
            Protein Hub products are tools distributors use to help customers. We teach story-first conversations, not hard selling.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="group relative rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{product.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-zinc-900">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {product.story}
              </p>
              <div className="mt-6 rounded-xl bg-zinc-100 p-3 text-xs font-medium text-zinc-700">
                Story-led positioning for better customer connection.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
