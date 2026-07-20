import { Briefcase, GitPullRequest, Users } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60 scroll-mt-28">
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
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Experience & Research</h3>
                        </div>

                        <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                            {/* Item 1 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                <h4 className="text-white font-semibold">Undergraduate Researcher</h4>
                                <p className="text-sm text-indigo-400 mb-1">IYKONS Industry Research Park</p>
                                <p className="text-xs text-zinc-400">Focusing on Semantic Computing and NLP to bridge academia and industry.</p>
                            </div>
                            {/* Item 2 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                <h4 className="text-white font-semibold">Lab Assistant</h4>
                                <p className="text-sm text-indigo-400 mb-1">University of Vavuniya</p>
                                <p className="text-xs text-zinc-400">Assisted in managing laboratory sessions and guiding students technically.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Open Source & Contributions */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                                <GitPullRequest size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Open Source</h3>
                        </div>

                        <div className="space-y-5">
                            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl">
                                <h4 className="text-white font-semibold">Contributor</h4>
                                <p className="text-sm text-emerald-400 mb-2">GitHub Open Source Project</p>
                                <p className="text-xs text-zinc-400">
                                    Successfully submitted a Pull Request (PR) resolving [mention what you fixed/added briefly here].
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Leadership & Extracurricular */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Leadership & Community</h3>
                        </div>

                        <div className="space-y-5">
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                <h4 className="text-white font-semibold">Active Member</h4>
                                <p className="text-sm text-amber-400 mb-1">University Buddhist Society</p>
                                <p className="text-xs text-zinc-400">Collaborated in organizing events, volunteering, and fostering community values.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}