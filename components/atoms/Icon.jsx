export default function Icon({ name = "arrow", size = 20 }) {
  if (name === "arrow") {
    return (
      <span
        aria-hidden="true"
        style={{ fontSize: `${size}px` }}
      >
        →
      </span>
    );
  }

  if (name === "search") {
    return (
      <span
        aria-hidden="true"
        style={{ fontSize: `${size}px` }}
      >
        🔍
      </span>
    );
  }

  return null;
}