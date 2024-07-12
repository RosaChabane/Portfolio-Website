import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-navColor sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center md:items-stretch md:justify-start sm:justify-start'>
            <span className='text-white font-semibold text-2xl'>RC</span>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6 font-semibold'>
            <a href="#" className='text-white'>Home</a>
            <a href="#about" className='text-white'>About Me</a>
            <a href="#projects" className='text-white'>Projects</a>
            <a href="#contact" className='text-white'>Contact Me</a>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <div className='flex flex-col items-start space-y-2 p-4 bg-navColor'>
              <a href="#home" className='block px-3 py-2 rounded-md text-base font-medium text-white'>Home</a>
              <a href="#about" className='block px-3 py-2 rounded-md text-base font-medium text-white'>About Me</a>
              <a href="#projects" className='block px-3 py-2 rounded-md text-base font-medium text-white'>Projects</a>
              <a href="#contact" className='block px-3 py-2 rounded-md text-base font-medium text-white'>Contact Me</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

