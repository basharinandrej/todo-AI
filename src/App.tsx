import { useEffect, useMemo } from 'react';
import useTodoStore from '../store/todoStore';
import TaskListPage from './TaskListPage';
import TaskFormPage from './TaskFormPage';
import FilterBar from './shared/FilterBar/FilterBar';
import './App.css';

function App() {
  const { todos, categoryFilter, priorityFilter, completedFilter, loadTodos, addTodo, toggleTodo, removeTodo, updateTodoPriority, setCategoryFilter, setPriorityFilter, setCompletedFilter, resetFilters } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const filteredTodos = useMemo(() => {
    let result = todos;
    if (categoryFilter) {
      result = result.filter((t) => t.categoryId === categoryFilter);
    }
    if (priorityFilter) {
      result = result.filter((t) => t.priority === priorityFilter);
    }
    if (completedFilter !== null) {
      result = result.filter((t) => t.completed === completedFilter);
    }
    return result;
  }, [todos, categoryFilter, priorityFilter, completedFilter]);

  const completedCount = filteredTodos.filter((t) => t.completed).length;
  const totalCount = filteredTodos.length;
  const allTodosCount = todos.length;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Todo App</h1>
        <p className="subtitle">
          {totalCount === 0
            ? 'No tasks yet — add your first one!'
            : `${completedCount} of ${totalCount} completed`}
        </p>
      </header>

      <TaskFormPage addTodo={addTodo} />

      {allTodosCount > 0 && (
        <div className="card">
          <h2>
            Your Tasks
            <span className="task-count">{totalCount}</span>
          </h2>
          <FilterBar
            categoryFilter={categoryFilter}
            priorityFilter={priorityFilter}
            completedFilter={completedFilter}
            onCategoryChange={setCategoryFilter}
            onPriorityChange={setPriorityFilter}
            onStatusChange={setCompletedFilter}
            onReset={resetFilters}
          />
          <TaskListPage todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodoPriority={updateTodoPriority} />
        </div>
      )}
    </div>
  );
}

export default App;
