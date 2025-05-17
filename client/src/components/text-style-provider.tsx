'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useThemeColor } from '@/components/theme-color-context';

// Define the context type
interface TextStyleContextType {
  headingClass: string;
  subheadingClass: string;
  accentClass: string;
  buttonClass: string;
}

// Create the context with default values
const TextStyleContext = createContext<TextStyleContextType>({
  headingClass: 'text-blue-600',
  subheadingClass: 'text-blue-800',
  accentClass: 'bg-blue-600',
  buttonClass: 'bg-blue-600 hover:bg-blue-700',
});

// Create a hook to use the context
export function useTextStyle() {
  return useContext(TextStyleContext);
}

// Create a provider component
export function TextStyleProvider({ children }: { children: ReactNode }) {
  const { currentColor } = useThemeColor();

  // Map theme styles to text styles
  const textStyle = {
    headingClass: `text-${currentColor}-600`,
    subheadingClass: `text-${currentColor}-800`,
    accentClass: `bg-${currentColor}-600`,
    buttonClass: `bg-${currentColor}-600 hover:bg-${currentColor}-700`,
  };

  return (
    <TextStyleContext.Provider value={textStyle}>
      {children}
    </TextStyleContext.Provider>
  );
}

// Heading component with dynamic styling
export function DynamicHeading({
  children,
  level = 1,
  className = ''
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const { headingClass } = useTextStyle();

  const baseClasses = `font-bold transition-colors duration-500 ${headingClass} ${className}`;

  const sizeClasses = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${baseClasses} ${sizeClasses[level]}`}>
      {children}
    </HeadingTag>
  );
}

// Paragraph component with dark text for readability
export function Paragraph({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-gray-800 ${className}`}>
      {children}
    </p>
  );
}

// Accent bar component
export function AccentBar({
  className = ''
}: {
  className?: string;
}) {
  const { accentClass } = useTextStyle();

  return (
    <div className={`w-20 h-1 rounded-full transition-colors duration-500 ${accentClass} ${className}`}></div>
  );
}

// Button component
export function StyledButton({
  children,
  className = '',
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { buttonClass } = useTextStyle();

  return (
    <button
      className={`px-4 py-2 rounded-md text-white transition-colors duration-500 ${buttonClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
