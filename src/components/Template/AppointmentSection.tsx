import icons from '@/src/util/icons';
import Image from 'next/image';
import AppText from '../Atom/AppText';
import BookSessionBtn from '../Atom/BookSessionBtn';

const AppointementSection = () => {
  return (
    <div>
      <div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Book a session and elevate Your Business with AI Excellence
        </AppText>
        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <div className="flex-col items-start justify-between block md:items-center md:flex md:flex-row">
            <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case md:w-2/4 lg:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
              BluLytix: Your partner for AI-powered, automation excellence.
              Elevate efficiency, drive growth, and redefine success. Discover a
              brighter future with BluLytix
            </p>
            <BookSessionBtn />
          </div>
        </blockquote>
      </div>

      <div className="grid max-w-full lg:gap-20 xl:gap-20 lg:py-0 lg:grid-cols-2 place-items-center">
        <div className="flex flex-row w-full md:justify-start lg:justify-center ">
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
        <div className="mr-auto place-self-start lg:col-span-1">
          <div className="my-8">
            <div>
              <p className="mb-4 font-light leading-10 tracking-wider text-justify">
                A digital marketing agency provides a comprehensive suite of
                services to help businesses thrive in the digital landscape.
                From SEO to social media marketing and web development, these
                agencies use a multifaceted approach to boost online visibility,
                engage audiences, and drive results. Whether you’re a small
                business or a large corporation, partnering with a digital
                marketing agency can give you the edge you need to succeed in
                the competitive online world. Visit us at Blulytix to get the
                best digital marketing services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointementSection;
