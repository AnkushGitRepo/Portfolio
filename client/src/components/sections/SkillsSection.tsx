'use client';

import { useState, useEffect } from 'react';
import { Skill, SkillCategory } from '@/types';
import { getAllSkills } from '@/lib/apiWithFallback';

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1 mt-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-4 rounded-full ${
              i <= level
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 dark:text-red-400 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill._id}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                  <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{skill.name.substring(0, 2)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                {renderSkillLevel(skill.proficiency)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
