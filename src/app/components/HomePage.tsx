'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = windowWidth >= 768 ? '/images/pc.jpeg' : '/images/mobile.jpg';

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <Image
        src={imageSrc}
        alt="Home background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="w-full h-full object-cover"
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 3840px"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white mt-16"> {/* Added mt-16 to push content down */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl md:text-2xl">Discover amazing content and experiences</p>
        </div>
      </div>
    </div>
  );
}