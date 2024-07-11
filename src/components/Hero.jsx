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
        <h1 className='text-4xl font-extrabold text-textTheme sm:text-7xl md:text-8xl border-b border-textTheme'>Rosa Chabane</h1>
        <span className='my-4 text-xl md:text-4xl lg:text-4xl text-textTheme'>SOFTWARE ENGINEER</span>
      </div>
    </section>
  );
};

export default Hero;








