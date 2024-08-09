import React from 'react';
import awsBadge from '../assets/aws.png'; 

const Certifications = () => {
  return (
    <section className="py-5 md:py-20 w-full mx-auto relative bg-violet-300">
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-3/4 border-b border-violet-300"></div>
      </div>
      <div className="mx-auto sm:px-6 lg:px-8 flex justify-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2">
            <a key="" href="https://www.credly.com/badges/bc93132c-e391-4652-9aa8-b8153bc4bd0d/public_url" target="_blank" rel="noopener noreferrer" className="block p-10 rounded-lg shadow-lg transition transform hover:scale-105 border border-violet-300 bg-violet-100">
              <h2 className="text-xl font-bold mb-2 text-violet-500 text-center">CERTIFICATIONS</h2>
              <h3 className="text-textTheme font-semibold text-2xl text-center">AWS Certified Developer - Associate</h3>
              <img src={awsBadge} className="object-cover mx-auto p-5" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
