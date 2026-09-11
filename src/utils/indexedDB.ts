
// Utility module for IndexedDB operations
import type { Todo } from '../../store/types';

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('TodoDB', 1);

    request.onerror = () => {
      reject(new Error('Failed to open IndexedDB'));
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (_event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains('todos')) {
        db.createObjectStore('todos', { keyPath: 'id' });
      }
    };
  });
};

export const saveTodo = async (todo: Todo): Promise<void> => {
  const db = await initDB();
  const transaction = db.transaction('todos', 'readwrite');
  const store = transaction.objectStore('todos');
  store.put(todo);
};

export const getTodos = async (): Promise<Todo[]> => {
  const db = await initDB();
  const transaction = db.transaction('todos', 'readonly');
  const store = transaction.objectStore('todos');
  return new Promise((resolve) => {
    const request = store.getAll();
    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

export const deleteTodo = async (id: string): Promise<void> => {
  const db = await initDB();
  const transaction = db.transaction('todos', 'readwrite');
  const store = transaction.objectStore('todos');
  store.delete(id);
};
