import { MapPin, Mail, Phone, FileText } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function About() {
    return (
        <a href="#about">
            <section id="about" className="w-full h-screen max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60 flex items-center pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* 1. Personal Info Card with Image */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl lg:col-span-1">

                        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto overflow-hidden rounded-full border border-zinc-800">
                            <Image
                                src="/img/pI1.jpeg"
                                alt="G.M. Erandi Hansika"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4 text-sm">
                            <h3 className="text-xl font-bold text-white text-center">G.M. Erandi Hansika</h3>

                            <div className="flex items-start gap-3 text-zinc-300">
                                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-400 shrink-0 mt-0.5">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">Address</p>
                                    <p className="leading-snug">No 135/1, Mahagalkadawala, Galgamuwa</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-400 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">Email</p>
                                    <a href="mailto:erandi2287hansika@gmail.com" className="hover:text-white transition break-all">
                                        erandi2287hansika@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2.5 bg-zinc-800 rounded-lg text-zinc-400 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">Normal Call</p>
                                    <a href="tel:0785059129" className="hover:text-white transition font-mono">
                                        +94 78 505 9129
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2.5 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-emerald-400 shrink-0">
                                    <FaWhatsapp size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">WhatsApp</p>
                                    <a href="https://wa.me/94760709264" target="_blank" className="hover:text-emerald-400 transition font-mono">
                                        +94 76 070 9264
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 pt-2 justify-center">
                                <a href="https://github.com/Erandi-Hans" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:border-[#333] hover:bg-[#333]/20 transition">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/erandi-hansika-a286ab225" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 transition">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://medium.com/@erandi2287hansika" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:border-white hover:bg-white/10 transition">
                                    <FaMedium size={20} />
                                </a>
                            </div>

                            {/* CV Button */}
                            <div className="pt-2">
                                <a href="/my-cv.pdf" target="_blank" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition shadow-lg shadow-white/5">
                                    <FileText size={18} /> View My Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. Main About Me Description */}
                    <div className="lg:col-span-2 space-y-6 pl-0 lg:pl-6 p-25">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About Me</h2>

                        <p className="text-zinc-400 text-lg leading-relaxed">
                            I am an undergraduate reading for a Bachelor of Information and Communication Technology (BICT) degree at the University of Vavuniya. As a passionate <strong className="text-white">Full-Stack Software Engineer</strong>, I specialize in building modern, scalable web applications using technologies like <strong className="text-white">React.js, Next.js, MERN Stack </strong>and <strong className="text-white">.NET Core</strong>.
                        </p>

                        <p className="text-zinc-400 text-lg leading-relaxed">
                            My expertise extends into Semantic Computing and Natural Language Processing (NLP). Alongside my academic and research journey at the IYKONS Industry Research Park, I actively develop full-stack solutions, bridge language with computation, and engage in collaborative software development.
                        </p>

                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                                <h4 className="text-white font-semibold mb-1">Core Tech Stack</h4>
                                <p className="text-sm text-zinc-400">React.js, Next.js, MERN, .NET Core</p>
                            </div>
                            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                                <h4 className="text-white font-semibold mb-1">Research Focus</h4>
                                <p className="text-sm text-zinc-400">Semantic Computing & NLP</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </a>
    );
}