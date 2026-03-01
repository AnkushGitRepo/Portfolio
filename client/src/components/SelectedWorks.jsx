import React from 'react';
import sortingVisualizerImg from '../assets/SortingVisualizer.png';
import modelHubImg from '../assets/ModelHub.png';

const ProjectItem = ({ project, index }) => {
    const num = (index + 1).toString().padStart(2, '0');

    return (
        <div className="py-20 border-t border-white/10 first:border-none">
            <div className="grid md:grid-cols-12 gap-8">

                {/* Number - Flex items-start for top alignment */}
                <div className="md:col-span-1 hidden md:flex justify-end items-start pt-2">
                    <span className="text-[10rem] leading-[0.8] font-bold text-[#333] font-mono tracking-tighter -ml-16">
                        {num}
                    </span>
                </div>

                {/* Content */}
                <div className="md:col-span-11 space-y-8 pl-8">
                    {/* 1. Title & Links Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                            <h3 className="text-4xl font-bold font-sans">{project.title}</h3>
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

                    {/* 2. Media Embed (Image or Video) */}
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
                        ) : (
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
                        )}
                    </div>

                    {/* 3. Description Bullets */}
                    <ul className="space-y-2">
                        {project.description.map((point, i) => (
                            <li key={i} className="flex items-start text-gray-300 font-sans text-lg leading-relaxed">
                                <span className="mr-3 mt-1.5 text-xs text-gray-500 hidden md:inline">●</span>
                                <span className="flex-1">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SelectedWorks = () => {
    const projects = [
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
        },
        {
            title: "ModelHub — ML Model Serving Platform",
            role: "Backend Developer",
            stack: "Django, Django REST Framework, Python",
            githubLink: "AnkushGitRepo/ModelHub",
            image: modelHubImg,
            description: [
                "Built a web platform allowing users to interact with deployed ML models such as diabetes prediction and fake-news detection via REST APIs.",
                "Developed scalable backend services using Django + DRF to handle model inference, user requests, and dataset processing.",
                "Designed clean UI components using HTML/CSS/JavaScript for intuitive model interaction."
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-dark-bg text-off-white px-6 md:px-12">
            <h2 className="text-6xl md:text-8xl font-bold text-off-white mb-10 md:mb-20 tracking-tighter uppercase">Projects /</h2>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default SelectedWorks;
