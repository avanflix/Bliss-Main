"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogModal from "@/components/BlogModal";
import { blogs, Blog } from "@/Data/blogs";

export default function BlogsPage() {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-50">
                <section className="mx-auto max-w-7xl px-6 py-20">

                    {/* Header */}

                    <div className="mb-16 text-center">
                        <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-900">
                            Our Blogs
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-gray-900">
                            Latest Insights & Updates
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                            Explore expert articles, market trends, investment insights,
                            and everything you need to know about Hyderabad real estate.
                        </p>
                    </div>

                    {/* Blogs */}

                    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                onReadMore={setSelectedBlog}
                            />
                        ))}
                    </div>

                </section>
            </main>

            <BlogModal
                post={selectedBlog}
                isOpen={selectedBlog !== null}
                onClose={() => setSelectedBlog(null)}
            />

            <Footer />
        </>
    );
}