export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  loadTodos: () => Promise<void>;
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
