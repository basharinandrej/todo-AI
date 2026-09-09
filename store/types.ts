export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
