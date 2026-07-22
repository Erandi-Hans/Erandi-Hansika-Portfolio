'use client';
import { useState, useEffect } from 'react';
import { Briefcase, GitPullRequest, Users } from 'lucide-react';
import Image from 'next/image';

export default function Experience() {
    // Image lists based on your folder structure
    const iykonsImages = ['/img/iycons/i1.jpg', '/img/iycons/i2.jpg', '/img/iycons/i3.jpg', '/img/iycons/i4.jpg', '/img/iycons/i5.jpg'];
    const labImages = ['/img/lab/lab1.jpg', '/img/lab/lab2.jpg', '/img/lab/lab3.jpg', '/img/lab/lab4.jpg', '/img/lab/lab5.jpg'];
    const bsImages = ['/img/BS/b1.jpeg', '/img/BS/b2.jpeg', '/img/BS/b3.jpeg', '/img/BS/b4.jpeg', '/img/BS/b5.jpeg', '/img/BS/b6.jpeg'];
    const ocnImages = ['/img/ocn/oc1.jpg'];
    const ocnImages2 = ['/img/ocn/oc2contributer.png'];

    // State for moving/sliding images with independent timelines
    const [iykonsIndex, setIykonsIndex] = useState(0);
    const [labIndex, setLabIndex] = useState(0);
    const [bsIndex, setBsIndex] = useState(0);

    // Independent timers to prevent all images sliding at the exact same time
    useEffect(() => {
        const timer1 = setInterval(() => {
            setIykonsIndex((prev) => (prev + 1) % iykonsImages.length);
        }, 4500);

        const timer2 = setInterval(() => {
            setLabIndex((prev) => (prev + 1) % labImages.length);
        }, 6000);

        const timer3 = setInterval(() => {
            setBsIndex((prev) => (prev + 1) % bsImages.length);
        }, 5200);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
        };
    }, [iykonsImages.length, labImages.length, bsImages.length]);

    return (
        <a href="experience">
            <section id="experience" className="w-full max-w-[1600px] pt-20 mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60 scroll-mt-36">
                <div className="space-y-10">

                    {/* Section Title */}
                    <div className="space-y-3 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Experience & Volunteering</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            A look into my professional journey, academic research, open-source contributions, and community leadership.
                        </p>
                    </div>

                    {/* 3 Categories Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* 1. Research & Professional Experience */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">


                                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                        <Briefcase size={24} stroke="#67e8f9" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Experience & Volunteering</h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Item 1: IYKONS */}
                                    <div className="flex flex-col p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl gap-4">
                                        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md">
                                            <Image
                                                src={iykonsImages[iykonsIndex]}
                                                alt="IYKONS Research"
                                                fill
                                                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 w-full">
                                            <h4 className="text-white font-semibold text-base">Undergraduate Researcher</h4>
                                            <p className="text-xs text-cyan-300 font-medium">IYKONS Industry Research Park</p>
                                            <p className="text-xs text-zinc-400 leading-relaxed pt-1">Focusing on Semantic Computing and NLP to bridge academia and industry.</p>
                                        </div>
                                    </div>

                                    {/* Item 2: Lab Assistant */}
                                    <div className="flex flex-col p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl gap-4">
                                        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md">
                                            <Image
                                                src={labImages[labIndex]}
                                                alt="Lab Assistant"
                                                fill
                                                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 w-full">
                                            <h4 className="text-white font-semibold text-base">Lab Assistant</h4>
                                            <p className="text-xs text-cyan-300 font-medium">University of Vavuniya</p>
                                            <p className="text-xs text-zinc-400 leading-relaxed pt-1">Assisted in managing laboratory sessions and guiding students technically.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Open Source & Contributions */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
                                        <GitPullRequest size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Open Source</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl space-y-4">
                                        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md">
                                            <Image
                                                src={ocnImages2[0]}
                                                alt="GitHub Open Source Project"
                                                fill
                                                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 w-full">
                                            <h4 className="text-white font-semibold text-base">GitHub Contributor</h4>
                                            <p className="text-xs text-emerald-400 font-medium">GitHub Open Source Project</p>
                                            <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                                                Successfully submitted a Pull Request (PR) resolving issue contributions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl space-y-4">
                                        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md">
                                            <Image
                                                src={ocnImages[0]}
                                                alt="Social Summer of Code"
                                                fill
                                                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 w-full">
                                            <h4 className="text-white font-semibold text-base">Open Source Contributor</h4>
                                            <p className="text-xs text-emerald-400 font-medium">Social Summer of Code (SSoC)</p>
                                            <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                                                Contributed to open-source repositories and successfully merged pull requests during SSoC Season 5.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Leadership & Extracurricular */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Leadership & Community</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl space-y-4">
                                        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/80 shadow-md">
                                            <Image
                                                src={bsImages[bsIndex]}
                                                alt="Buddhist Society"
                                                fill
                                                className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 w-full">
                                            <h4 className="text-white font-semibold text-base">Active Member</h4>
                                            <p className="text-xs text-amber-400 font-medium">University Buddhist Society</p>
                                            <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                                                Collaborated in organizing events, volunteering, and fostering community values.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </a>
    );
}