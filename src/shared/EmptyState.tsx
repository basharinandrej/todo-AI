interface EmptyStateProps {
  icon?: string;
  message: string;
}

export default function EmptyState({ icon = '📋', message }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="icon">{icon}</div>
      <p>{message}</p>
    </div>
  );
}
