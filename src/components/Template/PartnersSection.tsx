import { ourPartners } from '@/src/util/data';
import AppText from '../Atom/AppText';
import PartnersCarousel from '../Molecules/PartnersCarousel';

const PartnersSection = () => {
  return (
    <div className="max-auto ">
      <div>
        <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
          Our Partners
        </AppText>
        <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
          <p className="w-full text-sm italic font-light leading-8 text-gray-900 normal-case xl:w-2/3 xl:leading-10 sm:text-lg md:text-md dark:text-secondary text-dark md:mb-4 ">
            Empowering Success Together: Where Innovation Meets Collaboration
            with Our Trusted Partners.
          </p>
        </blockquote>
      </div>
      <PartnersCarousel Logos={ourPartners} />
    </div>
  );
};

export default PartnersSection;
