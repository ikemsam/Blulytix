'use client';
import Image from 'next/image';
import React from 'react';

interface PartnersCarouselProps {
  Logos: string[]; // URLs to partner logos
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ Logos }) => {
  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden ">
      <div className="flex flex-row items-baseline gap-10">
        {Logos.map((logo: string, index: number) => (
          <Image
            key={index}
            src={logo}
            alt={`Partner Logo ${index + 1}`}
            width={2000}
            height={2000}
            className="w-40 transition-transform lg:w-64 grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
