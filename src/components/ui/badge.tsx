interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'error' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-border-subtle text-text',
    success: 'bg-success text-dark',
    error: 'bg-error text-white',
    warning: 'bg-warning text-dark',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
