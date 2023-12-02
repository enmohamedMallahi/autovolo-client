"use client"

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = () => {
    const formattedMessage = encodeURIComponent(`Hello ${ name }! ${ message }`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=1234567890&text=${ formattedMessage }`;

    window.open(whatsappLink, '_blank');
  };

  return (

    <div className="bg-white py-4 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <div className="">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition duration-300"
          >
            Chat on WhatsApp
          </button>
        </div>
      </form>
    </div >

  );
};

export default Contact;
