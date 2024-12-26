import React from 'react'

const galleryActs = [
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

export default function GalleryActivities() { 
  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 py-8">
            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-xl md:text-2xl font-semibold text-black mb-4 scale-up-center">Activities</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {galleryActs.map((image, index) => (
                <div key={index} className="group relative scale-up-center">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="text-grey-600 text-center py-4 font-semibold">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
            <hr className='border-none outline-none h-0.5 w-full bg-cta scale-up-center'/>
        </div>
    </div>
  )
};