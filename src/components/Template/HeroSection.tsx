import styles from '../../styles/particle.module.scss';
import AppText from '../Atom/AppText';
import BookSessionBtn from '../Atom/BookSessionBtn';
const HeroSection = () => {
  const totalParticles = 400;
  return (
    <div className="my-10 lg:my-20">
      <div className="grid max-w-full lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <AppText
            type="text"
            style={''}
            textStyle={'text-primary font-light mb-2 md:mb-10'}
          >
            WELCOME TO BLULYTIX
          </AppText>
          <h1 className="w-full mb-1 text-4xl font-extrabold leading-relaxed tracking-wide text-left md:mb-4 md:max-w-2xl md:leading-normal md:w-2/3 lg:w-3/4 2xl:w-4/5 lg:text-4xl lg:leading-normal xl:leading-tight md:text-5xl xl:text-6xl text-primary">
            Empowering Your Business with AI Automation
          </h1>

          <p className="w-full py-5 mb-6 font-light text-left md:max-w-2xl xl:pt-0 md:text-left text-dark lg:mb-8 md:leading-8 md:text-lg lg:text-base dark:text-secondary ">
            Experience the Future of Efficiency and Innovation Through
            AI-Powered Automation Solutions.
          </p>

          {/* Particle animation (visible on mobile only) */}
          <div className="md:hidden">
            <div className={styles.wrap}>
              {[...Array(totalParticles)].map((_, index) => (
                <div key={index} className={styles.c}></div>
              ))}
            </div>
          </div>

          <div className="flex-row justify-start block md:flex md:items-center md:justify-start">
            <p className="items-center justify-center hidden p-3 mr-3 text-sm font-medium text-center rounded-lg md:inline-flex md:p-3 md:text-base text-dark dark:text-secondary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started by
              <svg
                className="w-5 h-5 ml-2 -mr-1"
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
            <BookSessionBtn />
          </div>
        </div>

        {/* Particle animation (visible on large screens) */}
        <div className="top-0 left-0 hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className={styles.wrap}>
            {[...Array(totalParticles)].map((_, index) => (
              <div key={index} className={styles.c}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
