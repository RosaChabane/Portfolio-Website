import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import pic from '../assets/selfie.jpg';

const About = () => {
  return (
    <section className="py-20 flex items-center justify-center mx-auto w-3/4 border-b border-violet-300">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 w-full">
        <div className="flex items-center justify-center">
          <img src={pic} alt="Profile" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover"  />
        </div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
          <h2 className="text-xl mb-2 font-extrabold justify-start text-violet-500">ABOUT ME</h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 text-textTheme">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1000,
                'Problem Solver',
                1000,
                'Programmer',
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h3>
          <div className="max-w-prose">
            <p className="text-textTheme text-xl">
            With a passion for building and learning, 
            my journey in front and back-end development is fueled by self-directed learning and hands-on experience through various projects. 
            I thrive on leveraging my strong problem-solving and team leadership skills to create scalable solutions. 
            I love tackling new challenges, continuously enhancing my skills, and collaborating with others to turn ideas into reality.
            </p>
          </div>
          <div className="mt-6">
            <div className="mb-6 flex flex-col md:flex-row">
              <div className="flex flex-col pr-10 mb-2 md:mb-0">
                <span className="font-extrabold text-textTheme">Name</span>
                <span className="text-violet-500">Rosa Chabane</span>
              </div>
              <div className="flex flex-col pr-10 mb-2 md:mb-0">
                <span className="font-extrabold text-textTheme">Email</span>
                <span className="text-violet-500">rosachabane330@gmail.com</span>
              </div>
              <div className="flex flex-col pr-10">
                <span className="font-extrabold text-textTheme">Phone</span>
                <span className="text-violet-500">346-666-2511</span>
              </div>
            </div>
            <button className="bg-violet-500 text-white px-4 py-2 mb-3 mt-2 rounded font-semibold transform transition duration-500 hover:bg-violet-800 hover:scale-110 hover:bg-opacity-85">
              DOWNLOAD RESUME
            </button>
          </div>
          <div className="flex mt-4 space-x-4 text-violet-500">
            <a href="https://github.com/RosaChabane">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="transform transition duration-500 hover:scale-125 hover:bg-opacity-75 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/rosachabane/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="transform transition duration-500 hover:scale-125 hover:bg-opacity-75 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;






