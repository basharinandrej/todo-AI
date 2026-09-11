interface CategoryBadgeProps {
  name: string;
  color: string;
}

export default function CategoryBadge({ name, color }: CategoryBadgeProps) {
  return (
    <span className="category-badge" style={{ backgroundColor: color }}>
      {name}
    </span>
  );
}
