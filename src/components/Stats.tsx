'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: 280,
      suffix: '+',
      label: 'Units in Bliss One',
      description: 'Thoughtfully designed 2 & 3 BHK apartments'
    },
    {
      number: 55,
      suffix: '+',
      label: 'Acres in Bliss Bilva',
      description: 'Master-planned farmland community'
    },
    {
      number: 5,
      suffix: '',
      label: 'Completed Projects',
      description: 'Successfully delivered developments'
    },
    {
      number: 2,
      suffix: '',
      label: 'Ongoing Projects',
      description: 'Future-ready developments in progress'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedNumber = ({ targetNumber, suffix, shouldAnimate }: { targetNumber: number; suffix: string; shouldAnimate: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (shouldAnimate) {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetNumber) {
            setCount(targetNumber);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, [shouldAnimate, targetNumber]);

    return (
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8b2727]">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Our <span className="text-[#8b2727]">Achievement</span> Story
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak louder than words. Our commitment to excellence
            is reflected in every milestone we&apos;ve achieved.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-3 sm:p-4 lg:p-6 rounded-lg text-center"
            >
              <div className="mb-2 sm:mb-4">
                <AnimatedNumber targetNumber={stat.number} suffix={stat.suffix} shouldAnimate={isVisible} />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#1f2020] mb-1 sm:mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {/* NAREDCO Member */}
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-24 sm:w-60 sm:h-50 flex items-center justify-center mx-auto">
              <Image
                src="/patners/NAREDCO.png"
                alt="NAREDCO Logo"
                width={100}
                height={100}
                className="w-32 h-20 sm:w-60 sm:h-45 object-contain"
              />
            </div>
            <h4 className="text-xs sm:text-base lg:text-lg font-bold text-[#1f2020] mb-1 sm:mb-2">
              Proud Member NAREDCO
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              National Real Estate Development Council
            </p>
          </div>

          {/* SB Funded */}
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-24 sm:w-60 sm:h-50 flex items-center justify-center mx-auto">
              <Image
                src="/patners/SBI!.png"
                alt="SBI Logo"
                width={100}
                height={100}
                className="w-32 h-20 sm:w-60 sm:h-45 object-contain"
              />
            </div>
            <h4 className="text-xs sm:text-base lg:text-lg font-bold text-[#1f2020] mb-1 sm:mb-2">
              Projects Funded by SBI
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Trusted financial partnership
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="bg-[#8b2727] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors duration-300 text-sm sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
