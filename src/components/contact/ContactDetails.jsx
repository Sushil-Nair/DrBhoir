import { MapPinned } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120532.3736543478!2d73.0796504!3d19.2546598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793002da3acbd%3A0x9528575cd1ebd813!2sDr%20Bhoir%20farm%20%26%20Resort!5e0!3m2!1sen!2sin!4v1734595688498!5m2!1sen!2sin";

const DIRECTIONS_URL =
  "https://maps.app.goo.gl/hUGhefa5aVz6XDtc7";

const ContactDetails = () => {
  return (
    <section
      aria-labelledby="location-heading"
      className="w-full bg-primary px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl pt-10">

        <h2
          id="location-heading"
          className="mb-8 text-center text-3xl font-semibold"
        >
          Find Us <span className="text-cta">Here</span>
        </h2>

        <div className="mb-10 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-[400px]">
          <iframe
            title="Dr. Bhoir Farm & Resort Location Map"
            src={MAP_EMBED_URL}
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-cta p-8 text-white shadow-lg transition-shadow duration-300 hover:shadow-xl sm:flex-row">
          <div>
            <h3 className="text-xl font-bold">
              Discover Your Retreat Destination
            </h3>

            <p className="mt-2 text-white/90">
              Located near Kalyan and Badlapur,
              Dr. Bhoir Farm & Resort offers a peaceful
              getaway surrounded by nature.
            </p>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
          >
            <MapPinned
              className="h-5 w-5"
              aria-hidden="true"
            />

            Get Directions
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;