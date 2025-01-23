import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import DirectContact from '../components/DirectContact'

const About = () => {
  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-bottom pt-16"
        style={{
          backgroundImage: 'url("./about/aboutTitleO.webp")'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className='slide-in-left-t'>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Welcome to <span className='font-bold text-cta'>Dr. Bhoir Farm & Resort</span>, your premier destination for a serene and luxurious getaway in the heart of the Kalyan - Badlapur region. Our farmhouse resort is conveniently accessible from Mumbai, Thane, and Navi Mumbai.
            </p>
            <p className="text-gray-600 mb-4">
              In service since 2022, Dr. Bhoir Farm & Resort has been a haven of tranquility for travelers seeking an escape from the bustling city life. Our resort combines luxury with nature's beauty to create an unforgettable experience.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence and sustainable practices has made us a leading destination for both leisure and business travelers. We take pride in our exceptional service and our dedication to preserving the natural beauty that surrounds us.
            </p>
          </div>
          <div className='slide-in-bottom-t'>
            <img
              src="./about/about1O.webp"
              alt="Dr. Bhoir Farm and Resort, a getaway with natural surroundings close to Mumbai"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start">
          <div className='scale-up-center order-2 sm:order-1'>
            <img
              src="./about/about2O.webp"
              alt="Dr. Bhoir Farm and Resort offers premium services at affordable prices"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className='scale-up-center order-1 sm:order-2'>
            <h2 className="text-3xl font-semibold mb-8">Our Offerings</h2>
            <div className='flex items-start gap-4 mb-8'>
              <span className='bg-black border-[3px] rounded-full border-black'> </span>
              <p className='text-gray-600 mt-[-12px]'><span className='font-bold'>Luxurious Accommodations:</span> Our well-appointed rooms and cottages provide a comfortable stay with modern amenities.</p>
            </div>
            <div className='flex items-start gap-4 mb-8'>
              <span className='bg-black border-[3px] rounded-full border-black'> </span>
              <p className='text-gray-600 mt-[-12px]'><span className='font-bold'>Private Pool Villas:</span> Experience exclusivity with our private pool villas, perfect for intimate gatherings and relaxation.</p>
            </div>
            <div className='flex items-start gap-4 mb-8'>
              <span className='bg-black border-[3px] rounded-full border-black'> </span>
              <p className='text-gray-600 mt-[-12px]'><span className='font-bold'>Family-Friendly Environment:</span> With spacious grounds and recreational activities, we cater to guests of all ages.</p>
            </div>
            <div className='flex items-start gap-4 mb-8'>
              <span className='bg-black border-[3px] rounded-full border-black'> </span>
              <p className='text-gray-600 mt-[-12px]'><span className='font-bold'>Proximity to Attractions:</span> Conveniently located near popular tourist spots in Kalyan, Badlapur, and Ambarnath, making it easy for you to explore the region.</p>
            </div>
            <div className='flex items-start gap-4 mb-8'>
              <span className='bg-black border-[3px] rounded-full border-black'> </span>
              <p className='text-gray-600 mt-[-12px]'><span className='font-bold'>Culinary Experiences:</span> Savor authentic Maharashtrian cuisine prepared with fresh, locally sourced ingredients. The resort's restaurant offers a variety of dishes catering to diverse palates.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center scale-up-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md scale-up-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our service, ensuring our guests receive nothing but the best.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md scale-up-center">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">We are committed to sustainable practices that protect and preserve our natural environment.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md scale-up-center">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">We believe in giving back to our community and creating positive impacts in the lives of others.</p>
            </div>
          </div>
        </div>

        {/* Direct Contact */}
        <DirectContact />
      </div>
    </div>
  )
}

export default About