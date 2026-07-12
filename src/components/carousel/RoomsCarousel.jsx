import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../assets/assets';

const rooms = [
  {
    title: "Couples Room",
    imageUrl: "./location/coupleroomC.png",
  },
  {
    title: "Five-Bedroom Room",
    imageUrl: "./location/5-bed roomG.png"
  },
  {
    title: "Six-Bedroom Homes",
    imageUrl: ["./location/6-bedG.png",
        "./location/6bedtoilet.jpeg"
    ]
  },
  {
    title: "Eight-Bedroom Homes",
    imageUrl: "./fivebed.png"
  },
  {
    title: "Luxury Villa",
    imageUrl: "/villa.png"
  }
];

const RoomsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
        );
      });
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-auto max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div 
        className="relative h-96"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image */}
        <div className="relative h-full">
          <img
            src={rooms[currentIndex].imageUrl}
            alt={rooms[currentIndex].title}
            className="h-full overflow-hidden w-full object-cover hover:scale-105 transition-transform duration-500 scale-up-center"
          />
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
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
          {rooms.map((_, index) => (
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

export default RoomsCarousel;