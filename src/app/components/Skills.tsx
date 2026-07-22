import { Code2, Server, Database, Brain, Wrench, ShieldCheck, Layers } from 'lucide-react';

export default function Skills() {
    return (
        <a href='skills'>
            <section id="skills" className=" py-24 w-full max-w-[1600px] mx-auto px-10 md:px-12 py-12 border-t border-zinc-800/60">
                <div className="space-y-8">

                    {/* Section Title */}
                    <div className="space-y-2 max-w-8xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-18">Technical Skills & Expertise</h2>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            A comprehensive overview of the technical stack, frameworks, libraries, and methodologies I leverage to build scalable full-stack applications and intelligent NLP systems.
                        </p>
                    </div>

                    {/* HIGHLIGHT SECTION: Core Tech Stack, Frameworks & Libraries */}
                    <div className="bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 border border-zinc-700/80 rounded-2xl p-6 md:p-8 space-y-4 backdrop-blur-sm shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-800/50 flex items-center justify-center text-indigo-400 shrink-0">
                                <Layers size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Core Tech Stack, Frameworks & Libraries</h3>
                                <p className="text-xs text-zinc-400">The foundational core technologies powering my software development journey.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">UI Library</span>
                                <h4 className="text-base font-bold text-white">React.js</h4>
                                <p className="text-xs text-zinc-400">Component-based frontend architecture & hooks.</p>
                            </div>

                            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Full-Stack Framework</span>
                                <h4 className="text-base font-bold text-white">Next.js</h4>
                                <p className="text-xs text-zinc-400">Server-side rendering, routing & production-grade web apps.</p>
                            </div>

                            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Full-Stack Architecture</span>
                                <h4 className="text-base font-bold text-white">MERN Stack</h4>
                                <p className="text-xs text-zinc-400">MongoDB, Express.js, React.js, Node.js integration.</p>
                            </div>

                            <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">Backend Framework</span>
                                <h4 className="text-base font-bold text-white">.NET Core</h4>
                                <p className="text-xs text-zinc-400">Robust enterprise backend APIs, C#, & services.</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid - Balanced with 6 items (3 columns x 2 rows) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* 1. Frontend Development */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-sky-950/40 border border-sky-800/40 flex items-center justify-center text-sky-400">
                                    <Code2 size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">Frontend Ecosystem</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Creating responsive, modern, and user-centric interfaces with seamless user experiences.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 2. Backend & APIs */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                                    <Server size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">Backend & Services</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Developing robust server-side architectures, RESTful APIs, and secure business logic.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["C#", "Node.js", "Express.js", "RESTful APIs"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 3. Databases & Storage */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400">
                                    <Database size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">Databases</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Managing and optimizing relational and non-relational database schemas for high performance.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["SQL Server", "MongoDB", "Database Design", "Data Modeling"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 4. Semantic Computing & NLP */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400">
                                    <Brain size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">NLP & Research</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Specialized computational linguistics, text analysis, keyword extraction, and NLP models.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["Python", "Semantic Computing", "Natural Language Processing", "spaCy", "BERT", "KeyBERT"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 5. Development Tools & IDEs */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400">
                                    <Wrench size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">Tools & Version Control</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Industry-standard IDEs, code management tools, and API testing platforms.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["Git", "GitHub", "VS Code", "Visual Studio", "Postman", "Swagger", "Figma"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 6. Methodologies & Project Management */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3 backdrop-blur-sm shadow-lg hover:border-zinc-700 transition flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-rose-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400">
                                    <ShieldCheck size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white">Methodologies</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Following agile practices, sprint planning, and structured workflow management.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["Agile Methodologies", "Jira", "Sprint Planning", "Collaborative Development"].map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-[11px] font-mono text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </a>
    );
}