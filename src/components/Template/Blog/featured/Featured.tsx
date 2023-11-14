import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import AppText from '../../../Atom/AppText';

type Props = {
  featuredPost: Post[];
};

const Featured = ({ featuredPost }: Props) => {
  const sortedPosts = featuredPost.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
  const [featuredMain, ...restPosts] = sortedPosts;

  return (
    <div>
      <AppText
        type="text"
        style={''}
        textStyle={
          'text-gray/90 font-bold text-2xl xl:text-4xl capitalize my-10'
        }
      >
        Featured blog posts
      </AppText>
      <div className="grid grid-cols-1 gap-5 xl:flex-row">
        <div id="featured-main" className="col-span-2">
          {/* Featured Main Section */}
          <div className="relative h-64 mb-16 rounded-lg md:h-[400px]">
            {/* Use the image from the featured post */}
            <Image
              src={urlForImage(featuredMain.mainImage).url()}
              alt={featuredMain.title}
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black rounded-xl opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-end text-secondary">
              <div className="bottom-0 p-5 text-left">
                <div className="mt-4 text-sm md:text-lg">
                  {featuredMain.categories.map((category) => (
                    <span
                      key={category.id}
                      className={`p-2 text-sm font-semibold rounded-md  w-max ${
                        category.title === 'Featured'
                          ? 'bg-primary/20 text-secondary'
                          : 'bg-dark text-secondary'
                      }`}
                    >
                      {category.title}
                    </span>
                  ))}
                  <h2 className="mt-4 text-2xl font-bold">
                    {featuredMain.title}
                  </h2>
                  <p className="text-sm font-light leading-8 text-left line-clamp-2">
                    {/* <PortableText value={featuredMain.body} /> */}
                    {featuredMain.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-span-1 ">
          <div className="grid grid-cols-1 gap-5 xl:gap-4 xl:grid-rows-2">
            {restPosts.slice(0, 2).map((post) => (
              <PostCardWithImage post={post} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
