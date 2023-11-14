import Image from 'next/image';
import Link from 'next/link';

interface ISideMenuPosts {
  withImage: boolean;
}

const SideMenuPosts = ({ withImage }: ISideMenuPosts) => {
  return (
    <div className="flex flex-wrap gap-5 mt-8 mb-14">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <Image
            src="/blog/3.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-[50%] h-16 w-16 flex-1 aspect-square border-[3px] object-cover border-[lightgray]"
          />
        )}
        <div className="flex flex-col gap-1 flex-4">
          <span className="py-1 px-2 text-xs text-white w-max rounded-md bg-[#ff7857] ">
            Travel
          </span>
          <h3 className="text-base font-semibold text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-gray">John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <Image
            src="/blog/5.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-[50%] h-16 w-16 flex-1 aspect-square border-[3px] object-cover border-[lightgray]"
          />
        )}
        <div className="flex flex-col gap-1 flex-4">
          <span className="py-1 px-2 text-xs text-white w-max rounded-md bg-[#ffb14f]">
            Culture
          </span>
          <h3 className="text-base font-semibold text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-gray">John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <Image
            src="/blog/4.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-[50%] h-16 w-16 flex-1 aspect-square border-[3px] object-cover border-[lightgray]"
          />
        )}
        <div className="flex flex-col gap-1 flex-4">
          <span className="py-1 px-2 text-xs text-white w-max rounded-md bg-[#7fb881]">
            Food
          </span>
          <h3 className="text-base font-semibold text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-gray">John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <Image
            src="/blog/1.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-[50%] h-16 w-16 flex-1 aspect-square border-[3px] object-cover border-[lightgray]"
          />
        )}
        <div className="flex flex-col gap-1 flex-4">
          <span className="py-1 px-2 text-xs text-white w-max rounded-md bg-[#ff7887]">
            Fashion
          </span>
          <h3 className="text-base font-semibold text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-gray">John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <Image
            src="/blog/3.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-[50%] h-16 w-16 flex-1 aspect-square border-[3px] object-cover border-[lightgray]"
          />
        )}
        <div className="flex flex-col gap-1 flex-4">
          <span className="py-1 px-2 text-xs text-white w-max rounded-md bg-[#775aec]">
            Coding
          </span>
          <h3 className="text-base font-semibold text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-gray">John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideMenuPosts;
