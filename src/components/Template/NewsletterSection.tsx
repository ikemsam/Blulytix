import Image from 'next/image';
import AppText from '../Atom/AppText';

const NewsLetterSection = () => {
  return (
    <div className="mx-auto">
      <AppText type="text" style={''} textStyle={'text-primary font-bold'}>
        Join Our Newsletter
      </AppText>
      <blockquote className="p-4 my-4 bg-white border-l-4 border-primary dark:bg-dark dark:border-slate-300 ">
        <p className="text-base italic font-light leading-8 text-gray-900 xl:leading-10 sm:text-lg md:text-xl dark:text-secondary text-dark">
          Stay Ahead of the Tech Curve with Our Exclusive AI Insights{' '}
        </p>
      </blockquote>
      <div className="grid justify-center grid-cols-1 gap-10 mt-10 lg:grid-cols-2 xl:grid-cols-2 lg:place-items-center">
        <div>
          <AppText
            type="text"
            style="tracking-wider leading-8 font-light text-justify mb-4 text-sm"
            textStyle={
              'tracking-wider leading-8 font-light text-justify mb-4 text-sm'
            }
          >
            Stay Ahead in the World of Artificial Intelligence. Join our
            newsletter to receive cutting-edge insights, expert tips, and
            industry updates. Don't miss out on the AI revolution!
          </AppText>
          <AppText
            type="text"
            style="hidden xl:block"
            textStyle={
              'tracking-wider leading-8 font-light text-justify mb-4 text-sm'
            }
          >
            Join our community of AI enthusiasts, business leaders, and tech
            innovators. Get the latest AI trends delivered to your inbox. Be a
            part of the conversation that shapes the future. Subscribe today and
            embark on a journey of innovation, where AI transforms businesses
            and empowers your success. Your inbox is about to become the gateway
            to AI excellence. Join us on this exciting path to discover the
            limitless possibilities of automation and intelligence.
          </AppText>
          <form className="flex w-full mt-5">
            <input
              type="email"
              className="w-full px-4 py-4 bg-transparent border rounded-l-lg focus:outline-none"
              placeholder="Enter Your Email Address"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-r-lg bg-primary hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
        <Image
          src="/news-letter.jpg"
          width={150}
          height={150}
          alt="News-letter"
          className="hidden w-full col-span-1 rounded-md lg:block"
        />
      </div>
    </div>
  );
};

export default NewsLetterSection;
