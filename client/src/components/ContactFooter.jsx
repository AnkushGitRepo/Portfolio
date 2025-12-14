import React, { useState, useEffect } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

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
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">

                    {/* Direct Contact */}
                    <div className="space-y-4">
                        <a href="mailto:ankushgupta1806@gmail.com" className="block text-3xl md:text-5xl font-sans font-bold text-white hover:text-gray-300 transition-colors break-words">
                            ankushgupta1806@gmail.com
                        </a>
                        <a href="tel:+917202906881" className="block text-2xl md:text-4xl font-mono text-gray-400 hover:text-white transition-colors">
                            +91 7202906881
                        </a>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="mailto:ankushgupta1806@gmail.com"
                            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ankushgupta18/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[#0e76a8] text-white font-bold uppercase tracking-wider rounded-full hover:bg-[#0e76a8]/80 transition-colors flex items-center gap-2"
                        >
                            <FiLinkedin className="text-xl" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/AnkushGitRepo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[#333] text-white font-bold uppercase tracking-wider rounded-full hover:bg-[#444] transition-colors flex items-center gap-2"
                        >
                            <FiGithub className="text-xl" /> GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/_ankushg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            <FiInstagram className="text-xl" /> Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom (White) */}
            <div className="bg-white py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end text-black font-mono text-sm uppercase text-center md:text-left">
                <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
                    <h4 className="font-bold text-black mb-4">Socials</h4>
                    <ul className="space-y-2">
                        <li><a href="https://www.linkedin.com/in/ankushgupta18/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Linkedin</a></li>
                        <li><a href="https://www.instagram.com/_ankushg/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Instagram</a></li>
                        <li><a href="https://github.com/AnkushGitRepo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Github</a></li>
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
