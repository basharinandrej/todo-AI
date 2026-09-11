import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <label className="checkbox-wrapper">
      <input type="checkbox" className={className} {...props} />
    </label>
  );
}
