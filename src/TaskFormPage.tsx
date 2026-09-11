import { useState } from 'react';
import type { Priority, Todo } from '../store/types';
import { CATEGORIES, PRIORITIES } from '../store/types';
import Form from './shared/Form';
import Input from './shared/Input';
import RadioGroup from './shared/RadioGroup';
import Button from './shared/Button/Button';

interface TaskFormPageProps {
  addTodo: (todo: Omit<Todo, 'completed' | 'isDeleted'>) => void;
}

export default function TaskFormPage({ addTodo }: TaskFormPageProps) {
  const [taskText, setTaskText] = useState('');
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTodo({ id: Date.now().toString(), text: taskText, categoryId, priority });
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
        <RadioGroup
          label="Category"
          name="category"
          options={CATEGORIES}
          value={categoryId}
          onChange={setCategoryId}
        />
        <RadioGroup
          label="Priority"
          name="priority"
          options={PRIORITIES}
          value={priority}
          onChange={(value) => setPriority(value as Priority)}
        />
        <Button type="submit">Add Task</Button>
      </Form>
    </div>
  );
}
