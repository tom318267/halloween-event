import React from "react";
import { motion } from "framer-motion";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <motion.a
      href={href}
      className="relative text-white transition-colors duration-300 hover:text-[#FF9A1F]"
      whileHover="hover"
      initial="rest"
      animate="rest"
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
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center py-8 max-w-[1256px] mx-auto"
    >
      <div className="text-2xl font-bold gap-3 flex items-center">
        <img src="/images/pumpkinlogo.svg" alt="" className="w-10" />
        <span className="text-xl font-[scaryhouse]">Fright Night Festival</span>
      </div>
      <nav className="flex space-x-20 text-base font-albertsans font-medium">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#event-highlights">Event Highlights</NavLink>
        <NavLink href="#schedule">Schedule</NavLink>
        <NavLink href="#register">Register</NavLink>
      </nav>
    </motion.header>
  );
};

export default Header;
