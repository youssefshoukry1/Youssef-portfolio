"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 to-cyan-950 text-white py-6  shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* نص الفوتر */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm md:text-base"
        >
          Developed by{" "}
          <span className="font-semibold text-blue-300">Youssef Shoukry</span>
        </motion.p>

        {/* الواتساب */}
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
