'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative'>
      <div className='flex flex-row justify-between items-center m-4 p-8'>
        <div className='text-4xl'>
          inconSistEntAlo
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed inset-x-0 top-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:relative md:transform-none md:shadow-none md:bg-transparent`}>
        <div className='flex justify-end p-4 md:hidden'>
          <button onClick={toggleMenu} className='text-2xl focus:outline-none'>&times;</button>
        </div>
        <ul className='md:flex md:space-x-4'>
          <li><Link href="/" className="block py-2 px-4 text-blue-500 hover:text-blue-700">Home</Link></li>
          <li><Link href="/blog" className="block py-2 px-4 text-green-500 hover:text-green-700">Blog</Link></li>
          <li><Link href="/gallery" className="block py-2 px-4 text-purple-500 hover:text-purple-700">Gallery</Link></li>
          <li><Link href="/about" className="block py-2 px-4 text-red-500 hover:text-red-700">About Me</Link></li>
        </ul>
      </div>
    </nav>
  );
}