import { useState } from "react";
import logo from "../../assets/animatary-logo.avif";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import NavbarDrawer from "../NavbarDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto flex justify-between items-center">
        {!isOpen && <img src={logo} alt="Logo" className="max-w-28" />}

        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen?'':"text-black bg-lime-300 p-2 text-3xl relative z-50"}
          >
            {isOpen ? '' : <FiMenu />}
          </button>
        </div>
      </div>

      <NavbarDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
