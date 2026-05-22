import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, MapPin, Images, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';


interface Project {
  id: string;
  name: string;
  location: string;
  status: string;
  year: string;
  image: string;
  description: string;
  specs: string[];
  fullDescription?: string;
  map?: string;
  gallery?: Array<{
    id: number;
    src: string;
    alt: string;
    category: string;
    project: string;
  }>;
  brochure?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);

  const scrollToMap = () => {
    const mapElement = document.getElementById('project-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('project-gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const downloadBrochure = () => {
    if (project && project.brochure) {
      const link = document.createElement('a');
      link.href = project.brochure;
      link.download = `${project.name.replace(/\s+/g, '_')}_Brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const openGalleryModal = (index: number) => {
    setSelectedGalleryImage(index);
  };

  const closeGalleryModal = () => {
    setSelectedGalleryImage(null);
  };

  const nextGalleryImage = () => {
    if (selectedGalleryImage !== null && project && project.gallery) {
      setSelectedGalleryImage((selectedGalleryImage + 1) % project.gallery.length);
    }
  };

  const prevGalleryImage = () => {
    if (selectedGalleryImage !== null && project && project.gallery) {
      setSelectedGalleryImage(selectedGalleryImage === 0 ? project.gallery.length - 1 : selectedGalleryImage - 1);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
      }}
    >
      <motion.div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.85, y: 30, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: -20,
          rotateX: -5,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020]">{project.name}</h2>
            <p className="text-[#8b2727] font-medium text-sm sm:text-base">{project.location}</p>
          </motion.div>
          <div className="flex items-center gap-3">
            <motion.a
              href={`/contact-us?project=${encodeURIComponent(project.name)}&location=${encodeURIComponent(project.location)}&brochure=${encodeURIComponent(project.brochure || '')}`}
              className="bg-[#8b2727] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            {project.brochure && (
              <motion.button
                onClick={downloadBrochure}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.17 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Brochure"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b2727]" />
              </motion.button>
            )}
            {project.map && (
              <motion.button
                onClick={scrollToMap}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.19 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Location"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b2727]" />
              </motion.button>
            )}
            {project.gallery && project.gallery.length > 0 && (
              <motion.button
                onClick={scrollToGallery}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Gallery"
              >
                <Images className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b2727]" />
              </motion.button>
            )}
            <motion.button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Image and Stats Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    project.status.includes('Completed')
                      ? 'bg-green-500 text-white'
                      : project.status.includes('Under Construction')
                      ? 'bg-blue-500 text-white'
                      : 'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 text-sm rounded">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg h-full">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f2020] mb-3 sm:mb-4 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#8b2727] rounded-full mr-2 sm:mr-3"></span>
                  Key Specifications
                </h3>
                <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                  {project.specs.map((spec, idx) => (
                    <li key={idx} className="text-gray-700 text-xs sm:text-sm flex items-center bg-white p-2 sm:p-3 rounded-md shadow-sm">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#8b2727] rounded-full mr-3 sm:mr-4 flex-shrink-0"></span>
                      <span className="font-medium">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Description in 1 Column */}
          <div className="bg-gradient-to-r from-[#8b2727]/5 to-transparent p-4 sm:p-6 rounded-lg border-l-4 border-[#8b2727]">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium text-sm sm:text-base">
              {project.fullDescription || project.description}
            </div>
          </div>

          {/* Map Section */}
          {project.map && (
            <motion.div
              id="project-map-section"
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1f2020] mb-4 flex items-center">
                <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#8b2727] rounded-full mr-2 sm:mr-3"></span>
                Location
              </h3>
              <div className="bg-white rounded-lg overflow-hidden">
                <div
                  className="w-full h-64 sm:h-80 lg:h-96"
                  dangerouslySetInnerHTML={{ __html: project.map }}
                />
              </div>
            </motion.div>
          )}

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div
              id="project-gallery-section"
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1f2020] mb-4 flex items-center">
                <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#8b2727] rounded-full mr-2 sm:mr-3"></span>
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    onClick={() => openGalleryModal(index)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Gallery Modal */}
      {selectedGalleryImage !== null && project.gallery && (
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
              onClick={closeGalleryModal}
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
              onClick={prevGalleryImage}
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
              onClick={nextGalleryImage}
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
                src={project.gallery[selectedGalleryImage].src}
                alt={project.gallery[selectedGalleryImage].alt}
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
                  <h3 className="text-base sm:text-lg font-semibold truncate">{project.gallery[selectedGalleryImage].project}</h3>
                  <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{project.gallery[selectedGalleryImage].alt}</p>
                </div>
                <div className="text-xs sm:text-sm opacity-75 flex-shrink-0">
                  {selectedGalleryImage + 1} / {project.gallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectModal;
