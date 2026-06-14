import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient orbs for the whole page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="orb w-[600px] h-[600px] bg-accent-cyan/5 top-[-200px] left-[-200px]" />
        <div className="orb w-[500px] h-[500px] bg-accent-purple/5 top-[40%] right-[-200px]" />
        <div className="orb w-[400px] h-[400px] bg-accent-pink/5 bottom-[10%] left-[20%]" />
      </div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
