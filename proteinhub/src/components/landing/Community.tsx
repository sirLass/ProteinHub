"use client";

const communityItems = [
  {
    title: "Team Events",
    description: "In-person meetups and growth sessions that strengthen distributor confidence and culture.",
  },
  {
    title: "Mentorship",
    description: "Guidance from experienced leaders and founder-led coaching to accelerate your progress.",
  },
  {
    title: "Group Coaching",
    description: "Weekly sessions focused on leadership, mindset, and practical execution in the field.",
  },
  {
    title: "Online Learning Platform",
    description: "Mobile-friendly training modules, scripts, and templates available anytime.",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Grow With a High-Support Community</h2>
          <p className="mt-4 text-zinc-600">
            Build your business with mentorship, accountability, and a network that grows together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {communityItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
