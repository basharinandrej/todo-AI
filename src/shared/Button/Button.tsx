import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'danger' | 'outline-secondary';
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantMap: Record<string, string> = {
    primary: 'btn btn-primary',
    danger: 'btn btn-danger',
    'outline-secondary': 'btn btn-outline-secondary btn-sm',
  };
  const variantClass = variantMap[variant] || variantMap.primary;

  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
