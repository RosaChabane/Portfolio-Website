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
  'bg-red-400',
  'bg-blue-400',
  'bg-yellow-300',
  'bg-teal-300',
  'bg-orange-300',
  'bg-green-500',
  'bg-red-400',
  'bg-indigo-300',
  'bg-purple-400',
  'bg-pink-300',
  'bg-cyan-300',
  'bg-lime-400',
  'bg-amber-300',
  'bg-fuchsia-400',
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
