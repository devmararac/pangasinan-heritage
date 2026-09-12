import Link from "next/link";
import Heading from "../components/atoms/Heading";
import Text from "../components/atoms/Text";
import HeritageCard from "../components/molecules/HeritageCard";
import heritage from "../data/heritage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#263238]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="flex min-h-[560px] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,58,52,0.82), rgba(15,58,52,0.82)), url('/images/hero.jpg')",
        }}
      >
        <div className="mx-auto w-[90%] max-w-[1100px] py-20">
          <div className="max-w-[760px] text-white">

            <span className="mb-4 inline-block text-sm font-extrabold tracking-[2px] text-[#f5c451]">
              PANGASINAN HERITAGE
            </span>

            <Heading
              level={1}
              className="mb-6 max-w-[800px] text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              Discover the Heritage of Pangasinan
            </Heading>

            <Text className="mb-8 max-w-[650px] text-lg leading-relaxed text-[#e7eeee]">
              Explore the history, culture, places, and natural beauty that
              make Pangasinan a province rich in heritage and tradition.
            </Text>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/heritage"
                className="rounded-lg bg-[#e8b83f] px-5 py-3 font-bold text-[#263238] transition hover:-translate-y-1 hover:bg-[#dca82c] focus:outline-none focus:ring-2 focus:ring-[#e8b83f] focus:ring-offset-2"
              >
                Explore Heritage
              </Link>

              <Link
                href="/places"
                className="rounded-lg border border-white px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#123f38] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                View Places
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FEATURED HERITAGE
      ====================================================== */}
      <section className="bg-[#f7f4ed] py-20 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[1100px]">

          {/* SECTION HEADING */}
          <div className="mb-10">

            <span className="mb-3 block text-sm font-extrabold tracking-[2px] text-[#176b5b]">
              FEATURED HERITAGE
            </span>

            <Heading
              level={2}
              className="text-4xl font-extrabold leading-tight text-[#263238] sm:text-5xl"
            >
              Explore Pangasinan
            </Heading>

            <Text className="mt-4 max-w-[700px] text-lg leading-relaxed text-[#607078]">
              Discover some of the remarkable places that showcase the
              history, culture, and natural beauty of Pangasinan.
            </Text>

          </div>


          {/* =================================================
              PLACE CARDS
          ================================================== */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {heritage.map((place) => (
              <div
                key={place.slug}
                id={place.slug}
                className="min-w-0"
              >
                <HeritageCard
                  slug={place.slug}
                  title={place.title}
                  image={place.image}
                  description={place.description}
                  location={place.location}
                  category={place.category}
                  from="home"
                />
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-[90%] max-w-[900px] text-center">

          <span className="mb-3 block text-sm font-extrabold tracking-[2px] text-[#176b5b]">
            EXPLORE PANGASINAN
          </span>

          <Heading
            level={2}
            className="mb-5 text-4xl font-extrabold leading-tight text-[#263238] sm:text-5xl"
          >
            Discover the Stories Behind Every Place
          </Heading>

          <Text className="mx-auto mb-8 max-w-[700px] text-lg leading-relaxed text-[#607078]">
            From historic landmarks to cultural traditions and beautiful
            destinations, explore the heritage that makes Pangasinan special.
          </Text>

          <Link
            href="/places"
            className="inline-block rounded-lg bg-[#176b5b] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#123f38] focus:outline-none focus:ring-2 focus:ring-[#176b5b] focus:ring-offset-2"
          >
            Explore Places
          </Link>

        </div>
      </section>

    </main>
  );
}