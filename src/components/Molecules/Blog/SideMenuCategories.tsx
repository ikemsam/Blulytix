import Link from 'next/link';

const SideMenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-8 mb-14">
      <Link
        href="/blog?cat=style"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href="/blog"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#da85c731]"
      >
        Fashion
      </Link>
      <Link
        href="/blog"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#7fb88133]"
      >
        Food
      </Link>
      <Link
        href="/blog"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#ff795736]"
      >
        Travel
      </Link>
      <Link
        href="/blog"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#ffb04f45]"
      >
        Culture
      </Link>
      <Link
        href="/blog"
        className="py-2 px-4 rounded-lg
      text-sm bg-[#5e4fff31]"
      >
        Coding
      </Link>
    </div>
  );
};

export default SideMenuCategories;
