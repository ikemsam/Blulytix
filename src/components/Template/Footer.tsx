
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Molecules/Socials';
import { socialsData } from '@/src/util/data';
import icons from '@/src/util/icons';

const Footer = () => {
  const footerMenuItems = [
    {
      id: 1,
      titleImage: icons.whiteLogo_png,
      subMenu: [
        {
          pathTitle: 'GDYNIA POLAND',
          linkImage: icons.location_active_Icon,
          type: 'info',
        },
        {
          pathTitle: 'info@blulytix.ai',
          linkImage: icons.email_active_Icon,
          type: 'info',
        },
        {
          pathTitle: '+48 669 256 146',
          linkImage: icons.phone_active_Icon,
          type: 'info',
        },
      ],
    },
  ];

  const footerLinks = {
    id: 2,
    title: 'Pages',
    subMenu: [
      { path: '#', pathTitle: 'Home', type: 'link' },
      { path: '#', pathTitle: 'About', type: 'link' },
      { path: '#', pathTitle: 'Services', type: 'link' },
      { path: '#', pathTitle: 'Blog', type: 'link' },
    ],
  };

  const footerCompanyInfo = (
    <>
      {footerMenuItems.map((item: any) => (
        <div key={item.id} className="w-full mb-4 md:mb-0 ">
          {item.titleImage ? (
            <div className="">
              <Link href="/">
                <Image
                  src={icons.darkLogo_Icon}
                  width={2000}
                  height={2000}
                  alt="Logo"
                  className="w-[150px] md:w-32 xl:w-64 2xl:w-[150px] lg:w-48 dark:hidden xl:-ml-4 xl:mb-5"
                />
                <Image
                  src={icons.whiteLogo_png}
                  width={150}
                  height={150}
                  alt="Logo"
                  className="hidden w-[150px] md:w-32 lg:w-48 2xl:w-[150px] dark:block"
                />
              </Link>
              <div className="flex flex-row flex-wrap items-center gap-4 my-5 ml-2 xl:my-0 lg:mx-0 xl:ml-0">
                <div
                  className={`text-sm md:text-base dark:text-secondary text-dark font-semibold my-4 xl:my-0`}
                >
                  NIP: <span className="font-normal">9581732895</span>
                </div>
                <p
                  className={`text-sm md:text-base dark:text-secondary text-dark font-semibold my-4 `}
                >
                  REGON: <span className="font-normal">524939830</span>
                </p>
              </div>
            </div>
          ) : (
            <h3 className="flex items-center h-10 mb-5 text-xl font-semibold">
              {item.title}
            </h3>
          )}

          <div className="flex flex-row flex-wrap items-center gap-4 ml-2 md:gap-2 md:items-start md:flex-col xl:ml-0 lg:mx-0 xl:my-2">
            {item.subMenu.map((subItem: any, index: any) =>
              subItem.type === 'link' ? (
                <div className="flex flex-row">
                  <div className="flex flex-row py-4 lg:py-0" key={index}>
                    <Link
                      href={subItem.path}
                      className={`text-sm md:text-base dark:text-secondary text-dark font-light `}
                    >
                      {subItem.pathTitle}
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex flex-row flex-wrap items-center justify-start py-3 md:py-1"
                >
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={subItem.linkImage}
                      alt={subItem.pathTitle}
                      width={18}
                      height={18}
                      className=""
                    />
                    <p
                      className={`text-sm md:text-base dark:text-secondary text-dark`}
                    >
                      {subItem.pathTitle}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );

  const footerMenu = (
    <>
      <h3 className="flex items-center h-10 mb-5 text-xl font-semibold">
        {footerLinks.title}
      </h3>
      <div className="grid grid-cols-5 gap-4 ">
        {footerLinks.subMenu.map((subItem: any, index: any) => (
          <Link
            key={index}
            href={subItem.path}
            className={` dark:text-secondary text-dark font-light text-sm`}
          >
            {subItem.pathTitle}
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <footer
      className={`dark:bg-dark xl:mt-20 mt-10  dark:text-secondary text-darkmt-10 py-10 border-t-[0.5px] border-secondary xl:pt-20`}
    >
      <div className="container">
        <div className="grid grid-cols-1 place-items-center md:place-items-start md:mb-5">
          {footerCompanyInfo}
        </div>
        <Socials socials={socialsData} />
        <div className="mt-4 border-t-[0.4px] dark:border-[#F5F5F5]/20 border-gray pt-8 text-center">
          <p className={`font-extralight`}>©2023. All Rights Reserved️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
