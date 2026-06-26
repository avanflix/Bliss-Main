'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Board Members', href: '/board-members' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Get in Touch', href: '/contact-us' },
  ];

  const NAVBAR_HEIGHT = 80; // h-24 in px

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg border-b-2 border-[#8b2727]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: `${NAVBAR_HEIGHT}px` }}
        >
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/logo3.png"
                alt="Bliss Ventures Logo"
                width={NAVBAR_HEIGHT}
                height={NAVBAR_HEIGHT}
                className="h-full w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-lg font-medium transition-colors duration-200 ${
                    item.name === 'Get in Touch'
                      ? 'text-white bg-[#8b2727] rounded-lg'
                      : 'text-[#1f2020] hover:text-[#8b2727] hover:underline'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1f2020] hover:text-[#8b2727] p-3"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
                transition: {
                  duration: 0.25,
                  ease: [0.4, 0, 1, 1],
                  opacity: { duration: 0.15 }
                }
              }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-2 pt-4 pb-4 space-y-2 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      scale: 0.95,
                      transition: {
                        duration: 0.2,
                        delay: (navItems.length - 1 - index) * 0.05
                      }
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 ${
                        item.name === 'Get in Touch'
                          ? 'text-[#8b2727] bg-[#8b2727]/10 rounded-lg'
                          : 'text-[#1f2020] hover:text-[#8b2727]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
