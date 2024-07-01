import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
      <section className='p-20 mb-4 bg-gray-100 flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8'>
          <div className='bg-coralTheme p-24 flex items-center justify-center clip-circle'>
            <span>headshot placeholder</span>
          </div>
          <div className='max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <h1 className='text-center text-4xl mb-5 font-semibold'>ABOUT ME</h1>
            <div className='max-w-prose text-center p-5'>
              <p>
              Dynamic software engineer with foundational skills in front-end and back-end development,
              refined through self-directed learning and management experience in a high-paced business
              setting. Passionate about leveraging strong problem-solving and team leadership skills to
              build scalable solutions.Eager to contribute to innovative projects in a collaborative software
              engineering environment.
              </p>
            </div>
            <div className='text-center mt-4'>
              <button className='bg-blueTheme text-white px-4 py-2 mb-2 font-semibold transform transition duration-500 hover:scale-110 hover:bg-opacity-75'>DOWNLOAD RESUME</button>
            </div>
            <div className='flex justify-center mt-4 space-x-4'>
              <FontAwesomeIcon icon={faGithub} size="2x" className="transform transition duration-500 hover:scale-110 hover:bg-opacity-75 cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="transform transition duration-500 hover:scale-110 hover:bg-opacity-75 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;







