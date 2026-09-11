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

## Rules for AI Agents

- **Do NOT create temporary helper scripts** (e.g. `.py`, `.js`, `.sh` files) to work around tool limitations. Modify source files directly using `write_to_file` or `replace_in_file`. If file content gets truncated, use a simpler approach — split into multiple `replace_in_file` calls or remove backticks from the content by using string concatenation (`'class' + (cond ? ' selected' : '')` instead of template literals).
- **Extract reusable small components into `src/shared/`.** Any small, reusable UI component such as `<select>` dropdowns, category/priority pickers, tab selectors, etc. must be extracted into a separate component file in `src/shared/` (e.g. `src/shared/Select.tsx`, `src/shared/CategoryPicker.tsx`). This keeps page components clean and promotes component reuse.
- **Component styles must be co-located in a dedicated folder.** Each component that has its own styles must live in its own folder within `src/shared/`, with the `.css` file placed alongside the `.tsx` file. Example structure: `src/shared/Button/Button.tsx` + `src/shared/Button/Button.css`, `src/shared/Select/Select.tsx` + `src/shared/Select/Select.css`. Do NOT place styles in a global stylesheet or in a separate `styles/` directory; keep them next to the component they belong to.
- **Always use the shared `Button` component from `src/shared/Button/Button.tsx`** instead of raw `<button>` elements. The shared `Button` supports variants: `primary`, `danger`, `outline-secondary`. Never write inline `<button className="btn ...">` — import and use `<Button variant="...">` instead. If a needed variant is missing, add it to the shared `Button` component first.
- **Do NOT use abbreviated variable names of 1-2 characters** (e.g. `e`, `i`, `j`, `el`, `fn`, `cb`). Always use descriptive, self-documenting names that clearly convey the variable's purpose (e.g. `event`, `index`, `element`, `callback`). Exceptions: loop counters in trivial loops and standard conventions like `e` for React event handlers are acceptable.
- **Do NOT use `var` — use only ES2020+ syntax.** Always declare variables with `const` or `let` instead of `var`. Use modern ES2020+ features: optional chaining (`?.`), nullish coalescing (`??`), dynamic `import()`, `BigInt`, `Promise.allSettled`, `globalThis`, `String.prototype.matchAll`, optional `catch` binding, `export * as ns` syntax, `import.meta`, and `for...of` loops. No legacy patterns like `var`, `arguments` object, or pre-ES2020 polyfills.
