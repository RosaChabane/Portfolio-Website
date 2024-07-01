import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAws, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './SkillCard';

const skills = [
  { icon: <FontAwesomeIcon icon={faHtml5} size="3x" />, bg: 'bg-red-400' },
  { icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" />, bg: 'bg-blue-400' },
  { icon: <FontAwesomeIcon icon={faJs} size="3x" />, bg: 'bg-yellow-400' },
  { icon: <FontAwesomeIcon icon={faReact} size="3x" />, bg: 'bg-teal-400' },
  { icon: <FontAwesomeIcon icon={faAws} size="3x" />, bg: 'bg-orange-400' },
  { icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />, bg: 'bg-green-400' },
  { icon: <FontAwesomeIcon icon={faBootstrap} size="3x" />, bg: 'bg-red-400' },
  { icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" />, bg: 'bg-blue-400' },
  // Add more skills as needed
];

const ScrollingSkillCards = () => (
  <div className="scroll-container">
    <div className="scroll-content">
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} bg={skill.bg} />
      ))}
      {skills.map((skill, index) => (
        <SkillCard key={index + skills.length} icon={skill.icon} bg={skill.bg} />
      ))}
    </div>
  </div>
);

export default ScrollingSkillCards;
