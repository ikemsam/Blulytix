'use client';
import React, { useState } from 'react';

interface UseCase {
  category: string;
  title: string;
  link: string;
  image: string;
  littleDescription: string;
}

interface UseCasesSectionProps {
  initialActiveIndex?: number; // Optional initial active index
  useCases: UseCase[];
}

const UseCasesSection: React.FC<UseCasesSectionProps> = ({
  initialActiveIndex = 0,
  useCases,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl md:text-4xl">Use Cases</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`p-4 border rounded-md ${
              index === activeIndex ? 'border-blue-500' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <img src={useCase.image} alt={useCase.title} className="mb-4" />
            <h3 className="mb-2 text-xl font-bold">{useCase.title}</h3>
            <p className="mb-4 text-base font-light leading-10 text-left list-none md:text-justify ">
              {useCase.littleDescription}
            </p>
            <a
              href={useCase.link}
              className="mt-2 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
