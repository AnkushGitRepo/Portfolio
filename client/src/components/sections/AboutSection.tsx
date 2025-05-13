'use client';

import { useState, useEffect, useCallback } from 'react';
import { useThemeColor } from '@/components/theme-color-context';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  // We're using our own color cycling instead of the theme context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentColor } = useThemeColor(); // Unused but kept for consistency
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the slider with position adjustments
  const images = [
    { src: '/images/img_1.jpg', position: 'object-[center_30%]' }, // Adjusted to show face better
    { src: '/images/img_2.jpeg', position: 'object-[center_45%]' }, // Moved up very significantly to show more of the image
    { src: '/images/img_3.jpeg', position: 'object-center' },
    { src: '/images/Img_4.jpeg', position: 'object-[center_25%]' }, // Custom percentage from top
  ];

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Function to go to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Define styles for different color themes
  const styles = [
    // Blue theme
    {
      bg: 'from-blue-50 to-blue-100',
      accent: 'bg-blue-600',
      photoBg: 'bg-blue-100',
      photoText: 'text-blue-800',
      headingText: 'text-blue-600',
      profileBg: 'bg-blue-100',
      profileText: 'text-blue-800',
    },
    // Green theme
    {
      bg: 'from-green-50 to-green-100',
      accent: 'bg-green-600',
      photoBg: 'bg-green-100',
      photoText: 'text-green-800',
      headingText: 'text-green-600',
      profileBg: 'bg-green-100',
      profileText: 'text-green-800',
    },
    // Purple theme
    {
      bg: 'from-purple-50 to-purple-100',
      accent: 'bg-purple-600',
      photoBg: 'bg-purple-100',
      photoText: 'text-purple-800',
      headingText: 'text-purple-600',
      profileBg: 'bg-purple-100',
      profileText: 'text-purple-800',
    },
    // Orange theme
    {
      bg: 'from-orange-50 to-orange-100',
      accent: 'bg-orange-600',
      photoBg: 'bg-orange-100',
      photoText: 'text-orange-800',
      headingText: 'text-orange-600',
      profileBg: 'bg-orange-100',
      profileText: 'text-orange-800',
    },
  ];

  // Set up color cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [styles.length]);

  // Get current style
  const currentStyle = styles[currentIndex];

  return (
    <section className={`py-20 bg-gradient-to-br ${currentStyle.bg} transition-colors duration-500 relative overflow-hidden`} id="about">
      {/* Decorative blurry spots */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-white opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-white opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-white opacity-20 blur-3xl animate-blob animation-delay-3000"></div>
      <div className="absolute top-40 right-1/4 w-60 h-60 rounded-full bg-white opacity-15 blur-3xl animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-1/3 left-10 w-52 h-52 rounded-full bg-white opacity-15 blur-3xl animate-blob animation-delay-5000"></div>
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white opacity-10 blur-3xl animate-blob animation-delay-6000"></div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className={`w-20 h-1 ${currentStyle.accent} mx-auto transition-colors duration-500`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${currentStyle.photoBg} transition-colors duration-500 backdrop-blur-sm bg-opacity-80`}>
            {/* Image Slider */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={getAssetPath(image.src)}
                      alt={`Slide ${index + 1}`}
                      fill
                      className={`object-cover ${image.position} transition-transform duration-700 hover:scale-105`}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-colors duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-colors duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? `w-4 ${currentStyle.accent}` : 'bg-white/70'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-6 rounded-lg bg-white/30 backdrop-blur-sm shadow-lg">
            <h3 className={`text-2xl font-bold ${currentStyle.headingText} mb-4 transition-colors duration-500`}>
              ML Engineer & Full Stack Developer
            </h3>
            <p className="text-gray-700 mb-6 transition-colors duration-300">
              I&apos;m a passionate ML Engineer and Full Stack Developer with expertise in building
              intelligent and user-friendly applications. With a strong foundation in both machine
              learning and web development, I create solutions that are not only technically sound
              but also deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 mb-6 transition-colors duration-300">
              My journey in technology began with a deep curiosity about how things work, which led
              me to pursue a degree in Computer Science. Since then, I&apos;ve worked on various projects
              ranging from predictive analytics systems to responsive web applications.
            </p>
            <p className="text-gray-700 mb-8 transition-colors duration-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="mt-6">
              <div className={`p-4 rounded-lg ${currentStyle.profileBg} transition-colors duration-500 max-w-md mx-auto backdrop-blur-sm bg-opacity-80 shadow-lg`}>
                <h4 className={`text-lg font-semibold ${currentStyle.profileText} mb-3 transition-colors duration-500`}>
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <a href="https://ljku.edu.in/" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105 duration-300">
                      <Image
                        src={getAssetPath("/images/LJ_Logo.png")}
                        alt="LJ University Logo"
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                    </a>
                    <div className="text-center">
                      <div className="text-gray-800 font-medium">BE in Computer Science And Information Technology (CSIT)</div>
                      <div className="text-sm text-gray-700">LJ University, 2024-Present</div>
                      <a
                        href="https://ljku.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm ${currentStyle.headingText} hover:underline mt-1 inline-block transition-colors duration-300`}
                      >
                        Visit University Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add some bottom padding to ensure the bottom accent bar is visible */}
        <div className="pb-8"></div>
      </div>
    </section>
  );
};

export default AboutSection;
