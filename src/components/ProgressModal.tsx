'use client';

import Image from 'next/image';
import { X } from 'lucide-react';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProgressModal = ({ isOpen, onClose }: ProgressModalProps) => {
  if (!isOpen) return null;

  const progressImages = [
    
    { phase: 4, src: '/BO/Phase-4/1.jpeg', alt: 'Bliss One Progress - Phase 4 Image 1' },
    { phase: 4, src: '/BO/Phase-4/2.jpeg', alt: 'Bliss One Progress - Phase 4 Image 2' },
    { phase: 4, src: '/BO/Phase-4/3.jpeg', alt: 'Bliss One Progress - Phase 4 Image 3' },
    { phase: 4, src: '/BO/Phase-4/4.jpeg', alt: 'Bliss One Progress - Phase 4 Image 4' },
    // Phase 1
    { phase: 1, src: '/BO/Phase-1/1.jpg', alt: 'Bliss One Progress - Phase 1 Image 1' },
    { phase: 1, src: '/BO/Phase-1/2.jpg', alt: 'Bliss One Progress - Phase 1 Image 2' },
    { phase: 1, src: '/BO/Phase-1/3.jpg', alt: 'Bliss One Progress - Phase 1 Image 3' },
    // Phase 2
    { phase: 2, src: '/BO/Phase-2/1.jpg', alt: 'Bliss One Progress - Phase 2 Image 1' },
    { phase: 2, src: '/BO/Phase-2/2.jpg', alt: 'Bliss One Progress - Phase 2 Image 2' },
    // Phase 3
    { phase: 3, src: '/BO/Phase-3/1.jpg', alt: 'Bliss One Progress - Phase 3 Image 1' },
    { phase: 3, src: '/BO/Phase-3/2.jpg', alt: 'Bliss One Progress - Phase 3 Image 2' },

  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center z-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1f2020]">
            Bliss One <span className="text-[#8b2727]">Construction Progress</span>
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 lg:p-8">

          <div className="mb-8">
            {/* <h4 className="text-lg sm:text-xl font-bold text-[#8b2727] mb-4">Phase 1</h4> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {progressImages.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ProgressModal;

