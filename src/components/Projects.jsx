import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import scheduleGif from '../assets/schedule_gif.gif';
import losbuildingGif from '../assets/losbuilding_gif.gif';
import portfolioSiteGif from '../assets/portfolio_gif.gif';

const projects = [
  {
    gif: scheduleGif,
    title: "Employee Schedule Maker",
    description: "Simplify the creation and maintenance of Ricciardi's Italian Ice weekly employee schedules with ease using drag and drop functionality.",
    techUsed: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/RosaChabane/ScheduleMaker",
    siteLink: "https://profound-puppy-fff5be.netlify.app/"
  },
  {
    gif: losbuildingGif,
    title: "Los Building Materials",
    description: "Designed to provide a seamless user experience for the Houston trucking company, allowing customers to easily access information, get quotes, and contact the company.",
    techUsed: "HTML, CSS, Bootstrap, Express",
    githubLink: "https://github.com/RosaChabane/Los-Building-Materials",
    siteLink: "https://losbuildingmaterials.netlify.app/"
  },
  {
    gif: portfolioSiteGif,
    title: "My Portfolio Website",
    description: "designed to showcase my web development skills, projects, and contact information. This site provides an insight into my technical abilities and creative approach.",
    techUsed: "React, Tailwind, Express",
    githubLink: "https://github.com/RosaChabane/Portfolio-Website",
    siteLink: ""
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center'>
        <h2 className="text-xl mb-2 text-violet-500 font-semibold border-b border-violet-300 p-2">PROJECTS</h2>
        <h3 className='text-4xl md:text-5xl lg:text-5xl text-textTheme font-semibold mb-16'>My Work Recently</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          {projects.map((project, index) => (
            <a key={index} href={project.siteLink} target="_blank" rel="noopener noreferrer" className="block p-6 lg:p-12 rounded-lg shadow-lg transition transform hover:scale-110 border border-blue-400 hover:border-blue-700">
              <img src={project.gif} alt={project.title} className="w-full h-48 object-cover rounded-t-lg border border-violet-300" />
              <span className='block text-violet-700 mt-3 mb-4'>Tech used: {project.techUsed}</span>
              <h3 className="text-2xl font-semibold mb-1 text-textTheme">{project.title}</h3>
              <p className="mt-2 text-textTheme">{project.description}</p>
              <div className="mt-2">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-700 hover:border-blue-700 mt-4 inline-block border border-blue-400 rounded p-2">
                  <FontAwesomeIcon icon={faGithub} className="" /> GitHub
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

