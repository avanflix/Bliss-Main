import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/Data/blogs";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,

    alternates: {
      canonical: `https://blissventures.co/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://blissventures.co/blogs/${blog.slug}`,
      siteName: "Bliss Ventures",
      type: "article",

      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">
        <section className="mx-auto max-w-5xl px-6 pt-32 pb-20">

          {/* Back Button */}

          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-red-900 hover:text-red-900"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>

          {/* Category */}

          {/* <span className="inline-block rounded-full bg-red-100 px-4 py-2 px-2 text-sm font-semibold text-red-900">
            {blog.category}
          </span> */}

          {/* Title */}

          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {blog.title}
          </h1>

          {/* Meta */}

          <div className="mt-6 flex flex-wrap gap-6 text-gray-500">

            <span className="flex items-center gap-2">
              <User size={18} />
              {blog.author}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={18} />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={18} />
              {blog.readTime}
            </span>

          </div>

          {/* Featured Image */}

          <div className="relative mt-10 h-[280px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* Article */}

          <article className="prose prose-lg max-w-none mt-12 whitespace-pre-line rounded-3xl bg-white p-8 shadow-lg">

            {blog.fullDescription}

          </article>

          {/* Bottom CTA */}

          <div className="mt-16 rounded-3xl bg-[#8b2727] p-10 text-center text-white">

            <h2 className="text-3xl font-bold">
              Looking for Your Dream Home?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Explore premium gated community apartments by Bliss Ventures and
              discover modern living with exceptional connectivity and world-class
              amenities.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#8b2727] transition hover:scale-105"
            >
              Book a Site Visit
            </Link>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}