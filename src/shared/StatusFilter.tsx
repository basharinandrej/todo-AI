interface StatusFilterProps {
  selected: boolean | null;
  onChange: (completed: boolean | null) => void;
}

const STATUS_OPTIONS = [
  { value: null, label: 'All' },
  { value: false, label: 'Active' },
  { value: true, label: 'Completed' },
] as const;

export default function StatusFilter({ selected, onChange }: StatusFilterProps) {
  return (
    <div className="category-filter">
      {STATUS_OPTIONS.map((opt) => (
        <button
          key={String(opt.value)}
          type="button"
          className={'filter-chip' + (selected === opt.value ? ' active' : '')}
          style={
            selected === opt.value
              ? { backgroundColor: '#667eea', borderColor: '#667eea' }
              : undefined
          }
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
