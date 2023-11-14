import icons from '@/src/util/icons';
import Image from 'next/image';

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex flex-row items-center">
      <Image
        src={icons.whiteLogo_png}
        width={150}
        height={150}
        alt="Logo"
        className="object-cover w-1/4"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
