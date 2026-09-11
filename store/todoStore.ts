// todoStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { TodoStore } from './types';
import { getTodos, saveTodo } from '../src/utils/indexedDB';

const useTodoStore = create<TodoStore>()(
  devtools(
    (set) => ({
      todos: [],
      categoryFilter: null,
      priorityFilter: null,
      completedFilter: null,

      loadTodos: async () => {
        const todos = await getTodos();
        set({ todos }, false, 'todo/loadTodos');
      },

      addTodo: (todo) =>
        set(
          (state) => {
            const newTodo = { ...todo, completed: false, isDeleted: false };
            saveTodo(newTodo);
            return { todos: [...state.todos, newTodo] };
          },
          false,
          'todo/addTodo',
        ),

      softDeleteTodo: (id) =>
        set(
          (state) => {
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, isDeleted: true } : todo,
            );
            const updatedTodo = updatedTodos.find((t) => t.id === id);
            if (updatedTodo) {
              saveTodo(updatedTodo);
            }
            return { todos: updatedTodos };
          },
          false,
          'todo/softDeleteTodo',
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

      setCompletedFilter: (completed) =>
        set({ completedFilter: completed }, false, 'todo/setCompletedFilter'),

      resetFilters: () =>
        set({ categoryFilter: null, priorityFilter: null, completedFilter: null }, false, 'todo/resetFilters'),
    }),
    { name: 'TodoStore' },
  ),
);

export default useTodoStore;
