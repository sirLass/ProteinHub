import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import TrainingSystem from "@/components/landing/TrainingSystem";
import SuccessStories from "@/components/landing/SuccessStories";
import Products from "@/components/landing/Products";
import About from "@/components/landing/About";
import Community from "@/components/landing/Community";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Chatbot from "@/components/landing/Chatbot";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-50 dark:selection:bg-white dark:selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <TrainingSystem />
        <SuccessStories />
        <About />
        <Products />
        <Community />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
