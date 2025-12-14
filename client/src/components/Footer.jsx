import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black/90 text-white py-8 border-t border-white/10 mt-auto">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold">Ankush Gupta</span>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
