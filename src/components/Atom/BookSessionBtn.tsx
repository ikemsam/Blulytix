import Link from 'next/link';

const BookSessionBtn = () => {
  return (
    <div>
      <Link
        href={'https://calendly.com/blulytix/15min'}
        className="border-0 text-sm font-medium w-full xl:w-fit py-3 bg-primary text-secondary rounded-md px-4"
      >
        Schedule A Free Strategy Session{' '}
      </Link>
    </div>
  );
};

export default BookSessionBtn;
