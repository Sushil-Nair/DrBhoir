import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../assets/assets';

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

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === Feature.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Feature.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Feature.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[300px] max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div 
        className="relative h-96"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image */}
        <div className="relative h-full">
          <img
            src={Feature[currentIndex].url}
            alt={Feature[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Caption Overlay */}
          <div className="absolute bottom-20 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold mb-2">{Feature[currentIndex].title}</h3>
            {/* <p className="text-sm">{Feature[currentIndex].caption}</p> */}
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
          {Feature.map((_, index) => (
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

export default FeatureCarousel;