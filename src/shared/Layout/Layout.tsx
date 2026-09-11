import type { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="layout">
      <main className="layout__main">{children}</main>
      <aside className="layout__sidebar">{sidebar}</aside>
    </div>
  );
}
