'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useThemeColor } from '@/components/theme-color-context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();
  // const { currentColor } = useThemeColor();
  // Not using currentColor directly, but using the cycling colors instead

  // Define styles matching HeroSection.tsx
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

  // Map color names to style indices (used in theme-color-context.tsx)
  // const colorMap = {
  //   'blue': 0,
  //   'green': 1,
  //   'purple': 2,
  //   'orange': 3
  // };

  // Use the currentIndex to cycle through styles
  const currentStyle = styles[currentIndex];

  // Set up color cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [styles.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-r ${currentStyle.bg} ${
        scrolled ? 'backdrop-blur-md shadow-md' : 'bg-opacity-80'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${currentStyle.profileText} transition-colors duration-300`}>
          Ankush Gupta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg transition-colors duration-300 ${
                pathname === link.href
                  ? `${currentStyle.text} font-medium`
                  : `${currentStyle.profileText} hover:${currentStyle.text}`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${currentStyle.profileText} transition-colors duration-300`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${currentStyle.text} transition-colors duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden bg-gradient-to-r ${currentStyle.bg} shadow-lg`}>
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-lg ${
                  pathname === link.href
                    ? `${currentStyle.text} font-medium bg-white/10`
                    : currentStyle.profileText
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
