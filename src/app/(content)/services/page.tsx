import AppText from '@/src/components/Atom/AppText';
import BookSessionBtn from '@/src/components/Atom/BookSessionBtn';
import Divider from '@/src/components/Atom/Divider';
import BluServices from '@/src/components/Molecules/Services';
import { featuresBenefit, sampleData } from '@/src/util/data';
import { Metadata } from 'next';
import Image from 'next/image';
import Wrapper from '../wrapper';
export const metadata: Metadata = {
  title: 'Services - Blulytix',
  description: 'Empowering Your Business with AI Automation',
};

const ServicePost = async () => {
  return (
    <Wrapper>
      <div className="">
        <div className="relative h-64 mb-16 md:h-96">
          <Image
            src="/blulytix-services.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-secondary">
            <h1 className="text-xl font-bold leading-relaxed text-center md:text-3xl lg:text-5xl ">
              Services, Features and Benefits
            </h1>
          </div>
        </div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Our Services
        </AppText>
        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case xl:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
            Customized AI Solutions Tailored to Boost Your Business in Poland
            and Beyond - Unleash the Future of Success Today
          </p>
        </blockquote>
        <div className="my-16">
          <BluServices services={sampleData} />
        </div>
        <div>
          <div className="mb-6">
            <AppText
              type="text"
              style={''}
              textStyle={'text-primary font-bold'}
            >
              Key Features and Benefits
            </AppText>
            <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
              <div className="flex-col items-start justify-between block md:items-center md:flex md:flex-row">
                <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case md:w-2/4 lg:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
                  Unlock the full potential of your swimming pool business with
                  our comprehensive digital marketing solutions. Here’s how we
                  can help you
                </p>
                <BookSessionBtn />
              </div>
            </blockquote>
          </div>

          <div className="grid max-w-full gap-10 lg:gap-20 xl:gap-20 lg:py-0 place-items-center">
            {featuresBenefit.map((features) => (
              <div
                className={`grid items-start grid-cols-1 gap-10 lg:grid-cols-2 place-content-center ${
                  features.id % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
                key={features.id}
              >
                <Image
                  src={features.icon}
                  width={2000}
                  height={2000}
                  alt={`${features.title}-blulytix-service`}
                  className="object-cover w-fit "
                />

                <div className="mr-auto place-self-start lg:col-span-1">
                  <div className="my-8">
                    <div>
                      <h1 className="mb-4 text-2xl font-bold md:text-4xl">
                        {features.title}
                      </h1>
                      <Divider style="border-t-primary w-full" />
                      <p className="mb-4 font-light leading-10 tracking-wider text-justify">
                        {features.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicePost;
