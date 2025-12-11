import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import ImageMarquee from "@/components/sections/ImageMarquee";
import Skills from "@/components/sections/Skills";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <ImageMarquee />
      <Skills />
      <ProjectShowcase />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
