// src/app/components/BlogPost.tsx
'use client';

import Image from 'next/image';

interface BlogPostProps {
  title: string;
  image: string;
  content: string;
}

export default function BlogPost({ title, image, content }: BlogPostProps) {
  return (
    <div className="lg:flex lg:space-x-8">
      <article className="max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/2">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      </article>
      <article className="max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/2">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      </article>
    </div>
  );
}