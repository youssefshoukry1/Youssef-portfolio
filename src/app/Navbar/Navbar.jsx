"use client";
import React from "react";
import { motion as Motion } from "framer-motion";
import { button } from "framer-motion/client";

export default function Navbar() {
  const navItem = [
    { name: "Home", id: "Home-section" },
    { name: "About", id: "About-section" },
    { name: "Projects", id: "Projects-section" },
    { name: "Contact", id: "Contact-section" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a0f1f]/70 shadow-lg border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Menu (Desktop + Mobile نفس الشكل) */}
        <Motion.ul
          className="flex gap-6 sm:gap-10 tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <button>
               <Motion.li
              key={id}
              variants={itemVariants}
              className="relative group text-white lg:text-xl text-sm font-semibold cursor-pointer 
                         hover:text-cyan-300 transition-colors duration-300"
              onClick={() => handleScroll(id)}
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 
                               transition-all duration-300 group-hover:w-full"></span>
            </Motion.li>
            </button>
           
          ))}
        </Motion.ul>
      </div>
    </nav>
  );
}
