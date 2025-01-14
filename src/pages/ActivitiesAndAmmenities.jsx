import React from 'react'
import Activities from '../components/Activities'

const ActivitiesAndAmmenities = () => {
  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-bottom"
        style={{
          backgroundImage: 'url("./Swimming pool.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Activities</h1>
        </div>
      </div>

      <Activities />
    </div>
  )
}

export default ActivitiesAndAmmenities