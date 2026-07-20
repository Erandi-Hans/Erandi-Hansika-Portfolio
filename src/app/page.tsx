"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, BookOpen, FileText, Mail } from 'lucide-react';

const images = ["/img/p1 (2).jpeg", "/img/p2.jpeg", "/img/p3.jpeg", "/img/p5.jpeg"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-10">
      <main className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[70vh]">

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight">G.M.E. Hansika</h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              BICT Undergraduate | Semantic Computing & NLP Researcher.
              Bridging language and computation through intelligent architectures.
            </p>

            {/* Social Links with Updated Icons */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Erandi-Hans" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
                <Code size={20} />
              </a>
              <a href="https://www.linkedin.com/in/erandi-hansika-a286ab225" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
                <Briefcase size={20} />
              </a>
              <a href="https://medium.com/@erandi2287hansika" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
                <BookOpen size={20} />
              </a>
              <a href="mailto:erandi2287hansika@gmail.com" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition">
                <Mail size={20} />
              </a>
            </div>

            {/* CV Button */}
            <a href="/my-cv.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition">
              <FileText size={18} /> View My Resume
            </a>
          </div>

          {/* Carousel Image */}
          <div className="relative w-full aspect-square max-w-md overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

        </section>
      </main>
    </div>
  );
}