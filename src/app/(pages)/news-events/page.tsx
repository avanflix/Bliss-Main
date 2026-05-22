'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

interface NewsItem {
  id: string;
  type: 'youtube' | 'news';
  title: string;
  description?: string;
  youtubeId?: string;
  image?: string;
  date: string;
}

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  }[];
}

const NewsEventsPage = () => {

  const newsItems: NewsItem[] = [
    // {
    //   id: '1',
    //   type: 'youtube',
    //   title: 'Bliss Ventures & Dasari Developers Launch Their Farming Community Project with a Grand Bhoomi Pooja',
    //   description: 'Stay updated with our recent developments and upcoming projects.',
    //   youtubeId: 'ZNu8IlTeEj0?si=U3MLi-uJcXoVhWwS',
    //   date: 'November 2025'
    // },
    {
      id: '2',
      type: 'youtube',
      title: 'Bhoomi Pooja for the Farming Community Venture! | Bliss Ventures, Dasari Developers',
      description: 'Stay updated with our recent developments and upcoming projects.',
      youtubeId: 'VaGDlMzsbjY',
      date: 'November 2025'
    },
    {
      id: '3',
      type: 'youtube',
      title: 'Bliss Green Farms MD Ms GV Madhuri Success Story @Startup Junction',
      description: 'Stay updated with our recent developments and upcoming projects.',
      youtubeId: 'VERuiz9reRE?si=mcZ9mB4zETjdfhEs',
      date: 'February 2017'
    },
    {
      id: '4',
      type: 'news',
      title: 'Bliss Ventures Pink Run Event',
      description: 'We hosted an exciting Pink Run event promoting health, wellness, and community spirit.',
      image: '/news/pink-run/3.png',
      date: 'October, 2025'
    },
    {
      id: '5',
      type: 'youtube',
      title: 'Bhoomi Pooja for the Farming Community Venture! | Bliss Ventures, Dasari Developers',
      description: 'Stay updated with our recent developments and upcoming projects.',
      youtubeId: 'yvTw8OwAntg',
      date: 'November, 2025'
    }
  ];

  const events: EventItem[] = [
    {
      id: '1',
      title: 'Bliss Ventures Pink Run Marathon',
      description: 'We hosted an exhilarating Pink Run marathon event promoting health awareness, community spirit, and wellness. Runners came together for a cause and celebrated this colorful event of health and fitness.',
      date: '6 October, 2025',
      location: 'Hyderabad, Telangana',
      media: [
        {
          type: 'video',
          url: '/events/pink-one/Marathon.mp4',
          thumbnail: '/events/pink-one/2.png'
        },
        {
          type: 'image',
          url: '/events/pink-one/2.png'
        },
        {
          type: 'image',
          url: '/events/pink-one/03.png'
        },
        {
          type: 'image',
          url: '/events/pink-one/04.png'
        },
        {
          type: 'image',
          url: '/events/pink-one/05.png'
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      

      {/* News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2020] mb-4">
              Latest <span className="text-[#8b2727]">News</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our projects, milestones, and industry updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {item.type === 'youtube' && item.youtubeId ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId.split('?')[0]}`}
                      title={item.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative h-60">
                    <Image
                      src={item.image || '/placeholder.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="px-2 pt-2">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-base font-bold text-[#1f2020] mb-3 ">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2020] mb-4">
              <span className="text-[#8b2727]">Events</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our key events and celebrations
            </p>
          </motion.div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >

                  {/* Event Content */}
                  <div className="p-6">
                  <h3 className="text-3xl font-bold text-[#1f2020] mb-4">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                    {event.location && (
                      <>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </>
                    )}
                  </div>
                  {/* <p className="text-gray-600 text-lg leading-relaxed">
                    {event.description}
                  </p> */}
                </div>

                {/* Media Gallery - Full Width */}
                {event.media && event.media.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    {event.media.map((media, mediaIndex) => (
                      <div key={mediaIndex} className="relative aspect-video rounded-lg overflow-hidden">
                        {media.type === 'video' ? (
                          <HeroVideoDialog
                            videoSrc={media.url}
                            thumbnailSrc={media.thumbnail || media.url}
                            thumbnailAlt={`${event.title} video ${mediaIndex + 1}`}
                            animationStyle="from-center"
                            className="w-full h-full"
                          />
                        ) : (
                          <Image
                            src={media.url}
                            alt={`${event.title} image ${mediaIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

              
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsEventsPage;
