'use client';

import React, { createContext, useContext, useState } from 'react';

// Define the color types
export type ColorType = 'blue' | 'green' | 'purple' | 'orange';

// Define the context type
interface ThemeColorContextType {
  currentColor: ColorType;
  setCurrentColor: (color: ColorType) => void;
}

// Create the context with default values
const ThemeColorContext = createContext<ThemeColorContextType>({
  currentColor: 'blue',
  setCurrentColor: () => {},
});

// Create a provider component
export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
  const [currentColor, setCurrentColor] = useState<ColorType>('blue');

  return (
    <ThemeColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

// Create a hook to use the context
export function useThemeColor() {
  return useContext(ThemeColorContext);
}

// Helper function to get color classes based on current color
export function getColorClasses(color: ColorType) {
  const colorMap = {
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600',
      hover: 'hover:bg-blue-700',
      light: 'bg-blue-100 text-blue-800',
      dark: 'dark:bg-blue-900 dark:text-blue-200',
    },
    green: {
      bg: 'bg-green-600',
      text: 'text-green-600',
      border: 'border-green-600',
      hover: 'hover:bg-green-700',
      light: 'bg-green-100 text-green-800',
      dark: 'dark:bg-green-900 dark:text-green-200',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-600',
      hover: 'hover:bg-purple-700',
      light: 'bg-purple-100 text-purple-800',
      dark: 'dark:bg-purple-900 dark:text-purple-200',
    },
    orange: {
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      border: 'border-orange-600',
      hover: 'hover:bg-orange-700',
      light: 'bg-orange-100 text-orange-800',
      dark: 'dark:bg-orange-900 dark:text-orange-200',
    },
  };

  return colorMap[color];
}
