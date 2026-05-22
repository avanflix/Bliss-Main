'use client';

import { motion } from 'framer-motion';

const News = () => {
  const newsVideos = [
    {
      id: 'ZNu8IlTeEj0?si=U3MLi-uJcXoVhWwS',
      title: 'Bliss Ventures & Dasari Developers Launch Their Farming Community Project with a Grand Bhoomi Pooja',
      description: 'Stay updated with our recent developments and upcoming projects.'
    },
    {
      id: 'VaGDlMzsbjY',
      title: 'Bhoomi Pooja for the Farming Community Venture! | Bliss Ventures, Dasari Developers',
      description: 'Stay updated with our recent developments and upcoming projects.'
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 flex flex-col justify-center">
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
            News & <span className="text-[#8b2727]">Articles</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest insights, market updates, and project developments.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {newsVideos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Video Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f2020] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {video.description}
                </p>
                <div className="mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#8b2727] font-medium hover:text-[#6d1e1e] transition-colors duration-300"
                  >
                    Watch on YouTube
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
