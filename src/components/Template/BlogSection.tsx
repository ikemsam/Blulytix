import { getAllPost } from '@/sanity/sanity-utils';
import AppText from '../Atom/AppText';
import { Button } from '../Atom/Button';
import CustomSideRoute from '../Atom/CustomSideRoute';
import PostItem from '../Molecules/PostCard/PostItem';

const BlogSection = async () => {
  const post = await getAllPost();
  return (
    <div className="w-full mx-auto">
      <div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Latest Writings
        </AppText>
        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <div className="flex-col items-start justify-between block md:flex md:flex-row md:items-center">
            <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case md:w-2/4 lg:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
              Explore Our Insights, Expertise, and Innovations in the World of
              Artificial Intelligence and Automation
            </p>
            <Button customBtnStyle="border-0 text-sm font-medium w-full md:w-fit py-3 bg-primary text-secondary">
              View All Post
            </Button>
          </div>
        </blockquote>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:grid-cols-4 place-content-start">
        {post.map((recentPost) => (
          <CustomSideRoute
            key={recentPost._id}
            route={`/blog/${recentPost.slug}`}
          >
            <PostItem ShowOverlay={true} Post={recentPost} />
          </CustomSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
