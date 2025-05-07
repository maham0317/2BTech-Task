import React from 'react';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Watermark Text */}
      <div className="absolute left-1/2 bottom-[100px] -translate-x-1/2 text-[10vw] font-extrabold text-gray-600 opacity-10 z-0 whitespace-nowrap">
        VIDEO PRODUCTION
      </div>

      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-10">
        {/* Left: Logo & Email Signup */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-start space-y-3">
            <div className="w-24 h-24 rounded-full bg-lime-400 relative flex items-center justify-center">
              <div className="w-5 h-5 bg-black rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <h2 className="text-3xl font-extrabold text-lime-400">Animatory</h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Get the latest updates on video trends, exclusive behind-the-scenes content, and special offers straight to your inbox.
          </p>

          {/* Email Input */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-gray-600 py-2 pr-10 placeholder-gray-400 text-sm focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-lime-400 text-black rounded-full hover:bg-lime-300 transition">
              <FiArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: Link Columns */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Utility Pages</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">License</a></li>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Change-Log</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Social Link</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-10" />

      {/* Bottom Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
        Copyright © 2025 Animatory | Designed by TNCFlow | Powered by Webflow
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 w-12 h-12 border border-lime-400 text-lime-400 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition z-50"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
