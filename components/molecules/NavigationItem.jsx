import Link from "next/link";

export default function NavigationItem({ href, label }) {
  return (
    <Link
      href={href}
      className="font-semibold transition hover:text-[#e8b83f]"
    >
      {label}
    </Link>
  );
}