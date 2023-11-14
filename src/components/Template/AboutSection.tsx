'use client';
import icons from '@/src/util/icons';
import Image from 'next/image';
import Link from 'next/link';
import AppText from '../Atom/AppText';

const AboutSection = () => {
  // const router = useRouter();

  // const handleButtonClick = (title: string) => {
  //   router.push(`services`);
  // };

  return (
    <div>
      <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
        About Us
      </AppText>
      <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
        <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case xl:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
          Blulytix: Your Partner for AI-Powered Automation Excellence Elevate
          Efficiency, Drive Growth, and Redefine Success Discover a Brighter
          Future with Blulytix
        </p>
      </blockquote>
      <div className="grid max-w-full lg:gap-10 xl:gap-20 lg:py-0 lg:grid-cols-2 place-items-center">
        <div className="mr-auto place-self-start lg:col-span-1">
          <div className="my-8">
            <p className="mb-4 text-base font-light leading-10 tracking-wider text-justify">
              At Blulytix, we are passionate about harnessing the power of data
              to drive growth, innovation, and efficiency for businesses of all
              sizes. Founded on the belief that data is the key to unlocking
              undeveloped capacity, we have made it our mission to provide
              cutting-edge SEO solutions for digital marketing that empower
              organizations to make informed decisions and stay ahead in today’s
              competitive landscape.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start">
            <p className="items-center justify-center hidden p-3 mr-3 text-sm font-medium text-center rounded-lg md:inline-flex md:p-3 md:text-base text-dark dark:text-secondary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get to know more on
              <svg
                className="w-5 h-5 ml-2 -mr-1 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <Link
              href={'/services'}
              className="border-0 rounded-md
              px-4 text-sm font-medium w-full md:w-fit py-3 bg-primary text-secondary"
            >
              Our Features and Benefits
            </Link>
          </div>
        </div>
        <div className="flex-row justify-end hidden w-full -mt-32 lg:flex ">
          <Image
            src={icons.darkLogo_Icon}
            width={2000}
            height={2000}
            alt="Logo"
            className="w-full md:w-1/2 lg:w-full dark:hidden"
          />
          <Image
            src={icons.whiteLogo_png}
            width={400}
            height={400}
            alt="Logo"
            className="hidden lg:w-full dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
