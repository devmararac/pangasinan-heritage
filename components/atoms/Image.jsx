
export default function Image({
  src,
  alt,
  className = "",
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const imageSrc = src.startsWith("/")
    ? `${basePath}${src}`
    : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full object-cover ${className}`}
    />
  );
}

