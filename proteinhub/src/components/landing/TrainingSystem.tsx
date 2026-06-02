"use client";

const steps = [
  {
    title: "Step 1: Learn the products",
    description: "Understand how each Protein Hub product supports customer goals through simple, compelling stories.",
  },
  {
    title: "Step 2: Learn customer acquisition",
    description: "Use proven digital and offline strategies to attract and retain customers across different generations.",
  },
  {
    title: "Step 3: Build your team",
    description: "Develop leadership and mentoring skills to onboard, train, and support future distributors.",
  },
  {
    title: "Step 4: Scale your business",
    description: "Track performance, duplicate winning systems, and expand your network with long-term focus.",
  },
];

export default function TrainingSystem() {
  return (
    <section id="training-system" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Protein Hub Training System
          </h2>
          <p className="mt-4 text-zinc-600">
            A clear process flow designed to take distributors from beginner to business builder.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl space-y-5">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-5 rounded-2xl border border-zinc-200 bg-white p-6 md:grid-cols-[90px_1fr]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-zinc-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
