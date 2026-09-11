export interface Category {
  id: string;
  name: string;
  color: string;
}

export type Priority = 'high' | 'medium' | 'low';

export const PRIORITIES: { id: Priority; name: string; color: string }[] = [
  { id: 'high', name: 'High', color: '#f5576c' },
  { id: 'medium', name: 'Medium', color: '#f5a623' },
  { id: 'low', name: 'Low', color: '#4facfe' },
];

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  categoryId: string;
  priority: Priority;
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
  categoryFilter: string | null;
  priorityFilter: Priority | null;
  completedFilter: boolean | null;
  loadTodos: () => Promise<void>;
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodoPriority: (id: string, priority: Priority) => void;
  setCategoryFilter: (categoryId: string | null) => void;
  setPriorityFilter: (priority: Priority | null) => void;
  setCompletedFilter: (completed: boolean | null) => void;
  resetFilters: () => void;
}
