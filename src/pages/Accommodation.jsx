import React from 'react'
import RoomTypes from '../components/RoomTypes'
import PropertyRules from '../components/PropertyRules'

const Accommodation = () => {
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