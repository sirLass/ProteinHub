"use client";

const stories = [
  {
    name: "Janelle, 23",
    role: "Campus Creator to Team Leader",
    quote:
      "I started as a student sharing wellness routines online. The training helped me turn curiosity into consistent customer growth.",
    growth: "Income growth: 3.4x in 8 months",
  },
  {
    name: "Marco, 38",
    role: "Corporate Employee to Side-Business Owner",
    quote:
      "The system gave me structure after office hours. I built my first distributor team while keeping my day job.",
    growth: "Income growth: +210% in 1 year",
  },
  {
    name: "Liza, 56",
    role: "Community Mentor",
    quote:
      "I thought this was only for younger people, but the support and coaching made it easy to start and lead confidently.",
    growth: "Built a 48-member community network",
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="bg-zinc-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Success Stories From Real Distributors</h2>
          <p className="mt-4 text-zinc-600">
            Professional journey snapshots showing before-and-after growth with the Protein Hub system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">{story.role}</p>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">{story.name}</h3>
              <p className="mt-4 leading-relaxed text-zinc-600">"{story.quote}"</p>
              <p className="mt-5 text-sm font-semibold text-zinc-800">{story.growth}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
