import React from 'react'
import Carousel from '../carousel/Carousel'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const images = [
  {
    url: './adityaheritageG.png',
    caption: 'Luxury Room'
  },
  {
    url: './Swimming pool.jpg',
    caption: 'Pool View'
  },
  {
    url: './villafull.png',
    caption: 'Cozy Stays Crafted Just for You.'
  },
  {
    url: './outdoor activities.jpg',
    caption: 'Outdoor Activity'
  },
  {
    url: './dine/dininghall2GC.png',
    caption: 'Dining'
  },
  {
    url: './collageC.png',
    caption: 'View'
  }
];
export default function Gallery_Home_Overview () {
  return (
    <div className='flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary pb-16 gap-4'>
        <h3 className="text-2xl font-semibold text-center text-black mb-5 scale-up-center">A Glimpse of <span className='text-cta'>Paradise</span></h3>
        <p className="text-lg md:text-xl mb-3 text-center scale-up-center">Explore the beauty of Dr. Bhoir Farm & Resort through our stunning visuals.</p>

        <Carousel images={images} className="h-[300px] sm:h-[500px] w-[95%] left-[2%] scale-up-center" />

        <div className='flex flex-col w-full mt-4 group relative gap-10'>
            <NavLink
                to="/gallery"
                className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                See All Highlight
                <FaArrowRight className="ml-2 h-5 w-5 heartbeat" />
            </NavLink>
        </div>
    </div>
  )
}