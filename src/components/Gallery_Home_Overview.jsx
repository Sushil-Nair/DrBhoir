import React from 'react'
import Carousel from './carousel/Carousel'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const images = [
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Luxury Room'
  },
  {
    url: './Swimming pool.jpg',
    caption: 'Pool View'
  },
  {
    url: './villa.png',
    caption: 'Cozy Stays Crafted Just for You.'
  },
  {
    url: './outdoor activities.jpg',
    caption: 'Outdoor Activity'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Garden View'
  },
  {
    url: './Poolside.jpg',
    caption: 'Poolside'
  }
];
export default function Gallery_Home_Overview () {
  return (
    <div className='flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary pb-16 gap-4'>
        <h3 className="text-2xl font-semibold text-center text-black mb-5">A Glimpse of <span className='text-cta'>Paradise</span></h3>
        <p className="text-lg md:text-xl mb-3 text-center">Explore the beauty of Dr. Bhoir Farm & Resort through our stunning visuals.</p>

        <Carousel images={images} className="h-[400px]" />

        <div className='flex flex-col w-full mt-4 group relative gap-10'>
            <NavLink
                to="/gallery"
                className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                See All Highlight
                <FaArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
        </div>
    </div>
  )
}