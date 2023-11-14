'use client';
import { useState } from 'react';
import CarouselItem from './CarouselItem';

interface CarouselProps {
  items: {
    title: string;
    text: string;
    imageUrl: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <button
        className="absolute left-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 top-1/2 rounded-l-md focus:outline-none"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 top-1/2 rounded-r-md focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
