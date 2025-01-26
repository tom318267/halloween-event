import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => {
  return (
    <motion.a
      href={href}
      className="relative text-white transition-colors duration-300 hover:text-[#FF9A1F]"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
    >
      {children}
      <motion.span
        className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#FF9A1F]"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center py-8 w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="text-2xl font-bold gap-3 flex items-center">
        <img src="/images/pumpkinlogo.svg" alt="" className="w-10" />
        <span className="text-xl font-[scaryhouse]">Fright Night Festival</span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden z-50 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-20 text-base font-albertsans font-medium">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#event-highlights">Event Highlights</NavLink>
        <NavLink href="#schedule">Schedule</NavLink>
        <NavLink href="#register">Register</NavLink>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden fixed inset-0 bg-black/95 z-40 items-center justify-center`}
      >
        <div className="flex flex-col space-y-8 text-xl font-albertsans font-medium">
          <NavLink href="#home" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink href="#event-highlights" onClick={() => setIsOpen(false)}>
            Event Highlights
          </NavLink>
          <NavLink href="#schedule" onClick={() => setIsOpen(false)}>
            Schedule
          </NavLink>
          <NavLink href="#register" onClick={() => setIsOpen(false)}>
            Register
          </NavLink>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
