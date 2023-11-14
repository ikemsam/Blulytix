import {
  getAllCategory,
  getAllFeaturePost,
  getAllPost,
} from '@/sanity/sanity-utils';
import CategoryList from '@/src/components/Molecules/Blog/CategoryList';
import RecentPost from '@/src/components/Molecules/Blog/RecentPost';
import Featured from '@/src/components/Template/Blog/featured/Featured';
import { Metadata } from 'next';
import Wrapper from '../wrapper';

export const metadata: Metadata = {
  title: 'Blog - Blulytix',
  description: 'Empowering Your Business with AI Automation',
};

export const revalidate = 15;

const Blog = async () => {
  const post = await getAllPost();
  const featuredPost = await getAllFeaturePost();
  const category = await getAllCategory();

  return (
    <Wrapper>
      <div>
        <Featured featuredPost={featuredPost} />
        <CategoryList categories={category} />
        <RecentPost recentPosts={post} />
      </div>
    </Wrapper>
  );
};

export default Blog;
