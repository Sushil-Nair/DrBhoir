import React from 'react'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const activities = [
  {
    url: './activities/activitiesSwimmingPoolO.webp',
    caption: 'Swimming Pool'
  },
  {
    url: './activities/activitiesPoolTableO.webp',
    caption: 'Pool Table'
  },
  {
    url: './activities/activitiesTTO.webp',
    caption: 'Table Tennis'
  },
  {
    url: './activities/activitiesCricketO.webp',
    caption: 'Cricket'
  },
  {
    url: './activities/activitiesFootballO.webp',
    caption: 'Football'
  },
  {
    url: './activities/activitiesVolleyballO.webp',
    caption: 'Volleyball'
  },
  {
    url: './activities/activitiesbadmintonO.webp',
    caption: 'Badminton'
  },
  {
    url: './activities/activitiesChildrenParkO.webp',
    caption: 'Kids Play Area'
  },
  {
    url: './activities/activitiesTrampolineO.webp',
    caption: 'Trampoline'
  },
  {
    url: './activities/activitiesRainDanceO.webp',
    caption: 'Rain Dance'
  },
  {
    url: './activities/activitiesBonfireO.webp',
    caption: 'Bonfire'
  },
  {
    url: './activities/activitiesBBQO.webp',
    caption: 'BBQ'
  },
  {
    url: './activities/activitiesOpenlawnO.webp',
    caption: 'Open Lawn'
  }
]; 

const events = [
  {
    url: './activities/activitiesReunionO.webp',
    caption: 'Reunions'
  },
  {
    url: './activities/activitiesAnniversaryO.webp',
    caption: 'Anniversary'
  },
  {
    url: './activities/activitiesBirthdayO.webp',
    caption: 'Birthday'
  },
  {
    url: './activities/activitiesChristmasO.webp',
    caption: 'Christmas Party'
  },
  {
    url: './activities/activitiesNewYearO.webp',
    caption: 'New Year Celebration'
  },
  {
    url: './activities/activitiesSocialO.webp',
    caption: 'Social Events'
  },
  {
    url: './activities/activitiesFamilyOutingO.webp',
    caption: 'Family Outings'
  },
  {
    url: './activities/activitiesDiwaliO.webp',
    caption: 'Diwali Celebrations'
  }
];
export default function Activities () {
  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {/* Activities */}
            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-black mb-10 scale-up-center">Indulge in Our Activities</h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {activities.map((image, index) => (
                <div key={index} className="group relative scale-up-center aspect-square">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="hidden md:absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg md:flex items-center justify-center">
                      <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </p>
                   </div>

                   <div className="md:hidden rounded-lg flex items-center justify-center">
                      <p className="text-black text-base font-semibold py-2">
                        {image.caption}
                      </p>
                   </div>
                </div>
              ))}
            </div>

            {/* Events */}
            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-black mb-10 scale-up-center">Celebrate at Our Venue</h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {events.map((image, index) => (
                <div key={index} className="group relative scale-up-center aspect-square">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="hidden md:absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg md:flex items-center justify-center aspect-square">
                      <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </p>
                   </div>

                   <div className="md:hidden rounded-lg flex items-center justify-center">
                      <p className="text-black text-base font-semibold py-2">
                        {image.caption}
                      </p>
                   </div>
                </div>
              ))}
            </div>

            <div className='flex flex-col w-full mt-16 group relative gap-10'>
             <NavLink
                 to="/contact"
                 className="inline-flex items-center justify-center mx-auto bg-cta text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-transform duration-300 group-hover:scale-105">
                 Reserve Your Spot Today
                 <FaArrowRight className="ml-2 h-5 w-5" />
             </NavLink>
           </div>
        </div>
    </div>
  )
}

