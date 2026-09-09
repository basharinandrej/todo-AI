import { useState } from 'react';
import type { Todo } from '../store/types';

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
    <div className="card">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskInput" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            className="form-input"
            id="taskInput"
            placeholder="What needs to be done?"
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
