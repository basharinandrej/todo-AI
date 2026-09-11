import { useState } from 'react';
import type { Todo } from '../store/types';
import { CATEGORIES } from '../store/types';
import Form from './shared/Form';
import Input from './shared/Input';
import Button from './shared/Button';

interface TaskFormPageProps {
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
}

export default function TaskFormPage({ addTodo }: TaskFormPageProps) {
  const [taskText, setTaskText] = useState('');
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTodo({ id: Date.now().toString(), text: taskText, categoryId });
      setTaskText('');
    }
  };

  return (
    <div className="card">
      <h2>Add New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          id="taskInput"
          label="Task Description"
          type="text"
          placeholder="What needs to be done?"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <div className="form-group">
          <label className="form-label">Category</label>
          <div className="category-select-wrapper">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.id}
                className={'category-option' + (categoryId === cat.id ? ' selected' : '')}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat.id}
                  checked={categoryId === cat.id}
                  onChange={(e) => setCategoryId(e.target.value)}
                />
                <span
                  className="category-dot"
                  style={{ backgroundColor: cat.color }}
                />
                {cat.name}
              </label>
            ))}
          </div>
        </div>
        <Button type="submit">Add Task</Button>
      </Form>
    </div>
  );
}
