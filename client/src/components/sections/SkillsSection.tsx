'use client';

import { useState, useEffect } from 'react';
import { Skill, SkillCategory } from '@/types';
import { getAllSkills } from '@/lib/apiWithFallback';
import { useThemeColor } from '@/components/theme-color-context';
import { getAssetPath } from '@/lib/utils';

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // We're using our own color cycling instead of the theme context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentColor } = useThemeColor(); // Unused but kept for consistency

  // Track the current index for color cycling
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define styles for different color themes
  const styles = [
    // Blue theme
    {
      bg: 'from-blue-50 to-blue-100',
      accent: 'bg-blue-600',
      text: 'text-blue-600',
      light: 'bg-blue-100',
    },
    // Green theme
    {
      bg: 'from-green-50 to-green-100',
      accent: 'bg-green-600',
      text: 'text-green-600',
      light: 'bg-green-100',
    },
    // Purple theme
    {
      bg: 'from-purple-50 to-purple-100',
      accent: 'bg-purple-600',
      text: 'text-purple-600',
      light: 'bg-purple-100',
    },
    // Orange theme
    {
      bg: 'from-orange-50 to-orange-100',
      accent: 'bg-orange-600',
      text: 'text-orange-600',
      light: 'bg-orange-100',
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

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getAllSkills();
        setSkills(data);
      } catch (err) {
        setError('Failed to load skills. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    ...Object.values(SkillCategory).map((category) => ({
      id: category,
      name: category,
    })),
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  // We're not using skill level bars anymore

  return (
    <section className="py-20 relative" id="skills">
      {/* Background with color transition */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentStyle.bg} transition-all duration-500`}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${currentStyle.light} ${currentStyle.text}`}>
            My Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Here are the technologies and tools I work with.
          </p>
          <div className={`w-20 h-1 rounded-full mx-auto mt-4 transition-colors duration-500 ${currentStyle.accent}`}></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? `${currentStyle.accent} text-white shadow-md`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${currentStyle.accent}`}></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : activeCategory !== 'all' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill._id}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <div className={`w-16 h-16 mb-4 flex items-center justify-center ${currentStyle.light} rounded-lg`}>
                  {/* Using div with background image instead of img to avoid Next.js warnings */}
                  <div
                    style={{
                      backgroundImage: `url(${getAssetPath(skill.icon)})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '36px',
                      height: '36px'
                    }}
                    aria-label={skill.name}
                    role="img"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="mb-10">
                <h3 className={`text-2xl font-bold mb-6 ${currentStyle.text} border-b pb-2`}>{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill._id}
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className={`w-16 h-16 mb-4 flex items-center justify-center ${currentStyle.light} rounded-lg`}>
                        {/* Using div with background image instead of img to avoid Next.js warnings */}
                        <div
                          style={{
                            backgroundImage: `url(${getAssetPath(skill.icon)})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '36px',
                            height: '36px'
                          }}
                          aria-label={skill.name}
                          role="img"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 text-center">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
