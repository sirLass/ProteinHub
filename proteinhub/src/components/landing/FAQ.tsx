"use client";

export const faqs = [
  {
    q: "How much do I need to start?",
    a: "You can start as a distributor with an initial onboarding and training fee of PHP 2,500. This gives you full access to our system, product materials, and direct business training from the founder of Protein Hub.",
  },
  {
    q: "Is this a franchise?",
    a: "No, Protein Hub operates as a low-cost distribution model. You run your own independent business under your own brand, utilizing our proven system and high-quality product materials.",
  },
  {
    q: "Do I need technical skills?",
    a: "Not at all. The platform is designed to be simple and mobile-friendly, accessible to anyone with basic smartphone literacy.",
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
