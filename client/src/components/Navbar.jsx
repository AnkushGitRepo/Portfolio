import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        setIsOpen(false); // Close menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = ['Projects', 'Skills', 'About', 'Certifications', 'Contact'];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-light-bg/80 backdrop-blur-sm">
            {/* Left: Role Label */}
            <div className="text-sm md:text-base font-sans font-medium text-black/80 relative z-50">
                Full Stack Developer
            </div>

            {/* Right: Desktop Links */}
            <div className="hidden md:flex space-x-6 text-sm font-sans font-medium text-black/80">
                {navLinks.map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="hover:text-black hover:underline underline-offset-4 transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
