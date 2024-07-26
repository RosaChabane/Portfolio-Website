import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
    <section id="contact" className="py-20 flex flex-col items-center justify-center bg-indigo-100">
      <div className='pb-5 flex flex-col lg:flex-col'>
        <div className='flex flex-row p-4'>
          <FontAwesomeIcon icon={faPhone} className="p-4 border border-textTheme rounded-full text-textTheme" />
          <div className='flex flex-col ml-4 text-textTheme'>
            <span className='font-semibold'>PHONE</span>
            <span>346-666-2511</span>
          </div>
        </div>
        <div className='flex flex-row p-4'>
          <FontAwesomeIcon icon={faEnvelope} className="p-4 border border-textTheme rounded-full text-textTheme" />
          <div className='flex flex-col ml-4 text-textTheme'>
            <span className='font-semibold'>Email</span>
            <span>rosachabane330@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="max-w-md w-3/4 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
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
            <label htmlFor="email" className="block text-gray-700">Email</label>
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
            <label htmlFor="message" className="block text-gray-700">Message</label>
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
            <button type="submit" className="bg-gray-100 text-black px-4 py-2 font-semibold transform transition duration-500 hover:scale-110 hover:bg-opacity-75">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

