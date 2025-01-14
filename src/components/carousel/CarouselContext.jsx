import { createContext, useContext, useState, useEffect } from 'react';

const CarouselContext = createContext();

export function CarouselProvider({ children, images, autoSlideInterval = 2000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(prev => !prev);
  };

  const pauseAutoPlay = () => {
    setIsPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsPlaying(true);
  };

  // Auto-sliding effect
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPlaying, autoSlideInterval, images.length]);

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        images,
        nextSlide,
        previousSlide,
        goToSlide,
        isPlaying,
        toggleAutoPlay,
        pauseAutoPlay,
        resumeAutoPlay
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
}