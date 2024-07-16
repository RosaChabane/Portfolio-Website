import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pic from '../assets/tempheadshot.png';

const About = () => {
  return (
      <section className='py-20 flex items-center justify-center w-3/4 border-b mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8'>
          <div className='bg-coralTheme flex items-center justify-center'>
            <img src={pic} alt="Profile" className="" />
          </div>
          <div className='max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col'>
            <h2 className='text-xl mb-2 font-extrabold justify-start text-violet-500'>ABOUT ME</h2>
            <h3 className='text-5xl font-semibold mb-4 text-textTheme'>Problem Solver</h3>
            <div className='max-w-prose'>
              <p className='text-black text-xl'>
              Dynamic software engineer with foundational skills in front-end and back-end development,
              refined through self-directed learning and management experience in a high-paced business
              setting. Passionate about leveraging strong problem-solving and team leadership skills to
              build scalable solutions.
              </p>
            </div>
            <div className='mt-6'>
              <div className='mb-6 flex flex-col md:flex-row'>
                <div className='flex flex-col pr-10 mb-2 md:mb-0'>
                  <span className='font-extrabold text-textTheme'>Name</span>
                  <span className='text-violet-500'>Rosa Chabane</span>
                </div>
                <div className='flex flex-col pr-10 mb-2 md:mb-0'>
                  <span className='font-extrabold text-textTheme'>Email</span>
                  <span className='text-violet-500'>rosachabane330@gmail.com</span>
                </div>
                <div className='flex flex-col pr-10'>
                  <span className='font-extrabold text-textTheme'>Phone</span>
                  <span className='text-violet-500'>346-666-2511</span>
                </div>
              </div>
              <button className='bg-violet-500 text-white px-4 py-2 mb-3 mt-2 rounded font-semibold transform transition duration-500 hover:scale-110 hover:bg-opacity-75'>DOWNLOAD RESUME</button>
            </div>
            <div className='flex mt-4 space-x-4 text-violet-500'>
              <a href="https://github.com/RosaChabane">
              <FontAwesomeIcon icon={faGithub} size="2x" className="transform transition duration-500 hover:scale-125 hover:bg-opacity-75 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/rosachabane/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="transform transition duration-500 hover:scale-125 hover:bg-opacity-75 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;





