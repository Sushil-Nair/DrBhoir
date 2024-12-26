import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pt-16'>
      <div 
         className="relative h-[100vh] bg-cover bg-center"
         style={{
          backgroundImage: `url(${assets.Hero_AI})`}}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center">
             <div className="text-center text-white px-4 slide-in-left-t">
                 <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Dr. Bhoir Farm & Resort</h1>
                
                 <p className="text-xl md:text-2xl mb-8">Experience luxury in the heart of nature</p>
                 <div className='flex gap-4 justify-center items-center'>
                  <div className='group relative'>
                     <NavLink
                         to="/about"
                         className="inline-flex items-center h-[50px] bg-gray-950/30 border-2 border-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-cta transition-transform duration-300 group-hover:scale-105">
                         Know More
                         <FaArrowRight className="ml-2 h-5 w-5 heartbeat" />
                     </NavLink>
                  </div>
                  <div className='group relative'>
                     <NavLink
                         to="/contact"
                         className="inline-flex items-center h-[50px] bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
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