import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";

export default function AboutPage() {
  const purposes = [
    {
      number: "01",
      title: "Preserve",
      description:
        "Help preserve the stories, traditions, landmarks, and cultural identity that make Pangasinan unique.",
    },
    {
      number: "02",
      title: "Share",
      description:
        "Make information about Pangasinan's heritage easier to discover and understand through a digital showcase.",
    },
    {
      number: "03",
      title: "Celebrate",
      description:
        "Celebrate the province's history, culture, people, and natural beauty by presenting them in one accessible place.",
    },
  ];

  return (
    <main className="bg-[#f7f4ed] text-[#263238]">
      {/* =====================================================
          ABOUT BANNER
      ====================================================== */}
      <section className="bg-[#123f38] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-5 block text-sm font-extrabold tracking-[0.2em] text-[#f5c451]">
            ABOUT THE PROJECT
          </span>

          <Heading
            level={1}
            className="mb-6 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          >
            Pangasinan Heritage
          </Heading>

          <Text className="max-w-2xl text-lg leading-8 text-[#e7eeee]">
            A digital showcase created to introduce visitors to the history,
            culture, places, and natural heritage of Pangasinan.
          </Text>
        </div>
      </section>

      {/* =====================================================
          PURPOSE
      ====================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-4xl">
            <span className="mb-4 block text-sm font-extrabold tracking-[0.2em] text-[#176b5b]">
              OUR PURPOSE
            </span>

            <Heading
              level={2}
              className="mb-5 text-4xl font-extrabold leading-tight text-[#176b5b] sm:text-5xl"
            >
              Why this project matters
            </Heading>

            <Text className="max-w-3xl text-lg leading-8 text-[#607078]">
              Pangasinan has a rich collection of historical places, cultural
              traditions, and natural attractions. This website provides a
              simple way to explore and appreciate that heritage.
            </Text>
          </div>

          {/* Purpose Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {purposes.map((purpose) => (
              <article
                key={purpose.number}
                className="rounded-2xl border border-[#e5e1d8] bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.09)] sm:p-8"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#e8b83f] text-sm font-extrabold text-[#263238]">
                  {purpose.number}
                </div>

                <Heading
                  level={3}
                  className="mb-3 text-2xl font-bold text-[#176b5b]"
                >
                  {purpose.title}
                </Heading>

                <Text className="text-base leading-7 text-[#607078]">
                  {purpose.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION
      ====================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-4xl">
            <span className="mb-4 block text-sm font-extrabold tracking-[0.2em] text-[#176b5b]">
              OUR VISION
            </span>

            <Heading
              level={2}
              className="mb-6 text-4xl font-extrabold leading-tight text-[#176b5b] sm:text-5xl"
            >
              Making heritage easier to discover
            </Heading>

            <Text className="max-w-3xl text-lg leading-8 text-[#607078]">
              The goal of Pangasinan Heritage is to create an informative and
              accessible digital space where people can learn about the
              province and develop a greater appreciation for its heritage.
            </Text>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <span className="mb-4 block text-sm font-extrabold tracking-[0.2em] text-[#176b5b]">
              OUR MISSION
            </span>

            <Heading
              level={2}
              className="text-4xl font-extrabold leading-tight text-[#176b5b] sm:text-5xl"
            >
              Preserving culture through digital storytelling
            </Heading>
          </div>

          {/* Content */}
          <div className="max-w-2xl space-y-5">
            <Text className="text-base leading-8 text-[#607078]">
              This project aims to present Pangasinan&apos;s heritage in a clear
              and engaging way through a modern digital platform.
            </Text>

            <Text className="text-base leading-8 text-[#607078]">
              By bringing together information about historical landmarks,
              cultural traditions, and places to visit, the website encourages
              users to explore the province and learn more about its identity.
            </Text>

            <Text className="text-base leading-8 text-[#607078]">
              Through digital storytelling, Pangasinan&apos;s heritage can be
              introduced to both local communities and visitors.
            </Text>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ====================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-4 block text-sm font-extrabold tracking-[0.2em] text-[#176b5b]">
            PANGASINAN HERITAGE
          </span>

          <Heading
            level={2}
            className="mb-5 text-4xl font-extrabold leading-tight text-[#176b5b] sm:text-5xl"
          >
            Preserving culture. Sharing history.
          </Heading>

          <Text className="max-w-2xl text-lg leading-8 text-[#607078]">
            Every place has a story that reflects the province&apos;s rich heritage.
            This project brings those stories together in one digital
            showcase.
          </Text>
        </div>
      </section>
    </main>
  );
}