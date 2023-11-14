import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostCardWithImage: React.FC<Props> = ({ post }) => {
  return (
    <div id="featured-main" className="xl:flex-1">
      {/* Featured Main Section */}
      <div className="relative h-auto rounded-lg md:h-48">
        {/* Use the image from the featured post */}
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black rounded-xl opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-end text-secondary">
          <div className="bottom-0 p-5 text-left">
            <div className="mt-4 text-sm md:text-lg">
              {/* {post.categories
                .filter((category) => category.title === 'Featured')
                .map((category) => (
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
                ))} */}
              <h2 className="mt-4 text-xl font-bold">{post.title}</h2>
              <p className="text-sm font-light leading-8 text-left line-clamp-2">
                {/* <PortableText value={post.body} /> */}
                {/* {post.body[0].} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardWithImage;
