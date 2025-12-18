import React, { useState, useEffect } from 'react';
import { FiFolder, FiCpu, FiUser, FiAward, FiMail } from "react-icons/fi";

const MobileActionBar = () => {
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
        const handleScroll = () => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-light-bg/80 backdrop-blur-sm border-t border-black/5 py-3 px-6 flex justify-around items-center z-50 pb-safe">
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
