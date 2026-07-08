import { useCarousel } from './CarouselContext';

export default function CarouselImage() {
  const { currentIndex, images } = useCarousel();

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-out ${
            index === currentIndex ? 'translate-x-0' : 
            index < currentIndex ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}