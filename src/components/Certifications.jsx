import React from 'react';
import awsBadge from '../assets/aws.png'; 

const Certifications = () => {
  return (
    <section className="py-10 w-3/4 mx-auto border-b border-violet-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full lg:w-1/2">
            <a key="" href="https://www.credly.com/badges/bc93132c-e391-4652-9aa8-b8153bc4bd0d/public_url" target="_blank" rel="noopener noreferrer" className="block p-10 rounded-lg shadow-lg transition transform hover:scale-105 border border-violet-300">
              <h2 className="text-xl font-bold mb-2 text-violet-500">CERTIFICATIONS</h2>
              <h3 className="text-textTheme font-semibold text-2xl">AWS Certified Developer - Associate</h3>
              <img src={awsBadge} className="object-cover mx-auto p-5" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;