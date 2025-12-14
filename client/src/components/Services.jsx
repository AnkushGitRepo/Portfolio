import React from 'react';

const Services = () => {
    return (
        <section id="services" className="bg-dark-bg text-off-white py-32 px-6 md:px-12">
            {/* Header */}
            <div className="mb-32">
                <h2 className="text-[12vw] font-bold tracking-tighter leading-none text-off-white">
                    WHAT I DO /
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-20">

                {/* Left: Description */}
                <div className="space-y-6">
                    <span className="text-gray-500 uppercase tracking-widest text-sm">(Services)</span>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-sans max-w-md">
                        I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life.
                    </p>
                </div>

                {/* Right: List Items */}
                <div className="space-y-20">

                    {/* Item 1 */}
                    <div className="group border-t border-white/20 pt-12">
                        <span className="text-4xl font-bold text-gray-500 mb-8 block">(01)</span>
                        <h3 className="text-5xl md:text-6xl font-bold mb-8 group-hover:text-accent-blue transition-colors">
                            Full-Stack Development
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-sm">
                            From frontend interactions to backend APIs, I build complete web solutions. Scalable, maintainable, and ready for users.
                        </p>
                        <ul className="flex flex-wrap gap-4 text-gray-500 font-mono">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>

                    {/* Item 2 */}
                    <div className="group border-t border-white/20 pt-12">
                        <span className="text-4xl font-bold text-gray-500 mb-8 block">(02)</span>
                        <h3 className="text-5xl md:text-6xl font-bold mb-8 group-hover:text-accent-blue transition-colors">
                            UI/UX & Frontend
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-sm">
                            Design is more than looks. I create responsive interfaces that feel intuitive and accessible across all devices.
                        </p>
                        <ul className="flex flex-wrap gap-4 text-gray-500 font-mono">
                            <li>Figma</li>
                            <li>Tailwind</li>
                            <li>Framer Motion</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
