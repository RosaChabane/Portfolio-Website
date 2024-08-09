import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Not really, this is just a placeholder)');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 flex flex-col lg:flex-row items-center justify-center border-t border-violet-300 w-3/4 mx-auto justify-between"
    >
      <div className='pb-10 lg:w-2/4 flex flex-col lg:flex-col w-full justify-between mx-auto sm:pr-12'>
        <div className='mb-8 md:mb-0 w-full'>
          <h2 className='text-violet-500 font-semibold text-xl'>CONTACT ME</h2>
          <h3 className='text-4xl md:text-5xl text-textTheme font-semibold pb-4'>Shoot Me A Message</h3>
          <p className='md:pb-10 text-textTheme'>
            Feel free to message me with any questions or inquiries and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className='flex flex-row p-4 w-full bg-violet-100 mb-4'>
          <FontAwesomeIcon icon={faPhone} className="p-4 border border-textTheme rounded-full text-textTheme" />
          <div className='flex flex-col ml-4 text-textTheme'>
            <span className='font-semibold'>PHONE</span>
            <span>346-666-2511</span>
          </div>
        </div>
        <div className='flex flex-row p-4 w-full bg-violet-200 mb-4'>
          <FontAwesomeIcon icon={faEnvelope} className="p-4 border border-textTheme rounded-full text-textTheme" />
          <div className='flex flex-col ml-4 text-textTheme'>
            <span className='font-semibold'>Email</span>
            <span className=''>rosachabane330@gmail</span>
          </div>
        </div>
        <div className='flex flex-row p-4 w-full bg-violet-300'>
          <FontAwesomeIcon icon={faLinkedin} className="p-4 border border-textTheme rounded-full text-textTheme" />
          <div className='flex flex-col ml-4 text-textTheme break-all'>
            <span className='font-semibold'>LINKEDIN</span>
            <span>www.linkedin.com/in/rosachabane/</span>
          </div>
        </div>
      </div>
      <div className="max-w-md w-full bg-violet-500 p-10 md:p-16 rounded-lg shadow-lg text-white mx-auto mt-4 sm:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-2"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-300 px-6 py-2 font-semibold transform transition duration-500 hover:scale-110 hover:bg-opacity-75">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;



