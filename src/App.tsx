import useTodoStore from '../store/todoStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskListPage from './TaskListPage';
import TaskFormPage from './TaskFormPage';

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  return (
    <div className="container mt-4">
      <h1>Todo App</h1>
      <TaskFormPage addTodo={addTodo} />
      <TaskListPage todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
