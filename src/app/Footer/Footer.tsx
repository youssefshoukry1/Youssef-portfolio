"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] text-white py-10 overflow-hidden">
      {/* أشكال دائرية مضيئة متناسقة مع Contact */}
      <motion.div
        className="absolute -z-0 rounded-full border-2 border-purple-500/30"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        style={{ width: "200px", height: "200px", top: "-50px", left: "-50px" }}
      />
      <motion.div
        className="absolute -z-0 rounded-full border-2 border-cyan-400/30"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        style={{
          width: "250px",
          height: "250px",
          bottom: "-60px",
          right: "-60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* نص الفوتر */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm md:text-base"
        >
          Developed by{" "}
          <span className="font-semibold text-cyan-400">Youssef Shoukry</span>
        </motion.p>

        {/* أيقونة واتساب */}
        <motion.a
          href="https://wa.me/201204470794"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <FaWhatsapp size={20} />
          <span className="text-sm md:text-base">01204470794</span>
        </motion.a>
      </div>
    </footer>
  );
}
