import { useState } from 'react';
import type { Todo } from '../store/todoStore';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TaskFormPageProps {
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
}

export default function TaskFormPage({ addTodo }: TaskFormPageProps) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTodo({ id: Date.now().toString(), text: taskText });
      setTaskText('');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskInput" className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            id="taskInput"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}
