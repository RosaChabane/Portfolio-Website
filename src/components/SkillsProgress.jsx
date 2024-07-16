import React from 'react';

const skills = [
  { name: 'Algorithms & Data Structures', percentage: 50 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 70 },
  { name: 'CSS', percentage: 80 },
];

const SkillsProgress = () => {
  return (
    <section className="py-20 p-8">
      <div className="max-w-7xl flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-1/2 lg:pr-8 items-start">
          <h2 className="text-xl font-bold mb-2">MY SKILLS</h2>
          <h3 className='text-5xl my-4'>Sample Title Description</h3>
          <p className="mb-4">I have experience in various technologies and continuously improving my skills. in various technologies and continuously improving my skills.</p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                  <span className="text-lg font-medium text-gray-700">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-violet-500 h-4 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;



