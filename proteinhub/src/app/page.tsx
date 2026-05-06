import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-50 dark:selection:bg-white dark:selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
