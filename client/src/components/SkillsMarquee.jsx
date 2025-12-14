import React from 'react';

const SkillsMarquee = () => {
    const skills = [
        "PYTHON", "SQL", "REACT", "NODE.JS", "TYPESCRIPT",
        "DOCKER", "FIGMA", "AWS", "MONGODB", "NEXT.JS"
    ];

    return (
        <section className="py-20 border-t border-white/5 overflow-hidden">
            <h2 className="text-sm font-mono text-gray-500 mb-12 uppercase tracking-widest">/ Technologies</h2>

            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex space-x-12">
                    {[...skills, ...skills, ...skills].map((skill, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold font-sans text-white/5 hover:text-accent-blue/50 transition-colors cursor-default select-none">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMarquee;
