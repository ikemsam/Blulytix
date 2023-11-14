import { shortenText } from '@/src/util/helper';
import Image from 'next/image';
import React from 'react';
import AppText from '../../Atom/AppText';
import { Button } from '../../Atom/Button';

interface ICardProps {
  image: string;
  categories: string;
  tags?: string[];
  date: string;
  author: string;
  title: string;
  content: string;
  isFeatured?: boolean;
  ShowOverlay: boolean;
  readMore?: () => void;
  imagePosition?: 'top' | 'right' | 'bottom' | 'left';
}

const Card: React.FC<ICardProps> = ({
  image,
  categories,
  tags,
  date,
  author,
  title,
  content,
  isFeatured,
  readMore,
  ShowOverlay,
  imagePosition = 'top',
}) => {
  const cardImage = (
    <div>
      <Image
        src={image}
        alt="Menu"
        width={500}
        height={250}
        className={`mx-auto ${
          imagePosition === 'left' || imagePosition === 'right'
            ? 'xl:h-[250px] h-[210px]'
            : 'w-full flex lg:h-[250px] lg:w-w-[100px] xl:w-full md:w-full md:h-max-[250px] sm:h-max-[200px] 2xl:h-[250px]  h-auto'
        }`}
      />

      {ShowOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      )}
    </div>
  );

  const cardDescription = (
    <div
      className={`grid grid-cols-1  border${
        imagePosition === 'left' || imagePosition === 'right'
          ? 'text-sm gap-3'
          : 'gap-2'
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <AppText
          type="text"
          style={'m-0 p-0 mb-0'}
          textStyle={'text-primary font-medium text-xs mb-0 p-0'}
        >
          {categories}
        </AppText>
      </div>
      <div>
        <span
          className={`font-bold  text-[#626262] lg:text-base ${
            imagePosition === 'left' || imagePosition === 'right'
              ? 'text-sm leading-normal'
              : ' text-xl'
          }`}
        >
          {shortenText(title, 25)}
        </span>
        <AppText
          type="text"
          style={''}
          textStyle={'text-gray font-medium text-xs'}
        >
          {author} | {date}
        </AppText>
      </div>
      <div
        className={`text-textTitleDark  leading-8 font-bold ${
          imagePosition === 'left' || imagePosition === 'right'
            ? 'text-xs xl:text-[24px]'
            : ' text-[26px]'
        }`}
      >
        {imagePosition === 'left' || imagePosition === 'right' ? (
          <AppText
            type="text"
            style={''}
            textStyle={
              'tracking-wider leading-normal xl:leading-8 font-light text-left text-xs xl:text-sm'
            }
          >
            {shortenText(content, 80)}
          </AppText>
        ) : (
          <AppText
            type="text"
            style={''}
            textStyle={
              'tracking-wider leading-6 xl:leading-8 font-light text-left text-xs xl:text-sm'
            }
          >
            {isFeatured ? shortenText(content, 400) : shortenText(content, 100)}
          </AppText>
        )}
      </div>
    </div>
  );

  const cardCTA = (
    <div className="flex items-center justify-between mt-4">
      <Button
        customBtnStyle="border-0 text-sm font-medium w-full py-3 bg-primary text-secondary"
        onClick={readMore}
      >
        Read More
      </Button>
    </div>
  );

  return (
    <div
      className={`bg-white dark:bg-slate-800 ring-slate-900/5 ${
        imagePosition === 'left' || imagePosition === 'right'
          ? 'w-full xl:w-full'
          : 'xl:w-full'
      } relative h-auto rounded-md `}
    >
      {imagePosition === 'top' && (
        <div className="place-items-center">
          {cardImage}
          <div className="px-4 py-8">{cardDescription}</div>
        </div>
      )}
      {imagePosition === 'bottom' && (
        <>
          <div className="p-4">
            {cardDescription}
            {cardCTA}
          </div>
          {cardImage}
        </>
      )}
      {imagePosition === 'left' && (
        <div className="flex flex-col items-start gap-4">
          <div className="grid grid-cols-2 gap-5 place-items-center">
            {cardImage}
            <div className="grid max-h-full grid-cols-1 gap-4 py-4">
              {cardDescription}
            </div>
          </div>
        </div>
      )}
      {imagePosition === 'right' && (
        <div className="flex flex-col items-start gap-6">
          <div className="grid grid-cols-2 w-fit place-items-center">
            <div className="px-4 py-2">
              <div className="grid grid-cols-1 gap-4 max-h-max">
                {cardDescription}
                {cardCTA}
              </div>
            </div>
            {cardImage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
