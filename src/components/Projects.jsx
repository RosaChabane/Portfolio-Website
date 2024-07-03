import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import scheduleGif from '../assets/schedule_gif.gif';
import losbuildingGif from '../assets/losbuilding_gif.gif';

const projects = [
  {
    gif: scheduleGif,
    title: "Employee Schedule Maker",
    description: "A tool for managing employee schedules efficiently.",
    githubLink: "https://github.com/RosaChabane/ScheduleMaker",
    siteLink: "https://profound-puppy-fff5be.netlify.app/"
  },
  {
    gif: losbuildingGif,
    title: "Los Building Materials",
    description: "Website for a building materials supply company.",
    githubLink: "https://github.com/RosaChabane/Los-Building-Materials",
    siteLink: "https://losbuildingmaterials.netlify.app/"
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.siteLink} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <img src={project.gif} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
              </a>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
