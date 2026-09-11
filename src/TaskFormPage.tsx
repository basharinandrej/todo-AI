import { useState } from 'react';
import type { Todo } from '../store/types';
import Form from './shared/Form';
import Input from './shared/Input';
import Button from './shared/Button';

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
      <Form onSubmit={handleSubmit}>
        <Input
          id="taskInput"
          label="Task Description"
          type="text"
          placeholder="What needs to be done?"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button type="submit">Add Task</Button>
      </Form>
    </div>
  );
}
