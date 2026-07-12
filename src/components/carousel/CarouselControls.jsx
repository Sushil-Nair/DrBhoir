import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from './CarouselContext';

export default function CarouselControls() {
  const { previousSlide, nextSlide } = useCarousel();

  return (
    <div className="absolute inset-0 flex items-center justify-between p-4">
      <button
        onClick={previousSlide}
        className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}