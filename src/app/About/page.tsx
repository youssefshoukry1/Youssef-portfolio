"use client";
import React from "react";
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
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-center justify-center h-screen w-full gap-10 px-6 sm:px-12 
                 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] overflow-hidden"
    >
      {/* الديكور الدوار حوالين السكشن */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 z-0"
        whileInView={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col gap-6 max-w-xl text-center lg:text-left">
        {/* Title with gradient accent */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About{" "}
          <span className=" text-cyan-400">
            M
          </span>
          <span className=" text-purple-400">e</span>
        </motion.h1>

        {/* Paragraph with fade-in */}
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

        {/* Skills grid with staggered fade-in */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-center items-center mt-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
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
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="text-4xl hover:scale-125 transition-transform duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Icon className={item.color} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
