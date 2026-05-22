'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, X } from 'lucide-react';

export default function BlissOnePlansPage() {
  const [selectedPlan, setSelectedPlan] = useState('2bhk');
  const [selectedVariant, setSelectedVariant] = useState('east');
  const [selectedTower, setSelectedTower] = useState('A');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const towerImages: { [key: string]: string } = {
    'A': '/BO/Floor/A.jpg',
    'B': '/BO/Floor/B.jpg',
    'C': '/BO/Floor/C.jpg',
    'D': '/BO/Floor/D.jpg',
  };

  const planData = {
    '2bhk': {
      title: '2 BHK 1210 sq.ft',
      variants: {
        east: {
          name: 'EAST',
          image: '/BO/floor.png',
          totalArea: '1210 sq.ft.',
          direction: 'East',
          specs: {
            'Rera Carpet Area': '796 sq.ft.',
            'Balcony Area': '82 sq.ft.',
            'External Wall\'s Area': '52 sq.ft.',
            'Common Area': '280 sq.ft.'
          }
        },
        west: {
          name: 'WEST',
          image: '/BO/floor.png',
          totalArea: '1210 sq.ft.',
          direction: 'West',
          specs: {
            'Rera Carpet Area': '796 sq.ft.',
            'Balcony Area': '82 sq.ft.',
            'External Wall\'s Area': '52 sq.ft.',
            'Common Area': '280 sq.ft.'
          }
        }
      }
    },
    '3bhk': {
      title: '3 BHK 1475 sq.ft',
      variants: {
        east: {
          name: 'EAST',
          image: '/BO/floor.png',
          totalArea: '1475 sq.ft.',
          direction: 'East',
          specs: {
            'Rera Carpet Area': '985 sq.ft.',
            'Balcony Area': '125 sq.ft.',
            'External Wall\'s Area': '75 sq.ft.',
            'Common Area': '290 sq.ft.'
          }
        },
        west: {
          name: 'WEST',
          image: '/BO/floor.png',
          totalArea: '1475 sq.ft.',
          direction: 'West',
          specs: {
            'Rera Carpet Area': '985 sq.ft.',
            'Balcony Area': '125 sq.ft.',
            'External Wall\'s Area': '75 sq.ft.',
            'Common Area': '290 sq.ft.'
          }
        }
      }
    }
  };

  const masterPlanAmenities = [
    { number: 1, name: 'Entry - Exit', color: 'text-orange-500' },
    { number: 2, name: 'Seating Terrace', color: 'text-orange-500' },
    { number: 3, name: 'Wellness Area', color: 'text-orange-500' },
    { number: 4, name: 'Children Play Area', color: 'text-orange-500' },
    { number: 5, name: 'Gazebo', color: 'text-orange-500' },
    { number: 6, name: 'Fire Tender Entry - Exit', color: 'text-orange-500' },
    { number: 7, name: 'Palm Grove', color: 'text-orange-500' },
    { number: 8, name: 'Gazebo', color: 'text-orange-500' },
    { number: 9, name: 'Lawn', color: 'text-orange-500' },
    { number: 10, name: 'Yoga Deck', color: 'text-orange-500' },
    { number: 11, name: 'Walking & Cycling Track', color: 'text-orange-500' },
    { number: 12, name: 'Sports Corner', color: 'text-orange-500' },
    { number: 13, name: 'Badminton Court', color: 'text-orange-500' },
    { number: 14, name: 'Outdoor Gym', color: 'text-orange-500' },
    { number: 15, name: 'Clubhouse', color: 'text-orange-500' },
    { number: 16, name: 'Basement Entry', color: 'text-orange-500' },
    { number: 17, name: 'People\'s Plaza', color: 'text-orange-500' },
    { number: 18, name: 'Aroma Garden', color: 'text-orange-500' },
    { number: 19, name: 'Waiting Area', color: 'text-orange-500' },
  ];

  const currentPlan = planData[selectedPlan as keyof typeof planData];
  const currentVariant = currentPlan.variants[selectedVariant as keyof typeof currentPlan.variants];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
            alt="Bliss One Plans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Exclusive <span className="text-[#8b2727]">2BHK & 3BHK</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 opacity-90">
            in a high-rise gated society
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto opacity-80">
            Experience luxury like never before
          </p>
        </div>
      </section>

      {/* Tower Plan Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Title and Description */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2020] mb-2">
                  Tower <span className="text-[#8b2727]">Plan</span>
                </h2>
                <div className="w-16 h-1 bg-orange-500"></div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Click on the buttons below to view the tower plans in detail!
              </p>

              {/* Tower Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedTower('A')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedTower === 'A'
                      ? 'bg-[#8b2727] text-white border-[#8b2727]'
                      : 'bg-white text-[#1f2020] border-gray-300 hover:border-[#8b2727]'
                  }`}
                >
                  Tower A
                </button>
                <button
                  onClick={() => setSelectedTower('B')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedTower === 'B'
                      ? 'bg-[#8b2727] text-white border-[#8b2727]'
                      : 'bg-white text-[#1f2020] border-gray-300 hover:border-[#8b2727]'
                  }`}
                >
                  Tower B
                </button>
                <button
                  onClick={() => setSelectedTower('C')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedTower === 'C'
                      ? 'bg-[#8b2727] text-white border-[#8b2727]'
                      : 'bg-white text-[#1f2020] border-gray-300 hover:border-[#8b2727]'
                  }`}
                >
                  Tower C
                </button>
                <button
                  onClick={() => setSelectedTower('D')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedTower === 'D'
                      ? 'bg-[#8b2727] text-white border-[#8b2727]'
                      : 'bg-white text-[#1f2020] border-gray-300 hover:border-[#8b2727]'
                  }`}
                >
                  Tower D
                </button>
              </div>
            </div>

            {/* Right Side - Tower Image */}
            <div 
              className=""
              onClick={() => setModalImage(towerImages[selectedTower])}
              onKeyDown={(e) => e.key === 'Enter' && setModalImage(towerImages[selectedTower])}
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-[16/9] rotate-90 cursor-pointer">
                <Image
                  src={towerImages[selectedTower]}
                  alt={`Tower ${selectedTower} Plan`}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Title and Amenities List */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2020] mb-2">
                  Master <span className="text-[#8b2727]">Plan</span>
                </h2>
                <div className="w-16 h-1 bg-orange-500"></div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {masterPlanAmenities.map((amenity) => (
                  <div key={amenity.number} className="flex items-center gap-3">
                    <span className={`${amenity.color} font-bold text-lg min-w-[2rem]`}>
                      {amenity.number}
                    </span>
                    <span className="text-gray-700 text-base">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Master Plan Image */}
            <div 
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer hover:shadow-2xl transition-shadow"
              onClick={() => setModalImage('/BO/Master.jpg')}
              onKeyDown={(e) => e.key === 'Enter' && setModalImage('/BO/Master.jpg')}
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-[4/3] lg:aspect-square">
                <Image
                  src="/BO/Master.jpg"
                  alt="Master Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            {/* Section Header - Left Side */}
            <div className="flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2020] whitespace-nowrap">
                Unit <span className="text-[#8b2727]">Plan</span>
              </h2>
            </div>

            {/* Plan Type Selector - Right Side */}
            <div className="bg-white rounded-lg p-2">
              <button
                onClick={() => setSelectedPlan('2bhk')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPlan === '2bhk'
                    ? 'bg-[#8b2727] text-white'
                    : 'text-[#1f2020] hover:bg-gray-100'
                }`}
              >
                2 BHK
              </button>
              <button
                onClick={() => setSelectedPlan('3bhk')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ml-2 ${
                  selectedPlan === '3bhk'
                    ? 'bg-[#8b2727] text-white'
                    : 'text-[#1f2020] hover:bg-gray-100'
                }`}
              >
                3 BHK
              </button>
            </div>
          </div>

          {/* Plan Display */}
          <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Floor Plan Image */}
                  <div 
                    className="relative cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setModalImage(currentVariant.image)}
                    onKeyDown={(e) => e.key === 'Enter' && setModalImage(currentVariant.image)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="aspect-square lg:aspect-auto lg:h-full relative">
                      <Image
                        src={currentVariant.image}
                        alt={`${currentPlan.title} ${currentVariant.direction} Floor Plan`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2020] mb-2">
                        {currentVariant.totalArea}
                        <span className="text-lg font-medium text-gray-600 ml-2">({currentVariant.direction})</span>
                      </h3>
                      <p className="text-gray-600 text-lg">Homes designed for better living</p>
                    </div>

                    {/* Direction Selector */}
                    <div className="flex mb-8">
                      <button
                        onClick={() => setSelectedVariant('east')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 mr-2 ${
                          selectedVariant === 'east'
                            ? 'bg-[#8b2727] text-white'
                            : 'border border-gray-300 text-gray-600 hover:border-[#8b2727] hover:text-[#8b2727]'
                        }`}
                      >
                        EAST
                      </button>
                      <button
                        onClick={() => setSelectedVariant('west')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedVariant === 'west'
                            ? 'bg-[#8b2727] text-white'
                            : 'border border-gray-300 text-gray-600 hover:border-[#8b2727] hover:text-[#8b2727]'
                        }`}
                      >
                        WEST
                      </button>
                    </div>

                    {/* Area Specifications */}
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(currentVariant.specs).map(([label, value]) => (
                        <div key={label} className="text-center">
                          <h4 className="text-sm font-medium text-gray-600 mb-1">{label}</h4>
                          <div className="w-8 h-0.5 bg-[#8b2727] mx-auto mb-2"></div>
                          <p className="text-xl font-bold text-[#1f2020]">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrow - Right Side */}
              <button
                onClick={() => setSelectedVariant(selectedVariant === 'east' ? 'west' : 'east')}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-[#1f2020] hover:bg-gray-100 p-3 rounded-full transition-colors border border-gray-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          {/* Browse From Here Section */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2020] mb-8">
              Browse <span className="text-[#8b2727]">From here</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2 BHK Options */}
              <div>
                <h4 className="text-xl font-semibold text-[#1f2020] mb-4">2 BHK 1210 sq.ft</h4>
                <div className="flex items-center gap-4">
                  <div 
                    className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setSelectedPlan('2bhk');
                      setSelectedVariant('east');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && (setSelectedPlan('2bhk'), setSelectedVariant('east'))}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/BO/floor.png"
                        alt="2 BHK East"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <p className="font-medium text-[#1f2020] text-xs">EAST</p>
                  </div>
                  <div 
                    className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setSelectedPlan('2bhk');
                      setSelectedVariant('west');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && (setSelectedPlan('2bhk'), setSelectedVariant('west'))}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/BO/floor.png"
                        alt="2 BHK West"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <p className="font-medium text-[#1f2020] text-xs">WEST</p>
                  </div>
                </div>
              </div>

              {/* 3 BHK Options */}
              <div>
                <h4 className="text-xl font-semibold text-[#1f2020] mb-4">3 BHK 1475 sq.ft</h4>
                <div className="flex items-center gap-4">
                  <div 
                    className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setSelectedPlan('3bhk');
                      setSelectedVariant('east');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && (setSelectedPlan('3bhk'), setSelectedVariant('east'))}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/BO/floor.png"
                        alt="3 BHK East"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <p className="font-medium text-[#1f2020] text-xs">EAST</p>
                  </div>
                  <div 
                    className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setSelectedPlan('3bhk');
                      setSelectedVariant('west');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && (setSelectedPlan('3bhk'), setSelectedVariant('west'))}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src="/BO/floor.png"
                        alt="3 BHK West"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <p className="font-medium text-[#1f2020] text-xs">WEST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={modalImage}
              alt="Plan Preview"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
