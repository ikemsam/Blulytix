'use client';

import icons from '@/src/util/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {
  const currentRoute = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Services',
      url: '/services',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
  ];

  const menuClass = isMenuOpen
    ? `transform translate-y-0 transition-transform duration-500 delay-200 bg-[url(/pattern_bg.svg)] bg-cover bg-no-repeat bg-center`
    : ' hidden';

  return (
    <nav
      className={` right-0 w-full mx-auto md:mx-auto z-20 top-0 left-0  transition-all duration-500 ease-in-out sm:flex sm:justify-between  items-center`}
    >
      <div className="container ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto md:flex-row md:py-10">
          <div className="flex flex-row items-center justify-between w-full lg:flex-none md:w-auto lg:w-auto">
            <Link href="/">
              <Image
                src={icons.darkLogo_Icon}
                width={150}
                height={150}
                alt="Logo"
                className="w-2/3 md:w-3/4 2xl:w-4/5 dark:hidden"
              />
              <Image
                src={icons.whiteLogo_png}
                width={150}
                height={150}
                alt="Logo"
                className="hidden w-2/3 md:w-3/4 2xl:w-4/5 dark:block"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 sm:hidden focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-6">
                <span
                  className={`transform transition w-full h-px bg-dark dark:bg-secondary absolute ${
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                  }`}
                ></span>

                <span
                  className={`transform transition w-full h-px bg-dark dark:bg-secondary absolute ${
                    isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                  }`}
                ></span>

                <span
                  className={`transform transition w-full h-px bg-dark dark:bg-secondary absolute ${
                    isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`${menuClass} md:static fixed top-0 right-0 bottom-0 left-0  h-[calc(100vh - 86.5px)] md:h-auto mt-20 md:mt-0 bg-secondary z-10 dark:bg-dark  mx-auto md:mx-0 sm:bg-transparent w-full md:w-auto sm:flex md:gap-10`}
          >
            <div
              id="menu"
              className="px-6 mt-8 md:flex md:items-center md:gap-5 md:mt-0 md:px-0"
            >
              {links.map((link) => (
                <div key={link.id}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link
                      href={link.url}
                      className={`block capitalize transition duration-200 md:text-sm text-dark dark:text-secondary hover:text-primary dark:hover:text-secondary my-5 md:my-0 ${
                        currentRoute === link.url
                          ? 'border-b-2 border-primary text-primary font-bold'
                          : 'hover:border-b-2 hover:border-primary'
                      }`}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {link.id === 1
                        ? 'home'
                        : link.id === 2
                        ? 'blog'
                        : 'services'}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
