import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import AppText from '../../Atom/AppText';

type Props = {
  categories: Category[];
};

const CategoryList = async ({ categories }: Props) => {
  const categoryColors: Record<string, string> = {
    Featured: '#57c4ff31',
    Fashion: '#da85c731',
    Travel: '#ff795736',
    Coding: '#5e4fff31',
    Culture: '#ffb04f45',
  };
  return (
    <div>
      <AppText
        type="text"
        style={''}
        textStyle={
          'text-gray/90 font-bold text-2xl xl:text-4xl capitalize my-10'
        }
      >
        Popular Categories
      </AppText>
      <div className="flex flex-row flex-wrap justify-between gap-5 ">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.title}`}
            className={`flex xl:items-center gap-2.5 capitalize w-full 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[45%] h-16 xl:justify-center rounded-lg bg-${
              categoryColors[category.title]
            } dark:bg-slate-800`}
          >
            <Image
              src={urlForImage(category.image).url()}
              alt=""
              width={32}
              height={32}
              className="rounded-[50%] h-8 w-8"
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

{
  /* {data?.map((item) => (
	<Link
		href="/blog?cat=style"
		className={`${styles.category} ${styles[item.slug]}`}
		key={item._id}
	>
		{item.img && (
			<Image
				src={item.img}
				alt=""
				width={32}
				height={32}
				className={styles.image}
			/>
		)}
		{item.title}
	</Link>
))} */
}
