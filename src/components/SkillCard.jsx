import React from 'react';

const SkillCard = ({ icon, bg }) => (
  <div className={`p-4 rounded-lg bg-cardColor flex items-center justify-center text-black text-2xl h-48 w-48 m-5`}>
    {icon}
  </div>
);

export default SkillCard;

