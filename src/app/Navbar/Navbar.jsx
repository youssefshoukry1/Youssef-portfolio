"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const navItem = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      navItem.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a0f1f]/70 shadow-lg border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
        <Motion.ul
          className="flex gap-6 sm:gap-10 tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <Motion.button
              key={id}
              variants={itemVariants}
              className={`relative group text-white lg:text-xl text-sm font-semibold cursor-pointer 
                  transition-colors duration-300 ${active === id ? "text-cyan-400" : "hover:text-cyan-300"
                }`}
              onClick={() => scrollToSection(id)}
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 
                    transition-all duration-300 ${active === id ? "w-full" : "group-hover:w-full"
                  }`}
              ></span>
            </Motion.button>
          ))}
        </Motion.ul>

      </div>
    </nav>
  );
}
