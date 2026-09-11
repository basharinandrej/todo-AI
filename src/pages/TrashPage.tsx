import { useEffect, useMemo } from 'react';
import useTodoStore from '../../store/todoStore';
import type { Todo } from '../../store/types';
import { CATEGORIES } from '../../store/types';
import Button from '../shared/Button/Button';
import CategoryBadge from '../shared/CategoryBadge';
import EmptyState from '../shared/EmptyState';
import Layout from '../shared/Layout/Layout';
import '../App.css';

function getCategory(todo: Todo) {
  return CATEGORIES.find(function (category) {
    return category.id === todo.categoryId;
  });
}

export default function TrashPage() {
  const store = useTodoStore();

  useEffect(function () {
    store.loadTodos();
  }, [store.loadTodos]);

  const deletedTodos = useMemo(function () {
    return store.todos.filter(function (todo) {
      return todo.isDeleted;
    });
  }, [store.todos]);

  if (deletedTodos.length === 0) {
    return (
      <Layout sidebar={null}>
        <div>
          <header className="app-header">
            <h1>Trash</h1>
            <p className="subtitle">Trash is empty</p>
          </header>
          <EmptyState message="Trash is empty. Deleted tasks will appear here." />
        </div>
      </Layout>
    );
  }

  const subtitleText = deletedTodos.length + ' deleted task(s)';

  return (
    <Layout sidebar={null}>
      <div>
        <header className="app-header">
          <h1>Trash</h1>
          <p className="subtitle">{subtitleText}</p>
        </header>
        <div className="card fade-in">
          <ul className="todo-list">
            {deletedTodos.map(function (todo) {
              const category = getCategory(todo);
              return (
                <li key={todo.id} className="todo-item completed">
                  <span className="todo-text">{todo.text}</span>
                  {category && (
                    <CategoryBadge name={category.name} color={category.color} />
                  )}
                  <Button
                    variant="primary"
                    onClick={function () {
                      store.restoreTodo(todo.id);
                    }}
                  >
                    Restore
                  </Button>
                  <Button
                    variant="danger"
                    onClick={function () {
                      store.hardDeleteTodo(todo.id);
                    }}
                  >
                    Delete Forever
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
