// todoStore.ts
import { create } from 'zustand';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, { ...todo, completed: false }]
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
}));

export default useTodoStore;
