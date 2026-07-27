'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutUs = () => {

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl pb-4 sm:pb-6 font-bold text-[#1f2020]">
            About <span className="text-[#8b2727]">Bliss Ventures Private Limited</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Image and Description Row */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Description */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Bliss Ventures Private Limited strives to craft homes and communities that integrate thoughtful design,
                quality construction, and customer-first values. Our portfolio reflects a rich mix of
                thoughtfully executed developments—from gated communities and farmland projects to
                premium residential enclaves.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                We believe that every project is an opportunity to redefine luxury living. From prime urban
                developments to exclusive residential communities, we deliver properties that not only meet
                the highest standards of quality but also create lasting legacies for our clients and communities.
              </p>
              <div className="flex flex-row gap-3">
                <Link href="/projects">
                  <button className="bg-[#8b2727] text-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors duration-300">
                    Explore Our Projects
                  </button>
                </Link>
                <Link href="/board-members">
                  <button className="border-2 text-sm border-[#8b2727] text-[#8b2727] px-6 py-3 rounded-lg font-medium hover:bg-[#8b2727] hover:text-white transition-colors duration-300">
                    Meet Our Team
                  </button>
                </Link>
              </div>
            </motion.div>
            {/* Image */}
            {/* Responsive animation: fade in on mobile, slide in on desktop */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full max-w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/BO/3.jpg"
                  alt="Bliss Ventures Office"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>


          </div>

          {/* Vision & Mission Below */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              className="bg-gray-50 p-4 sm:p-6 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-bold text-[#8b2727] mb-3 sm:mb-4">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                &ldquo;To create vibrant, sustainable communities where modern living meets nature,
                enabling customers to experience comfort, wellness, and a sense of belonging.&rdquo;
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-4 sm:p-6 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-base sm:text-lg font-bold text-[#8b2727] mb-3 sm:mb-4">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                &ldquo;To deliver thoughtfully designed real estate projects that uphold quality, transparency,
                and customer satisfaction, while promoting eco-conscious living.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
