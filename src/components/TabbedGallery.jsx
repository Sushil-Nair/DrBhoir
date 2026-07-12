import { useRef, useState } from "react";

const GALLERY_SECTIONS = [
  {
    id: "accommodation",
    title: "Accommodation",
    images: [
      {
        id: "accom-1",
        src: "/gallery/accommodation/accoms5bedO.webp",
        alt: "Spacious 5-bed room accommodation at Dr. Bhoir Farm & Resort",
        caption: "5-Bed Room",
      },
      {
        id: "accom-2",
        src: "/gallery/accommodation/accoms6bedO.webp",
        alt: "Comfortable 6-bed room ideal for group stays at Dr. Bhoir Farm & Resort",
        caption: "6-Bed Room",
      },
      {
        id: "accom-3",
        src: "/gallery/accommodation/accomsVillaO.webp",
        alt: "Private villa accommodation surrounded by nature at Dr. Bhoir Farm & Resort",
        caption: "Private Villa",
      },
      {
        id: "accom-4",
        src: "/gallery/accommodation/accoms6bedtoiletO.webp",
        alt: "Attached washroom for the 6-bed accommodation",
        caption: "6-Bed Washroom",
      },
      {
        id: "accom-5",
        src: "/gallery/accommodation/accoms8bed1O.webp",
        alt: "Spacious 8-bed room accommodation for larger groups",
        caption: "8-Bed Room",
      },
      {
        id: "accom-6",
        src: "/gallery/accommodation/accoms8bed2O.webp",
        alt: "Additional view of the 8-bed accommodation at the resort",
        caption: "8-Bed Room",
      },
      {
        id: "accom-7",
        src: "/gallery/accommodation/8bedtoiletO.webp",
        alt: "Washroom attached to the 8-bed accommodation",
        caption: "8-Bed Washroom",
      },
      {
        id: "accom-8",
        src: "/gallery/accommodation/accomsCoupleroomO.webp",
        alt: "Comfortable couple room ideal for peaceful getaways",
        caption: "Couple Room",
      },
      {
        id: "accom-9",
        src: "/gallery/accommodation/accomsWaitingareaO.webp",
        alt: "Guest waiting area and seating space at the resort",
        caption: "Waiting Area",
      },
      {
        id: "accom-10",
        src: "/gallery/accommodation/accomsLobbyO.webp",
        alt: "Resort lobby and reception area welcoming guests",
        caption: "Lobby",
      },
      {
        id: "accom-11",
        src: "/gallery/accommodation/accomsNature1O.webp",
        alt: "Natural surroundings and greenery around the resort",
        caption: "Nature View",
      },
      {
        id: "accom-12",
        src: "/gallery/accommodation/accomsNature2O.webp",
        alt: "Scenic landscape surrounding Dr. Bhoir Farm & Resort",
        caption: "Nature View",
      },
      {
        id: "accom-13",
        src: "/gallery/accommodation/accomsViewO.webp",
        alt: "Panoramic view of the resort's natural environment",
        caption: "Resort View",
      },
      {
        id: "accom-14",
        src: "/gallery/accommodation/accomsVillaRoom1O.webp",
        alt: "Interior view of the villa room accommodation",
        caption: "Villa Room",
      },
      {
        id: "accom-15",
        src: "/gallery/accommodation/accomsVillaRoom2O.webp",
        alt: "Comfortable villa room with modern amenities",
        caption: "Villa Room",
      },
      {
        id: "accom-16",
        src: "/gallery/accommodation/accomsVillaRoom3.webp",
        alt: "Additional interior view of the villa room",
        caption: "Villa Room",
      },
      {
        id: "accom-17",
        src: "/gallery/accommodation/accomsVillaStairsO.webp",
        alt: "Villa staircase and access area inside the accommodation",
        caption: "Villa Access",
      },
    ],
  },
  {
    id: "activities",
    title: "Activities",
    images: [
      {
        id: "activity-1",
        src: "/gallery/activities/activities1O.webp",
        alt: "Guests enjoying outdoor activities at Dr. Bhoir Farm & Resort",
        caption: "Outdoor Activities",
      },
      {
        id: "activity-2",
        src: "/gallery/activities/activities2O.webp",
        alt: "Swimming pool area surrounded by greenery",
        caption: "Swimming Pool",
      },
      {
        id: "activity-3",
        src: "/gallery/activities/activities3O.webp",
        alt: "Guests enjoying the swimming pool at the resort",
        caption: "Swimming Pool",
      },
      {
        id: "activity-4",
        src: "/gallery/activities/activities4O.webp",
        alt: "Outdoor recreation activities for families and groups",
        caption: "Outdoor Activities",
      },
      {
        id: "activity-5",
        src: "/gallery/activities/activities5O.webp",
        alt: "Poolside experience at Dr. Bhoir Farm & Resort",
        caption: "Poolside Experience",
      },
      {
        id: "activity-6",
        src: "/gallery/activities/activities6O.webp",
        alt: "Swimming pool facilities available for guests",
        caption: "Swimming Pool",
      },
      {
        id: "activity-7",
        src: "/gallery/activities/activities7O.webp",
        alt: "Leisure activities available at the resort",
        caption: "Resort Activities",
      },
      {
        id: "activity-8",
        src: "/gallery/activities/activities8O.webp",
        alt: "Guests enjoying recreational facilities at the resort",
        caption: "Recreation",
      },
      {
        id: "activity-9",
        src: "/gallery/activities/activities9O.webp",
        alt: "Family-friendly activities at Dr. Bhoir Farm & Resort",
        caption: "Family Activities",
      },
      {
        id: "activity-10",
        src: "/gallery/activities/activities10O.webp",
        alt: "Memorable experiences and activities for guests",
        caption: "Guest Experiences",
      },
    ],
  },
  {
    id: "dining",
    title: "Dining",
    images: [
      {
        id: "dining-1",
        src: "/gallery/dine/dine1O.webp",
        alt: "Traditional Maharashtrian cuisine served at Dr. Bhoir Farm & Resort",
        caption: "Authentic Maharashtrian Cuisine",
      },
      {
        id: "dining-2",
        src: "/gallery/dine/dine2O.webp",
        alt: "Freshly prepared meals served to guests at the resort",
        caption: "Dining Experience",
      },
      {
        id: "dining-3",
        src: "/gallery/dine/dine3O.webp",
        alt: "Guest dining area offering local cuisine and refreshments",
        caption: "Dining Area",
      },
      {
        id: "dining-4",
        src: "/gallery/dine/DininghallO.webp",
        alt: "Spacious dining hall for families, groups and events",
        caption: "Dining Hall",
      },
      {
        id: "dining-5",
        src: "/gallery/dine/dining4O.webp",
        alt: "Comfortable dining setup at Dr. Bhoir Farm & Resort",
        caption: "Dining Hall",
      },
    ],
  },
];

