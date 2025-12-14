import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Full Stack', 'ML/AI', 'Blockchain', 'Tools'];

    useEffect(() => {
        // Determine category based on tech stack or explicit category field if added later
        // For now, simple client-side filtering logic based on techStack keywords
        axios.get(`${import.meta.env.VITE_API_URL}/projects`)
            .then(res => {
                setProjects(res.data);
                setFilteredProjects(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projects);
            return;
        }

        const filtered = projects.filter(project => {
            // Simple heuristic: check if any tech in stack matches filter or relates to it
            // In a real app, projects should have a 'category' field. 
            // We'll simulate checking the techStack for now.
            const stack = project.techStack.map(t => t.toLowerCase());
            const filter = activeFilter.toLowerCase();

            if (filter === 'full stack') return stack.includes('react') || stack.includes('node.js') || stack.includes('mern');
            if (filter === 'ml/ai') return stack.includes('python') || stack.includes('tensorflow') || stack.includes('pytorch') || stack.includes('ai');

            return stack.includes(filter);
        });
        setFilteredProjects(filtered);
    }, [activeFilter, projects]);

    return (
        <div className="py-10">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === filter
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            layout
                            key={project._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;
