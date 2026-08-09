import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaDribbble } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { InlineWidget } from 'react-calendly';

const CALENDLY_URL = 'https://calendly.com/ankushg-personal/30min';

const ContactFooter = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="pt-20 bg-dark-bg text-off-white">
            {/* Content Container */}
            {/* Content Container */}
            <div className="px-6 md:px-12 pb-20 relative">

                {/* Giant Header behind/top */}
                <div className="text-center mb-16">
                    <h2 className="text-[12vw] leading-none font-bold text-[#eaeaea] tracking-tighter">
                        LET'S MAKE
                    </h2>
                    <h2 className="text-[12vw] leading-none font-bold text-[#eaeaea] tracking-tighter">
                        IT HAPPEN
                    </h2>
                </div>

                {/* Contact Info & Buttons */}
                <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">

                    {/* Calendly Scheduler */}
                    <div className="max-w-3xl mx-auto text-left">
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
                            <InlineWidget url={CALENDLY_URL} styles={{ height: '650px' }} />
                        </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/ankushgupta18/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 w-52 bg-transparent border border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                            <FiLinkedin className="text-xl" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/AnkushGitRepo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 w-52 bg-transparent border border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                            <FiGithub className="text-xl" /> GitHub
                        </a>
                        <a
                            href="https://dribbble.com/ankushg-personal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 w-52 bg-transparent border border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                            <FaDribbble className="text-xl" /> Dribbble
                        </a>
                        <a
                            href="https://www.fiverr.com/ankushgupta_dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 w-52 bg-transparent border border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                            <SiFiverr className="text-xl" /> Fiverr
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom (White) */}
            <div className="bg-light-bg py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end text-black font-mono text-sm uppercase text-center md:text-left">
                <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
                    <h4 className="font-bold text-black mb-4">Socials</h4>
                    <ul className="space-y-2">
                        <li><a href="https://www.linkedin.com/in/ankushgupta18/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Linkedin</a></li>
                        <li><a href="https://github.com/AnkushGitRepo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Github</a></li>
                        <li><a href="https://dribbble.com/ankushg-personal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Dribbble</a></li>
                        <li><a href="https://www.fiverr.com/ankushgupta_dev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Fiverr</a></li>
                    </ul>
                </div>

                <div className="text-center md:text-right">
                    <h4 className="font-bold text-black mb-1">LOCAL TIME</h4>
                    <p>{time} PM, IST</p>
                </div>
            </div>
        </section>
    );
};

export default ContactFooter;
