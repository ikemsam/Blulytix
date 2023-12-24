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

        <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blulytix",
  "image": "https://blulytix.ai/_next/image?url=%2Fdata-analysis.png&w=1920&q=75",
  "@id": "",
  "url": "https://blulytix.ai/",
  "telephone": "+48 669 256 146",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "grabowskiego, Gdynia, 81-602",
    "addressLocality": "Gdynia",
    "postalCode": "81-602",
    "addressCountry": "PL"
  } ,
  "sameAs": [
    "https://web.facebook.com/blulytixx?_rdc=1&_rdr",
    "https://twitter.com/Blulytix",
    "https://www.instagram.com/blulytix/",
    "https://www.linkedin.com/company/blulytix/?originalSubdomain=pl"
  ] 
}
</script>
<script type='application/ld+json'> 
{
  "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": "Blulytix",
  "url": "https://blulytix.ai/",
  "logo": "https://blulytix.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_dark.f3bbc820.png&w=256&q=75",
  "image": "https://blulytix.ai/_next/image?url=%2Fdata-analysis.png&w=1920&q=75",
  "description": "At Blulytix, we are on a passionate quest to harness the power of AI, specializing in UiPath RPA and Python, to propel businesses forward. Rooted in the conviction that AI is a gateway to untapped potential, we focus on delivering cutting-edge solutions in data analysis with Python and digital marketing. Join us on this dynamic journey, where innovation and commitment converge to empower businesses for success in today's fast-paced landscape.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "grabowskiego, Gdynia, 81-602",
    "addressLocality": "Gdynia",
    "postalCode": "81-602",
    "addressCountry": "PL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48 669 256 146",
    "contactType": "Mobile"
  }
}
 </script>

        <meta name="google-site-verification" content="Q1SOwEf2MAIkesNcLNUegZ_XTzOB2xcWGIz2kBKaqRY" />

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
