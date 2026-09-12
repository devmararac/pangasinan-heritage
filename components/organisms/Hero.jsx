import Link from "next/link";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function Hero({
  eyebrow = "DISCOVER",
  title = "The Heritage of Pangasinan",
  description = "Explore the rich culture, history, and beautiful destinations that make Pangasinan unique.",
  buttonText = "Explore Heritage",
  buttonHref = "/heritage",
}) {
  return (
    <section className="relative overflow-hidden bg-[#123f38] text-white">
      <div className="mx-auto grid min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[600px] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e8b83f]">
            {eyebrow}
          </p>

          <Heading
            level={1}
            className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl"
          >
            {title}
          </Heading>

          <Text className="mb-8 max-w-2xl text-base leading-7 text-[#e7eeee] sm:text-lg sm:leading-8">
            {description}
          </Text>

          <Link href={buttonHref}>
            <Button>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}