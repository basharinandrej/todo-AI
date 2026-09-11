export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  categoryId: string;
}

export const CATEGORIES: Category[] = [
  { id: 'work', name: 'Work', color: '#4facfe' },
  { id: 'personal', name: 'Personal', color: '#43e97b' },
  { id: 'urgent', name: 'Urgent', color: '#f5576c' },
  { id: 'shopping', name: 'Shopping', color: '#f5a623' },
  { id: 'other', name: 'Other', color: '#a0aec0' },
];

export interface TodoStore {
  todos: Todo[];
  loadTodos: () => Promise<void>;
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
