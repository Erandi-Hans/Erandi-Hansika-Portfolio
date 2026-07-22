'use client';
import { useState } from 'react';
import { FolderGit2, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    image: string;
    category: 'React.js' | '.NET Core' | 'MERN' | 'Other';
    githubUrl?: string;
    liveUrl?: string;
    tags: string[];
}

export default function Projects() {
    const [filter, setFilter] = useState<string>('All');

    const projects: Project[] = [
        {
            title: 'SkillPivotlk',
            description: 'A full-stack career platform designed for skill gap analysis, career recommendations, and professional guidance.',
            image: '/img/projects/skillpivot.png',
            category: 'MERN',
            githubUrl: 'https://github.com/Erandi-Hans',
            liveUrl: 'https://skillpivotlk.vercel.app',
            tags: ['React.js', 'Node.js', 'MongoDB', 'Express']
        },
        {
            title: 'Kronix Agency',
            description: 'A professional agency landing page developed with scalable architecture, modern UI, and smooth animations.',
            image: '/img/projects/kronix.png',
            category: 'React.js',
            githubUrl: 'https://github.com/Erandi-Hans',
            liveUrl: 'https://kronix-agency.vercel.app',
            tags: ['React.js', 'Tailwind CSS', 'Vite']
        },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', 'React.js', '.NET Core', 'MERN', 'Python', 'Other'];

    return (
        <section id="projects" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-20 border-t border-zinc-800/60 scroll-mt-36">
            <div className="space-y-12">

                {/* Section Title */}
                <div className="space-y-3 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                        Explore some of my recent full-stack applications, research implementations, and web designs.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all cursor-pointer ${filter === cat
                                ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/20'
                                : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-5 md:p-6 flex flex-col justify-between space-y-6 backdrop-blur-sm shadow-xl hover:border-cyan-500/40 transition-all group"
                            >
                                <div className="space-y-4">
                                    {/* Project Image */}
                                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/80">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <FolderGit2 size={20} className="text-cyan-400 shrink-0" />
                                        </div>
                                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag, tIndex) => (
                                            <span
                                                key={tIndex}
                                                className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-medium rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs md:text-sm font-medium transition-all"
                                        >
                                            <Code2 size={16} /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-xl text-xs md:text-sm font-bold transition-all shadow-md shadow-cyan-500/10"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-16 text-center text-zinc-500 text-sm">
                            No projects found for this category.
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}