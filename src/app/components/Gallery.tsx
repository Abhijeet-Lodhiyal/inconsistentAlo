// src/app/components/Gallery.tsx
'use client';

import Image from 'next/image';

export default function Gallery() {
    const images = [
      '/images/pc.jpeg',
      '/images/mobile.jpg',
      '/images/mobile.jpg',
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold my-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-64 sm:h-80 md:h-96">
              <Image 
                src={img} 
                alt={`Gallery Image ${index + 1}`} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }