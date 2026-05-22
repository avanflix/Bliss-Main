'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlissOneNavbar = () => {
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
    { name: 'Home', href: '/bliss-one', icon: Home },
    // { name: 'Bliss One', href: '/bliss-one' },
    { name: 'Plans', href: '/bliss-one/plans' },
    { name: 'Specifications', href: '/bliss-one/specifications' },
    { name: 'Pricing', href: '/bliss-one/pricing' },
    { name: 'Location', href: '/bliss-one/location' },
    // { name: 'Gallery', href: '/bliss-one/gallery' },
    // { name: 'Contact', href: '/bliss-one/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg border-b-2 border-[#8b2727]' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/bliss-one" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Bliss Ventures Logo"
                width={35}
                height={35}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1f2020]">Bliss One</span>
                <span className="text-xs text-[#8b2727] font-medium">Premium Residential</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    item.name === 'Contact'
                      ? 'text-white bg-[#8b2727] hover:bg-[#6d1e1e]'
                      : 'text-[#1f2020] hover:text-[#8b2727] hover:bg-[#8b2727]/10'
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
              className="text-[#1f2020] hover:text-[#8b2727] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                      className={`flex items-center space-x-3 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                        item.name === 'Contact'
                          ? 'text-[#8b2727] bg-[#8b2727]/10'
                          : 'text-[#1f2020] hover:text-[#8b2727] hover:bg-[#8b2727]/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon size={18} />}
                      <span>{item.name}</span>
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

export default BlissOneNavbar;
