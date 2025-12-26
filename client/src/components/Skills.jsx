import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            items: ["React", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript", "SEO"]
        },
        {
            title: "Backend",
            items: ["Node.js", "Express.js", "Python", "Java", "PHP", "REST API", "WebSocket"]
        },
        {
            title: "Database & Tools",
            items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Postman"]
        },
        {
            title: "Soft Skills",
            items: ["Good Listener", "Emotional Intelligence", "Time Management", "Attention to Detail", "Knowledge Sharing"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 bg-light-bg text-black px-6 md:px-12 flex flex-col justify-center">
            {/* Header - Right Aligned */}
            <div className="flex justify-end mb-24">
                <h2 className="text-6xl md:text-8xl font-bold text-[#1a1a1a] tracking-tighter uppercase text-right">
                    Skills /
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col">
                        <h3 className="text-2xl font-bold font-sans text-black mb-8 border-b border-black/10 pb-4">
                            {cat.title}
                        </h3>
                        <ul className="space-y-4">
                            {cat.items.map(item => (
                                <li key={item} className="text-gray-600 font-sans text-lg hover:text-black transition-colors cursor-default font-medium">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
