import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { Blog } from "@/Data/blogs";
import Link from "next/link";

interface Props {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: Props) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200">

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">

        <div className="mb-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">

          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {blog.date}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={16} />
            {blog.readTime}
          </span>

        </div>

        <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 transition group-hover:text-red-900">

          {blog.title}

        </h2>

        <p className="mb-8 flex-1 text-lg leading-8 text-gray-600">

          {blog.excerpt}

        </p>

        <Link
          href={`/blogs/${blog.slug}`}
          className="mt-auto w-fit rounded-full bg-red-900 px-7 py-3 font-semibold text-white transition hover:bg-red-800"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}