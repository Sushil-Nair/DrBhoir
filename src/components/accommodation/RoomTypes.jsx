import { useState, useEffect, useCallback } from "react";
import AmenityItem from "../amenities/AmenityItems";
import {
  Wifi,
  Tv,
  Bath,
  Wind,
  Home,
  SofaIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const rooms = [
  {
    title: "Couples Room",
    description:
      "Cozy and romantic, our couples' rooms offer a tranquil retreat for two, complete with modern amenities, serene ambiance, and stunning views for the perfect getaway.",
    capacity: 2,
    images: ["/accoms/accomsCoupleroomO.webp"],
    alt: "Couples Room at Dr. Bhoir Farm and Resort, Kalyan.",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 1,
      hall: false,
    },
  },
  {
    title: "5 Bedroom Home",
    description:
      "Spacious and inviting, our family homes are designed for comfort, featuring multiple rooms, a common area, and all the essentials for a memorable family vacation.",
    capacity: 10,
    images: ["/accoms/accoms5bedO.webp"],
    alt: "5 Bedroom Home at Dr. Bhoir Farm and Resort, Kalyan, Badlapur.",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 5,
      hall: true,
    },
  },
  {
    title: "6 Bedroom Home",
    description:
      "Ideal for large gatherings, our six-bedroom homes offer ample space, privacy, and premium amenities, ensuring a luxurious and seamless experience for groups or extended families.",
    capacity: 12,
    images: [
      "/accoms/accoms6bedO.webp",
      "/accoms/accoms6bedtoiletO.webp",
    ],
    alt: "Affordable 6 Bedroom Home near Mumbai at Dr. Bhoir Farm and Resort.",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 6,
      hall: true,
    },
  },
  {
    title: "8 Bedroom Home",
    description:
      "Perfect for larger groups and celebrations, our eight-bedroom homes provide spacious interiors, comfortable accommodations, and all the amenities needed for a memorable stay.",
    capacity: 16,
    images: [
      "/accoms/accoms8bed1O.webp",
      "/accoms/accoms8bed2O.webp",
      "/accoms/8bedtoiletO.webp",
    ],
    alt: "Spacious and elegantly designed 8 Bedroom Home at Dr. Bhoir Farm and Resort.",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 8,
      hall: true,
    },
  },
  {
    title: "Luxury Villa",
    description:
      "Indulge in elegance with our luxury villa, boasting premium furnishings, private spaces, and exclusive amenities for a truly lavish stay surrounded by nature.",
    capacity: 24,
    images: [
      "/accoms/accomsVillaO.webp",
      "/accoms/accomsVillaRoom1O.webp",
      "/accoms/accomsVillaRoom2O.webp",
      "/accoms/accomsVillaRoom3.webp",
      "/accoms/accomsVillaStairsO.webp",
    ],
    alt: "Luxury villa at Dr. Bhoir Farm and Resort near Badlapur for large groups and family gatherings.",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 12,
      hall: true,
    },
  },
];

export default function RoomTypes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === selectedRoom?.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedRoom]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedRoom?.images.length - 1 : prev - 1
    );
  }, [selectedRoom]);

  const openModal = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Keyboard support
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-center mb-12">
        <h2 className="text-xl md:text-3xl font-semibold text-black text-center">
          Discover our range of accommodations tailored for every guest
        </h2>
      </div>

      {rooms.map((room, index) => (
        <div
          key={room.title}
          className="group flex flex-col md:flex-row gap-4 mb-16 bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <button
            type="button"
            className="md:w-1/2 text-left"
            onClick={() => openModal(room)}
          >
            <img
              src={room.images[0]}
              alt={room.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-full sm:h-[450px] w-full object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="w-full bg-gray-800 flex items-center justify-center">
              <p className="text-white p-4 font-semibold hover:text-gray-400">
                View More
              </p>
            </div>
          </button>

          <div className="md:w-1/2 p-4 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                {room.title}
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                {room.description}
              </p>

              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
                  Accommodates {room.capacity}{" "}
                  {room.capacity === 1 ? "person" : "people"}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Amenities
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.wifi && (
                    <AmenityItem icon={Wifi} label="WiFi" />
                  )}

                  {room.amenities.tv && (
                    <AmenityItem icon={Tv} label="Television" />
                  )}

                  {room.amenities.bathroom && (
                    <AmenityItem icon={Bath} label="Bathroom" />
                  )}

                  {room.amenities.ac && (
                    <AmenityItem icon={Wind} label="Air Conditioner" />
                  )}

                  <AmenityItem
                    icon={Home}
                    label={`${room.amenities.rooms} ${
                      room.amenities.rooms === 1 ? "Room" : "Rooms"
                    }`}
                  />

                  {room.amenities.hall && (
                    <AmenityItem icon={SofaIcon} label="Hall" />
                  )}
                </div>
              </div>

              <div className="flex mt-6">
                <NavLink
                  to={`/contact?room=${encodeURIComponent(room.title)}`}
                  className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105"
                >
                  Check Availability
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && selectedRoom && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Close image gallery"
            >
              <X size={28} />
            </button>

            <img
              src={selectedRoom.images[currentImageIndex]}
              alt={`${selectedRoom.title} view ${currentImageIndex + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />

            {selectedRoom.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                  aria-label="Next image"
                >
                  <ChevronRight size={40} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                  {currentImageIndex + 1} / {selectedRoom.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}