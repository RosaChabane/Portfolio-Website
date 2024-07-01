import React, { useEffect, useRef } from 'react';
import pic from '../assets/retro.png';

const Hero = ({
    title = "I'm Rosa Chabane",
    subtitle = "SOFTWARE ENIGNEER",
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
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg-mt-0'>
          <h1 ref={h1Ref} className='text-4xl font-extrabold text-black sm:text-5xl md:text-7xl typing-effect'>
            {title}
          </h1>
          <p className='my-4 text-3xl md:text-4xl lg:text-4xl text-black text-center lg:text-left'>{subtitle}</p>
        </div>
        <div>
            <img className='w-full lg:w-auto' src={pic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;