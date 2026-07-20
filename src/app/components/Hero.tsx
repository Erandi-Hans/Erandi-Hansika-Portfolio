"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, BookOpen, FileText, Mail, Sparkles } from 'lucide-react';

const images = ["/img/p1 (2).jpeg", "/img/p2.jpeg", "/img/p3.jpeg", "/img/p5.jpeg"];

const techStacks = [
    "HTML", "CSS", "JavaScript", "TypeScript", "C#", , "Python", "SQL Server",
    "React.js", "MERN Stack (Node.js, Express.js, MongoDB)", "Next.js", ".NET Core", "Tailwind CSS"
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[85vh] py-12">
            {/* Text Content */}
            <div className="space-y-6">

                {/* Role Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium shadow-inner">
                    <Sparkles size={14} className="text-amber-400" />
                    <span>Full-Stack Software Engineer & NLP Researcher</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">G.M.E. Hansika</h1>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                    BICT Undergraduate at University of Vavuniya. Bridging language and computation through intelligent architectures and modern web technologies.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {techStacks.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-900/80 border border-zinc-800/80 rounded-md text-xs font-mono text-zinc-300">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-2">
                    <a href="https://github.com/Erandi-Hans" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition">
                        <Code size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/erandi-hansika-a286ab225" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition">
                        <Briefcase size={20} />
                    </a>
                    <a href="https://medium.com/@erandi2287hansika" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition">
                        <BookOpen size={20} />
                    </a>
                    <a href="mailto:erandi2287hansika@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition">
                        <Mail size={20} />
                    </a>
                </div>

                {/* CV Button */}
                <div className="pt-2">
                    <a href="/my-cv.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition shadow-lg shadow-white/5">
                        <FileText size={18} /> View My Resume
                    </a>
                </div>
            </div>

            {/* Carousel Image */}
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl bg-zinc-900">
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
    );
}