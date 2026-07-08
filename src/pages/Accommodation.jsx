import RoomTypes from "../components/accommodation/RoomTypes";
import PropertyRules from "../components/accommodation/PropertyRules";
import MetadataManager from "../components/MetaDataManager";

const Accommodation = () => {
  return (
    <MetadataManager
      title="Luxury Accommodation Near Kalyan | Dr. Bhoir Farm & Resort"
      description="Explore luxury rooms and family accommodations at Dr. Bhoir Farm & Resort near Kalyan and Badlapur. Comfortable stays with modern amenities and scenic surroundings."
      canonicalUrl="https://drbhoirfarmandresort.com/accommodation"
    >
      <div className="pt-16 bg-primary">
        <section
          className="relative h-[40vh] min-h-[320px] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/homePage/hero/hero1O.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Luxury Accommodation
            </h1>

            <p className="mt-4 text-white/90 text-lg max-w-2xl">
              Comfortable stays surrounded by nature near Kalyan and Badlapur.
            </p>
          </div>
        </section>

        <RoomTypes />
        <PropertyRules />
      </div>
    </MetadataManager>
  );
};

export default Accommodation;