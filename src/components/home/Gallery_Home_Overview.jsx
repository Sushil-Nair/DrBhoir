import React from 'react'
import Carousel from '../carousel/Carousel'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const images = [
  {
    url: './homePage/gallery/galleryAadityaheritageO.webp',
    caption: 'Affordable rooms for large families at Dr. Bhoir Farm and Resort'
  },
  {
    url: './homePage/gallery/gallerySwimmingpoolO.webp',
    caption: 'Amazing pool for adults and kids with rain dance and mushroom at Dr. Bhoi Farm and Resort'
  },
  {
    url: './homePage/gallery/galleryVillafullO.webp',
    caption: 'Luxury accommodations at affordable prices near Mumbai at Dr. Bhoir Farm and Resort.'
  },
  {
    url: './homePage/gallery/galleryOutdoorO.webp',
    caption: 'Range of Outdoor activities at Dr. Bhoir Farm and Resort in Badlapur'
  },
  {
    url: './homePage/gallery/galleryDininghallO.webp',
    caption: 'Best cuisines available at Dr. Bhoir Farm and Resort'
  },
  {
    url: './homePage/gallery/galleryCollageO.webp',
    caption: 'Enjoy your weekends at the heart of nature at Dr. Bhoir Farm and Resort, Kalyan-Badlapur region'
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
                name="See All Highlight"
                className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                See All Highlight
                <FaArrowRight className="ml-2 h-5 w-5 heartbeat" />
            </NavLink>
        </div>
    </div>
  )
}