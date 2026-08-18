import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import AboutFounder from '@/components/AboutFounder';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bliss Ventures | Premium Residential Projects in Hyderabad',
  description:
    'Bliss Ventures creates thoughtfully designed residential communities and real estate projects in Hyderabad and Telangana, focused on quality, sustainability, and modern living.',
  alternates: {
    canonical: 'https://www.blissventures.co/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <Stats />
      <AboutFounder />
      <Projects />
      <Footer />
    </div>
  );
}