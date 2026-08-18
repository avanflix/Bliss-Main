import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { projects } from '@/Data/projects';

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description:
        'The requested Bliss Ventures project could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: project.seo?.title || project.name,

    description:
      project.seo?.description ||
      project.description,

    keywords: project.seo?.keywords || [],

    alternates: {
      canonical: `/projects/${project.id}`,
    },

    openGraph: {
      type: 'website',

      title:
        project.seo?.title ||
        project.name,

      description:
        project.seo?.description ||
        project.description,

      url: `/projects/${project.id}`,

      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} - ${project.location}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title:
        project.seo?.title ||
        project.name,

      description:
        project.seo?.description ||
        project.description,

      images: [project.image],
    },
  };
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((project) => project.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative">
                    <div className="relative h-[50vh] min-h-[400px] w-full">
                        <Image
                            src={project.image}
                            alt={`${project.name} - ${project.location}`}
                            fill
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/50" />

                        <div className="absolute inset-0 flex items-center">
                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
                                <p className="mb-3 text-sm font-medium uppercase tracking-wider">
                                    {project.status}
                                </p>

                                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                    {project.name}
                                </h1>
                                <p className="mt-4 text-lg sm:text-xl">
                                    {project.seoContent?.heading}
                                </p>

                                <p className="mt-4 text-lg sm:text-xl">
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Information */}
                <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-3">

                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <h2 className="mb-6 text-3xl font-bold text-[#1f2020]">
                                    {project.seoContent?.aboutHeading}
                                </h2>

                                <p className="mb-6 text-lg leading-8 text-gray-600">
                                    {project.seoContent?.introduction}
                                </p>

                                <div className="whitespace-pre-line text-base leading-8 text-gray-600">
                                    {project.fullDescription}
                                </div>
                                {/* Specifications */}
                                {project.specs && project.specs.length > 0 && (
                                    <div className="mt-10">
                                        <h2 className="mb-6 text-2xl font-bold text-[#1f2020]">
                                            {project.seoContent?.highlightsHeading}
                                        </h2>
                                        <section className="mt-12">
                                            <h2 className="mb-4 text-2xl font-bold text-[#1f2020]">
                                                {project.seoContent?.locationHeading}
                                            </h2>

                                            <p className="text-base leading-8 text-gray-600">
                                                {project.seoContent?.locationDescription}
                                            </p>
                                        </section>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {project.specs.map((spec, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                                                >
                                                    <p className="text-gray-700">
                                                        {spec}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Summary */}
                            <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6">
                                <h2 className="mb-6 text-xl font-bold text-[#1f2020]">
                                    Project Details
                                </h2>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Project
                                        </p>
                                        <p className="font-medium text-gray-900">
                                            {project.name}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Location
                                        </p>
                                        <p className="font-medium text-gray-900">
                                            {project.location}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Status
                                        </p>
                                        <p className="font-medium text-gray-900">
                                            {project.status}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Year
                                        </p>
                                        <p className="font-medium text-gray-900">
                                            {project.year}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href={`/contact-us?project=${encodeURIComponent(
                                            project.name
                                        )}&location=${encodeURIComponent(
                                            project.location
                                        )}&brochure=${encodeURIComponent(
                                            project.brochure || ''
                                        )}`}
                                        className="block rounded-lg bg-[#8b2727] px-6 py-3 text-center font-medium text-white transition hover:bg-[#6d1e1e]"
                                    >
                                        Get In Touch
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Full Width Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div className="w-full max-w-[1600px] mx-auto">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl font-bold text-[#1f2020] sm:text-4xl">
                                    {project.name} Gallery
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    Explore images from {project.name}.
                                </p>
                            </div>

                            {/* Full-width responsive grid */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {project.gallery.map((image) => (
                                    <div
                                        key={image.id}
                                        className="relative w-full overflow-hidden rounded-xl bg-white shadow-md"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={
                                                image.alt ||
                                                `${project.name} - project image`
                                            }
                                            width={1200}
                                            height={900}
                                            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                                            sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 50vw,
                                33vw
                            "
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {/* Back to Projects */}
                <section className="px-4 py-10 text-center">
                    <Link
                        href="/projects"
                        className="font-medium text-[#8b2727] hover:underline"
                    >
                        ← Back to All Projects
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}