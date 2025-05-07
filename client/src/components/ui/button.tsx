import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  asChild?: boolean;
  onClick?: () => void;
}

export function Button({
  className = '',
  children,
  variant = 'default',
  asChild = false,
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2';

  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    outline: 'border border-gray-200 hover:bg-gray-100 text-gray-900 shadow-sm',
    ghost: 'hover:bg-gray-100 text-gray-900'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (asChild) {
    return (
      <div className={classes} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
