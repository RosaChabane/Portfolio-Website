import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAws, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'; // Import from solid icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const icons = [
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faAws,
  faNodeJs,
  faBootstrap,
  faMicrochip,
];

const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

const generateIconContainers = (numContainers = 40, numIcons = 80) => {
  const containers = [];
  for (let i = 1; i <= numContainers; i++) {
    const iconsArray = [];
    for (let j = 0; j < numIcons; j++) {
      iconsArray.push(
        <FontAwesomeIcon key={`${i}-${j}`} icon={getRandomIcon()} className="icon" />
      );
    }
    containers.push(
      <div key={`container-${i}`} className="iconContainer">
        {iconsArray}
      </div>
    );
  }
  return containers;
};

const Hero = () => {
  const iconContainers = generateIconContainers();

  return (
    <section className="relative flex items-center justify-center hero-section">
      <div className='box'>
        <div className="box-group">
          {iconContainers}
        </div>
      </div>
      <div className='absolute z-10 flex flex-col items-center justify-center'>
        <span className='mb-4 font-semibold text-xl md:text-4xl lg:text-4xl text-textTheme'>Hello, I'm</span>
        <h1 className='text-5xl font-extrabold text-textTheme sm:text-7xl md:text-8xl border-b border-textTheme text-textTheme'>Rosa Chabane</h1>
        <h2 className='font-semibold mt-6 text-xl md:text-4xl lg:text-4xl text-textTheme'>SOFTWARE ENGINEER</h2>
        <div className='flex space-x-6 my-8'>
          <button className='px-12 py-4 text-white bg-violet-500 rounded hover:bg-violet-600 transform transition duration-500 hover:scale-110 hover:bg-opacity-75'><span className=''>HIRE ME</span></button>
          <button className='px-10 py-4 text-white bg-violet-500 rounded hover:bg-violet-600 transform transition duration-500 hover:scale-110 hover:bg-opacity-75'>ABOUT ME</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;








