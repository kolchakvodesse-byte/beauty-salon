import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles =
      'font-sans font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variantStyles = {
      primary:
        'bg-accent-warm text-dark hover:bg-accent-light active:scale-95 disabled:opacity-50',
      outline:
        'border border-border-subtle text-text hover:bg-border-subtle disabled:opacity-50',
      ghost: 'text-text hover:bg-border-subtle disabled:opacity-50',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <span className="animate-spin">⏳</span> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
