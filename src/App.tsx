import { useEffect } from 'react';
import useTodoStore from '../store/todoStore';
import TaskListPage from './TaskListPage';
import TaskFormPage from './TaskFormPage';
import './App.css';

function App() {
  const { todos, loadTodos, addTodo, toggleTodo, removeTodo, updateTodoPriority } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

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

      {totalCount > 0 && (
        <div className="card">
          <h2>
            Your Tasks
            <span className="task-count">{totalCount}</span>
          </h2>
          <TaskListPage todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodoPriority={updateTodoPriority} />
        </div>
      )}
    </div>
  );
}

export default App;
