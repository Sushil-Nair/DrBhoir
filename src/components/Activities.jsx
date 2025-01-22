import React from 'react'
import { NavLink } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const activities = [
  {
    url: './Swimming pool.jpg',
    caption: 'Swimming Pool'
  },
  {
    url: './activities/Rain Dance G.png',
    caption: 'Rain Dance'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1664302012799-8da4258711a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Pool Table'
  },
  {
    url: './activities/TTG.png',
    caption: 'Table Tennis'
  },
  {
    url: './activities/cricketG.png',
    caption: 'Cricket'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1733288427325-f43bc7f0e758?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Football'
  },
  {
    url: './activities/volleyballG.png',
    caption: 'Volleyball'
  },
  {
    url: './activities/badmintonG.png',
    caption: 'Badminton'
  },
  {
    url: './activities/children parkG.png',
    caption: 'Kids Play Area'
  },
   {
    url: './activities/trampolineG.png',
    caption: 'Trampoline'
  },
  {
    url: './activities/BonfireG.png',
    caption: 'Bonfire'
  },
  {
    url: './activities/BBQG.png',
    caption: 'BBQ'
  },
  {
    url: './activities/openlawnG.png',
    caption: 'Open Lawn'
  }
]; 

const events = [
  {
    url: './activities/social.png',
    caption: 'Reunions'
  },
  {
    url: 'https://images.unsplash.com/photo-1598238179116-ec3c4c0f7a29?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Anniversary'
  },
  {
    url: 'https://images.unsplash.com/photo-1728024450639-dc1b6183dbf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Birthday'
  },
  {
    url: 'https://images.unsplash.com/photo-1670745088092-c8357f5b72c1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Christmas Party'
  },
  {
    url: 'https://images.unsplash.com/photo-1608870229932-cec85e0390ee?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'New Year Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1671531906046-2c0873857bbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Pre Wedding Shoot'
  },
  {
    url: './activities/social.png',
    caption: 'Social Events'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1681210072502-4102a6059bb8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Family Outings'
  },
  {
    url: 'https://images.unsplash.com/photo-1700788629800-ad3a0b202054?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

