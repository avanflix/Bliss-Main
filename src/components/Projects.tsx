'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects as allProjects } from '@/Data/projects';

const Projects = () => {
  // Show only featured projects (first 3)
  const projects = allProjects.slice(0, 3).map(project => ({
    id: project.id,
    name: project.name,
    location: project.location,
    status: project.status,
    image: project.image,
    description: project.description,
    hasBrochure: !!project.brochure,
    orientation: project.orientation || 'landscape' // Default to landscape if not specified
  }));

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-3 sm:mb-4">
            Our <span className="text-[#8b2727]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From premium residential enclaves to thoughtfully planned farmland communities,
            each project reflects our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                project.orientation === 'portrait'
                  ? 'aspect-[3/4] sm:aspect-[4/5]'
                  : 'aspect-[4/3] sm:aspect-[16/9]'
              }`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${
                    project.status.includes('Completed')
                      ? 'bg-green-500 text-white'
                      : project.status.includes('Under Construction')
                      ? 'bg-blue-500 text-white'
                      : 'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1f2020] mb-2 sm:mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  {project.location}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects?project=${project.id}`}
                    className="bg-[#8b2727] text-white px-2 py-2 rounded-lg font-medium hover:bg-[#6d1e1e] transition-colors duration-300 text-sm"
                  >
                    Know More
                  </Link>
                  {project.hasBrochure && (
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        if (project.id === 'bliss-one') {
                          link.href = '/brouchers/Blissone_Floor Plans_Handout.pdf';
                        } else if (project.id === 'bliss-bilva') {
                          link.href = '/BB_FLYER.pdf';
                        } else if (project.id === 'sri-bliss') {
                          link.href = '/SB_FLYER.pdf';
                        }
                        link.download = `${project.name.replace(/\s+/g, '_')}_Brochure.pdf`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="border-2 border-[#8b2727] text-[#8b2727] px-2 py-2 rounded-lg font-medium hover:bg-[#8b2727] hover:text-white transition-colors duration-300 text-sm"
                    >
                      View Brochure
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/projects"
            className="inline-block border-2 border-[#8b2727] text-[#8b2727] px-6 py-3 rounded-lg font-medium hover:bg-[#8b2727] hover:text-white transition-colors duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
