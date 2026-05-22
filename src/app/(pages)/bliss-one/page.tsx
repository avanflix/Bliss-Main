'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function BlissOnePage() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = useMemo(() => [
    {
      id: 1,
      title: "Welcome to Bliss One",
      subtitle: "A Premium Residential Experience",
      content: "Discover the epitome of luxury living at Bliss One, where modern architecture meets serene landscapes. This exclusive residential development offers unparalleled comfort and sophistication in every detail.",
      backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Architectural Excellence",
      subtitle: "Designed for Modern Living",
      content: "Our expert architects have crafted a masterpiece that blends contemporary design with timeless elegance. Every corner of Bliss One reflects our commitment to creating spaces that inspire and delight.",
      backgroundImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Premium Amenities",
      subtitle: "Life Enhanced",
      content: "Experience world-class amenities designed to enrich your lifestyle. From state-of-the-art fitness centers to lush green spaces, Bliss One offers everything you need for a fulfilling life.",
      backgroundImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&h=1080&fit=crop",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Sustainable Living",
      subtitle: "Eco-Friendly Excellence",
      content: "Bliss One is committed to environmental responsibility. Our sustainable practices ensure that your home not only provides comfort but also contributes to a greener future.",
      backgroundImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop",
      textColor: "text-black"
    },
    {
      id: 5,
      title: "Prime Location",
      subtitle: "Connected & Convenient",
      content: "Strategically located for maximum convenience, Bliss One offers easy access to business districts, educational institutions, healthcare facilities, and entertainment venues.",
      backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop",
      textColor: "text-white"
    },
    {
      id: 6,
      title: "Investment Opportunity",
      subtitle: "Secure Your Future",
      content: "Invest in Bliss One today and secure a property that appreciates in value while providing you with the lifestyle you deserve. Contact our team to learn more about this exceptional opportunity.",
      backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop",
      textColor: "text-white"
    }
  ], []);

  useEffect(() => {
    let isSnapping = false;

    // Function to update current section based on scroll position
    const updateCurrentSection = () => {
      const sections = document.querySelectorAll('[id^="section-"]');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const sectionCenter = sectionTop + (rect.height / 2);
        const viewportCenter = scrollY + (windowHeight / 2);
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = index;
        }
      });

      setCurrentSection(currentIndex);
    };

    // Intersection Observer for snapping
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isSnapping) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          const rect = entry.target.getBoundingClientRect();
          const sectionTop = rect.top;
          const threshold = 50; // 50px threshold

          // Always snap to ensure proper alignment
          if (Math.abs(sectionTop) > threshold) {
            isSnapping = true;
            entry.target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            // Reset snapping flag after animation
            setTimeout(() => {
              isSnapping = false;
            }, 800);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((_, index) => {
      const element = document.getElementById(`section-${index}`);
      if (element) {
        observer.observe(element);
      }
    });

    // Update current section on scroll for navigation dots
    const handleScroll = () => {
      updateCurrentSection();
    };

    window.addEventListener('scroll', handleScroll);

    // Initial update
    updateCurrentSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      setCurrentSection(index); // Immediately update current section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {/* Vertical Carousel Container */}
      <div className="relative">
        {/* Navigation Dots - Fixed Position */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                index === currentSection
                  ? 'bg-[#8b2727] border-[#8b2727] scale-125'
                  : 'bg-white/50 border-white/70 hover:border-white hover:bg-white/30'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* Vertical Carousel Slides */}
        <div className="scroll-smooth">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={`section-${index}`}
              className="relative h-screen flex items-center justify-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={section.backgroundImage}
                  alt={section.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 ${section.textColor}`}>
                  {section.title}
                </h1>
                <h2 className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-8 ${section.textColor} opacity-90`}>
                  {section.subtitle}
                </h2>
                <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto ${section.textColor} opacity-80`}>
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Additional Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2020] mb-6">
            Why Choose <span className="text-[#8b2727]">Bliss One</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of luxury, comfort, and convenience at Bliss One.
            Our thoughtfully designed spaces cater to modern living while maintaining the warmth of home.
          </p>
        </div>
      </section>
    </div>
  );
}
