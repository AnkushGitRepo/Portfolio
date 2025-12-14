import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group bg-[#0a0a0a] rounded-3xl overflow-hidden hover:bg-[#111] transition-colors"
        >
            {/* Image Area */}
            <div className="h-64 overflow-hidden relative">
                <img
                    src={project.imageUrl || 'https://via.placeholder.com/600x400'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform">
                            <FiArrowUpRight size={20} />
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-black/50 text-white p-2 rounded-full backdrop-blur-md hover:scale-110 transition-transform">
                            <FiGithub size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
