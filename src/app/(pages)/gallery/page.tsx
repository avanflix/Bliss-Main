'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryImages as allGalleryImages } from '@/Data/gallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects'},
    { id: 'bliss-one', name: 'Bliss One' },
    { id: 'bliss-bilva', name: 'Bliss Bilva'},
    { id: 'bliss-one-amenities', name: 'Bliss One Amenities' },
    { id: 'sri-bliss', name: 'Sri Bliss' },
    { id: 'bliss-paradise', name: 'Bliss Paradise' },
    { id: 'bliss-residency', name: 'Bliss Residency' },
  ];


  const filteredImages = useMemo(() => {
    return selectedCategory === 'all'
      ? allGalleryImages
      : allGalleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Our <span className="text-[#8b2727]">Gallery</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of completed projects, ongoing developments, and the craftsmanship
            that defines Bliss Ventures. From modern architecture to serene landscapes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#8b2727] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {image.project}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
          }}
        >
          <motion.div
            className="relative max-w-5xl max-h-[90vh] w-full mx-3 sm:mx-4"
            initial={{ opacity: 0, scale: 0.85, y: 30, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -25,
              rotateY: -5,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 text-white transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 text-white transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative aspect-[4/3] w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Image Info */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 sm:p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold truncate">{filteredImages[selectedImage].project}</h3>
                  <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{filteredImages[selectedImage].alt}</p>
                </div>
                <div className="text-xs sm:text-sm opacity-75 flex-shrink-0">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;