import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }: CardProps) {
  return (
    <div className={`p-3 sm:p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children }: CardProps) {
  return (
    <h3 className={`text-xl font-bold ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = '', children }: CardProps) {
  return (
    <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ className = '', children }: CardProps) {
  return (
    <div className={`p-3 sm:p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children }: CardProps) {
  return (
    <div className={`p-3 sm:p-4 border-t border-gray-100 mt-auto ${className}`}>
      {children}
    </div>
  );
}
