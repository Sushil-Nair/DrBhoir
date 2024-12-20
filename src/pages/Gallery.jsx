import React from 'react'
import GalleryRooms from '../components/GalleryRooms';
import GalleryActivities from '../components/GalleryActivities';
import GalleryDine from '../components/GalleryDine';
import GalleryEvent from '../components/GalleryEvent';
import GallerySightseeing from '../components/GallerySightseeing';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./Swimming pool.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>
      
      <GalleryRooms />
      <GalleryActivities />
      <GalleryDine />
      <GalleryEvent />
      <GallerySightseeing />

      <div className='flex flex-col w-full mt-4 group relative gap-10'>
           <NavLink
               to="/contact"
               className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
               Plan Your Visit
               <FaArrowRight className="ml-2 h-5 w-5" />
           </NavLink>
           <hr className='border-none outline-none h-0.5 w-full bg-cta'/>
      </div>
    </div>
  );
};

export default Gallery;