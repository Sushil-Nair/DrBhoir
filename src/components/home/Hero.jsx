import React from 'react'
import { NavLink } from 'react-router'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pt-16 z-10'>
      <div 
         className=" h-[93vh] bg-cover bg-center">
          <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center">
             <div className="text-center text-white px-4 slide-in-left-t">
                 <h1 className="text-3xl sm:text-6xl font-bold mb-4">Welcome to Dr. Bhoir Farm & Resort</h1>
                
                 <p className="text-lg sm:text-2xl mb-8">Experience luxury in the heart of nature at the best Farm Resort in Kalyan and Badlapur</p>
                 <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                  <div className='group relative'>
                     <NavLink
                         to="/about"
                         className="inline-flex items-center justify-center text-nowrap sm:w-auto h-[50px] bg-gray-950/30 border-2 border-cta text-white text-sm sm:text-base font-bold px-8 py-3 rounded-lg hover:bg-cta transition-transform duration-300 group-hover:scale-105">
                         Know More
                         <FaArrowRight className="ml-2 h-5 w-5" />
                     </NavLink>
                  </div>
                  <div className='group relative'>
                     <NavLink
                         to="/contact"
                         className="inline-flex items-center justify-center text-nowrap h-[50px] bg-cta text-white text-sm sm:text-base font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                         Book Your Stay
                         <FaArrowRight className="ml-2 h-5 w-5" />
                     </NavLink>
                  </div>
                 </div>
                
             </div>
         </div>
      </div>
    </div>
  )
}

export default Hero