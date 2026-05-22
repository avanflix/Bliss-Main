import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Award, Users, TrendingUp } from 'lucide-react';

const BoardMembers = () => {
  const boardMembers = [
    {
      id: 'chandra-sekhar',
      name: 'Dr. E.L. Chandra Sekhar',
      position: 'Chairman',
      image: '/members/chairman.png',
      education: 'Ph.D., Academic Excellence',
      experience: 'Decades of Academic Excellence',
      description: 'Visionary mentor with decades of academic excellence.'
    },
    {
      id: 'madhuri',
      name: 'Mrs. G V Madhuri',
      position: 'Founder & CEO',
      image: '/members/leader.png',
      education: 'MBA (Finance) from JNTU-H',
      experience: '20+ Years in Real Estate & Finance',
      description: 'Driving force behind growth, innovation, and sustainability.'
    },
    {
      id: 'niharika',
      name: 'Mrs. Niharika Emmadi',
      position: 'CFO',
      image: '/members/CFO.png',
      education: 'Finance & Business Administration',
      experience: 'Strategic Financial Leadership',
      description: 'Strategist ensuring financial strength and operational excellence.'
    },
    {
      id: 'abhishek',
      name: 'Dr. Abhishek Emmadi',
      position: 'Executive Director',
      image: '/members/ED.png',
      education: 'MBBS, Medical Professional',
      experience: 'Dynamic Healthcare & Business Executive',
      description: 'Dynamic executor overseeing construction and vendor partnerships.'
    },
    {
      id: 'rama-murthy',
      name: 'Mr. Dasari Rama Murthy',
      position: 'Project Director',
      image: '/members/PD.png',
      education: 'Project Management',
      experience: 'Expert Project Leadership',
      description: 'Statutory liasioning and bringing execution excellence to the organization.'
    },
    {
      id: 'sreekanth',
      name: 'Mr. Sreekanth Mullapudi',
      position: 'Head – Project Supervision & PMC',
      image: '/members/Head.png',
      education: 'Construction Management',
      experience: 'Quality Assurance & Project Management',
      description: 'Ensuring quality standards and timely milestone completion.'
    }
  ];

  const partners = [
    {
      name: 'MGRK Associates',
      role: 'Auditing Partners',
      description: 'Trusted auditing partners ensuring financial compliance and integrity.'
    },
    {
      name: 'GV Associates',
      role: 'Design Collaborators',
      description: 'Design collaborators bringing aesthetic vision and functional excellence.'
    },
    {
      name: 'VisionCraft',
      role: 'Creative Team',
      description: 'Creative team behind immersive project walkthroughs.'
    },
    {
      name: 'AvanFlix',
      role: 'Branding Agency',
      description: 'Branding agency shaping the Bliss identity across digital and print.'
    },
    {
      name: 'Microscapes',
      role: 'Landscape Designers',
      description: 'Landscape design specialists for Bliss One, crafting serene green spaces.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="mt-16">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Board <span className="text-[#8b2727]">Members</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
            Meet the visionary leaders and strategic partners driving Bliss Ventures forward.
            Our diverse team brings expertise from finance, healthcare, academics, and real estate development.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {boardMembers.map((member) => (
              <div key={member.id} className="group relative h-80 sm:h-96 bg-white hover:translate-y-[-10px] transition-all duration-500 ease-in-out rounded-lg shadow-lg overflow-hidden">
                {/* Main card content */}
                <div className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1f2020] mb-1 sm:mb-2">{member.name}</h3>
                    {member.position === 'Founder & CEO' && (
                      <p className="text-[#8b2727] font-medium text-xs sm:text-sm">Managing Director</p>
                    )}
                    <p className="text-[#8b2727] font-medium text-xs sm:text-sm">{member.position}</p>
                  </div>

                  <div className="relative w-32 sm:w-40 h-32 sm:h-40 mb-3 sm:mb-4 rounded-full overflow-hidden border-4 border-[#8b2727]/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center text-xs text-gray-600">
                      <Award className="w-3 h-3 mr-1 text-[#8b2727]" />
                      <span>{member.education.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-600">
                      <Users className="w-3 h-3 mr-1 text-[#8b2727]" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Hover description slide-up */}
                <div className="absolute bottom-0 left-0 right-0 
                bg-black/60 backdrop-blur-sm text-white p-4 
                transform translate-y-full group-hover:translate-y-0 
                transition-all duration-500 ease-in-out">
                  <p className="text-sm leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Collaborators */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1f2020] mb-3 sm:mb-4">
              Partners & <span className="text-[#8b2727]">Collaborators</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Our trusted partners and collaborators who contribute their expertise to bring our vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2 sm:mb-3">
                  <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-[#8b2727] mr-2 sm:mr-3" />
                  <h3 className="text-base sm:text-lg font-semibold text-[#1f2020]">{partner.name}</h3>
                </div>
                <p className="text-[#8b2727] text-xs sm:text-sm font-medium mb-1 sm:mb-2">{partner.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#8b2727] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Connect With Our Leadership Team
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90">
            Interested in partnership opportunities or want to learn more about our vision?
            We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-white text-[#8b2727] px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a
              href="mailto:info@blissventures.co"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#8b2727] transition-colors text-sm sm:text-base"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoardMembers;
