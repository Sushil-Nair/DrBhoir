import React from 'react';
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import FeatureCarousel from '../carousel/FeaturesCarousel';

const Feature = [
  {
    url: './homePage/feature/featureVillaO.webp',
    title: 'Luxury Accommodation',
    caption: 'Experience comfort in our beautifully designed rooms and suites.'
  },
  {
    url: './homePage/feature/featurefinedineO.webp',
    title: 'Fine Dining',
    caption: 'From the rich spices of Indian cuisine to the savory delights of Chinese dishes.'
  },
  {
    url: './homePage/feature/featureDJMusicO.webp',
    title: 'DJ Music',
    caption: 'Turn Up the Celebration'
  },
  {
    url: './homePage/feature/featureIndoorGamesO.webp',
    title: 'Indoor Games',
    caption: 'Fun Unlimited, Anytime!'
  },
  {
    url: './homePage/feature/featureOutdoorGamesO.webp',
    title: 'Outdoor Games',
    caption: 'Play. Explore. Unwind!'
  },
  {
    url: './homePage/feature/featureRainDanceO.webp',
    title: 'Rain Dance and Mushroom',
    caption: "Delight in our exhilarating rain dance area, featuring a vibrant mushroom waterfall, perfect for guests of all ages."
  },
  {
    url: './homePage/feature/featureChildrenParkO.webp',
    title: 'Children Park',
    caption: "A dedicated children's park equipped with engaging play structures, ensuring endless fun and adventure for your little ones."
  },
  {
    url: './homePage/feature/featureSwimmingPoolO.webp',
    title: 'Swimming Pool',
    caption: 'Swim. Splash. Soak in the Fun!'
  },
  {
    url: './homePage/feature/featurePartyO.webp',
    title: 'Party',
    caption: 'Dance, Dine, and Celebrate in Style!'
  },
  {
    url: './homePage/feature/featureEventsO.webp',
    title: 'Events',
    caption: "Celebrate Life's Special Moments."
  },
  {
    url: './homePage/feature/featureParkingO.webp',
    title: 'Parking',
    caption: 'Hassle-Free Parking, Stress-Free Celebrations!'
  },
  {
    url: './homePage/feature/featureSightseeingO.webp',
    title: 'Sightseeing',
    caption: "Reconnect with Nature's Beauty."
  }
];

  export default function Features() {
  return (
    <div>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-primary">
         <h3 className="text-2xl font-semibold text-center mb-7 scale-up-center">Our Features</h3>
         <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Feature.map((feature, index) => (
            <div key={index} className="text-center flex-col items-center justify-center group relative scale-up-center">
             <img
               src={feature.url}
               alt={feature.title}
               loading='lazy'
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