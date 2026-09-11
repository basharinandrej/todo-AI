import { CATEGORIES } from '../../store/types';

interface CategoryFilterProps {
  selected: string | null;
  onChange: (categoryId: string | null) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
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
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={'filter-chip' + (selected === cat.id ? ' active' : '')}
          style={selected === cat.id ? { backgroundColor: cat.color, borderColor: cat.color } : { borderColor: cat.color, color: cat.color }}
          onClick={() => onChange(selected === cat.id ? null : cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
