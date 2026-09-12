import Link from "next/link";
import Image from "../atoms/Image";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

export default function HeritageCard({
  slug,
  title,
  image,
  description,
  location,
  category,
  number,
  from = "places",
}) {
  const href = `/places/${slug}?from=${from}`;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e5e1d8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-56 transition duration-500 group-hover:scale-105"
        />

        {number && (
          <span className="absolute left-4 top-4 rounded-full bg-[#123f38] px-3 py-1 text-sm font-bold text-white">
            {number}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {category && (
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#176b5b]">
            {category}
          </p>
        )}

        <Heading
          level={3}
          className="mb-2 text-2xl font-bold text-[#263238]"
        >
          {title}
        </Heading>

        {location && (
          <p className="mb-3 text-sm font-semibold text-[#607078]">
            {location}
          </p>
        )}

        <Text className="mb-6 flex-1 leading-7 text-[#607078]">
          {description}
        </Text>

        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#e8b83f] px-5 py-3 font-bold text-[#263238] transition hover:-translate-y-1 hover:bg-[#dca82c] focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
        >
          Explore
          <Icon name="arrow" size={18} />
        </Link>
      </div>
    </article>
  );
}