import type { Priority } from '../../store/types';
import { PRIORITIES } from '../../store/types';

interface PriorityFilterProps {
  selected: Priority | null;
  onChange: (priority: Priority | null) => void;
}

export default function PriorityFilter({ selected, onChange }: PriorityFilterProps) {
  return (
    <div className="category-filter">
      <button
        type="button"
        className={'filter-chip' + (selected === null ? ' active' : '')}
        style={selected === null ? { backgroundColor: '#667eea', borderColor: '#667eea' } : undefined}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {PRIORITIES.map((p) => (
        <button
          key={p.id}
          type="button"
          className={'filter-chip' + (selected === p.id ? ' active' : '')}
          style={selected === p.id ? { backgroundColor: p.color, borderColor: p.color } : { borderColor: p.color, color: p.color }}
          onClick={() => onChange(selected === p.id ? null : p.id)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
