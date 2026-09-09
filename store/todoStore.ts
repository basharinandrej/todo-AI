// todoStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TodoStore } from './types';
import { getTodos, saveTodo } from '../src/utils/indexedDB';


const useTodoStore = create<TodoStore>()(
  devtools(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({
        todos: [...state.todos, { ...todo, completed: false }]
      }), false, 'todo/addTodo'),
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }), false, 'todo/removeTodo'),
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      }), false, 'todo/toggleTodo')
    }),
    { name: 'TodoStore' }
  )
);

export default useTodoStore;
