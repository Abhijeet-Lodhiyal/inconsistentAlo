'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isHomePage = pathname === '/';

  return (
    <nav className={`${isHomePage ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <div className={`container mx-auto flex justify-between items-center p-4 ${isHomePage ? 'text-white' : 'text-black'}`}>
        <div className='text-4xl'>
          inconSistEntAlo
        </div>
        <div className='hidden md:flex space-x-4'>
          <Link href="/" className="py-2 px-4 hover:text-gray-300">Home</Link>
          <Link href="/blog" className="py-2 px-4 hover:text-gray-300">Blog</Link>
          <Link href="/gallery" className="py-2 px-4 hover:text-gray-300">Gallery</Link>
          <Link href="/about" className="py-2 px-4 hover:text-gray-300">About Me</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu} className='text-2xl focus:outline-none'>&times;</button>
        </div>
        <ul className='flex flex-col items-center justify-center h-full space-y-8'>
          <li><Link href="/" className="text-2xl text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/blog" className="text-2xl text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Blog</Link></li>
          <li><Link href="/gallery" className="text-2xl text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link href="/about" className="text-2xl text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About Me</Link></li>
        </ul>
      </div>
    </nav>
  );
}