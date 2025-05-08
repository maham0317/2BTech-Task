import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = [
  "Home", "About Us", "Portfolio", "Services", "Service Details", "FAQ", "Contact Us"
];

const utilityLinks = [
  "404", "License", "Change-Log", "Style Guide", "Terms & Conditions"
];

const socialLinks = [
  "LinkedIn", "Twitter", "Facebook", "Instagram"
];

const NavbarDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black text-white transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Animated Close Button */}
      {isOpen && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-4 right-4 z-50"
        >
          <button
            onClick={onClose}
            className="text-black bg-lime-300 p-2 text-3xl"
          >
            <FiX />
          </button>
        </motion.div>
      )}

      <div className="flex flex-col md:flex-row h-full">
        {/* Left Video */}
        <div className="hidden md:block md:w-1/2 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/67b6b0f83e630122aa289fa0%2F67bc56c7dfdde847e2c7830f_Home%20Hero%20Video-poster-00001.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/67b6b0f83e630122aa289fa0%2F67bc56c7dfdde847e2c7830f_Home%20Hero%20Video-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Right Links */}
        <div className="w-full md:w-1/2 px-8 py-12 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <li key={i}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Utility Pages</h3>
              <ul className="space-y-2">
                {utilityLinks.map((link, i) => (
                  <li key={i}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <ul className="space-y-2">
                {socialLinks.map((link, i) => (
                  <li key={i}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDrawer;
