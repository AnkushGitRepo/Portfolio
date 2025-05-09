'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/components/theme-color-context';
import { getAssetPath } from '@/lib/utils';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Arrays for styling elements that change
  const styles = [
    {
      bg: 'from-blue-50 to-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      profileBg: 'bg-blue-200',
      profileText: 'text-blue-800'
    },
    {
      bg: 'from-green-50 to-green-100',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      profileBg: 'bg-green-200',
      profileText: 'text-green-800'
    },
    {
      bg: 'from-purple-50 to-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      profileBg: 'bg-purple-200',
      profileText: 'text-purple-800'
    },
    {
      bg: 'from-orange-50 to-orange-100',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      profileBg: 'bg-orange-200',
      profileText: 'text-orange-800'
    }
  ];

  // Array of titles to cycle through
  const titles = [
    'Ankush Gupta',
    'AI Generalist',
    'Full Stack Developer',
    'ML Engineer',
    'UPDATED TITLE'
  ];

  // Get the theme color context
  const { setCurrentColor } = useThemeColor();

  // Change styles and title every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  // Map each title to a specific style and update theme color context
  // 0: Ankush Gupta - Blue
  // 1: AI Generalist - Green
  // 2: Full Stack Developer - Purple
  // 3: ML Engineer - Orange
  const styleMap = [0, 1, 2, 3]; // Maps title index to style index
  const currentStyle = styles[styleMap[currentIndex]];

  // Update the theme color context when the index changes
  useEffect(() => {
    const colorMap = ['blue', 'green', 'purple', 'orange'] as const;
    setCurrentColor(colorMap[currentIndex]);
  }, [currentIndex, setCurrentColor]);

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden`}
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentStyle.bg} transition-colors duration-1000 ease-in-out`}>
        {/* Animated circles */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="mb-4 text-center md:text-left">
              <span className={`inline-block px-4 py-1.5 bg-white bg-opacity-80 rounded-full text-sm font-semibold shadow-sm border border-gray-200 ${currentStyle.text} transition-colors duration-1000`}>
                Full Stack Developer & ML Engineer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-center md:text-left">
              <span>Hi, I&apos;m </span>
              <span className={`${currentStyle.text} transition-all duration-1000 ease-in-out`}>{titles[currentIndex]}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left">
              I build exceptional intelligent systems that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
              <Link
                href="/projects"
                className={`px-6 py-3 ${currentStyle.button} text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110`}
              >
                View My Work
              </Link>
              <a
                href={getAssetPath("/resume.pdf")}
                download
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-5 mx-auto md:mx-0 max-w-xs md:max-w-none">
              <a
                href="https://github.com/AnkushGitRepo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ankushgupta18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_ankushg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:ankushgupta1806@gmail.com"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="Email Contact"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className={`w-full h-full ${currentStyle.profileBg} transition-colors duration-1000 relative`}>
                <Image
                  src={getAssetPath("/images/profile_icon_image.png")}
                  alt="Ankush Gupta"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-gray-600 mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
