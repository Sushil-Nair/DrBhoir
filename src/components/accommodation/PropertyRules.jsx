const propertyRules = [
  "Check-in time is 11:00 AM and check-out time is 10:00 AM.",
  "Please provide a valid government-issued ID during check-in.",
  "Proper swimming costumes are required to use the swimming pool.",
  "Food and beverages are not permitted inside the swimming pool.",
  "Additional guests visiting for meals may incur table charges.",
  "Swimming pool operating hours are from 7:00 AM to 12:00 AM.",
  "Pets are not permitted on the property.",
  "Unmarried couples are not permitted."
];

const PropertyRules = () => {
  return (
    <section
      aria-labelledby="property-rules-heading"
      className="w-full bg-primary pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="property-rules-heading"
          className="text-2xl md:text-3xl font-semibold text-center mb-5"
        >
          Property <span className="text-cta">Rules</span> &{" "}
          <span className="text-cta">Guidelines</span>
        </h2>

        <p className="text-lg md:text-xl text-center mb-10">
          To ensure a pleasant and safe experience for all guests,
          please follow these guidelines during your stay.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="flex items-center justify-center bg-primary p-8">
            <img
              src="/accoms/accoms_logo_whitebg_trans.webp"
              alt="Dr. Bhoir Farm and Resort logo"
              loading="lazy"
              decoding="async"
              className="w-3/5"
            />
          </div>

          <div className="p-8">
            <h3 className="text-xl font-semibold text-center mb-6">
              Things to Remember
            </h3>

            <ul className="space-y-4 list-disc pl-5">
              {propertyRules.map((rule) => (
                <li key={rule} className="text-sm md:text-base lg:text-lg">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyRules;