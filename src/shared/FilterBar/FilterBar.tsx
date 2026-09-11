import type { Priority } from '../../../store/types';
import { CATEGORIES, PRIORITIES } from '../../../store/types';
import './FilterBar.css';

interface FilterBarProps {
  categoryFilter: string | null;
  priorityFilter: Priority | null;
  completedFilter: boolean | null;
  onCategoryChange: (value: string | null) => void;
  onPriorityChange: (value: Priority | null) => void;
  onStatusChange: (value: boolean | null) => void;
  onReset: () => void;
}

const CATEGORY_OPTIONS = [{ id: null, name: 'All', color: '#667eea' }, ...CATEGORIES];
const PRIORITY_OPTIONS = [{ id: null, name: 'All', color: '#667eea' }, ...PRIORITIES];
const STATUS_OPTIONS = [
  { value: null, label: 'All' },
  { value: false, label: 'Active' },
  { value: true, label: 'Completed' },
] as const;

type ChipProps = { active: boolean; onClick: () => void; label: string; style?: React.CSSProperties };
function Chip({ active, onClick, label, style }: ChipProps) {
  return <button type="button" className={'filter-chip' + (active ? ' active' : '')} style={style} onClick={onClick}>{label}</button>;
}

export default function FilterBar({
  categoryFilter, priorityFilter, completedFilter,
  onCategoryChange, onPriorityChange, onStatusChange, onReset,
}: FilterBarProps) {
  const hasActive = categoryFilter !== null || priorityFilter !== null || completedFilter !== null;
  return (
    <div className="filter-bar">
      <div className="filter-bar__row">
        <div className="filter-bar__group">
          <span className="filter-bar__label">Category</span>
          <div className="filter-bar__chips">
            {CATEGORY_OPTIONS.map((category) => (
              <Chip key={String(category.id)} active={categoryFilter === category.id}
                onClick={() => onCategoryChange(categoryFilter === category.id ? null : (category.id as string))}
                label={category.name}
                style={categoryFilter === category.id ? { backgroundColor: category.color, borderColor: category.color } : undefined}
              />
            ))}
          </div>
        </div>
        <div className="filter-bar__group">
          <span className="filter-bar__label">Priority</span>
          <div className="filter-bar__chips">
            {PRIORITY_OPTIONS.map((priority) => (
              <Chip key={String(priority.id)} active={priorityFilter === priority.id}
                onClick={() => onPriorityChange(priorityFilter === priority.id ? null : (priority.id as Priority))}
                label={priority.name}
                style={priorityFilter === priority.id ? { backgroundColor: priority.color, borderColor: priority.color } : undefined}
              />
            ))}
          </div>
        </div>
        <div className="filter-bar__group">
          <span className="filter-bar__label">Status</span>
          <div className="filter-bar__chips">
            {STATUS_OPTIONS.map((status) => (
              <Chip key={String(status.value)} active={completedFilter === status.value}
                onClick={() => onStatusChange(status.value)} label={status.label}
                style={completedFilter === status.value ? { backgroundColor: '#667eea', borderColor: '#667eea' } : undefined}
              />
            ))}
          </div>
        </div>
      </div>
      {hasActive && (
        <div className="filter-bar__reset">
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onReset}>
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
