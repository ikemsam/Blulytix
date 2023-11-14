import AppText from '../../Atom/AppText';
import CustomSideRoute from '../../Atom/CustomSideRoute';
import PostItem from '../PostCard/PostItem';

type Props = {
  recentPosts: Post[];
};

export const revalidate = 15;

const RecentPost = async ({ recentPosts }: Props) => {
  return (
    <div className="w-full">
      <AppText
        type="text"
        style={''}
        textStyle={
          'text-gray/90 font-bold text-2xl xl:text-4xl capitalize my-10'
        }
      >
        Recent Posts
      </AppText>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:grid-cols-4 place-content-start">
        {recentPosts.map((recentPost) => (
          <CustomSideRoute
            key={recentPost._id}
            route={`/blog/${recentPost.slug}`}
          >
            <PostItem ShowOverlay={true} Post={recentPost} />
          </CustomSideRoute>
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default RecentPost;
