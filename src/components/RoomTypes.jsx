import React from 'react'
import AmenityItem from './amenities/AmenityItems';
import { Wifi, Tv, Bath, Wind, Home, SofaIcon } from 'lucide-react';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const rooms = [
  {
    title: "Couples Room",
    description: "Cozy and romantic, our couples' rooms offer a tranquil retreat for two, complete with modern amenities, serene ambiance, and stunning views for the perfect getaway.",
    capacity: 2,
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
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
    title: "Family Cottage",
    description: "Spacious and inviting, our family cottages are designed for comfort, featuring multiple rooms, a common area, and all the essentials for a memorable family vacation.",
    capacity: 4,
    imageUrl: "./familycottage.png",
    amenities: {
      wifi: true,
      tv: true,
      bathroom: true,
      ac: true,
      rooms: 2,
      hall: true
    }
  },
  {
    title: "Five-Bedroom Homes",
    description: "Ideal for large gatherings, our five-bedroom homes offer ample space, privacy, and premium amenities, ensuring a luxurious and seamless experience for groups or extended families.",
    capacity: 10,
    imageUrl: "./fivebed.png",
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
    title: "Luxury Villa",
    description: "Indulge in elegance with our luxury villas, boasting premium furnishings, private spaces, and exclusive amenities for a truly lavish stay surrounded by nature.",
    capacity: 24,
    imageUrl: "/villa.png",
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

export default function RoomTypes() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative h-full flex items-center justify-center mb-8">
          <h1 className="text-xl md:text-3xl font-semibold text-black mb-4 scale-up-center">Discover our range of accommodations tailored for every guest</h1>
        </div>
        {rooms.map((rooms, index) => (
          <div key={index} className="group relative h-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 bg-primary  rounded-2xl overflow-hidden shadow-lg  hover:shadow-xl transition-shadow duration-300 scale-up-center">
            <img
              src={rooms.imageUrl}
              alt={rooms.title}
              className='h-full overflow-hidden w-full object-cover hover:scale-105 transition-transform duration-500 scale-up-center'
            />
            <div className="p-4 sm:p-8 flex flex-col justify-between scale-up-center">
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
    </div>
  )
};