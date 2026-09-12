import Heading from "../../../components/atoms/Heading";
import Text from "../../../components/atoms/Text";
import Image from "../../../components/atoms/Image";
import Link from "next/link";
import heritage from "../../../data/heritage";

export function generateStaticParams() {
  return heritage.map((place) => ({
    slug: place.slug,
  }));
}

export default function PlacePage({ params }) {
  const place = heritage.find((item) => item.slug === params.slug);

  if (!place) {
    return (
      <main className="min-h-screen bg-[#f7f4ed] px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Heading
            level={1}
            className="mb-4 text-4xl font-bold text-[#263238]"
          >
            Place Not Found
          </Heading>

          <Text className="mb-8 text-[#607078]">
            The heritage site you are looking for does not exist.
          </Text>

          <Link
            href="/places"
            className="inline-flex rounded-lg bg-[#e8b83f] px-5 py-3 font-bold text-[#263238]"
          >
            ← Back to Places
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ed]">
      {/* Hero */}
      <section className="bg-[#123f38] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/places"
            className="inline-flex rounded-lg bg-[#e8b83f] px-5 py-3 font-bold text-[#263238] transition hover:-translate-y-1 hover:bg-[#dca82c]"
          >
            ← Back to Places
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e8b83f]">
              {place.category}
            </p>

            <Heading
              level={1}
              className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            >
              {place.title}
            </Heading>

            <p className="text-lg font-semibold text-[#e7eeee]">
              {place.location}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src={place.image}
              alt={place.title}
              className="h-72 sm:h-96 lg:h-[500px]"
            />
          </div>

          {/* Information */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#176b5b]">
              ABOUT THIS PLACE
            </p>

            <Heading
              level={2}
              className="mb-5 text-3xl font-bold text-[#263238] sm:text-4xl"
            >
              {place.title}
            </Heading>

            <Text className="mb-8 text-base leading-8 text-[#607078] sm:text-lg">
              {place.description}
            </Text>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e5e1d8] bg-white p-5">
                <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#176b5b]">
                  Location
                </p>

                <p className="font-semibold text-[#263238]">
                  {place.location}
                </p>
              </div>

              <div className="rounded-xl border border-[#e5e1d8] bg-white p-5">
                <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#176b5b]">
                  Category
                </p>

                <p className="font-semibold text-[#263238]">
                  {place.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#123f38] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Heading
            level={2}
            className="mb-4 text-3xl font-bold sm:text-4xl"
          >
            Discover More of Pangasinan
          </Heading>

          <Text className="leading-7 text-[#e7eeee]">
            Explore more heritage sites, cultural landmarks, and
            natural destinations across Pangasinan.
          </Text>
        </div>
      </section>
    </main>
  );
}