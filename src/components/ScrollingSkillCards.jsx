import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAws, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './SkillCard';

const skills = [
  { icon: <FontAwesomeIcon icon={faHtml5} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faJs} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faReact} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faAws} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faNodeJs} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faBootstrap} size="3x" /> },
  { icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" /> },
];

const colors = [
  'bg-red-200',
  'bg-blue-200',
  'bg-teal-200',
  'bg-green-200',
  'bg-red-200',
  'bg-indigo-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-cyan-200',
  'bg-lime-200',
  'bg-fuchsia-200',
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const ScrollingSkillCards = () => (
  <div className="scrolling-background">
    <div className="scrolling-row">
      {skills.concat(skills).map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} bg={getRandomColor()} />
      ))}
    </div>
    <div className="scrolling-row">
      {skills.concat(skills).map((skill, index) => (
        <SkillCard key={index + skills.length} icon={skill.icon} bg={getRandomColor()} />
      ))}
    </div>
    <div className="scrolling-row">
      {skills.concat(skills).map((skill, index) => (
        <SkillCard key={index + skills.length * 2} icon={skill.icon} bg={getRandomColor()} />
      ))}
    </div>
    <div className="overlay"></div>
  </div>
);

export default ScrollingSkillCards;
