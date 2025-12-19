import React, { useState, useEffect } from 'react';
import { FiFolder, FiCpu, FiUser, FiAward, FiMail } from "react-icons/fi";

const MobileActionBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { id: 'projects', icon: FiFolder, label: 'Projects' },
        { id: 'skills', icon: FiCpu, label: 'Skills' },
        { id: 'about', icon: FiUser, label: 'About' },
        { id: 'certifications', icon: FiAward, label: 'Certificates' },
        { id: 'contact', icon: FiMail, label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Highlight active section on scroll
    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            // Show bar on scroll
            setIsVisible(true);
            clearTimeout(timeoutId);

            // Hide bar after 2 seconds of inactivity
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 2000);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-light-bg/80 backdrop-blur-md border border-black/10 shadow-2xl rounded-full py-3 px-6 flex justify-around items-center z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex flex-col items-center space-y-1 transition-colors duration-300 ${isActive ? 'text-black' : 'text-black/50 hover:text-black/80'
                            }`}
                        style={{ minWidth: '60px' }} // Ensure click area is good
                    >
                        <Icon size={20} className={isActive ? 'stroke-2' : 'stroke-[1.5px]'} />
                        <span className="text-[10px] font-medium tracking-wide leading-none">{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default MobileActionBar;
