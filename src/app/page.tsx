import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}