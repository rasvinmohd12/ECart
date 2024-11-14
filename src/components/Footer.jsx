import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 w-full z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Media Player Section */}
        <div className="flex-1 mb-8 min-w-[200px] px-4">
          <h4 className="text-2xl font-semibold mb-4">Media Player</h4>
          <p className="font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi totam tempora adipisci at esse!
          </p>
          <p>Code licensed xxx, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Links Section */}
        <div className="flex-1 mb-8 min-w-[200px] px-4">
          <h4 className="text-2xl font-semibold mb-4">Links</h4>
          <ul className="space-y-3">
            <li><a href="#landing" className="hover:underline">Landing Page</a></li>
            <li><a href="#home" className="hover:underline">Home Page</a></li>
            <li><a href="#history" className="hover:underline">Watch History Page</a></li>
            <li><a href="#guides" className="hover:underline">Guides</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div className="flex-1 mb-8 min-w-[200px] px-4">
          <h4 className="text-2xl font-semibold mb-4">Guides</h4>
          <ul className="space-y-3">
            <li><a href="https://reactjs.org" className="hover:underline">React</a></li>
            <li><a href="https://react-bootstrap.github.io/" className="hover:underline">React Bootstrap</a></li>
            <li><a href="https://reactrouter.com/" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1 mb-8 min-w-[200px] px-4">
          <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
          <form className="flex items-center mb-4 space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            />
            <button className="bg-gray-500 hover:bg-purple-800 text-white p-2 rounded-full">
              <FaArrowRight />
            </button>
          </form>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-purple-800 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-purple-800 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-purple-800 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:bg-purple-800 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-700 pt-4 mt-6">
        <p className="text-gray-500">&copy; 2024 xxx, e-Cart. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
