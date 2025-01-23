import React, { useState } from 'react';

const TabbedGallery = () => {
  const gallerySections = [
    {
      id: 'accommodation',
      title: 'Accommodation',
      images: [
        { id: 1, src: './gallery/accommodation/accoms5bedO.webp', caption: '5-Bed Room' }, 
        { id: 2, src: './gallery/accommodation/accoms6bedO.webp', caption: '6-Bed Room' },
        { id: 3, src: './gallery/accommodation/accomsVillaO.webp', caption: 'Cozy Stays Crafted Just for You.' },
        { id: 4, src: './gallery/accommodation/accoms6bedtoiletO.webp', caption: '6-Bed Room' },
        { id: 5, src: './gallery/accommodation/accoms8bed1O.webp', caption: '8-Bed Room' },
        { id: 6, src: './gallery/accommodation/accoms8bed2O.webp', caption: '8-Bed Room' },
        { id: 7, src: './gallery/accommodation/8bedtoiletO.webp', caption: '8-Bed Room' },
        { id: 8, src: './gallery/accommodation/accomsCoupleroomO.webp', caption: 'Couple Room' },
        { id: 9, src: './gallery/accommodation/accomsWaitingareaO.webp', caption: 'Waiting Area' },
        { id: 10, src: './gallery/accommodation/accomsLobbyO.webp', caption: 'Lobby' },
        { id: 11, src: './gallery/accommodation/accomsNature1O.webp', caption: 'Surrounding Natural View' },
        { id: 12, src: './gallery/accommodation/accomsNature2O.webp', caption: 'Surrounding Natural View' },
        { id: 13, src: './gallery/accommodation/accomsViewO.webp', caption: 'Surrounding Natural View' },
        { id: 14, src: './gallery/accommodation/accomsVillaRoom1O.webp', caption: 'Villa Room' },
        { id: 15, src: './gallery/accommodation/accomsVillaRoom2O.webp', caption: 'Villa Room' },
        { id: 16, src: './gallery/accommodation/accomsVillaRoom3.webp', caption: 'Villa Room' },
        { id: 17, src: './gallery/accommodation/accomsVillaStairsO.webp', caption: 'Villa Room' },
      ]
    },
    {
      id: 'activities',
      title: 'Activities',
      images: [
        { id: 1, src: './gallery/activities/activities1O.webp', caption: 'Outdoor Activity' },
        { id: 2, src: './gallery/activities/activities2O.webp', caption: 'Pool' },
        { id: 3, src: './gallery/activities/activities3O.webp', caption: 'Pool.' },
        { id: 4, src: './gallery/activities/activities4O.webp', caption: 'Outdoor Activity' },
        { id: 5, src: './gallery/activities/activities5O.webp', caption: 'Pool' },
        { id: 6, src: './gallery/activities/activities6O.webp', caption: 'Pool' },
        { id: 7, src: './gallery/activities/activities7O.webp', caption: 'Pool' },
        { id: 8, src: './gallery/activities/activities8O.webp', caption: 'Pool' },
        { id: 9, src: './gallery/activities/activities9O.webp', caption: 'Pool' },
        { id:10, src: './gallery/activities/activities10O.webp', caption: 'Pool' }
      ]
    },
    {
      id: 'dining',
      title: 'Dining',
      images: [
        { id: 1, src: './gallery/dine/dine1O.webp', caption: 'Best Maharashtrian cuisine in Kalyan-Badlapur region' },
        { id: 2, src: './gallery/dine/dine2O.webp', caption: 'Dining' },
        { id: 3, src: './gallery/dine/dine3O.webp', caption: 'Dining' },
        { id: 4, src: './gallery/dine/DininghallO.webp', caption: 'Dining' },
        { id: 5, src: './gallery/dine/dining4O.webp', caption: 'Dining Hall ' },
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