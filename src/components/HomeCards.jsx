import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAws, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-4 p-4 rounded-lg'>
          {[faHtml5, faJs, faCss3Alt, faReact, faAws, faNodeJs, faNodeJs, faNodeJs].map((icon, index) => (
            <div key={index} className='w-full'>
              <Card bg='bg-cardColor' className='h-32'>
                <FontAwesomeIcon icon={icon} size="2x" className="text-black" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;

