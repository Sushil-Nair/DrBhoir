import React, { useState } from 'react'
import AmenityItem from '../amenities/AmenityItems';
import { Wifi, Tv, Bath, Wind, Home, SofaIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";


const rooms = [
  {
    title: "Couples Room",
    description: "Cozy and romantic, our couples' rooms offer a tranquil retreat for two, complete with modern amenities, serene ambiance, and stunning views for the perfect getaway.",
    capacity: 2,
    imageUrl: ["./location/coupleroomC.png"],
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 1,
      hall: false
    }
  },
  {
    title: "Five-Bedroom Room",
    description: "Spacious and inviting, our family cottages are designed for comfort, featuring multiple rooms, a common area, and all the essentials for a memorable family vacation.",
    capacity: 10,
    imageUrl: ["./location/5-bed roomG.png"],
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 5,
      hall: true
    }
  },
  {
    title: "Six-Bedroom Homes",
    description: "Ideal for large gatherings, our five-bedroom homes offer ample space, privacy, and premium amenities, ensuring a luxurious and seamless experience for groups or extended families.",
    capacity: 12,
    imageUrl: ["./location/6-bedG.png",
      "./location/6bedtoilet.jpeg"
    ],
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 6,
      hall: true
    }
  },
  {
    title: "Eight-Bedroom Homes",
    description: "Ideal for large gatherings, our five-bedroom homes offer ample space, privacy, and premium amenities, ensuring a luxurious and seamless experience for groups or extended families.",
    capacity: 16,
    imageUrl: ["./location/8-bed 1.jpg",
      "./location/8-bed 2.jpg",
      "./location/8bedtoilet.jpeg"
    ],
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 8,
      hall: true
    }
  },
  {
    title: "Luxury Villa",
    description: "Indulge in elegance with our luxury villas, boasting premium furnishings, private spaces, and exclusive amenities for a truly lavish stay surrounded by nature.",
    capacity: 24,
    imageUrl: ["/villa.png",
      "./location/villa1.png",
      "./location/villaroom1.png",
      "./location/villaroom2.png",
      "./location/villaroom3.png"
    ],
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 12,
      hall: true
    }
  }
];

export default function RoomsType() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null); // Add this state

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedRoom.imageUrl.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedRoom.imageUrl.length - 1 : prev - 1
    );
  };

  // Function to open modal with selected room
  const openModal = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0); // Reset image index
    setIsModalOpen(true);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-full flex items-center justify-center mb-8">
          <h1 className="text-xl md:text-3xl font-semibold text-black mb-4 scale-up-center">Discover our range of accommodations tailored for every guest</h1>
        </div>
        {rooms.map((rooms, index) => (
          <div key={index} className="group h-full flex flex-col md:flex-row gap-4 mb-16 bg-primary  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 scale-up-center">
            <div className='md:w-1/2 cursor-pointer' onClick={() => openModal(rooms)}>
            <img
              src={rooms.imageUrl[0]}
              alt={rooms.title}
              className='h-full sm:h-[450px] overflow-hidden w-full object-cover hover:scale-105 transition-transform duration-500 scale-up-center'
            />
            <div className='cursor-pointer w-full bg-gray-800 flex items-center justify-center' onClick={() => openModal(rooms)}>
               <p className='text-white p-4 text-base font-semibold hover:text-gray-400 '>View More</p>
            </div>
          </div>
            <div className="md:w-1/2 p-4 sm:p-8 flex flex-col justify-between scale-up-center">
                 <div className='h-full'>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{rooms.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{rooms.description}</p>
                    
                    <div className="mb-6">
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">
                        Accommodates {rooms.capacity} {rooms.capacity === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {rooms.amenities.wifi && <AmenityItem icon={Wifi} label="WiFi" />}
                          {rooms.amenities.tv && <AmenityItem icon={Tv} label="Television" />}
                          {rooms.amenities.bathroom && <AmenityItem icon={Bath} label="Bathroom" />}
                          {rooms.amenities.ac && <AmenityItem icon={Wind} label="Air Conditioner" />}
                          <AmenityItem 
                            icon={Home} 
                            label={`${rooms.amenities.rooms} ${rooms.amenities.rooms === 1 ? 'Room' : 'Rooms'}`} 
                          />
                          {rooms.amenities.hall && <AmenityItem icon={SofaIcon} label="Hall" />}
                        </div>
                    </div>

                    {/* Button */}

                    <div className='flex flex-col w-full md:w-auto mt-4 group relative'>
                         <NavLink
                             to="/contact"
                             className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 mt-4 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105 text-nowrap">
                             Check Availability
                             <FaArrowRight className="ml-2 h-5 w-5" />
                         </NavLink>
                    </div>
                 </div>
            </div>
         </div>
        ))}
        {/* Modal Carousel */}
          {isModalOpen && selectedRoom && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="relative w-full max-w-4xl">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
                
                <img
                  src={selectedRoom.imageUrl[currentImageIndex]}
                  alt={`${selectedRoom.title} view ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                {selectedRoom.imageUrl.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                    >
                      <ChevronLeft size={36} />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                    >
                      <ChevronRight size={36} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                      {currentImageIndex + 1} / {selectedRoom.imageUrl.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
    </div>
  )
};