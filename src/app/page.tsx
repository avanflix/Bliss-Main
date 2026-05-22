import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import AboutFounder from '@/components/AboutFounder';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

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