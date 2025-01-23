import React from 'react'
import { NavLink } from 'react-router';
import { FaArrowRight, FaInstagramSquare } from "react-icons/fa";
import TabbedGallery from '../components/TabbedGallery';

const Gallery = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./gallery/galleryTitleO.webp")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>

      <TabbedGallery />

      <div className='flex flex-col w-full mt-4 group relative gap-10'>
           <NavLink
               to="/contact"
               className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
               Plan Your Visit
               <FaArrowRight className="ml-2 h-5 w-5" />
           </NavLink>
           <hr className='border-none outline-none h-0.5 w-full bg-cta'/>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 py-8 h-full'>
        <h2 className='font-semibold text-lg text-center'>Discover more moments and updates on our Instagram page.</h2>
        <button className='border-2 border-insta rounded-lg p-2 bg-insta hover:bg-opacity-90'> 
          <a href="https://www.instagram.com/drbhoirfarm/" target='_blank' className='flex items-center justify-center gap-2'>
             <FaInstagramSquare className='text-white' />
             <p className='text-white font-semibold'>Follow us on Instagram</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Gallery;