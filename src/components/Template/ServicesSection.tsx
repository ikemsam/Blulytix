'use client';
import { sampleData } from '@/src/util/data';
import AppText from '../Atom/AppText';
import BluServices from '../Molecules/Services';

const ServicesSection = () => {
  return (
    <div className="mx-auto">
      <div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Our Services
        </AppText>
        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case lg:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
            Customized AI Solutions Tailored to Boost Your Business in Poland
            and Beyond - Unleash the Future of Success Today
          </p>
        </blockquote>
      </div>

      <BluServices services={sampleData} />
    </div>
  );
};

export default ServicesSection;
