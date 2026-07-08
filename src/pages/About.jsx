import DirectContact from "../components/DirectContact";
import MetadataManager from "../components/MetaDataManager";

const offerings = [
  {
    title: "Luxurious Accommodations",
    description:
      "Our well-appointed rooms and cottages provide a comfortable stay with modern amenities.",
  },
  {
    title: "Private Pool Villas",
    description:
      "Experience exclusivity with our private pool villas, perfect for intimate gatherings and relaxation.",
  },
  {
    title: "Family-Friendly Environment",
    description:
      "With spacious grounds and recreational activities, we cater to guests of all ages.",
  },
  {
    title: "Proximity to Attractions",
    description:
      "Conveniently located near popular tourist spots in Kalyan, Badlapur, and Ambarnath, making it easy for you to explore the region.",
  },
  {
    title: "Culinary Experiences",
    description:
      "Savor authentic Maharashtrian cuisine prepared with fresh, locally sourced ingredients. Our restaurant offers a variety of dishes catering to diverse palates.",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, ensuring our guests receive nothing but the best.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to sustainable practices that protect and preserve our natural environment.",
  },
  {
    title: "Community",
    description:
      "We believe in giving back to our community and creating positive impacts in the lives of others.",
  },
];

const About = () => {
  return (
    <MetadataManager
      title="About Us | Dr. Bhoir Farm & Resort"
      description="Learn about Dr. Bhoir Farm & Resort's story, our commitment to hospitality, and what makes us a top getaway near Kalyan-Badlapur."
      canonicalUrl="https://drbhoirfarmandresort.com/about"
    >
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
          <img
            src="/about/aboutTitleO.webp"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Us
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Our Story */}
          <section
            aria-labelledby="our-story-heading"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="slide-in-left-t">
              <h2
                id="our-story-heading"
                className="text-3xl font-semibold mb-6"
              >
                Our Story
              </h2>

              <p className="text-gray-600 mb-4">
                Welcome to{" "}
                <span className="font-bold text-cta">
                  Dr. Bhoir Farm & Resort
                </span>
                , your premier destination for a serene and luxurious getaway
                in the heart of the Kalyan - Badlapur region. Our farmhouse
                resort is conveniently accessible from Mumbai, Thane, and Navi
                Mumbai.
              </p>

              <p className="text-gray-600 mb-4">
                In service since 2022, Dr. Bhoir Farm & Resort has been a haven
                of tranquility for travelers seeking an escape from the bustling
                city life. Our resort combines luxury with nature&apos;s beauty
                to create an unforgettable experience.
              </p>

              <p className="text-gray-600 mb-4">
                Our commitment to excellence and sustainable practices has made
                us a leading destination for both leisure and business
                travelers. We take pride in our exceptional service and our
                dedication to preserving the natural beauty that surrounds us.
              </p>
            </div>

            <div className="slide-in-bottom-t">
              <img
                src="/about/about1O.webp"
                alt="Dr. Bhoir Farm and Resort surrounded by nature near Mumbai"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </section>

          {/* Offerings */}
          <section
            aria-labelledby="offerings-heading"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start"
          >
            <div className="scale-up-center order-2 sm:order-1">
              <img
                src="/about/about2O.webp"
                alt="Premium hospitality offerings at Dr. Bhoir Farm and Resort"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="scale-up-center order-1 sm:order-2">
              <h2
                id="offerings-heading"
                className="text-3xl font-semibold mb-8"
              >
                Our Offerings
              </h2>

              <ul className="space-y-6">
                {offerings.map((offering) => (
                  <li
                    key={offering.title}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" />

                    <p className="text-gray-600">
                      <span className="font-bold">
                        {offering.title}:
                      </span>{" "}
                      {offering.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Values */}
          <section
            aria-labelledby="values-heading"
            className="mt-16"
          >
            <h2
              id="values-heading"
              className="text-3xl font-semibold mb-8 text-center scale-up-center"
            >
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="text-center p-6 bg-white rounded-lg shadow-md scale-up-center"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <DirectContact />
        </div>
      </main>
    </MetadataManager>
  );
};

export default About;