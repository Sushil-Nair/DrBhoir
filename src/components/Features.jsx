import React from 'react';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import { assets } from '../assets/assets';

const Features = () => {
  return (
    <div>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-primary">
         <h3 className="text-2xl font-semibold text-center mb-7">Our Features</h3>
         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
               alt="Luxury Accommodation"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Luxury Accommodation</h3>
             <p className="text-gray-600">Experience comfort in our beautifully designed rooms and suites.</p>
           </div>
           
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src={assets.finedine}
               alt="Fine Dining"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
             <p className="text-gray-600">From the rich spices of Indian cuisine to the savory delights of Chinese dishes.</p>
           </div>
           
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="https://plus.unsplash.com/premium_photo-1682125816787-4db071ef2da8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="DJ Music"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">DJ Music</h3>
             <p className="text-gray-600">Turn Up the Celebration!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="https://images.unsplash.com/photo-1642056446459-1f10774273f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="Indoor Games"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Indoor Games</h3>
             <p className="text-gray-600">Fun Unlimited, Anytime!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="./outdoor activities.jpg"
               alt="Outdoor Games"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Outdoor Games</h3>
             <p className="text-gray-600">Play. Explore. Unwind!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="./Swimming pool.jpg"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
             <p className="text-gray-600">Swim. Splash. Soak in the Fun!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="https://plus.unsplash.com/premium_photo-1670270204672-d569288343e3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="Party"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Party</h3>
             <p className="text-gray-600">Dance, Dine, and Celebrate in Style!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="./Events.jpg"
               alt="Events"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Events</h3>
             <p className="text-gray-600">Celebrate Life's Special Moments.</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="./Parking.png"
               alt="Parking"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Parking</h3>
             <p className="text-gray-600">Hassle-Free Parking, Stress-Free Celebrations!</p>
           </div>
 
           <div className="text-center flex-col items-center justify-center group relative">
             <img
               src="./Sightseeing.png"
               alt="Sightseeing"
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">Sightseeing</h3>
             <p className="text-gray-600">Reconnect with Nature's Beauty.</p>
           </div>
         </div>
         <div className='flex flex-col w-full mt-4 group relative gap-10'>
           <NavLink
               to="/activities"
               className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
               Discover More
               <FaArrowRight className="ml-2 h-5 w-5" />
           </NavLink>
           <hr className='border-none outline-none h-0.5 w-full bg-cta'/>
         </div>
      </div>
    </div>
  )
}

export default Features