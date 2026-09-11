import type { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Form({
  children,
  onSubmit,
  className = '',
  ...props
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className} {...props}>
      {children}
    </form>
  );
}
