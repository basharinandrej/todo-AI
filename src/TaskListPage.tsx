import type { Todo } from '../store/types';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  return (
    <div className="container mt-4">
      <h1>Your Tasks</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                id={`todo-checkbox-${todo.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`todo-checkbox-${todo.id}`}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </label>
            </div>
            <button onClick={() => removeTodo(todo.id)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
