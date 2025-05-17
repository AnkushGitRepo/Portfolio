'use client';

import React from 'react';
import { ColorType } from '@/components/theme-color-context';

interface AnimatedBackgroundProps {
  currentColor: ColorType;
}

export default function AnimatedBackground({ currentColor }: AnimatedBackgroundProps) {
  // Get background color based on theme
  const getBgColor = (color: ColorType) => {
    switch (color) {
      case 'blue':
        return 'from-blue-50 to-blue-100';
      case 'green':
        return 'from-green-50 to-green-100';
      case 'purple':
        return 'from-purple-50 to-purple-100';
      case 'orange':
        return 'from-orange-50 to-orange-100';
      default:
        return 'from-blue-50 to-blue-100';
    }
  };

  // Generate static spots with different sizes
  const spots = [];
  const spotCount = 40;

  for (let i = 0; i < spotCount; i++) {
    const size = Math.floor(Math.random() * 60) + 20; // 20-80px
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const opacity = (Math.random() * 0.2) + 0.1; // 0.1-0.3
    const blur = size / 3;

    spots.push(
      <div
        key={i}
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          width: size,
          height: size,
          left,
          top,
          opacity,
          filter: `blur(${blur}px)`,
          animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`
        }}
      />
    );
  }

  return (
    <div className={`fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br ${getBgColor(currentColor)} transition-colors duration-1000`}>
      {spots}

      {/* CSS for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
