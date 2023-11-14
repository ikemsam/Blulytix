import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

export const RichText = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full m-10 mx-auto h-96">
        <Image
          src={urlForImage(value).url()}
          alt="Blog Post Image"
          fill
          className="object-cover rounded-md"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 space-y-5 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 space-y-5 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold sm:text-4xl md:text-3xl lg:text-2xl xl:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-4xl font-bold sm:text-3xl md:text-2xl lg:text-xl xl:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-3xl font-bold sm:text-2xl md:text-xl lg:text-lg xl:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-2xl font-bold sm:text-xl md:text-lg lg:text-base xl:text-2xl">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="font-semibold text-gray-600">{children}</em>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      const rel = target === '_blank' ? 'noindex nofollow' : undefined;
      return (
        <a href={value?.href} target={target} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default RichText;
