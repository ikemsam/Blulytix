import { certificates } from '@/src/util/data';
import Image from 'next/image';
import AppText from '../Atom/AppText';
import Divider from '../Atom/Divider';

const CertificationSection = () => {
  return (
    <div>
      <div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Our Achievement
        </AppText>

        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case xl:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
            Elevate Your Business with Our Certificates in Cutting-Edge AI
            Technologies
          </p>
        </blockquote>
      </div>
      {/* grid grid-cols-1 xl:grid-cols-4 */}
      <div className="grid grid-cols-1 gap-4 py-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:py-8 md:py-10">
        {certificates.map((certificate) => (
          <div
            key={certificate.text}
            className="w-full p-4 px-4 py-6 bg-white rounded-lg dark:bg-slate-800 ring-1 ring-slate-900/5 sm:p-6 lg:p-8 xl:p-6"
          >
            <AppText
              type="text"
              textStyle="text-sm font-medium sm:text-base md:text-lg lg:text-base xl:text-lg mb-0"
            >
              {certificate.text}
            </AppText>
            <Divider style="border-t-primary w-[15px] my-1" />
            <div className="relative mt-6 sm:mt-8">
              <Image
                src={certificate.imageUrl}
                alt={`Certificate ${certificate.title}`}
                width={150}
                height={150}
                className="w-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;
