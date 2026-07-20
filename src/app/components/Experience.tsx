import { Briefcase, GitPullRequest, Users } from 'lucide-react';
import Image from 'next/image';

export default function Experience() {
    return (
        <section id="experience" className="h-screen w-full max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60 scroll-mt-28">
            <div className="space-y-10">

                {/* Section Title */}
                <div className="space-y-3 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Experience & Involvement</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        A look into my professional journey, academic research, open-source contributions, and community leadership.
                    </p>
                </div>

                {/* 3 Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* 1. Research & Professional Experience */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Experience & Research</h3>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Item 1: IYKONS */}
                                <div className="flex items-start gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700">
                                        {/* මෙතැනට IYKONS logo එකේ පින්තූරය දාන්න (public/img/iykons.png වගේ) */}
                                        <Image src="/img/iykons.png" alt="IYKONS" fill className="object-cover" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-semibold text-base">Undergraduate Researcher</h4>
                                        <p className="text-xs text-indigo-400 font-medium">IYKONS Industry Research Park</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed pt-1">Focusing on Semantic Computing and NLP to bridge academia and industry.</p>
                                    </div>
                                </div>

                                {/* Item 2: University of Vavuniya */}
                                <div className="flex items-start gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700">
                                        {/* මෙතැනට University logo එකේ පින්තූරය දාන්න */}
                                        <Image src="/img/uni-logo.png" alt="University of Vavuniya" fill className="object-cover" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-semibold text-base">Lab Assistant</h4>
                                        <p className="text-xs text-indigo-400 font-medium">University of Vavuniya</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed pt-1">Assisted in managing laboratory sessions and guiding students technically.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Open Source & Contributions */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                                    <GitPullRequest size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Open Source</h3>
                            </div>

                            <div className="p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700">
                                        {/* මෙතැනට GitHub ලාංඡනය හෝ වෙනත් ප්‍රොජෙක්ට් අයිකන් එකක් දාන්න */}
                                        <Image src="/img/github-icon.png" alt="GitHub" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">Contributor</h4>
                                        <p className="text-xs text-emerald-400 font-medium">GitHub Open Source Project</p>
                                    </div>
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Successfully submitted a Pull Request (PR) resolving [mention what you fixed/added briefly here].
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Leadership & Extracurricular */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Leadership & Community</h3>
                            </div>

                            <div className="p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700">
                                        {/* මෙතැනට Buddhist Society ලාංඡනය හෝ අදාළ පින්තූරයක් දාන්න */}
                                        <Image src="/img/buddhist-soc.png" alt="Buddhist Society" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">Active Member</h4>
                                        <p className="text-xs text-amber-400 font-medium">University Buddhist Society</p>
                                    </div>
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Collaborated in organizing events, volunteering, and fostering community values.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}