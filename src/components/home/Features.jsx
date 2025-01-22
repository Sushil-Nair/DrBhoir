import React from 'react';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import { assets } from '../../assets/assets';
import FeatureCarousel from '../carousel/FeaturesCarousel';

const Feature = [
  {
    url: './location/villaG.png',
    title: 'Luxury Accommodation',
    caption: 'Experience comfort in our beautifully designed rooms and suites.'
  },
  {
    url: assets.finedine,
    title: 'Fine Dining',
    caption: 'From the rich spices of Indian cuisine to the savory delights of Chinese dishes.'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1682125816787-4db071ef2da8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'DJ Music',
    caption: 'Turn Up the Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1642056446459-1f10774273f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Indoor Games',
    caption: 'Fun Unlimited, Anytime!'
  },
  {
    url: './outdoor activities.jpg',
    title: 'Outdoor Games',
    caption: 'Play. Explore. Unwind!'
  },
  {
    url: './activities/raindanceG.png',
    title: 'Raindance and Mushroom',
    caption: "Delight in our exhilarating rain dance area, featuring a vibrant mushroom waterfall, perfect for guests of all ages."
  },
  {
    url: './activities/children parkG.png',
    title: 'Children Park',
    caption: "A dedicated children's park equipped with engaging play structures, ensuring endless fun and adventure for your little ones."
  },
  {
    url: './Swimming pool.jpg',
    title: 'Swimming Pool',
    caption: 'Swim. Splash. Soak in the Fun!'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1670270204672-d569288343e3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Party',
    caption: 'Dance, Dine, and Celebrate in Style!'
  },
  {
    url: './Events.jpg',
    title: 'Events',
    caption: "Celebrate Life's Special Moments."
  },
  {
    url: './Parking.png',
    title: 'Parking',
    caption: 'Hassle-Free Parking, Stress-Free Celebrations!'
  },
  {
    url: './Sightseeing.png',
    title: 'Sightseeing',
    caption: "Reconnect with Nature's Beauty."
  }
];

  export default function Features() {
  return (
    <div>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-primary">
         <h3 className="text-2xl font-semibold text-center mb-7 scale-up-center">Our Features</h3>
         <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {Feature.map((feature, index) => (
            <div key={index} className="text-center flex-col items-center justify-center group relative scale-up-center">
             <img
               src={feature.url}
               alt={feature.title}
               className="w-52 h-52 object-cover shadow-xl rounded-lg mb-4 m-auto transition-transform duration-300 group-hover:scale-105"
             />
             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
             <p className="text-gray-600">{feature.caption}</p>
           </div>
          ))}
         </div>

         <div className="sm:hidden text-center flex-col items-center justify-center group relative px-4 scale-up-center">
           <FeatureCarousel />
         </div>

         <div className='flex flex-col w-full mt-4 group relative gap-10'>
           <NavLink
               to="/activities"
               className="inline-flex items-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
               Discover More
               <FaArrowRight className="ml-2 h-5 w-5 heartbeat" />
           </NavLink>
           <hr className='border-none outline-none h-0.5 w-full bg-cta scale-up-center'/>
         </div>
      </div>
    </div>
  )
}