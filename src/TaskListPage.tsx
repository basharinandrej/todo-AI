import type { Todo } from '../store/types';

interface TaskListPageProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
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
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item${todo.completed ? ' completed' : ''}`}
        >
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
          </label>
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
