import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";
import Image from "../../components/atoms/Image";

export default function HeritagePage() {
  const heritageCards = [
    {
      number: "01",
      title: "History",
      image: "/images/heritage/history.jpg",

      description:
        "Pangasinan has a long history that includes the ancient communities of Caboloan, Spanish colonization, local revolts, the Philippine Revolution, and important events during World War II.",

      details:
        "Before Spanish colonization, communities had already established settlements along the Lingayen Gulf and were involved in trade with other parts of Asia. The province later experienced Spanish rule, including the establishment of Pangasinan as a political province in 1580. Important events include the Limahong invasion, the Malong Revolt of 1660, and the Palaris Revolt of 1762.",

      examples:
        "Caboloan, Limahong's invasion, the Malong Revolt, the Palaris Revolt, Casa Real in Lingayen, and the World War II landing in the Lingayen Gulf.",
    },

    {
      number: "02",
      title: "Culture",
      image: "/images/heritage/culture.jpg",

      description:
        "Pangasinan's cultural heritage can be seen through its language, food, traditional industries, festivals, crafts, religious traditions, and community practices.",

      details:
        "The province's name itself is connected to one of its traditional industries: salt-making. Pangasinan communities also continue to celebrate local festivals and cultural events. Traditional crafts such as buri weaving in Bolinao demonstrate how skills and knowledge can be passed from one generation to another.",

      examples:
        "Salt-making, Pangasinan traditions, Pista'y Dayat, local town festivals, buri weaving in Bolinao, traditional food, crafts, and religious celebrations.",
    },

    {
      number: "03",
      title: "Nature",
      image: "/images/heritage/nature.jpg",

      description:
        "Pangasinan has diverse natural environments, including islands, beaches, rivers, mountains, caves, coastal areas, and other landscapes.",

      details:
        "The province is bordered by the Lingayen Gulf and has a varied landscape that includes mountain ranges and major river systems. The Agno River, also known as the Pangasinan River, crosses the province and eventually drains into the Lingayen Gulf. These environments support communities, agriculture, tourism, and other activities.",

      examples:
        "Hundred Islands, Lingayen Gulf, Agno River, Bolinao's coastal areas, beaches, caves, waterfalls, mountains, and other natural landscapes.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ed] text-[#263238]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-[#123f38] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">

          <span className="mb-4 block text-xs font-extrabold tracking-[0.16em] text-[#f5c451] sm:mb-5 sm:text-sm sm:tracking-[0.2em]">
            OUR HERITAGE
          </span>

          <Heading
            level={1}
            className="mb-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:mb-6 sm:text-5xl sm:leading-tight lg:text-7xl"
          >
            Discover Pangasinan&apos;s Heritage
          </Heading>

          <Text className="max-w-3xl text-base leading-7 text-[#e7eeee] sm:text-lg sm:leading-8">
            Explore the history, culture, traditions, landmarks, and natural
            environments that help define the identity of Pangasinan.
          </Text>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">

          <div className="max-w-4xl">

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              UNDERSTANDING OUR HERITAGE
            </span>

            <Heading
              level={2}
              className="mb-5 text-3xl font-extrabold leading-tight sm:mb-6 sm:text-4xl lg:text-6xl"
            >
              What makes Pangasinan&apos;s heritage special?
            </Heading>

            <div className="space-y-4 sm:space-y-5">

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                Heritage is more than a collection of old buildings or
                historical locations. It includes the places, traditions,
                stories, practices, and natural environments that communities
                value and pass on to future generations.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                In Pangasinan, heritage can be experienced through historical
                landmarks, religious traditions, local culture, communities,
                and distinctive natural landscapes found throughout the
                province.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                This digital showcase brings these different elements together
                to help visitors learn about the province and appreciate the
                stories and places that contribute to its identity.
              </Text>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HERITAGE CATEGORIES
      ====================================================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-9 max-w-3xl sm:mb-12">

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              THREE PARTS OF OUR HERITAGE
            </span>

            <Heading
              level={2}
              className="mb-4 text-3xl font-extrabold leading-tight sm:mb-5 sm:text-4xl lg:text-5xl"
            >
              History, Culture, and Nature
            </Heading>

            <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
              Pangasinan&apos;s heritage can be understood through the
              connection between its history, people, traditions, and
              environment.
            </Text>

          </div>


          {/* Heritage Cards */}
          <div className="grid gap-5 md:grid-cols-2 md:gap-7">

            {heritageCards.map((card, index) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-2xl border border-[#e5e1d8] bg-[#f7f4ed] shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.10)] ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden sm:h-64 lg:h-72">

                  <Image
                    src={card.image}
                    alt={`${card.title} heritage of Pangasinan`}
                    className="h-full w-full transition duration-500 hover:scale-105"
                  />

                  {/* NUMBER */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8b83f] text-xs font-extrabold text-[#263238] shadow-lg sm:left-5 sm:top-5 sm:h-12 sm:w-12 sm:text-sm">
                    {card.number}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-5 sm:p-7 lg:p-8">

                  <Heading
                    level={3}
                    className="mb-3 text-2xl font-extrabold text-[#176b5b] sm:mb-4 sm:text-3xl"
                  >
                    {card.title}
                  </Heading>

                  <Text className="mb-5 text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                    {card.description}
                  </Text>

                  <div className="border-t border-[#ddd8cc] pt-5">

                    <Text className="mb-5 text-base leading-7 text-[#607078]">
                      {card.details}
                    </Text>

                    <div className="rounded-xl bg-white p-4 sm:p-5">

                      <span className="mb-2 block text-sm font-bold text-[#263238]">
                        Examples
                      </span>

                      <Text className="text-sm leading-6 text-[#607078]">
                        {card.examples}
                      </Text>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          HISTORY
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg sm:h-[400px] lg:h-[500px]">

            <Image
              src="/images/heritage/history.jpg"
              alt="Historical heritage of Pangasinan"
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123f38]/80 via-[#123f38]/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">

              <span className="mb-2 block text-xs font-extrabold tracking-[0.16em] text-[#f5c451] sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
                HISTORICAL HERITAGE
              </span>

              <Heading
                level={2}
                className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl"
              >
                Stories preserved through places
              </Heading>

            </div>

          </div>


          {/* TEXT */}
          <div>

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              HISTORY
            </span>

            <Heading
              level={2}
              className="mb-5 text-3xl font-extrabold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl"
            >
              Understanding the past of Pangasinan
            </Heading>

            <div className="space-y-4 sm:space-y-5">

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                Pangasinan&apos;s history can be explored through the physical
                places that remain part of communities today. Historic
                churches, civic structures, and important landmarks provide
                visible connections to earlier generations.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                These places help explain how communities developed and how
                historical events influenced the province. They also provide
                opportunities for younger generations to learn about the past.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                Preserving historical places therefore means preserving more
                than architecture. It also helps preserve the stories,
                memories, and experiences connected to those locations.
              </Text>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CULTURE
      ====================================================== */}
      <section className="bg-[#123f38] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* TEXT */}
          <div className="order-2 lg:order-1">

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#f5c451] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              CULTURAL HERITAGE
            </span>

            <Heading
              level={2}
              className="mb-5 text-3xl font-extrabold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl"
            >
              Culture lives through people and traditions
            </Heading>

            <div className="space-y-4 sm:space-y-5">

              <Text className="text-base leading-7 text-[#e7eeee] sm:leading-8">
                Cultural heritage is preserved through the everyday practices
                of communities. Traditions, celebrations, food, crafts,
                religious practices, language, and local customs all contribute
                to Pangasinan&apos;s cultural identity.
              </Text>

              <Text className="text-base leading-7 text-[#e7eeee] sm:leading-8">
                These traditions are not simply part of the past. Many
                continue to be practiced today and are adapted by communities
                while remaining connected to earlier generations.
              </Text>

              <Text className="text-base leading-7 text-[#e7eeee] sm:leading-8">
                Learning about these practices allows visitors to understand
                Pangasinan not only through its landmarks, but also through the
                people and communities who continue to keep its culture alive.
              </Text>

            </div>

          </div>


          {/* IMAGE */}
          <div className="order-1 relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[400px] lg:order-2 lg:h-[500px]">

            <Image
              src="/images/heritage/culture.jpg"
              alt="Cultural heritage of Pangasinan"
              className="absolute inset-0 h-full w-full"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          NATURAL HERITAGE
      ====================================================== */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg sm:h-[400px] lg:h-[500px]">

            <Image
              src="/images/heritage/nature.jpg"
              alt="Natural heritage of Pangasinan"
              className="absolute inset-0 h-full w-full"
            />

          </div>


          {/* TEXT */}
          <div>

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              NATURAL HERITAGE
            </span>

            <Heading
              level={2}
              className="mb-5 text-3xl font-extrabold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl"
            >
              Landscapes that define the province
            </Heading>

            <div className="space-y-4 sm:space-y-5">

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                Pangasinan is known for its varied natural environment,
                including coastal areas, islands, rivers, waterfalls, caves,
                hot springs, and mountain landscapes.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                Natural destinations such as the Hundred Islands and other
                coastal and inland environments are important parts of the
                province&apos;s identity and provide opportunities for people
                to experience its diverse landscape.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:leading-8">
                Appreciating natural heritage also means recognizing the
                importance of protecting these environments so they can
                continue to be experienced by future generations.
              </Text>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HERITAGE AND COMMUNITY
      ====================================================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">

          <div className="max-w-4xl">

            <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
              PRESERVING OUR HERITAGE
            </span>

            <Heading
              level={2}
              className="mb-5 text-3xl font-extrabold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl"
            >
              Heritage belongs to the community
            </Heading>

            <div className="space-y-4 sm:space-y-5">

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                Heritage remains meaningful when people continue to recognize,
                understand, and care for it. Historical places, cultural
                practices, and natural environments all benefit from
                responsible appreciation and preservation.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                A digital showcase can help make these stories more accessible
                by bringing information about Pangasinan&apos;s heritage
                together in one place.
              </Text>

              <Text className="text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
                By learning about the province&apos;s heritage, visitors and
                residents can develop a greater appreciation for the places,
                traditions, and environments that form part of Pangasinan&apos;s
                identity.
              </Text>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING
      ====================================================== */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">

          <span className="mb-3 block text-xs font-extrabold tracking-[0.16em] text-[#176b5b] sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
            OUR HERITAGE
          </span>

          <Heading
            level={2}
            className="mb-4 text-3xl font-extrabold leading-tight sm:mb-5 sm:text-4xl lg:text-5xl"
          >
            Every place has a story.
          </Heading>

          <Text className="max-w-3xl text-base leading-7 text-[#607078] sm:text-lg sm:leading-8">
            From historic landmarks and cultural traditions to remarkable
            natural environments, Pangasinan&apos;s heritage reflects the
            stories and identity of its people. Explore the showcase to
            discover more.
          </Text>

        </div>
      </section>

    </main>
  );
}