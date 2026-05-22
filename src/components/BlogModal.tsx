import { useEffect } from 'react';
import Image from 'next/image';
import { X, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  fullDescription?: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
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

  if (!isOpen || !post) return null;

  const getCategoryName = (categoryId: string) => {
    const categories = {
      'market-insights': 'Market Insights',
      'investment': 'Investment Tips',
      'lifestyle': 'Lifestyle',
      'construction': 'Construction Updates',
      'sustainability': 'Sustainability'
    };
    return categories[categoryId as keyof typeof categories] || categoryId;
  };

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
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020]">{post.title}</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="hidden sm:inline">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="sm:hidden">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 sm:w-4 h-3 sm:h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-3 sm:w-4 h-3 sm:h-4" />
                {getCategoryName(post.category)}
              </div>
            </div>
          </motion.div>
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

        {/* Content */}
        <motion.div
          className="p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Image */}
          <motion.div
            className="w-full mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              {post.featured && (
                <motion.div
                  className="absolute top-3 left-3 sm:top-4 sm:left-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <span className="bg-[#8b2727] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Featured
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-gradient-to-r from-[#8b2727]/5 to-transparent p-4 sm:p-6 rounded-lg border-l-4 border-[#8b2727]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="text-gray-700 leading-relaxed whitespace-pre-line font-medium text-sm sm:text-base">
              {post.fullDescription || post.excerpt}
            </div>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500">
                This article provides valuable insights into the {getCategoryName(post.category).toLowerCase()} landscape.
                Stay informed with the latest developments and expert analysis from Bliss Ventures.
              </p>
            </div>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            className="mt-4 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-2">
              <span>Reading time: {post.readTime}</span>
              <span>Category: {getCategoryName(post.category)}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 p-4 sm:p-6 border-t bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.button
            onClick={onClose}
            className="px-4 sm:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Close
          </motion.button>
          <motion.a
            href="/contact-us"
            className="bg-[#8b2727] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors text-sm sm:text-base text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogModal;
