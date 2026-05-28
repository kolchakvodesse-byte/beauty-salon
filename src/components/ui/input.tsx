import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block font-sans text-xs font-semibold uppercase text-muted mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full bg-dark text-text placeholder-muted border border-border-subtle rounded-lg px-4 py-3 focus:outline-none focus:border-accent-warm transition-colors ${className}`}
        {...props}
      />
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  )
);

Input.displayName = 'Input';
