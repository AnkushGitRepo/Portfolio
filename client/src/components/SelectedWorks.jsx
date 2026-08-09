import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import flovexImg from '../assets/Flovex.png';
import sortingVisualizerImg from '../assets/SortingVisualizer.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectItem = ({ project, index }) => {
    const num = (index + 1).toString().padStart(2, '0');

    return (
        <div className="flex-1 flex flex-col py-10 md:py-14 min-h-0">
            <div className="grid md:grid-cols-12 gap-8 flex-1 min-h-0">

                {/* Number - Flex items-start for top alignment */}
                <div className="md:col-span-1 hidden md:flex justify-end items-start pt-2">
                    <span className="text-[10rem] leading-[0.8] font-bold text-[#333] font-mono tracking-tighter -ml-16">
                        {num}
                    </span>
                </div>

                {/* Content */}
                <div className="md:col-span-11 pl-8 flex flex-col">
                    {/* 1. Title & Links Header - stays at top */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <h3 className="text-4xl font-bold font-sans">{project.title}</h3>
                                {project.isPlaceholder && (
                                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-400/40 rounded-full px-3 py-1">
                                        Placeholder content
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-400 italic mt-1 font-serif text-lg">
                                {project.role} | {project.stack}
                            </p>
                        </div>
                        <a
                            href={`https://github.com/${project.githubLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm break-all"
                        >
                            {project.githubLink}
                        </a>
                    </div>

                    {/* 2. Media (left) + Description (right) - centered in remaining space */}
                    <div className="flex-1 flex items-center min-h-0 py-8">
                    <div className="w-full grid md:grid-cols-2 gap-6 items-center">
                        {/* Media Embed (Image, Video, or Placeholder) */}
                        <div className="w-full aspect-video bg-black/20 rounded-lg overflow-hidden shadow-2xl relative group">
                            {project.image ? (
                                project.liveLink ? (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                    </a>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )
                            ) : project.videoId ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${project.videoId}?start=78&mute=1&controls=1`}
                                    title={project.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/5 text-gray-500">
                                    <span className="text-sm font-mono uppercase tracking-widest">Preview placeholder</span>
                                    <span className="text-xs text-gray-600">Add a screenshot for {project.title}</span>
                                </div>
                            )}
                        </div>

                        {/* Description Bullets */}
                        <ul className="space-y-3">
                            {project.description.map((point, i) => (
                                <li key={i} className="flex items-start text-gray-300 font-sans text-base md:text-lg leading-relaxed">
                                    <span className="mr-3 mt-1.5 text-xs text-gray-500 hidden md:inline">●</span>
                                    <span className="flex-1">{point}</span>
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const projects = [
    {
        title: "Flovex (Financial Dashboard)",
        role: "Full-Stack Developer",
        stack: "React, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB",
        githubLink: "AnkushGitRepo/Flovex-Assignment",
        liveLink: "https://flovex.vercel.app",
        image: flovexImg,
        description: [
            "Built a full-stack financial dashboard as a Frontend Developer assignment for Zorvyn.io, featuring real-time KPI cards, animated charts, and a recent-transactions feed.",
            "Implemented role-based access control (Admin vs Viewer) gating transaction CRUD, subscription management, and CSV export.",
            "Automated recurring subscription billing with node-cron and built a Redux Toolkit + RTK Query data layer against a Node/Express/MongoDB REST API."
        ]
    },
    {
        title: "MarketMitra (Financial Dashboard)",
        role: "Full-Stack Developer",
        stack: "React, Node.js, Express, MongoDB, Python",
        githubLink: "AnkushGitRepo/Financial-Dashboard",
        videoId: "akQ9g7HR79A",
        description: [
            "Built a full-stack financial dashboard enabling users to track and visualize stock portfolios through interactive charts and real-time data summaries.",
            "Implemented secure authentication using JWT and Bcrypt, ensuring protected access and encrypted user data.",
            "Integrated third-party APIs and automated data ingestion through Python-based web scraping pipelines."
        ]
    },
    {
        title: "Sorting Visualizer",
        role: "Frontend Developer",
        stack: "React, Vite, CSS3, Framer Motion",
        githubLink: "AnkushGitRepo/Sorting_Visualizer_SEM-V",
        liveLink: "https://sorting-visualizer-sem-v.vercel.app/",
        image: sortingVisualizerImg,
        description: [
            "Developed a dynamic web application to visualize various sorting algorithms including Bubble, Merge, Quick, Insertion, and Selection sorts.",
            "Implemented smooth animations and step-by-step visualizations using framer-motion to enhance algorithm comprehension.",
            "Provided adjustable animation speed controls and theoretical complexity analysis for deeper learning."
        ]
    }
];

const SelectedWorks = () => {
    const containerRef = useRef(null);
    const panelsRef = useRef([]);

    useGSAP(() => {
        // Pin-and-stack needs each panel's full content to fit within one viewport
        // (a pinned panel is position:fixed, so anything past the fold is unreachable).
        // Below this size, fall back to plain stacked scrolling instead.
        ScrollTrigger.matchMedia({
            '(min-width: 768px) and (min-height: 650px)': () => {
                const panels = panelsRef.current;

                // The first project stays in normal flow (not pinned/"a card") and the
                // last has nothing to cover it — only the middle project(s) pin and get
                // covered by the one after.
                panels.forEach((panel, i) => {
                    const isFirst = i === 0;
                    const isLast = i === panels.length - 1;
                    if (isFirst || isLast) return;

                    ScrollTrigger.create({
                        trigger: panel,
                        start: 'top top',
                        end: () => `+=${panel.offsetHeight}`,
                        pin: true,
                        pinSpacing: false,
                    });

                    gsap.to(panel, {
                        scale: 0.92,
                        opacity: 0.5,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: panels[i + 1],
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        },
                    });
                });
            },
        });
    }, { scope: containerRef, dependencies: [] });

    return (
        <section id="projects" ref={containerRef} className="bg-dark-bg text-off-white">
            <div className="pt-20 pb-6 px-6 md:px-12">
                <h2 className="text-6xl md:text-8xl font-bold text-off-white tracking-tighter uppercase">Projects /</h2>
            </div>

            {projects.map((project, index) => (
                <div
                    key={project.title}
                    ref={(el) => { panelsRef.current[index] = el; }}
                    style={{ zIndex: index + 1 }}
                    className="relative w-full min-h-screen flex flex-col bg-dark-bg px-6 md:px-12"
                >
                    <ProjectItem project={project} index={index} />
                </div>
            ))}
        </section>
    );
};

export default SelectedWorks;
