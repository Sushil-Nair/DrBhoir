import React, { useState } from 'react';

const TabbedGallery = () => {
  const gallerySections = [
    {
      id: 'accommodation',
      title: 'Accommodation',
      images: [
        { id: 1, src: './location/5-bed roomG.png', caption: '5-Bed Room' },
        { id: 2, src: './location/6-bedG.png', caption: '6-Bed Room' },
        { id: 3, src: './location/villa.png', caption: 'Cozy Stays Crafted Just for You.' },
        { id: 4, src: './location/6bedtoilet.jpeg', caption: '6-Bed Room' },
        { id: 5, src: './location/8-bed 1.jpg', caption: '8-Bed Room' },
        { id: 6, src: './location/8-bed 2.jpg', caption: '8-Bed Room' },
        { id: 7, src: './location/8bedtoilet.jpeg', caption: '8-Bed Room' },
        { id: 8, src: './location/coupleroomC.png', caption: 'Couple Room' },
        { id: 9, src: './location/waiting area.jpg', caption: 'Waiting Area' },
        { id: 10, src: './location/lobbyG.png', caption: 'Lobby' },
        { id: 11, src: './location/villa1.png', caption: 'Villa' },
        { id: 12, src: './location/nature1.png', caption: 'Surrounding Natural View' },
        { id: 13, src: './location/nature2.png', caption: 'Surrounding Natural View' },
        { id: 14, src: './location/nature3.png', caption: 'Surrounding Natural View' },
      ]
    },
    {
      id: 'activities',
      title: 'Activities',
      images: [
        { id: 1, src: './activities/activities1c.png', caption: 'Outdoor Activity' },
        { id: 2, src: './activities/activities2c.png', caption: 'Pool' },
        { id: 3, src: './activities/activities3c.png', caption: 'Pool.' },
        { id: 4, src: './activities/activities4c.png', caption: 'Outdoor Activity' },
        { id: 5, src: './outdoor activities.jpg', caption: 'Garden View' },
        { id: 6, src: './activities/activities5c.png', caption: 'Pool' },
        { id: 7, src: './activities/activities6c.png', caption: 'Pool' },
        { id: 8, src: './activities/activities7c.png', caption: 'Pool' },
        { id: 9, src: './activities/activities8c.png', caption: 'Pool' },
        { id: 10, src: './activities/activities9c.png', caption: 'Pool' },
        { id:11, src: './activities/activities10c.png', caption: 'Pool' }
      ]
    },
    {
      id: 'dining',
      title: 'Dining',
      images: [
        { id: 1, src: './dine/dine1c.png', caption: 'Dining' },
        { id: 2, src: './dine/dine2c.png', caption: 'Dining' },
        { id: 3, src: './dine/dine3c.png', caption: 'Dining' },
        { id: 4, src: './dine/dininghall2G.png', caption: 'Dining Hall ' },
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState(gallerySections[0].id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 py-8 h-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {gallerySections.map((section) => (
          <div
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`${
                activeSection === section.id
                  ? 'border-b-[1.8px] border-cta'
                  : 'border-none'
              }`}>
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-4 py-2 bg-transparent border-none font-semibold text-base md:text-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-primary text-cta'
                  : 'bg-primary hover:bg-gray-300'
              }`}
            >
              {section.title}
            </button>
          </div>
        ))}
      </div>

      {/* Gallery Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallerySections
          .find((section) => section.id === activeSection)
          ?.images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TabbedGallery;