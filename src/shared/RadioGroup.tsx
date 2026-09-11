interface RadioOption {
  id: string;
  name: string;
  color: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="category-select-wrapper">
        {options.map((opt) => (
          <label
            key={opt.id}
            className={'category-option' + (value === opt.id ? ' selected' : '')}
          >
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={value === opt.id}
              onChange={(e) => onChange(e.target.value)}
            />
            <span className="category-dot" style={{ backgroundColor: opt.color }} />
            {opt.name}
          </label>
        ))}
      </div>
    </div>
  );
}
