"use client";

export const faqs = [
  {
    q: "How much do I need to start?",
    a: "You can start as a distributor with an onboarding and training fee of PHP 2,500. This unlocks access to the Protein Hub training system, product storytelling assets, and mentorship support.",
  },
  {
    q: "Is this focused on products or business training?",
    a: "Both, but training comes first. We prioritize customer acquisition, team-building, and leadership so distributors can build sustainable businesses.",
  },
  {
    q: "Can any age group succeed in this model?",
    a: "Yes. Protein Hub's system is designed to be simple, mobile-friendly, and story-led, making it approachable for Gen Z, professionals, parents, and boomers.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Common Questions
          </h2>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-200/50 p-8 dark:border-zinc-800/50">
              <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">{faq.q}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
