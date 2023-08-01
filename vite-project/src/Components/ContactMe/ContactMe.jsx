import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id='contact' className="p-4">
      <h2 className="text-3xl font-extrabold text-center text-gray-200 mb-2 mt-16">Contact Me</h2>
      <div className="flex space-x-4 justify-center">
        <a href="https://github.com/Jersitto" target="_blank" rel="noopener noreferrer" className="block bg-gray-800 text-white text-center py-2 px-4 rounded-md hover:bg-gray-700">
          <FaGithub className="inline-block mr-2" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jerson-gonzález-estrada-884399250/" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600">
          <FaLinkedin className="inline-block mr-2" />
          LinkedIn
        </a>
        <a href="https://wa.me/+573054601214" target="_blank" rel="noopener noreferrer" className="block bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600">
          <FaWhatsapp className="inline-block mr-2" />
          WhatsApp
        </a>
        <a href="mailto:jersgonz310@outlook.com" className="block bg-yellow-500 text-white text-center py-2 px-4 rounded-md hover:bg-yellow-600">
          <FaEnvelope className="inline-block mr-2" />
          Email Me
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
