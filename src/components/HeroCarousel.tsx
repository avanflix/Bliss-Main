'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/BO/swimming.jpg',
      title: 'Luxury Living Redefined',
      subtitle: 'Experience the best in modern home design',
      description: 'Find beautiful homes that combine style with everyday comfort'
    },
    {
      id: 2,
      image: '/BO/aerial.jpg',
      title: 'Prime Locations',
      subtitle: 'Strategic investments in the heart of opportunity',
      description: 'Position yourself in the most desirable neighborhoods with unparalleled growth potential'
    },
    {
      id: 3,
      image: '/BO/Caerial.jpg',
      title: 'Architectural Excellence',
      subtitle: 'Where vision meets innovation',
      description: 'Crafting spaces that inspire and endure through masterful design'
    },
    {
      id: 4,
      image: '/Clubhouse/lobby.jpg',
      title: 'Sustainable Luxury',
      subtitle: 'Green living meets premium comfort',
      description: 'Eco-conscious developments that set new standards for responsible luxury'
    }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8b2727]'
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        allowTouchMove={false}
        speed={1200}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                initial={false}
                animate={{
                  scale: activeSlide === slide.id - 1 ? 1 : 1.1,
                  opacity: activeSlide === slide.id - 1 ? 1 : 0,
                  zIndex: activeSlide === slide.id - 1 ? 1 : 0
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                {activeSlide === slide.id - 1 && (
                  <motion.div
                    key={slide.id}
                    className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h1
                      className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.h2
                      className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 opacity-90"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.p
                      className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-80"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group">
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#8b2727] transition-colors" />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group">
          <ChevronRight className="w-6 h-6 text-white group-hover:text-[#8b2727] transition-colors" />
        </button>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
