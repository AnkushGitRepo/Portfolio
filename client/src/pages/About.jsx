import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';

const About = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/skills`)
            .then(res => setSkills(res.data))
            .catch(err => console.error(err));
    }, []);

    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        <div className="max-w-3xl mx-auto space-y-24 pb-20">

            {/* Intro */}
            <section>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-200"
                >
                    I'm Ankush. I turn coffee into code and ideas into reality.
                </motion.h1>
                <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
                    <p>
                        My journey started with a fascination for data and automation. As a Computer Science undergrad, I quickly realized that building models wasn't enough—I wanted to build full products.
                    </p>
                    <p>
                        I specialize in the MERN stack and Python-based AI solutions. Whether it's training a model or optimizing a React render cycle, I love the challenge of engineering efficient systems.
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-2xl font-bold mb-8 text-white">Stack & Tools</h2>
                <div className="space-y-8">
                    {categories.map(category => (
                        <div key={category}>
                            <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.filter(s => s.category === category).map(skill => (
                                    <SkillBadge key={skill._id} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience (Hardcoded for now as per minimal requirment) */}
            <section>
                <h2 className="text-2xl font-bold mb-8 text-white">Experience</h2>
                <div className="border-l-2 border-white/10 pl-6 space-y-12">
                    <div>
                        <h3 className="text-xl font-bold text-white">Freelance Developer</h3>
                        <p className="text-gray-500 text-sm mb-2">2023 - Present</p>
                        <p className="text-gray-400">Delivering custom web solutions and automation scripts for international clients.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">CS Student</h3>
                        <p className="text-gray-500 text-sm mb-2">2021 - 2025</p>
                        <p className="text-gray-400">LJ University. Focused on Data Structures, Algorithms, and System Design.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
