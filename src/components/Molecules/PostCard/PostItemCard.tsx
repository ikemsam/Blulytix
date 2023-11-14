import Image from 'next/image';

interface ItemCardCardProps {
  image: string;
  tag: string;
  textColor: string;
  ShowOverlay: boolean;
  addToCart?: () => void;
  fontWidth: string;
}

const LinkCard: React.FC<ItemCardCardProps> = ({
  image,
  tag,
  ShowOverlay,
  textColor,
  fontWidth,
}) => {
  const cardImage = (
    <div className={`relative`}>
      <Image
        src={image}
        width={400}
        height={400}
        alt={'Post Image'}
        className="w-20 lg:w-w-[100px] xl:w-full h-auto rounded-t-lg mx-auto"
      />
      {ShowOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      )}
      <div
        className={`ml-4 ${fontWidth} text-4xl ${
          textColor ? textColor : 'text-white'
        } absolute top-4 font-[500] rounded-md left-0 p-2 rounded-tr-md rounded-bl-md`}
      >
        {tag.toUpperCase()}
      </div>
    </div>
  );

  return (
    <div className={`max-fit  mx-auto relative bg-accentWhite rounded-md`}>
      {cardImage}
    </div>
  );
};

export default LinkCard;
