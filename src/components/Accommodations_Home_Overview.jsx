import React from 'react'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const Accommodations_Home_Overview = () => {
  return (
    <div>
        <div className="flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary pb-16 gap-4">
            <h3 className="text-2xl font-semibold text-center text-black mb-5 scale-up-center">Stay in Comfort, Surrounded by <span className='text-cta'>Nature</span></h3>
            <p className="text-lg md:text-xl mb-3 scale-up-center">From romantic getaways to group retreats, we offer a variety of accommodations to suit every need. Enjoy comfort, privacy, and stunning views of nature.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
             <div className="text-center flex-col items-center justify-center group relative scale-up-center">
                 <img
                   src="./coupleroom.png"
                   alt="Couple Rooms"
                   className="w-60 h-60 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
                 />
                 <h3 className="text-xl font-semibold mb-2">Couple Rooms</h3>
                 <p className="text-gray-600">Cozy and intimate spaces, perfect for a romantic escape.</p>
             </div>

             <div className="text-center flex-col items-center justify-center group relative scale-up-center">
                 <img
                   src="./familycottage.png"
                   alt="Family Cottages"
                   className="w-60 h-60 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
                 />
                 <h3 className="text-xl font-semibold mb-2">Family Cottages</h3>
                 <p className="text-gray-600">Spacious and comfortable, ideal for families.</p>
             </div>

             <div className="text-center flex-col items-center justify-center group relative scale-up-center">
                 <img
                   src="./fivebed.png"
                   alt="Five-Bedroom Homes"
                   className="w-60 h-60 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
                 />
                 <h3 className="text-xl font-semibold mb-2">Five-Bedroom Homes</h3>
                 <p className="text-gray-600">Lavish living with premium amenities for groups.</p>
             </div>

             <div className="text-center flex-col items-center justify-center group relative scale-up-center">
                 <img
                   src="./villa.png"
                   alt="Luxury Villa"
                   className="w-60 h-60 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
                 />
                 <h3 className="text-xl font-semibold mb-2">Luxury Villa</h3>
                 <p className="text-gray-600">Lavish living with premium amenities for groups.</p>
             </div>
           </div>
           <div className='flex flex-col w-full mt-4 group relative gap-10'>
             <NavLink
                 to="/accommodation"
                 className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                 Find Your Perfect Stay
                 <FaArrowRight className="ml-2 h-5 w-5 heartbeat" />
             </NavLink>
             <hr className='border-none outline-none h-0.5 w-full bg-cta scale-up-center'/>
           </div>
        </div>
    </div>
  )
}

export default Accommodations_Home_Overview