import About from '@/src/components/Template/AboutSection';
import Appointement from '@/src/components/Template/AppointmentSection';
import BlogSection from '@/src/components/Template/BlogSection';
import Certification from '@/src/components/Template/CertificationSection';
import Hero from '@/src/components/Template/HeroSection';
import Partners from '@/src/components/Template/PartnersSection';
import ServicesSection from '@/src/components/Template/ServicesSection';
import { Metadata } from 'next';
import Wrapper from './wrapper';

export const metadata: Metadata = {
  title: 'Home - Blulytix',
  description: 'Empowering Your Business with AI Automation',
};

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Partners />
        <About />
        <ServicesSection />
        <Certification />
        {/* <NewsLetter /> */}
        <Appointement />
        <BlogSection />
      </div>
    </Wrapper>
  );
}
