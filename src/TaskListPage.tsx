import type { Todo } from '../store/types';
import { CATEGORIES } from '../store/types';
import Button from './shared/Button';

interface TaskListPageProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

function getCategory(todo: Todo) {
  return CATEGORIES.find((c) => c.id === todo.categoryId);
}

export default function TaskListPage({
  todos,
  toggleTodo,
  removeTodo,
}: TaskListPageProps) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="icon">📋</div>
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const category = getCategory(todo);
        return (
          <li
            key={todo.id}
            className={'todo-item' + (todo.completed ? ' completed' : '')}
          >
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
            </label>
            <span className="todo-text">{todo.text}</span>
            {category && (
              <span
                className="category-badge"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </span>
            )}
            <Button
              variant="danger"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
