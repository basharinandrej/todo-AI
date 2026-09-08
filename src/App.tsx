import useTodoStore from '../store/todoStore.ts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  const handleAddTodo = () => {
    const text = prompt('Enter todo text:');
    if (text) {
      addTodo(text);
    }
  };

  
  return (
    <div className="container mt-4">
      <h1>Todo App</h1>
      <button onClick={handleAddTodo} className="btn btn-primary mb-3">
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
