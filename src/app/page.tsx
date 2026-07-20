import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}