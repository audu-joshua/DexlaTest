"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <img src="/images/logoblue.png" alt="Logo" className="h-10" />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <a href="#" className="text-sm px-2 hover:underline">Home</a>
          <a href="#" className="text-sm px-2 hover:underline">Shop</a>
          <a href="#" className="text-sm px-2 hover:underline">About</a>
          <a href="#" className="text-sm px-2 hover:underline">Contact</a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Audu Dexla Test. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
