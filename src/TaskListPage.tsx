import type { Priority, Todo } from '../store/types';
import { CATEGORIES, PRIORITIES } from '../store/types';
import Button from './shared/Button';
import CategoryBadge from './shared/CategoryBadge';
import Checkbox from './shared/Checkbox';
import Select from './shared/Select';
import EmptyState from './shared/EmptyState';

interface TaskListPageProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodoPriority: (id: string, priority: Priority) => void;
}

function getCategory(todo: Todo) {
  return CATEGORIES.find((c) => c.id === todo.categoryId);
}

const PRIORITY_OPTIONS = PRIORITIES.map((p) => ({ value: p.id, label: p.name }));

export default function TaskListPage({
  todos,
  toggleTodo,
  removeTodo,
  updateTodoPriority,
}: TaskListPageProps) {
  if (todos.length === 0) {
    return <EmptyState message="No tasks yet. Add one above!" />;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const category = getCategory(todo);
        return (
          <li key={todo.id} className={'todo-item' + (todo.completed ? ' completed' : '')}>
            <Checkbox checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            {category && <CategoryBadge name={category.name} color={category.color} />}
            <Select
              className="priority-select"
              options={PRIORITY_OPTIONS}
              value={todo.priority}
              onChange={(e) => updateTodoPriority(todo.id, e.target.value as Priority)}
            />
            <Button variant="danger" onClick={() => removeTodo(todo.id)}>
              Remove
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
