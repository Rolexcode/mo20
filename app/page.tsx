import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Roadmap } from "@/components/Roadmap";
import { Expansion } from "@/components/Expansion";
import { Vision } from "@/components/Vision";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";

export default function Home() {
  return (
    <main className="relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Roadmap />
      <Expansion />
      <Vision />
      <Community />
      <Footer />
    </main>
  );
}
