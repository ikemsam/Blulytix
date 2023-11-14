'use client';

import icons from '@/src/util/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AppText from '../Atom/AppText';
import { Button } from '../Atom/Button';
import Divider from '../Atom/Divider';

interface ServicesComponentProps {
  services: Service[];
}

const getIconByTitle = (title: string) => {
  switch (title.toLowerCase()) {
    case 'education':
    case 'healthcare':
    case 'technology':
      return icons.apple_Icon;
    default:
      return null;
  }
};

const BluServices: React.FC<ServicesComponentProps> = ({ services }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(
    services[0]
  );
  const router = useRouter();

  const handleButtonClick = (title: string) => {
    router.push(`services/${title}`);
  };

  const handleServiceHover = (service: Service | null) => {
    setSelectedService(service);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Left side image section */}
      <div className="relative rounded-md lg:col-span-1">
        <Image
          src={selectedService?.image || icons.data_analysis_Icon}
          alt={selectedService?.title || 'Default Image'}
          className="w-full rounded-md h-96 "
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Right side service cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {services.map((service, index, array) => (
          <div
            key={index}
            onMouseEnter={() => handleServiceHover(service)}
            onMouseLeave={() => handleServiceHover(null)}
          >
            <div
              className={`relative bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl ${
                selectedService?.id === service.id ? 'ring-1 ring-primary' : ''
              } ${
                index === array.length - 1 ? 'xl:col-span-2' : ''
              } h-96 flex flex-col justify-evenly`}
            >
              {service.isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                  <p className="text-lg font-semibold text-white">
                    Coming Soon
                  </p>
                </div>
              )}

              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center p-2 rounded-md shadow-lg bg-primary">
                  <Image
                    src={service.icon}
                    width={18}
                    height={18}
                    alt={`${service.title}-service`}
                    className="w-full"
                  />
                </span>

                <AppText
                  type="subheader"
                  style="ml-2 text-dark dark:text-white "
                >
                  {service.title}
                </AppText>
              </div>

              <Divider style="border-t-primary w-full" />

              <p className="mb-2 text-sm font-light leading-6 text-dark dark:text-secondary ">
                {service.description}
              </p>
              <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
              <ul className="text-xs leading-8 list-disc list-inside text-gray">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button
                disabled={service.isLocked}
                onClick={() => handleButtonClick(service.title)}
                customBtnStyle="border-0 text-sm font-medium w-full md:w-fit py-3 bg-primary text-secondary mt-4"
              >
                View All Post
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BluServices;
