// components/CarouselItem.tsx
import React from 'react';

interface CarouselItemProps {
  item: {
    title: string;
    text: string;
    imageUrl: string;
  };
  isActive: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, isActive }) => {
  return (
    <div
      className={`flex-shrink-0 w-full h-64 p-4 transition-opacity ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
