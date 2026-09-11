import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <header className="layout__header">
        <div className="layout__header-inner">
          <Link to="/home" className="layout__logo">Todo App</Link>
          <Link to="/trash" className="layout__trash-link">
            <svg className="layout__trash-icon" width="20" height="20">
              <use href="/icons.svg#trash-icon" />
            </svg>
            <span>корзина</span>
          </Link>
        </div>
      </header>
      <div className="layout">
        <main className="layout__main">{children}</main>
        <aside className="layout__sidebar">{sidebar}</aside>
      </div>
    </div>
  );
}
