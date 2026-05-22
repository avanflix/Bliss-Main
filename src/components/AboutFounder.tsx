'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutFounder = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden  flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-3 sm:mb-4">
            Meet Our <span className="text-[#8b2727]">Visionary Leader</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mrs. G V Madhuri, A Woman with a Miracle Mission
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_6.5fr] gap-8 lg:gap-12 items-center">
          {/* Desktop Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-sm w-full aspect-[9/16]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="/GVMadhuri.jpg"
                  alt="Mrs. G V Madhuri - Founder & CEO, Bliss Ventures"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-[#8b2727] text-white p-3 lg:p-6 rounded-lg shadow-xl "
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <p className="text-xl lg:text-3xl font-bold">600+</p>
                  <p className="text-xs lg:text-sm">Units</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-white text-[#8b2727] p-2 lg:p-4 rounded-lg shadow-xl border-2 border-[#8b2727]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-center">
                  <p className="text-lg lg:text-2xl font-bold">6+</p>
                  <p className="text-xs lg:text-sm">Projects Done</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Content */}
          <motion.div
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-[#8b2727]/10 to-transparent p-4 lg:p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                <Link
                  href="https://www.linkedin.com/in/gvmadhuri1971/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1f2020] underline hover:text-[#8b2727] transition-colors"
                  aria-label="LinkedIn Profile of Mrs. G V Madhuri"
                >
                  <strong className="text-[#1f2020] ">Mrs. G V Madhuri</strong>
                </Link>, our founder and CEO, is a remarkable visionary leader with expertise in Home Science and Finance. A certified &ldquo;Professional Financial Adviser&rdquo; from LIMRA, she leads three innovative portfolios addressing essential human needs.
              </p>
            </div>

            <div className="bg-gray-50 p-4 lg:p-6 rounded-lg">
              <h4 className="text-lg lg:text-xl font-bold text-[#8b2727] mb-3 lg:mb-4">Her Miracle Mission</h4>
              <p className="text-gray-600 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                To make her eco-reality vision come true, Mrs. Madhuri is working on three different portfolios, which address the basic needs of people:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8b2727] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-[#1f2020]">Bliss Ventures Pvt Ltd:</span>
                    <span className="text-gray-600 ml-1">Providing exceptional living spaces that offer comfort, luxury, and a sense of belonging.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8b2727] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-[#1f2020]">Bliss Green Farms Pvt Ltd:</span>
                    <span className="text-gray-600 ml-1">Offering nourishing and sustainable food supplements derived from Moringa leaves, promoting well-being and healthy living.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#8b2727] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-[#1f2020]">Bliss Financial Advisory:</span>
                    <span className="text-gray-600 ml-1">Providing expert financial advice and solutions to individuals and businesses, ensuring stability and prosperity.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 lg:gap-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="bg-white p-3 lg:p-4 rounded-lg shadow-md text-center border border-gray-200"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xl lg:text-2xl font-bold text-[#8b2727]">20+</p>
                <p className="text-xs lg:text-sm text-gray-600">Years of Experience</p>
              </motion.div>
              <motion.div
                className="bg-white p-3 lg:p-4 rounded-lg shadow-md text-center border border-gray-200"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-lg lg:text-xl font-bold text-[#8b2727]">200+</p>
                <p className="text-xs lg:text-sm text-gray-600">Happy Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
