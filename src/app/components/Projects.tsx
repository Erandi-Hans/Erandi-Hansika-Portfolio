'use client';
import { useState } from 'react';
import { FolderGit2, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    image?: string;
    categories: ('React.js' | '.NET Core' | 'MERN' | 'Next.js' | 'Python' | 'Other')[];
    githubUrl?: string;
    liveUrl?: string;
    tags: string[];
}

export default function Projects() {
    const [filter, setFilter] = useState<string>('All');

    const projects: Project[] = [
        {
            title: 'Erandi Hansika Portfolio',
            description: 'My personal portfolio website showcasing my full-stack projects, research, and professional journey.',
            image: '/img/project/portpolio.png',
            categories: ['React.js', 'Next.js', 'Other'],
            githubUrl: 'https://github.com/Erandi-Hans/Erandi-Hansika-Portfolio.git',
            liveUrl: 'https://erandi-hansika-portfolio.vercel.app/',
            tags: ['Next.js', 'TypeScript', 'Tailwind CSS']
        },
        {
            title: 'SillaraAI',
            description: 'An AI-powered platform with modern UI, robust state management, and seamless user experience.',
            image: '/img/project/sillara1.png',
            categories: ['MERN', 'React.js'],
            githubUrl: 'https://github.com/Erandi-Hans/SillaraAI.git',
            liveUrl: 'https://sillara-ai.vercel.app/',
            tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
        },
        {
            title: 'SkillPivotlk',
            description: 'A full-stack career platform designed for skill gap analysis, career recommendations, and professional guidance.',
            image: '/img/project/skillp1.png',
            categories: ['.NET Core', 'React.js', 'MERN'],
            githubUrl: 'https://github.com/Erandi-Hans/SkillPivot-Frontend.git',
            liveUrl: 'https://skill-pivot-frontend.vercel.app/',
            tags: ['React.js', '.NET Core', 'SQL Server', 'Tailwind CSS']
        },
        {
            title: 'Kronix Agency',
            description: 'A professional agency landing page developed with scalable architecture, modern UI, and smooth animations.',
            image: '/img/project/kronix.png',
            categories: ['React.js'],
            githubUrl: 'https://github.com/Erandi-Hans/kronix-agency.git',
            liveUrl: 'https://kronix-agency.vercel.app/',
            tags: ['React.js', 'Tailwind CSS', 'Vite']
        },
        {
            title: 'NLP Keyword Extractor (MiniLM & KeyBERT)',
            description: 'Semantic computing research project focused on extracting accurate keywords from large documents using BERT and KeyBERT models.',
            categories: ['Python', 'Other'],
            githubUrl: 'https://github.com/Erandi-Hans/NLP-Keyword-Extractor-MiniLM-KeyBERT.git',
            tags: ['Python', 'NLP', 'KeyBERT', 'Machine Learning']
        },
        {
            title: 'Semantic Keyword Explorer (BERT/RoBERTa)',
            description: 'Advanced semantic keyword explorer utilizing BERT and RoBERTa models for enhanced extraction accuracy.',
            categories: ['Python', 'Other'],
            githubUrl: 'https://github.com/Erandi-Hans/Semantic-Keyword-Explorer-BERT-RoBERTa-better-Accuracy--Colab.git',
            tags: ['Python', 'BERT', 'RoBERTa', 'Google Colab']
        },
        {
            title: 'Semantic Keyword Explorer (YAKE)',
            description: 'Unsupervised automatic keyword extraction implementation using the YAKE algorithm in Google Colab.',
            categories: ['Python'],
            githubUrl: 'https://github.com/Erandi-Hans/Semantic-Keyword-Explorer-YAKE--Colabs.git',
            tags: ['Python', 'YAKE', 'NLP', 'Colab']
        },
        {
            title: 'Semantic Keyword Explorer (BERT Colab)',
            description: 'Google Colab notebook implementation for exploring and extracting keywords via BERT embeddings.',
            categories: ['Python'],
            githubUrl: 'https://github.com/Erandi-Hans/Semantic-Keyword-Explorer-BERT-Colab.git',
            tags: ['Python', 'BERT', 'NLP']
        },
        {
            title: 'My Semantic Search Engine',
            description: 'A custom-built semantic search engine prototype designed to retrieve contextually relevant information.',
            categories: ['Python', 'Other'],
            githubUrl: 'https://github.com/Erandi-Hans/my-semantic-search-engine.git',
            tags: ['Python', 'Semantic Search', 'Information Retrieval']
        },
        {
            title: 'Domain Similarity Search',
            description: 'An intelligent similarity matching tool designed to compare and evaluate domain-specific texts and features.',
            categories: ['Python'],
            githubUrl: 'https://github.com/Erandi-Hans/Domain-Similarity-Search.git',
            tags: ['Python', 'Data Analysis', 'Similarity Metrics']
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.categories.includes(filter as any));

    const categories = ['All', 'React.js', 'Next.js', '.NET Core', 'MERN', 'Python', 'Other'];

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
                                    {/* Project Image or Fallback Header */}
                                    {project.image ? (
                                        <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/80">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-40 sm:h-44 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-zinc-900 border border-cyan-800/30 flex flex-col items-center justify-center p-6 text-center space-y-2">
                                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                                <Code2 size={24} />
                                            </div>
                                            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Research / Python Script</span>
                                        </div>
                                    )}

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