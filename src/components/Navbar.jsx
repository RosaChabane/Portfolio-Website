import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-violet-400 sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center md:items-stretch md:justify-start sm:justify-start'>
            <span className='text-white font-semibold text-2xl'></span>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6 font-semibold'>
            <a href="#hero" className='text-white hover:text-black'>Home</a>
            <a href="#about" className='text-white hover:text-black'>About Me</a>
            <a href="#projects" className='text-white hover:text-black'>Projects</a>
            <a href="#contact" className='text-white hover:text-black'>Contact Me</a>
            <div className="h-6 w-px bg-white mx-2"></div>
            <a href="https://github.com/RosaChabane" className='text-white hover:text-black'>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/rosachabane/" className='text-white hover:text-black'>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                {isOpen ? (
                  <path className='text-violet-800' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='absolute top-20 right-0 w-40 bg-violet-800 z-50'>
            <div className='flex flex-col items-end space-y-2 p-4'>
              <a href="#hero" className='block px-3 py-2 text-base font-medium text-white border-b border-gray-500 w-full text-center'>Home</a>
              <a href="#about" className='block px-3 py-2 text-base font-medium text-white border-b border-gray-500 w-full text-center'>About Me</a>
              <a href="#projects" className='block px-3 py-2 text-base font-medium text-white border-b border-gray-500 w-full text-center'>Projects</a>
              <a href="#contact" className='block px-3 py-2 text-base font-medium text-white border-b border-gray-500 w-full text-center'>Contact Me</a>
              <div className='flex space-x-4 mt-4 mx-auto'>
                <a href="https://github.com/RosaChabane" className='text-white block px-3 py-2'>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/rosachabane/" className='text-white block py-2'>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





