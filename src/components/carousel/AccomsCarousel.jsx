import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Accoms = [
   {
      url: './coupleroom.png',
      title: 'Couple Rooms',
      caption: 'Cozy and intimate spaces, perfect for a romantic escape.'
    },
    {
      url: './location/6-bedG.png',
      title: 'Six-Bedroom Homes',
      caption: 'Spacious and comfortable, ideal for families.'
    },
    {
      url: './location/5-bed roomG.png',
      title: 'Five-Bedroom Homes',
      caption: 'Lavish living with premium amenities for groups.'
    },
    {
      url: './villa.png',
      title: 'Luxury Villa',
      caption: 'Lavish living with premium amenities for groups.'
    },
];

const AccomsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === Accoms.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Accoms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Accoms.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative sm:hidden w-full h-[300px] max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg scale-up-center">
      <div 
        className="relative h-96"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image */}
        <div className="relative h-full">
          <img
            src={Accoms[currentIndex].url}
            alt={Accoms[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Caption Overlay */}
          <div className="absolute bottom-20 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold mb-2">{Accoms[currentIndex].title}</h3>
            {/* <p className="text-sm">{Accoms[currentIndex].caption}</p> */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-[90px] left-0 right-0 flex justify-center gap-2">
          {Accoms.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccomsCarousel;