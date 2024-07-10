import React, { useEffect, useRef } from 'react';
import ScrollingSkillCards from './ScrollingSkillCards'; // Import the scrolling background component

const Hero = ({
    title = "Rosa Chabane",
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
        <section className='relative py-20 overflow-hidden flex items-center justify-center min-h-[75vh]'>
            <ScrollingSkillCards />
            <div className='relative flex flex-col items-center justify-center z-10'>
                <div className='bg-pink-400 bg-opacity-100 p-10 flex flex-col items-center justify-center hero-div'>
                    <h1 ref={h1Ref} className='text-4xl font-extrabold text-white sm:text-5xl md:text-7xl typing-effect text-outline'>
                        {title}
                    </h1>
                    <span className='my-4 text-2xl md:text-4xl lg:text-3xl text-white text-center text-outline'>{subtitle}</span>
                </div>
            </div>
            <div className='absolute inset-0 bg-gray-100 opacity-50 z-0'></div>
        </section>
    );
};

export default Hero;

