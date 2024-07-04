import React, { useEffect, useRef } from 'react';
import pic from '../assets/retro.png';
import ScrollingSkillCards from './ScrollingSkillCards'; // Import the scrolling background component

const Hero = ({
    title = "I'm Rosa Chabane",
    subtitle = "SOFTWARE ENGINEER",
}) => {

    const h1Ref = useRef(null);

    useEffect(() => {
    const timer = setTimeout(() => {
      if (h1Ref.current) {
        h1Ref.current.style.borderRight = 'none';
      }
    }, 3500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative py-20 overflow-hidden'>
      <ScrollingSkillCards />
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between z-10'>
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg-mt-0 hero-text-bg'>
          <h1 ref={h1Ref} className='text-4xl font-extrabold text-white sm:text-5xl md:text-7xl typing-effect text-outline'>
            {title}
          </h1>
          <span className='my-4 text-3xl md:text-4xl lg:text-4xl text-white text-center lg:text-left text-outline'>{subtitle}</span>
        </div>
        <div>
            <img className='w-full lg:w-auto' src={pic} alt="" />
        </div>
      </div>
      <div className='absolute inset-0 bg-gray-100 opacity-50 z-0'></div>
    </section>
  );
};

export default Hero;
