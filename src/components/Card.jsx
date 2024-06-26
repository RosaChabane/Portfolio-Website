import React from 'react';

const Card = ({ children, className = '', bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} ${className} p-4 rounded-lg text-black font-bold text-2xl flex items-center justify-center`}>
      {children}
    </div>
  );
};

export default Card;
