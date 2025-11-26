"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import About from "./About/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  const letters = [
    { char: "F", color: "text-cyan-400" },
    { char: "r", color: "text-purple-400" },
    { char: "o", color: "text-pink-400" },
    { char: "n", color: "text-indigo-400" },
    { char: "t", color: "text-teal-400" },
    { char: "e", color: "text-blue-400" },
    { char: "n", color: "text-fuchsia-400" },
    { char: "d", color: "text-emerald-400" },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🎯 حل مشكلة hydration: توليد القيم العشوائية على الكلاينت فقط
  const [circles, setCircles] = useState<
    { cx: number; cy: number; r: number; dur: number }[]
  >([]);

  useEffect(() => {
    setCircles(
      Array.from({ length: 30 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 10 + Math.random() * 20,
      }))
    );
  }, []);

  return (
    <>
      <section
        id="Home"
        className="flex flex-col lg:flex-row items-center justify-center h-screen w-full gap-6 sm:gap-10 px-4 sm:px-10 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] overflow-hidden relative"
      >
        {/* Geometric animated background */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {circles.map((c, i) => (
            <motion.circle
              key={i}
              cx={c.cx} // ثابت
              cy={c.cy} // ثابت
              r={c.r}
              fill="url(#grad)"
              animate={{
                // نحركها بالترانسفورم بدل cx, cy
                translateX: [0, 50, -50, 0],
                translateY: [0, 50, -50, 0],
              }}
              transition={{
                repeatType: "mirror",
                duration: c.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Social Media Icons */}
        <motion.div
          className="absolute lg:top-11 lg:right-6 top-10 right-6 z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative flex items-center justify-center gap-6 p-2 rounded-2xl border border-cyan-400/40 bg-white/5 backdrop-blur-md shadow-lg">
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-500/20 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex items-center lg:gap-6 gap-4">
              <a
                href="https://www.linkedin.com/in/youssef-shoukry-4568a3348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:w-12 lg:h-12 w-9 h-9 text-3xl text-cyan-400 hover:scale-125 transition-transform duration-300 cursor-pointer focus-visible:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/201204470794"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:w-12 lg:h-12 w-9 h-9 text-3xl text-green-400 hover:scale-125 transition-transform duration-300 cursor-pointer focus-visible:scale-125"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/share/16sNdwRsQt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:w-12 lg:h-12 w-9 h-9 text-3xl text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer focus-visible:scale-125"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </motion.div>

        {/* الصورة */}
        <motion.div
          className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full border-4 border-cyan-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0.3, 0.6], scale: [0.8, 1, 1.2, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="absolute w-[115%] h-[115%] rounded-full border-4 border-purple-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0.2, 0.5], scale: [0.8, 1, 1.3, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
          <Image
            className="rounded-full object-cover shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            src="https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764119557/Snapchat-2125464010_n66wek.jpg"
            alt="My Photo"
            fill
            priority
            sizes="(max-width: 768px) 160px, (max-width: 1200px) 256px, 320px"
          />
        </motion.div>

        {/* العنوان */}
        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left relative">
          <h1 className="font-extrabold text-2xl sm:text-5xl lg:text-7xl flex flex-wrap gap-1 ">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className={`${l.color}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {l.char}
              </motion.span>
            ))}
            <span className="text-white"> Developer</span>
          </h1>

          <motion.p
            className="text-sm sm:text-lg lg:text-2xl text-gray-300 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            I design and build modern responsive websites.
          </motion.p>

          {/* زر السهم لتحت */}
          <motion.button
            onClick={scrollToAbout}
            className="relative mt-12 w-15 h-16 flex items-center justify-center rounded-full border border-violet-500/50 bg-black/20 backdrop-blur-sm text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-500"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="flex flex-col items-center z-10">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                className="w-7 h-7"
                stroke="url(#grad1)"
                fill="none"
                animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>

              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                className="w-7 h-7 -mt-2"
                stroke="url(#grad1)"
                fill="none"
                animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
          </motion.button>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
