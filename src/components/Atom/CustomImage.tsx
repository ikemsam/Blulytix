import Image from 'next/image';
import React from 'react';

interface CustomImageProps {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  imageStyle: string;
  className?: string;
  placeholder?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  imageStyle,
  className,
  placeholder,
}) => {
  const combinedClasses = `relative ${className || ''}`;

  return (
    <div className={combinedClasses}>
      <Image src={src} alt={alt} className={imageStyle} quality={80} />
    </div>
  );
};

export default CustomImage;
