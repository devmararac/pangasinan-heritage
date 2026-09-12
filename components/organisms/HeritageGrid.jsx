import HeritageCard from "../molecules/HeritageCard";

export default function HeritageGrid({ items = [], from = "places" }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((place, index) => (
          <div key={place.slug} id={place.slug} className="min-w-0">
            <HeritageCard
              slug={place.slug}
              title={place.title}
              image={place.image}
              description={place.description}
              location={place.location}
              category={place.category}
              number={String(index + 1).padStart(2, "0")}
              from={from}
            />
          </div>
        ))}
      </div>
    </section>
  );
}