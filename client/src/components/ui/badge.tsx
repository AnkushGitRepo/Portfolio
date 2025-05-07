import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

export function Badge({ className = '', children, variant = 'default' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium';

  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    outline: 'border border-gray-200 text-gray-700 shadow-sm'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
