import React from 'react';

import Image from 'next/image';

interface Social {
  name: string;
  icon: string; // Assuming 'icon' is a string representing the icon source
  link: string;
}

interface SocialsProps {
  socials: Social[];
}

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <div className="flex flex-row items-center gap-8 xl:mt-4 ">
      {socials.map((social, index) => (
        <div
          key={index}
          className="p-2 transition-transform rounded-md grayscale hover:grayscale-0 hover:bg-white"
        >
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.icon}
              width={2000}
              height={2000}
              alt={`${social.name}-logo`}
              className="w-6"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
