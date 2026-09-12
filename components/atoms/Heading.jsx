export default function Heading({
  children,
  level = 1,
  className = "",
}) {
  const Tag = `h${level}`;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}