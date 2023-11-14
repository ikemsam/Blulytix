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