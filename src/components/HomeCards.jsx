import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAws, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center gap-2 p-4 rounded-lg'>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faHtml5} size="3x" className="text-black" />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faJs} size="3x" className="text-black" />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-black" />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faReact} size="3x" className="text-black" />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faAws} size="3x" className="text-black" />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <Card bg='bg-cardColor' className='h-48'>
              <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-black" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
