import { useEffect, useMemo } from 'react';
import useTodoStore from '../store/todoStore';
import TaskListPage from './TaskListPage';
import TaskFormPage from './TaskFormPage';
import Layout from './shared/Layout/Layout';
import Sidebar from './shared/Sidebar/Sidebar';
import './App.css';

function App() {
  const { todos, categoryFilter, priorityFilter, completedFilter, loadTodos, addTodo, toggleTodo, removeTodo, updateTodoPriority, setCategoryFilter, setPriorityFilter, setCompletedFilter, resetFilters } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const filteredTodos = useMemo(() => {
    let result = todos;
    if (categoryFilter) {
      result = result.filter(function (task) { return task.categoryId === categoryFilter; });
    }
    if (priorityFilter) {
      result = result.filter(function (task) { return task.priority === priorityFilter; });
    }
    if (completedFilter !== null) {
      result = result.filter(function (task) { return task.completed === completedFilter; });
    }
    return result;
  }, [todos, categoryFilter, priorityFilter, completedFilter]);

  const completedCount = filteredTodos.filter(function (task) { return task.completed; }).length;
  const totalCount = filteredTodos.length;
  const allTodosCount = todos.length;

  const mainContent = (
    <div>
      <header className="app-header">
        <h1>Todo App</h1>
        <p className="subtitle">
          {totalCount === 0
            ? 'No tasks yet — add your first one!'
            : completedCount + ' of ' + totalCount + ' completed'}
        </p>
      </header>

      <TaskFormPage addTodo={addTodo} />

      {allTodosCount > 0 && (
        <div className="card">
          <h2>
            Your Tasks
            <span className="badge-counter">{totalCount}</span>
          </h2>
          <TaskListPage
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            updateTodoPriority={updateTodoPriority}
          />
        </div>
      )}

      {allTodosCount === 0 && (
        <div className="card fade-in">
          <p className="empty-text">
            Get started by adding your first task with the form above.
          </p>
        </div>
      )}
    </div>
  );

  const sidebar = (
    <Sidebar
      categoryFilter={categoryFilter}
      priorityFilter={priorityFilter}
      completedFilter={completedFilter}
      onCategoryChange={setCategoryFilter}
      onPriorityChange={setPriorityFilter}
      onStatusChange={setCompletedFilter}
      onReset={resetFilters}
    />
  );

  return <Layout sidebar={sidebar}>{mainContent}</Layout>;
}

export default App;
