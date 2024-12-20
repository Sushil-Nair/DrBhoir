import { CarouselProvider } from './CarouselContext';
import CarouselImage from './CarouselImage';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';

export default function Carousel({ images, className = '' }) {
  return (
    <CarouselProvider images={images}>
      <div className={`relative ${className}`}>
        <CarouselImage />
        <CarouselControls />
        <CarouselIndicators />
      </div>
    </CarouselProvider>
  );
}