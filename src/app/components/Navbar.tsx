'use client';
import { useState } from 'react';
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800">
            <div className="w-full max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    Erandi Hansika
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-lg font-medium text-zinc-400">
                    <Link href="#about" className="hover:text-white transition">About</Link>
                    <Link href="#skills" className="hover:text-white transition">Technical Skills</Link>
                    <Link href="#experience" className="hover:text-white transition">Experience & Involvement</Link>
                    <Link href="#projects" className="hover:text-white transition">Projects</Link>
                    <Link href="#contact" className="hover:text-white transition">Contact</Link>
                </div>

                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#050505]/95 border-b border-zinc-800 px-6 py-6 space-y-4 flex flex-col text-lg font-medium text-zinc-400 backdrop-blur-md">
                    <Link
                        href="#about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition"
                    >
                        About
                    </Link>
                    <Link
                        href="#skills"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition"
                    >
                        Technical Skills
                    </Link>
                    <Link
                        href="#experience"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition"
                    >
                        Experience & Involvement
                    </Link>
                    <Link
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition"
                    >
                        Contact
                    </Link>
                    <div className="pt-2">
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-block px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition text-center w-full"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}