const TabbedGallery = () => {
  const [activeSection, setActiveSection] = useState(
    GALLERY_SECTIONS[0].id
  );

  const tabRefs = useRef([]);

  const currentSection = GALLERY_SECTIONS.find(
    (section) => section.id === activeSection
  );

  const handleKeyDown = (event, index) => {
    const lastIndex = GALLERY_SECTIONS.length - 1;

    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;

      case "ArrowLeft":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = lastIndex;
        break;

      default:
        return;
    }

    event.preventDefault();

    setActiveSection(GALLERY_SECTIONS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tab Navigation */}
      <div
        className="flex flex-wrap gap-3 mb-8"
        role="tablist"
        aria-label="Gallery Categories"
      >
        {GALLERY_SECTIONS.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              id={`${section.id}-tab`}
              aria-selected={isActive}
              aria-controls={`${section.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveSection(section.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                px-5 py-2 rounded-lg font-semibold text-base md:text-lg
                transition-all duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cta
                focus-visible:ring-offset-2
                ${
                  isActive
                    ? "bg-primary text-cta border-b-2 border-cta"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {section.title}
            </button>
          );
        })}
      </div>

      {/* Gallery Content */}
      <div
        id={`${activeSection}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeSection}-tab`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentSection?.images.map((image, index) => (
          <figure
            key={image.id}
            className="overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              loading={index < 3 ? "eager" : "lazy"}
              fetchPriority={index < 3 ? "high" : "auto"}
              decoding="async"
              className="h-64 w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TabbedGallery;
