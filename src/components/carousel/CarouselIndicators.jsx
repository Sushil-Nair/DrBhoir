import { useCarousel } from './CarouselContext';

export default function CarouselIndicators() {
  const { currentIndex, goToSlide, images } = useCarousel();

  return (
    <div className="absolute bottom-4 left-0 right-0">
      <div className="flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentIndex === index
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}