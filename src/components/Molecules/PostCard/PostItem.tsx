'use client';
import { urlForImage } from '@/sanity/lib/image';
import { shortenText } from '@/src/util/helper';
import Image from 'next/image';
import React from 'react';
import AppText from '../../Atom/AppText';

interface PostItemProps {
  isListings?: boolean;
  ShowOverlay: boolean;
  Post: Post;
}

const PostItem: React.FC<PostItemProps> = ({
  isListings,
  ShowOverlay,
  Post,
}) => {
  const cardImage = (
    <div id="featured-main" className="col-span-2">
      {/* Featured Main Section */}
      <div className="relative h-64 rounded-md md:h-56">
        <Image
          src={urlForImage(Post.mainImage).url()}
          alt={Post.title}
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black rounded-md opacity-75"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-end text-secondary">
          <div className="bottom-0 p-5 text-left">
            <div className="mt-4 text-sm md:text-lg">
              {Post.categories.slice(0, 2).map((category) => (
                <span
                  key={category._id}
                  className={`p-2 text-sm font-semibold rounded-md mx-2  w-max ${
                    category.title === 'Featured'
                      ? 'bg-primary/20 text-secondary'
                      : 'bg-pitch/20 text-secondary px-2'
                  }`}
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const cardDescription = (
    <div className="grid grid-cols-1 gap-5 py-5 ">
      <span className="font-bold lg:text-base">
        {shortenText(Post.title, 40)}
      </span>
      <AppText
        type="text"
        style={''}
        textStyle={'text-gray -mt-4  font-medium text-xs'}
      >
        {Post.author.name} |{' '}
        {new Date(Post._createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </AppText>
      <div className="text-textTitleDark text-[26px] leading-8 font-bold">
        <AppText
          type="text"
          style={''}
          textStyle={
            'tracking-wider leading-8 font-light text-left text-sm -mt-4 line-clamp-2'
          }
        >
          {Post.title}
        </AppText>
      </div>
    </div>
  );

  return (
    <>
      {cardImage}
      <div className="">{cardDescription}</div>
    </>
  );
};

export default PostItem;
