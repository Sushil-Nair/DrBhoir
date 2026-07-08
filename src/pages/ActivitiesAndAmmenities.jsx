import Activities from "../components/Activities";
import MinimalistCard from "../components/Sightseeing";
import MetadataManager from "../components/MetaDataManager";

const SIGHTSEEING_PLACES = [
  {
    name: "Durgadi Fort",
    desc: "A historic fort featuring a temple dedicated to Goddess Durga, offering insights into the region's rich heritage.",
    image: "/activities/ssDurgadifortO.webp",
  },
  {
    name: "Titwala Ganpati Mandir",
    desc: "A revered temple dedicated to Lord Ganesha attracting devotees and tourists throughout the year.",
    image: "/activities/ssTitwala_ganesh_mandirO.webp",
  },
  {
    name: "Malshej Ghat",
    desc: "A picturesque mountain pass known for scenic beauty, waterfalls and trekking opportunities.",
    image: "/activities/ssMalshejghatO.webp",
  },
  {
    name: "Kala Talao",
    desc: "A scenic lake in Kalyan city popular for boating and family outings.",
    image: "/activities/ssKalatalaoO.webp",
  },
];

const ActivitiesAndAmenities = () => {
  return (
    <MetadataManager
      title="Activities & Amenities | Dr. Bhoir Farm & Resort"
      description="Explore resort activities, premium amenities and nearby sightseeing attractions at Dr. Bhoir Farm & Resort near Kalyan and Badlapur."
      canonicalUrl="https://drbhoirfarmandresort.com/activities"
    >
      <main className="pt-16">
        <section className="relative min-h-[320px] h-[40vh] overflow-hidden">
          <img
            src="/homePage/hero/hero4O.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Activities & Amenities
            </h1>
          </div>
        </section>

        <Activities />

        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          aria-labelledby="sightseeing-heading"
        >
          <h2
            id="sightseeing-heading"
            className="text-3xl font-semibold text-center mb-6"
          >
            Nearby Sightseeing
          </h2>

          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Enhance your stay with memorable destinations and experiences
            located near the resort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGHTSEEING_PLACES.map((place) => (
              <MinimalistCard
                key={place.name}
                name={place.name}
                desc={place.desc}
                image={place.image}
                otherClass="border border-gray-200"
              />
            ))}
          </div>
        </section>
      </main>
    </MetadataManager>
  );
};

export default ActivitiesAndAmenities;