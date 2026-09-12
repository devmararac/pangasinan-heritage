import Hero from "../organisms/Hero";
import HeritageGrid from "../organisms/HeritageGrid";

export default function MainTemplate({
  places = [],
  hero,
  from = "home",
}) {
  return (
    <>
      <Hero {...hero} />

      <HeritageGrid
        items={places}
        from={from}
      />
    </>
  );
}