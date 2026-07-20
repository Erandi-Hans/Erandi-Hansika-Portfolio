import { Code2, Server, Database, Brain, Wrench, ShieldCheck } from 'lucide-react';

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60">
            <div className="space-y-12">

                {/* Section Title */}
                <div className="space-y-3 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Technical Skills & Expertise</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        A comprehensive overview of the technical stack, tools, and methodologies I leverage to build scalable full-stack applications and intelligent NLP systems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* 1. Frontend Development */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-sky-950/40 border border-sky-800/40 flex items-center justify-center text-sky-400">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Building responsive, modern, and user-centric interfaces with seamless user experiences.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 2. Backend Development */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                            <Server size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Backend & APIs</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Developing robust server-side architectures, RESTful APIs, and secure business logic.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[".NET Core", "C#", "Node.js", "Express.js", "RESTful APIs"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 3. Databases & Storage */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Databases</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Managing and optimizing relational and non-relational database schemas for performance.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["SQL Server", "MongoDB", "MERN Stack", "Database Design"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 4. Semantic Computing & NLP */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">NLP & Research</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Specialized computational linguistics, text analysis, keyword extraction, and NLP models.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Python", "Semantic Computing", "Natural Language Processing (NLP)", "spaCy", "BERT", "KeyBERT"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 5. Development Tools & Version Control */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400">
                            <Wrench size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Tools & Version Control</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Standard industry tools used for code management, collaboration, and interface design.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Git", "GitHub", "VS Code", "Postman", "Figma"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 6. Methodologies & Project Management */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 space-y-4 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition">
                        <div className="w-12 h-12 rounded-2xl bg-rose-950/40 border border-rose-800/40 flex items-center justify-center text-rose-400">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Methodologies</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Following agile practices, sprint planning, and structured workflow management.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Agile Methodologies", "Jira", "Sprint Planning", "Collaborative Development"].map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}