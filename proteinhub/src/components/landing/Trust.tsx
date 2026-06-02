"use client";

const stats = [
  { label: "Training Modules Completed", value: "12,400+" },
  { label: "Active Distributors", value: "1,850+" },
  { label: "Community Support Availability", value: "24/7" },
  { label: "New Distributor 90-Day Progress", value: "82%" },
];

export default function Trust() {
  return (
    <section id="trust" className="bg-zinc-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Trusted Training Ecosystem for Real Growth
          </h2>
          <p className="mt-4 text-zinc-600">
            Built for people who want to learn, lead, and build a business with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-zinc-900">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
