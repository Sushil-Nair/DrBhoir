import React from 'react'
import RoomTypes from '../components/accommodation/RoomTypes'
import PropertyRules from '../components/accommodation/PropertyRules'

const Accommodation = () => {
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
    imageUrl: ["./location/8-bed 1.jpg"],
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
    imageUrl: ["/villa.png"],
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
  return (
    <div className="pt-16 bg-primary">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./Swimming pool.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Accommodations</h1>
        </div>
      </div>

      <RoomTypes />

      <PropertyRules />
    </div>
  )
}

export default Accommodation