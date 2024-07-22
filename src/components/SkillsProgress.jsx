import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { name: 'Algorithms & Data Structures', percentage: 50 },
  { name: 'JavaScript', percentage: 98 },
  { name: 'Node.js', percentage: 85 },
  { name: 'Cloud Development', percentage: 80 },
];

const SkillsProgress = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 p-8 w-3/4 mx-auto border-b border-violet-300">
      <div className="max-w-7xl flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-2/3 lg:mr-20 items-start mb-6">
          <h2 className="text-xl font-bold mb-2 text-violet-500">MY SKILLS</h2>
          <h3 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-textTheme font-semibold'>I Simply Love to Build</h3>
          <p className="mb-4 text-textTheme text-xl">
            I have extensive experience in web development, focusing on technologies such as JavaScript, HTML, CSS, React, Node.js, and AWS. 
            I love to explore new languages and technologies to bring creative ideas to life.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="space-y-4" ref={ref}>
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                  <span className="text-lg font-medium text-gray-700">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <motion.div
                    className="bg-violet-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 mt-4">
        <div className='flex-col'>
        <h2 className="text-xl font-bold text-violet-500 mb-2">CERTIFICATIONS</h2>
        <h3 className="text-textTheme text-4xl font-semibold mb-2">AWS Certified Developer - Associate</h3>
        </div>
        <div className="mt-4">
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="bc93132c-e391-4652-9aa8-b8153bc4bd0d" data-share-badge-host="https://www.credly.com"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;









