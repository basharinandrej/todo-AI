# Deepseek Model — Project Configuration

## Project Overview

**Project Name:** TODO App
**Description:** A full-featured Todo application built with React, TypeScript, and Vite. The app allows users to create, manage, and track tasks with persistent storage via IndexedDB. State management is handled with Zustand, and the UI is styled with Bootstrap.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18+ | UI library |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and dev server |
| Zustand | Lightweight state management (with Redux DevTools integration) |
| IndexedDB | Client-side persistent storage |
| Bootstrap 5 | CSS framework for responsive UI |
| Oxlint | Linter (Oxc-based, high-performance) |

## Project Structure

```
TODO/
├── index.html                  # Entry HTML file
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript base config
├── tsconfig.app.json           # TypeScript app config
├── tsconfig.node.json          # TypeScript Node config
├── .oxlintrc.json              # Oxlint linter configuration
├── package.json                # Dependencies and scripts
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.tsx                # Application entry point
│   ├── App.tsx                 # Root component — wires store to pages
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles
│   ├── TaskFormPage.tsx        # Task creation form component
│   ├── TaskListPage.tsx        # Task list display component
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   └── utils/
│       └── indexedDB.ts        # IndexedDB CRUD operations
└── store/
    ├── index.d.ts              # Store type declarations
    ├── todoStore.ts            # Zustand store with todos, loadTodos, addTodo, toggleTodo, removeTodo
    └── types.ts                # TypeScript interfaces (Todo, TodoStore)
```

## Key Features

- **Task Management:** Create, toggle completion, and remove tasks
- **Persistent Storage:** Todos are saved to IndexedDB — data survives page reloads
- **State Management:** Zustand with devtools middleware for Redux DevTools debugging
- **Responsive UI:** Bootstrap 5 with a clean, mobile-friendly layout
- **Type Safety:** Full TypeScript coverage across components, store, and utilities

## Available Scripts

| Script | Command |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript compile + Vite production build |
| `npm run lint` | Run Oxlint on the project |
| `npm run preview` | Preview the production build locally |

## Data Flow

1. `App.tsx` calls `loadTodos()` on mount to fetch persisted data from IndexedDB
2. `TaskFormPage.tsx` captures user input and calls `addTodo()` from the Zustand store
3. `TaskListPage.tsx` renders the todo list, with checkbox toggling and remove buttons
4. All mutations (add, toggle, remove) are persisted to IndexedDB immediately
5. Zustand devtools middleware enables time-travel debugging in Redux DevTools
