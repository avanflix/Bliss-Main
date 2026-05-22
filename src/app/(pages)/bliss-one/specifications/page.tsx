'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function SpecificationsPage() {
  const [activeTab, setActiveTab] = useState<'flat' | 'building'>('flat');
  const [activeSection, setActiveSection] = useState('');

  const flatSpecifications = {
    flooring: {
      title: 'Flooring',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Drawing, Bedroom',
          description: '600 X 600 mm size double-charged, vitrified tiles of reputed brand with spacer joints'
        },
        {
          subtitle: 'Living, Dining, Kitchen',
          description: '600 X 600 mm size double-charged, vitrified tiles of reputed brand with spacer joints'
        },
        {
          subtitle: 'Balcony/Bathrooms',
          description: 'Anti-skid vitrified/ceramic tiles with spacer joints'
        },
        {
          subtitle: 'Utility Flooring',
          description: 'Anti-skid vitrified/ceramic tiles with spacer joints'
        }
      ]
    },
    walls: {
      title: 'Walls',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Internal Wall',
          description: '4" or 8" thick AAC/CC/Clay Blocks'
        },
        {
          subtitle: 'External Wall',
          description: '8" thick AAC/CC/Clay Blocks'
        }
      ]
    },
    bathrooms: {
      title: 'All Bathrooms',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Wall Tiles',
          description: 'Designer ceramic tiles up to 7 feet height'
        },
        {
          subtitle: 'Sanitary Fittings',
          description: 'High-quality branded CP fittings and fixtures'
        },
        {
          subtitle: 'WC & Basin',
          description: 'Premium quality branded sanitary ware'
        }
      ]
    },
    kitchen: {
      title: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Kitchen Platform',
          description: 'Granite platform with stainless steel sink'
        },
        {
          subtitle: 'Wall Tiles',
          description: 'Ceramic tiles up to 2 feet above platform'
        }
      ]
    },
    windows: {
      title: 'Windows',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Window Frames',
          description: 'UPVC/Aluminum powder coated frames with MS grills'
        },
        {
          subtitle: 'Glass',
          description: 'Clear glass with safety film'
        }
      ]
    },
    doors: {
      title: 'Doors',
      image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Main Door',
          description: 'Teak wood frame with decorative laminated flush door'
        },
        {
          subtitle: 'Internal Doors',
          description: 'Sal wood frame with flush doors'
        },
        {
          subtitle: 'Hardware',
          description: 'Quality door handles and hinges'
        }
      ]
    },
    electrical: {
      title: 'Electrical',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Wiring',
          description: 'Concealed copper wiring of reputed make'
        },
        {
          subtitle: 'Switches & Sockets',
          description: 'Modular switches and sockets of reputed brand'
        },
        {
          subtitle: 'Points',
          description: 'Adequate light and power points in all rooms'
        }
      ]
    },
    ceiling: {
      title: 'Ceiling Finishes',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'All Ceilings',
          description: 'Gypsum/POP finish with plastic emulsion paint'
        }
      ]
    },
    wallFinishing: {
      title: 'Wall Finishing',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Internal Walls',
          description: 'Smooth wall putty finish with plastic emulsion paint'
        },
        {
          subtitle: 'External Walls',
          description: 'Weather-proof exterior paint'
        }
      ]
    },
    ventilators: {
      title: 'Ventilators',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Ventilation',
          description: 'Exhaust fans in kitchen and bathrooms'
        }
      ]
    },
    telephone: {
      title: 'TV/Telephone',
      image: 'https://images.unsplash.com/photo-1593078165406-fb0c3cea8053?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Provisions',
          description: 'TV and telephone points in living room and bedrooms'
        }
      ]
    },
    waterproofing: {
      title: 'Waterproofing',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Bathrooms & Terrace',
          description: 'Quality waterproofing treatment'
        }
      ]
    }
  };

  const buildingSpecifications = {
    powerBackup: {
      title: 'Power Backup',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Generator',
          description: '100% power backup for common areas and emergency lights in flats'
        }
      ]
    },
    lpg: {
      title: 'LPG',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Gas Supply',
          description: 'Supply of piped natural gas from sub-station / supply of gas from centralized gas bank to all individual flats with prepaid gas meters.'
        }
      ]
    },
    lifts: {
      title: 'Lifts',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Elevators',
          description: 'High-speed automatic passenger lifts with ARD facility'
        }
      ]
    },
    security: {
      title: 'Security',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: '24/7 Security',
          description: 'Manned security with CCTV surveillance'
        },
        {
          subtitle: 'Access Control',
          description: 'Video door phone for each flat'
        }
      ]
    },
    structure: {
      title: 'Structure',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Construction',
          description: 'RCC framed structure as per approved plans'
        },
        {
          subtitle: 'Foundation',
          description: 'Strong foundation designed for earthquake resistance'
        }
      ]
    },
    fireSafety: {
      title: 'Fire Safety',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Fire Fighting',
          description: 'Complete fire fighting equipment as per norms'
        }
      ]
    },
    billing: {
      title: 'Billing System',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Metering',
          description: 'Individual water and electricity meters'
        }
      ]
    },
    corridor: {
      title: 'Corridor Flooring',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Common Area Flooring',
          description: 'Vitrified tiles in all common areas and corridors'
        }
      ]
    },
    staircase: {
      title: 'Staircase',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Staircase',
          description: 'Granite treads and MS railings with quality finish'
        }
      ]
    },
    wtp: {
      title: 'WTP and STP',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Water Treatment',
          description: 'Water treatment plant for clean water supply'
        },
        {
          subtitle: 'Sewage Treatment',
          description: 'Sewage treatment plant for eco-friendly waste management'
        }
      ]
    },
    external: {
      title: 'External Finishing',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      items: [
        {
          subtitle: 'Building Exterior',
          description: 'Premium external texture paint with architectural features'
        }
      ]
    }
  };

  const flatSections = [
    { id: 'flooring', label: 'Flooring' },
    { id: 'walls', label: 'Walls' },
    { id: 'bathrooms', label: 'All Bathrooms' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'windows', label: 'Windows' },
    { id: 'doors', label: 'Doors' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'ceiling', label: 'Ceiling Finishes' },
    { id: 'wallFinishing', label: 'Wall Finishing' },
    { id: 'ventilators', label: 'Ventilators' },
    { id: 'telephone', label: 'TV/Telephone' },
    { id: 'waterproofing', label: 'Waterproofing' }
  ];

  const buildingSections = [
    { id: 'powerBackup', label: 'Power back up' },
    { id: 'lpg', label: 'LPG' },
    { id: 'lifts', label: 'Lifts' },
    { id: 'security', label: 'Security' },
    { id: 'structure', label: 'Structure' },
    { id: 'fireSafety', label: 'Fire safety' },
    { id: 'billing', label: 'Billing system' },
    { id: 'corridor', label: 'Corridor flooring' },
    { id: 'staircase', label: 'Staircase' },
    { id: 'wtp', label: 'WTP and STP' },
    { id: 'external', label: 'External Finishing' }
  ];

  const currentSections = activeTab === 'flat' ? flatSections : buildingSections;
  const currentData = activeTab === 'flat' ? flatSpecifications : buildingSpecifications;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = currentSections.map(section => section.id);
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSections]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs */}
      <section className="sticky top-10 z-40 bg-gray-50 py-4">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md px-4 py-4">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('flat')}
                className={`px-8 py-2.5 rounded-full font-normal transition-all duration-300 ${
                  activeTab === 'flat'
                    ? 'bg-[#8b2727] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Flat Specifications
              </button>
              <button
                onClick={() => setActiveTab('building')}
                className={`px-8 py-2.5 rounded-full font-normal transition-all duration-300 ${
                  activeTab === 'building'
                    ? 'bg-[#8b2727] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Building Specifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-40">
                <nav className="space-y-2">
                  {currentSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === section.id
                          ? 'text-[#8b2727] underline decoration-2 underline-offset-4 font-medium'
                          : 'text-gray-600 font-normal hover:bg-gray-100 hover:text-[#8b2727]'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area - Scrollable */}
            <div className="lg:col-span-3 space-y-8">
              {/* Download Button */}
              <div className="flex justify-end">
                <button className="bg-[#8b2727] text-white px-6 py-2.5 rounded-full font-normal text-sm flex items-center gap-2 hover:bg-[#6d1e1e] transition-colors shadow-lg">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>

              {/* All Specifications */}
              {Object.entries(currentData).map(([key, content]) => (
                <div key={key} id={key} className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-40">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Side - Details */}
                    <div className="p-8 lg:p-12">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1f2020] mb-3">
                        {content.title}
                      </h2>
                      <div className="w-12 h-1 bg-[#8b2727] mb-6"></div>

                      <div className="space-y-5">
                        {content.items.map((item) => (
                          <div key={item.subtitle} className="space-y-1.5">
                            <h3 className="text-base font-medium text-[#1f2020]">
                              {item.subtitle}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-normal">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-64 lg:h-auto min-h-[400px]">
                      <Image
                        src={content.image}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

