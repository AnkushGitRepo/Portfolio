'use client';

import { useThemeColor } from '@/components/theme-color-context';

export default function ThemeBackground() {
  // Use the centralized theme context
  const { currentColor } = useThemeColor();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none top-0 left-0 right-0 bottom-0">
      {/* Main background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-${currentColor}-50 to-${currentColor}-100 opacity-30 transition-colors duration-1000 ease-in-out`}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Subtle animated elements */}
      <div className={`absolute top-0 -left-4 w-72 h-72 bg-${currentColor}-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob transition-colors duration-1000`}></div>
      <div className={`absolute top-0 -right-4 w-72 h-72 bg-${currentColor}-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-1000`}></div>
      <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-${currentColor}-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 transition-colors duration-1000`}></div>
    </div>
  );
}
