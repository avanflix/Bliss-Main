'use client';

import Navbar from '@/components/Navbar';
import ProjectModal from '@/components/ProjectModal';
import ProgressModal from '@/components/ProgressModal';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { projects } from '@/Data/projects';

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const searchParams = useSearchParams();

  // Handle URL parameter to open modal on page load
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Our <span className="text-[#8b2727]">Projects</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of thoughtfully crafted developments — from premium residential
            communities to innovative farmland projects, each designed with excellence and sustainability in mind.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 lg:space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} id={project.id} className={`flex flex-col lg:flex-row gap-6 sm:gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse lg:gap-12' : 'lg:gap-16'
            }`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <div className={`relative rounded-lg overflow-hidden shadow-xl ${
                  project.orientation === 'portrait'
                    ? 'aspect-[3/4] sm:aspect-[4/5] h-150 w-100'
                    : 'aspect-[4/3] sm:aspect-[16/9] lg:h-80 xl:h-96'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                      project.status.includes('Completed')
                        ? 'bg-green-500 text-white'
                        : project.status.includes('Under Construction')
                        ? 'bg-blue-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 text-sm rounded">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${
                index % 2 === 0 ? 'lg:flex-1' : 'lg:w-1/2'
              } flex flex-col justify-center`}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1f2020] mb-2">
                  {project.name}
                </h2>
                <p className="text-[#8b2727] font-medium text-sm sm:text-base mb-3 sm:mb-4">
                  {project.location}
                </p>

                <div className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                  {project.description}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-[#8b2727] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors duration-300 text-center"
                  >
                    Know More
                  </button>
                  <a
                    href={`/contact-us?project=${encodeURIComponent(project.name)}&location=${encodeURIComponent(project.location)}&brochure=${encodeURIComponent(project.brochure || '')}`}
                    className="border-2 border-[#8b2727] text-[#8b2727] px-6 py-3 rounded-lg font-medium hover:bg-[#8b2727] hover:text-white transition-colors duration-300 text-center"
                  >
                    Get In Touch
                  </a>
                  {project.id === 'bliss-one' && (
                    <button
                      onClick={() => setIsProgressModalOpen(true)}
                      className="bg-[#8b2727] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
                    >
                      See Progress
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#8b2727] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90">
            Connect with our team to explore investment opportunities or learn more about our upcoming developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-[#8b2727] px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Contact Us Today
            </Link>
            <Link
              href="tel:+919800014477"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#8b2727] transition-colors duration-300 text-sm sm:text-base"
            >
              Call +91-9800014477
            </Link>
          </div>
        </div>
      </section>
        <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Progress Modal */}
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
      />
    </div>
  );
}

export default function ProjectsPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsPage />
    </Suspense>
  );
}