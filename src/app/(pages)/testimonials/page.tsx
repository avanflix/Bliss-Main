'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Heart, Share2, ArrowUpRight, Play, X, Pause, Volume2, VolumeX } from 'lucide-react';

/* ------------------------------------------------------------------
   DATA
   Replace with your real testimonials.
   - `videoSrc`: path/URL to the actual video file (e.g. "/videos/t1.mp4")
   - `poster`: thumbnail image shown before play (e.g. "/videos/t1-poster.jpg")
------------------------------------------------------------------- */
type Testimonial = {
  id: string;
  name: string;
  role: string;
  videoSrc: string;
  poster: string;
  channelName?: string;
};

const testimonials: Testimonial[] = [
  { id: 't1', name: 'R Purushotham', role: 'Asst Professor, PVNRTVU', videoSrc: '/testimonials/t1.mp4', poster: '/TestimonialPosters/t1.png', channelName: 'Bliss Ventures' },
  { id: 't2', name: 'B.V.D.N Manoj', role: 'IT Professional', videoSrc: '/testimonials/t2.mp4', poster: '/TestimonialPosters/t2.png', channelName: 'Bliss Ventures' },
  { id: 't3', name: 'KVL. Narasimha Rao', role: 'Senior Vice President', videoSrc: '/testimonials/t3.mp4', poster: '/TestimonialPosters/t3.png', channelName: 'Bliss Ventures' },
  { id: 't4', name: 'Mr. Radha Krishna', role: 'Axis Bank Employee', videoSrc: '/testimonials/t4.mp4', poster: '/TestimonialPosters/t4.png', channelName: 'Bliss Ventures' },
  { id: 't5', name: 'Mr. Pitchaiah Gorantla', role: 'IT Professional, Infosys', videoSrc: '/testimonials/t5.mp4', poster: '/TestimonialPosters/t5.png', channelName: 'Bliss Ventures' },
//   { id: 't6', name: 'Mr. Suresh', role: 'Business Owner', videoSrc: '/videos/t6.mp4', poster: '/videos/t6-poster.jpg', channelName: 'Bliss Ventures' },
];

function VideoModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setIsPlaying(false));

    const onTime = () => {
      setCurrentTime(v.currentTime);
      setProgress((v.currentTime / (v.duration || 1)) * 100);
    };
    const onLoaded = () => setDuration(v.duration);

    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onLoaded);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const pct = Number(e.target.value);
    v.currentTime = (pct / 100) * duration;
    setProgress(pct);
  };

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/90 hover:text-white"
          aria-label="Close video"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="relative w-full h-full rounded-lg overflow-hidden bg-black group">
          <video
            ref={videoRef}
            src={testimonial.videoSrc}
            poster={testimonial.poster}
            className="w-full h-full object-contain"
            onClick={togglePlay}
            playsInline 
          />

          {/* Custom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={seek}
              className="w-full h-1 accent-[#8b2727] cursor-pointer mb-2"
              aria-label="Seek video"
            />
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (!activeTestimonial) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveTestimonial(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeTestimonial]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mt-25">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Client <span className="text-[#8b2727]">Testimonials</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from our residents and homeowners about their experience
            living with Bliss Ventures.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-xl">
              <button
                type="button"
                onClick={() => setActiveTestimonial(item)}
                className="relative block w-full aspect-video group"
                aria-label={`Play testimonial from ${item.name}`}
              >
                <img
                  src={item.poster}
                  alt={`${item.name} testimonial thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute top-3 left-3 right-3 flex items-center gap-2 text-white text-left">
                  {/* <span className="w-7 h-7 rounded-full bg-white/90 shrink-0" /> */}
                  <span className="text-xs font-semibold leading-tight line-clamp-2">
                    {item.channelName ?? 'Bliss Ventures'}
                  </span>
                </div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg bg-[#8b2727]">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </span>
              </button>

              <div className="px-4 sm:px-5 py-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f2020]">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.role}</p>
                {/* <div className="flex items-center gap-4">
                  <Heart className="w-4 h-4 text-gray-500" />
                  <Share2 className="w-4 h-4 text-gray-500" />
                  <ArrowUpRight className="w-4 h-4 ml-auto text-gray-500" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {activeTestimonial && (
        <VideoModal testimonial={activeTestimonial} onClose={() => setActiveTestimonial(null)} />
      )}
    </div>
  );
}