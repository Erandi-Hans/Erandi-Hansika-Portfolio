import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800">
            <div className="w-full max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    Erandi Hansika
                </Link>
                <div className="hidden md:flex items-center gap-8 text-lg font-medium text-zinc-400">
                    <Link href="#about" className="hover:text-white transition">About</Link>
                    <Link href="#skills" className="hover:text-white transition">Technical Skills</Link>
                    <Link href="#experience" className="hover:text-white transition">Experience</Link>
                    <Link href="#projects" className="hover:text-white transition">Projects</Link>
                    <Link href="#contact" className="hover:text-white transition">Contact</Link>
                </div>
                <Link
                    href="#contact"
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition"
                >
                    Let's Talk
                </Link>
            </div>
        </nav>
    );
}