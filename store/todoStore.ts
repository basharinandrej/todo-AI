// todoStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { TodoStore } from './types';
import { getTodos, saveTodo, deleteTodo } from '../src/utils/indexedDB';

const useTodoStore = create<TodoStore>()(
  devtools(
    (set) => ({
      todos: [],
      categoryFilter: null,
      priorityFilter: null,

      loadTodos: async () => {
        const todos = await getTodos();
        set({ todos }, false, 'todo/loadTodos');
      },

      addTodo: (todo) =>
        set(
          (state) => {
            const newTodo = { ...todo, completed: false };
            saveTodo(newTodo);
            return { todos: [...state.todos, newTodo] };
          },
          false,
          'todo/addTodo',
        ),

      removeTodo: (id) =>
        set(
          (state) => {
            deleteTodo(id);
            return { todos: state.todos.filter((todo) => todo.id !== id) };
          },
          false,
          'todo/removeTodo',
        ),

      toggleTodo: (id) =>
        set(
          (state) => {
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            );
            const updatedTodo = updatedTodos.find((t) => t.id === id);
            if (updatedTodo) {
              saveTodo(updatedTodo);
            }
            return { todos: updatedTodos };
          },
          false,
          'todo/toggleTodo',
        ),

      updateTodoPriority: (id, priority) =>
        set(
          (state) => {
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, priority } : todo,
            );
            const updatedTodo = updatedTodos.find((t) => t.id === id);
            if (updatedTodo) {
              saveTodo(updatedTodo);
            }
            return { todos: updatedTodos };
          },
          false,
          'todo/updateTodoPriority',
        ),

      setCategoryFilter: (categoryId) =>
        set({ categoryFilter: categoryId }, false, 'todo/setCategoryFilter'),

      setPriorityFilter: (priority) =>
        set({ priorityFilter: priority }, false, 'todo/setPriorityFilter'),

      resetFilters: () =>
        set({ categoryFilter: null, priorityFilter: null }, false, 'todo/resetFilters'),
    }),
    { name: 'TodoStore' },
  ),
);

export default useTodoStore;
