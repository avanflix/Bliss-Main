import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/Data/blogs";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Script from "next/script";

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
      title: "Blog Not Found | Bliss Ventures",
    };
  }

  const url = `https://www.blissventures.co/blogs/${blog.slug}`;

  return {
    title: blog.title,

    description: blog.excerpt,

    keywords: [
      "Bliss Ventures",
      "Hyderabad Real Estate",
      "Apartments in Hyderabad",
      "Real Estate Investment",
      "Ghatkesar",
      "Bliss One",
      blog.title,
      blog.category,
    ],

    authors: [
      {
        name: "Bliss Ventures",
        url: "https://www.blissventures.co",
      },
    ],

    creator: "Bliss Ventures",

    publisher: "Bliss Ventures",

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "article",

      locale: "en_IN",

      url,

      siteName: "Bliss Ventures",

      title: blog.title,

      description: blog.excerpt,

      publishedTime: blog.date,

      modifiedTime: blog.date,

      authors: ["Bliss Ventures"],

      images: [
        {
          url: `https://www.blissventures.co${blog.image}`,
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

      creator: "@blissventures",

      images: [`https://www.blissventures.co${blog.image}`],
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

  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <Script
        id={`blog-schema-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",

              headline: blog.title,
              description: blog.excerpt,

              image: [`https://www.blissventures.co${blog.image}`],

              datePublished: new Date(blog.date).toISOString(),
              dateModified: new Date(blog.date).toISOString(),

              author: {
                "@type": "Organization",
                name: "Bliss Ventures",
              },

              publisher: {
                "@type": "Organization",
                name: "Bliss Ventures",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.blissventures.co/logo.png",
                },
              },

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.blissventures.co/blogs/${blog.slug}`,
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.blissventures.co",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blogs",
                  item: "https://www.blissventures.co/blogs",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: blog.title,
                  item: `https://www.blissventures.co/blogs/${blog.slug}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: blog.faqs.map((faq) => ({
                "@type": "Question",

                name: faq.question,

                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }
          ]),
        }}
      />

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

          <nav className="mb-6 flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link href="/blogs" className="hover:text-primary transition">
              Blogs
            </Link>

            <span className="mx-2">/</span>

            <span className="font-medium text-gray-900">
              {blog.title}
            </span>
          </nav>

          {/* Category */}

          {/* <span className="inline-block rounded-full bg-red-100 px-4 py-2 px-2 text-sm font-semibold text-red-900">
            {blog.category}
          </span> */}

          {/* Title */}

          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {blog.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            {blog.excerpt}
          </p>
          {/* Meta */}

          <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500">

            <span className="rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold capitalize">
              {blog.category}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={18} />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={18} />
              {blog.readTime}
            </span>

            <span className="flex items-center gap-2">
              <User size={18} />
              {blog.author}
            </span>

          </div>

          {/* Featured Image */}

          <div className="relative mt-10 h-[280px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src={blog.image}
              alt={`${blog.title} | Bliss Ventures Hyderabad Real Estate`}
              fill
              sizes="(max-width:768px) 100vw, 1200px"
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Article */}

          <div className="mt-14 rounded-3xl bg-white p-10 shadow-xl">

            <article className="prose prose-lg lg:prose-xl max-w-none whitespace-pre-line leading-8">
              {blog.fullDescription}
            </article>

          </div>

          <div className="mt-16 rounded-3xl border bg-white p-8">

            <h3 className="text-xl font-semibold">
              About the Author
            </h3>

            <p className="mt-3 text-gray-600">
              Bliss Ventures shares expert insights on real estate,
              gated communities, investment opportunities,
              and home-buying tips in Hyderabad.
            </p>

          </div>

          {/* FAQ Section */}

          <section className="mt-16">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <p className="mt-3 text-gray-600">
                Find answers to the most common questions about this topic.
              </p>
            </div>

            <div className="space-y-5">
              {blog.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 flex items-center justify-between">
                    {faq.question}

                    <span className="text-2xl font-light transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

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

          <section className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900">
              Related Articles
            </h2>

            <p className="mt-2 text-gray-600">
              Continue reading more insights from Bliss Ventures.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} | Bliss Ventures Blog`}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 400px"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary capitalize">
                      {item.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-primary transition">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span>Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </section>
      </main>

      <Footer />
    </>
  );
}