"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaSass,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3Alt, color: "text-blue-500" },
    { icon: FaJs, color: "text-yellow-400" },
    { icon: SiTypescript, color: "text-blue-400" },
    { icon: FaReact, color: "text-cyan-400" },
    { icon: SiTailwindcss, color: "text-sky-400" },
    { icon: FaBootstrap, color: "text-purple-500" },
    { icon: FaSass, color: "text-pink-400" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: FaFigma, color: "text-pink-500" },
  ];

  // 🎯 حل مشكلة hydration: توليد القيم العشوائية على الكلاينت فقط
  const [circles, setCircles] = useState<
    { cx: number; cy: number; r: number; dur: number }[]
  >([]);
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number; dur: number }[]
  >([]);

  useEffect(() => {
    setCircles(
      Array.from({ length: 25 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 15 + Math.random() * 15,
      }))
    );

    setLines(
      Array.from({ length: 12 }).map(() => {
        const x1 = Math.random() * 800;
        const y1 = Math.random() * 600;
        const x2 = x1 + Math.random() * 100 - 50;
        const y2 = y1 + Math.random() * 100 - 50;
        return {
          x1,
          y1,
          x2,
          y2,
          dur: 20 + Math.random() * 20,
        };
      })
    );
  }, []);

  return (
    <section
      id="About"
      className="relative flex flex-col lg:flex-row items-center justify-center h-screen w-full gap-10 px-6 sm:px-12
                bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] overflow-hidden"
    >
      {/* Geometric animated background with lines */}
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

        {lines.map((l, i) => (
          <motion.line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="url(#grad)"
            strokeWidth="0.5"
            strokeOpacity={0.15}
            animate={{
              x1: [l.x1, l.x1 + 20, l.x1 - 20, l.x1],
              y1: [l.y1, l.y1 + 20, l.y1 - 20, l.y1],
              x2: [l.x2, l.x2 + 20, l.x2 - 20, l.x2],
              y2: [l.y2, l.y2 + 20, l.y2 - 20, l.y2],
            }}
            transition={{
              duration: l.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* الديكور الدوار حوالين السكشن */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col gap-6 max-w-xl text-center lg:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-cyan-400">M</span>
          <span className="text-purple-400">e</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I mastered Front-End development in 9 months through YouTube and
          self-learning. I’m passionate about technology, a fast learner, and
          always eager to push myself to achieve more.
        </motion.p>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-center items-center mt-6">
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="text-4xl hover:scale-125 transition-transform duration-300 hover:shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <Icon className={item.color} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
