import Footer from '@/src/components/Template/Footer';
import Navbar from '@/src/components/Template/Navbar';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '../../globals.css';
import Main from './main';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blulytix',
  description: 'Empowering Your Business with AI Automation',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="DC.title" content="Blulytix" />
<meta name="geo.region" content="PL" />
<meta name="geo.placename" content="Gdynia" />
<meta name="geo.position" content="54.501178;18.434342" />
<meta name="ICBM" content="54.501178, 18.434342" />

      </head>
      <body
        className={`${raleway.className} text-dark dark:text-secondary bg-[#FAFAFA] dark:bg-dark`}
      >
        <Main>
          <Navbar />
          <div id="__next" className="container">
            {children}
          </div>
          <Footer />
        </Main>
      </body>
    </html>
  );
}
