import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo & Description */}
          <div className="mb-5 md:mb-0">
            <h2 className="text-2xl font-bold text-[#F83002]">Job Portal</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Your trusted platform for finding your dream job effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Jobs</a>
            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-5 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
