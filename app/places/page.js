"use client";

import { useState } from "react";
import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";
import HeritageCard from "../../components/molecules/HeritageCard";
import SearchForm from "../../components/molecules/SearchForm";
import heritage from "../../data/heritage";

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHeritage = heritage.filter((place) => {
    const query = searchQuery.toLowerCase();

    return (
      place.title.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query) ||
      place.category.toLowerCase().includes(query) ||
      place.description.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-[#f7f4ed]">
      {/* Intro */}
      <section className="bg-[#123f38] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e8b83f]">
            EXPLORE
          </p>

          <Heading
            level={1}
            className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Places of Pangasinan
          </Heading>

          <Text className="max-w-2xl text-base leading-7 text-[#e7eeee] sm:text-lg sm:leading-8">
            Discover the beautiful natural, historical, religious,
            and cultural heritage sites found throughout Pangasinan.
          </Text>
        </div>
      </section>

      {/* Places */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <Heading
              level={2}
              className="mb-3 text-3xl font-bold text-[#263238] sm:text-4xl"
            >
              Explore Heritage Sites
            </Heading>

            <Text className="text-[#607078]">
              Search for a place by its name, location, category,
              or description.
            </Text>
          </div>

          {/* Search Form */}
          <div className="mb-10 flex justify-center">
            <SearchForm onSearch={setSearchQuery} />
          </div>

          {/* Search Result */}
          {searchQuery && (
            <p className="mb-6 text-center text-sm font-semibold text-[#607078]">
              {filteredHeritage.length}{" "}
              {filteredHeritage.length === 1
                ? "heritage site"
                : "heritage sites"}{" "}
              found for &quot;{searchQuery}&quot;
            </p>
          )}

          {/* Heritage Cards */}
          {filteredHeritage.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredHeritage.map((place, index) => (
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
                    number={String(index + 1).padStart(2, "0")}
                    from="places"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="rounded-2xl border border-[#e5e1d8] bg-white px-6 py-12 text-center shadow-sm">
              <Heading
                level={3}
                className="mb-3 text-2xl font-bold text-[#263238]"
              >
                No heritage sites found
              </Heading>

              <Text className="text-[#607078]">
                Try searching for another place, location, or category.
              </Text>
            </div>
          )}
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
            Explore the heritage, culture, history, and natural
            beauty that make Pangasinan unique.
          </Text>
        </div>
      </section>
    </main>
  );
}