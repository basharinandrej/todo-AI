import type { Priority } from '../../../store/types';
import { CATEGORIES, PRIORITIES } from '../../../store/types';
import Button from '../Button/Button';
import './Sidebar.css';

interface SidebarProps {
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

function getChipClass(active: boolean): string {
  return 'sidebar__chip' + (active ? ' active' : '');
}

export default function Sidebar({
  categoryFilter,
  priorityFilter,
  completedFilter,
  onCategoryChange,
  onPriorityChange,
  onStatusChange,
  onReset,
}: SidebarProps) {
  const hasActive = categoryFilter !== null || priorityFilter !== null || completedFilter !== null;

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Filters</h3>

      <div className="sidebar__section">
        <span className="sidebar__label">Category</span>
        <div className="sidebar__chips">
          {CATEGORY_OPTIONS.map(function (category) {
            const active = categoryFilter === category.id;
            const chipStyle = active ? { backgroundColor: category.color, borderColor: category.color } : undefined;
            return (
              <button key={String(category.id)} type="button" className={getChipClass(active)} style={chipStyle} onClick={function () { onCategoryChange(active ? null : (category.id as string)); }}>
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="sidebar__section">
        <span className="sidebar__label">Priority</span>
        <div className="sidebar__chips">
          {PRIORITY_OPTIONS.map(function (priority) {
            const active = priorityFilter === priority.id;
            const chipStyle = active ? { backgroundColor: priority.color, borderColor: priority.color } : undefined;
            return (
              <button key={String(priority.id)} type="button" className={getChipClass(active)} style={chipStyle} onClick={function () { onPriorityChange(active ? null : (priority.id as Priority)); }}>{priority.name}</button>
            );
          })}
        </div>
      </div>

      <div className="sidebar__section">
        <span className="sidebar__label">Status</span>
        <div className="sidebar__chips">
          {STATUS_OPTIONS.map(function (status) {
            const active = completedFilter === status.value;
            const chipStyle = active ? { backgroundColor: '#667eea', borderColor: '#667eea' } : undefined;
            return (
              <button key={String(status.value)} type="button" className={getChipClass(active)} style={chipStyle} onClick={function () { onStatusChange(status.value); }}>{status.label}</button>
            );
          })}
        </div>
      </div>
      {hasActive && (
        <div className="sidebar__reset">
          <Button variant="outline-secondary" onClick={onReset}>Reset filters</Button>
        </div>
      )}
    </div>
  );
}
