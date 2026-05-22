'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building2, Network, TrendingUp, Map, MapPin, Plane, X } from 'lucide-react';

export default function LocationPage() {
  const [selectedNearby, setSelectedNearby] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'nearby' | 'map'>('nearby');
  const [destination, setDestination] = useState('');
  const [mapUrl, setMapUrl] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1777607036825!2d78.6548887756887!3d17.451203983446934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb77529327f749%3A0x43bc67fbdd22b4a9!2sBliss%20One%20Apartments!5e0!3m2!1sen!2sin!4v1764178681287!5m2!1sen!2sin');

  const handleGetDirections = () => {
    if (destination.trim()) {
      const dest = encodeURIComponent(destination);
      
      // Update map to show directions using the regular embed with search query
      setMapUrl(`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3806.1777607036825!2d78.6548887756887!3d17.451203983446934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bcb77529327f749%3A0x43bc67fbdd22b4a9!2sBliss%20One%20Apartments%2C%20Yamnampet%2C%20Ghatkesar%2C%20Hyderabad!3m2!1d17.451203983446934!2d78.6548887756887!4m5!1s${dest}!3m2!1d0!2d0!5e0!3m2!1sen!2sin`);
      setActiveTab('map');
    }
  };

  const whyYamnampet = [
    {
      icon: Building2,
      title: 'Favorite of IT Giants.',
      description: 'Yamnampet boasts of the biggest names like Infosys, Mindspace, etc. This is the place where IT giants are setting up their biggest SEZs.',
    },
    {
      icon: Network,
      title: 'Stay Connected.',
      description: 'Connectivity can\'t get better than Yamnampet. Just 5 minutes from the ORR & the Warangal highway.',
    },
    {
      icon: Map,
      title: 'Upcoming Infrastructure.',
      description: 'The upcoming 6 lane Uppal Elevated Corridor would clear traffic congestions in the East of Hyderabad.',
    },
    {
      icon: TrendingUp,
      title: 'Best Investment Opportunities.',
      description: 'Investing in such a booming area is bound to give you great returns!',
    },
  ];

  const nearbyLocations = [
    {
      time: '2',
      from: 'Infosys SEZ',
    },
    {
      time: '5',
      from: 'Outer Ring Road',
    },
    {
      time: '10',
      from: 'Warangal Highway',
    },
    {
      time: '20',
      from: 'Uppal Metro Station',
      hasPlane: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=1080&fit=crop"
            alt="Yamnampet Location"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Prime <span className="text-[#8b2727]">Location</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 opacity-90">
            Yamnampet, Ghatkesar
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto opacity-80">
            Strategically located for modern living
          </p>
        </div>
      </section>

      {/* Why Yamnampet Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2020]">
              Why <span className="text-[#1f2020] font-bold">Yamnampet?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyYamnampet.map((item) => (
              <div key={item.title} className="space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <item.icon 
                    size={64} 
                    className="text-[#8b2727]" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1f2020]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2020] mb-2">
              Nearby, <span className="text-[#1f2020] font-bold">Bliss One</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Dotted Line */}
            <div className="absolute bottom-6 left-0 right-4 h-0.5 border-t-2 border-dashed border-[#8b2727] hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {nearbyLocations.map((location) => (
                <button 
                  key={location.from}
                  className="relative cursor-pointer hover:scale-105 transition-transform text-left"
                  onClick={() => setSelectedNearby(location.from)}
                >
                  {/* Time */}
                  <div className="mb-4">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#8b2727] mb-1">
                      {location.time}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      mins<br />from
                    </div>
                  </div>

                  {/* Pin Icon */}
                  <div className="relative flex justify-start mb-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#1f2020] bg-white relative z-10"></div>
                  </div>

                  {/* Location Name */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-bold text-[#1f2020] flex items-center justify-start gap-2">
                      {location.from}
                      {location.hasPlane && (
                        <Plane size={18} className="text-[#8b2727]" />
                      )}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Distance Section with Map */}
      <section className="relative w-full h-screen">
        {/* Top Tabs */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
          <div className="flex gap-2 bg-white/95 backdrop-blur-sm rounded-lg p-1.5 shadow-lg">
            <button 
              onClick={() => setActiveTab('nearby')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                activeTab === 'nearby'
                  ? 'bg-[#1f2020] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Nearby
            </button>
            <button 
              onClick={() => setActiveTab('map')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                activeTab === 'map'
                  ? 'bg-[#1f2020] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Google Map
            </button>
          </div>
        </div>

        {activeTab === 'nearby' ? (
          /* Nearby Tab - Coming Soon Message */
          <div className="absolute inset-0 w-full h-full bg-gray-50 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-12 sm:p-16 shadow-2xl text-center max-w-2xl mx-4">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <MapPin size={96} className="text-[#8b2727]" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#1f2020]">Nearby Locations</h3>
                <p className="text-gray-600 text-xl sm:text-2xl">Image coming soon</p>
                <p className="text-gray-500 text-base">
                  We&apos;re preparing detailed information about nearby landmarks and connectivity.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Full Screen Map */}
            <div className="absolute inset-0 w-full h-full">
              <iframe
                key={mapUrl}
                title="Bliss One Location"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Overlay - Distance Finder */}
            <div className="absolute top-40  left-10 sm:left-8 z-10 w-[calc(100%-2rem)] sm:w-auto sm:max-w-md">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl space-y-4">
                {/* Header */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2020] mb-2">
                    Find <span className="text-[#1f2020]">Distance</span>
                  </h2>
                </div>

                {/* Point A */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b2727] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    A
                  </div>
                  <input
                    type="text"
                    value="Bliss One, Yamnampet"
                    readOnly
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  />
                </div>

                {/* Point B */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b2727] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    B
                  </div>
                  <input
                    type="text"
                    placeholder="Your Location"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGetDirections()}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2727] text-sm"
                  />
                </div>

                {/* Add Stop */}
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#8b2727] transition-colors text-sm">
                  <span className="text-xl">+</span>
                  <span>Add Stop</span>
                </button>

                {/* Go Button */}
                <button 
                  onClick={handleGetDirections}
                  disabled={!destination.trim()}
                  className="w-full bg-white border-2 border-[#1f2020] text-[#1f2020] px-6 py-2.5 rounded-full font-medium hover:bg-[#1f2020] hover:text-white transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Go
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Nearby Detail Modal */}
      {selectedNearby && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
        >
          <button
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={() => setSelectedNearby(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedNearby(null)}
            aria-label="Close modal backdrop"
          />
          <div 
            className="bg-white rounded-2xl p-8 max-w-3xl w-full shadow-2xl relative z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#1f2020]">{selectedNearby}</h3>
              <button
                onClick={() => setSelectedNearby(null)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl p-16 sm:p-24 text-center border-2 border-dashed border-gray-300">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <MapPin size={48} className="text-[#8b2727]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-700 text-xl font-medium">Image will be placed in here</p>
                <p className="text-gray-500 text-sm">Location details and photos coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

