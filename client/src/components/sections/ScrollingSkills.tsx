'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

// Define the skills to display in the scrolling animation with their icons
const skillsList = [
  { name: 'React', icon: '/images/skills/icons8-react.svg' },
  { name: 'TypeScript', icon: '/images/skills/icons8-typescript.svg' },
  { name: 'JavaScript', icon: '/images/skills/icons8-javascript.svg' },
  { name: 'Node.js', icon: '/images/skills/icons8-nodejs.svg' },
  { name: 'Express', icon: '/images/skills/icons8-express-js.svg' },
  { name: 'Python', icon: '/images/skills/icons8-python.svg' },
  { name: 'Java', icon: '/images/skills/icons8-java.svg' },
  { name: 'HTML', icon: '/images/skills/icons8-html5.svg' },
  { name: 'CSS', icon: '/images/skills/icons8-css.svg' },
  { name: 'Tailwind CSS', icon: '/images/skills/icons8-tailwind-css.svg' },
  { name: 'Bootstrap', icon: '/images/skills/icons8-bootstrap.svg' },
  { name: 'MongoDB', icon: '/images/skills/MongoDB.svg' },
  { name: 'PostgreSQL', icon: '/images/skills/icons8-postgres.svg' },
  { name: 'MySQL', icon: '/images/skills/icons8-mysql.svg' },
  { name: 'Git', icon: '/images/skills/icons8-git.svg' },
  { name: 'GitHub', icon: '/images/skills/icons8-github.svg' },
  { name: 'VS Code', icon: '/images/skills/icons8-visual-studio.svg' },
  { name: 'Redis', icon: '/images/skills/icons8-redis.svg' },
  { name: 'WebStorm', icon: '/images/skills/icons8-webstorm.svg' },
  { name: 'IntelliJ', icon: '/images/skills/icons8-intellij-idea.svg' },
  { name: 'PyCharm', icon: '/images/skills/icons8-pycharm.svg' },
  { name: 'Jupyter', icon: '/images/skills/icons8-jupyter.svg' },
  { name: 'Figma', icon: '/images/skills/icons8-figma.svg' }
];

// Duplicate the skills list to ensure enough items for continuous scrolling
const extendedSkillsList = [...skillsList, ...skillsList, ...skillsList];

const ScrollingSkills = () => {
  // Define the keyframes style
  const keyframesStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    @keyframes marquee2 {
      0% { transform: translateX(100%); }
      100% { transform: translateX(0); }
    }
  `;

  return (
    <section className="py-12 overflow-hidden bg-white relative">
      {/* Add the keyframes style */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />

      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Single row of scrolling skills - moves left */}
      <div className="relative flex overflow-x-hidden py-8">
        <div className="whitespace-nowrap flex items-center" style={{ animation: 'marquee 60s linear infinite' }}>
          {extendedSkillsList.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="inline-block mx-4 transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={getAssetPath(skill.icon)}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 whitespace-nowrap flex items-center py-8" style={{ animation: 'marquee2 60s linear infinite' }}>
          {extendedSkillsList.map((skill, index) => (
            <div
              key={`skill-dup-${index}`}
              className="inline-block mx-4 transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={getAssetPath(skill.icon)}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays to create fade effect at the edges */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent opacity-100 pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent opacity-100 pointer-events-none z-10"></div>
    </section>
  );
};

export default ScrollingSkills;
