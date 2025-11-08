"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  // 💡 لتجنب مشكلة hydration
  const [circles, setCircles] = useState<
    { cx: number; cy: number; r: number; dur: number }[]
  >([]);

  useEffect(() => {
    setCircles(
      Array.from({ length: 25 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 12 + Math.random() * 15,
      }))
    );
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_tbxzka8", // Service ID
        "template_53t0t05", // Template ID
        form.current,
        "hQmjB4HHyBLjT9a2V" // Public Key
      )

      .then(
        () => {
          setLoading(false);
          setDone(true);
          form.current?.reset();
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 
                  bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] overflow-hidden"
    >
      {/* الخلفية المتحركة */}
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
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* العنوان */}
      <div className="relative flex flex-col items-center mb-20">
        <div className="flex flex-col items-center relative z-10">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, ease: "easeOut" },
              },
            }}
            className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl relative z-10"
          >
            Contact{" "}
            <span className="text-cyan-400">
              M<span className="text-purple-400">e</span>
            </span>
          </motion.h2>

          {/* الخيوط المضيئة */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 200"
            className="absolute top-1/2 -translate-y-1/2 w-[170%] h-56 pointer-events-none"
          >
            <motion.path
              d="M 50 100 C 120 20, 380 20, 450 100 C 380 180, 120 180, 50 100 Z"
              stroke="url(#purpleGlow)"
              strokeWidth="3"
              fill="transparent"
              animate={{ pathLength: [0.7, 1, 0.7], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
            <motion.path
              d="M 80 100 C 160 40, 340 40, 420 100 C 340 160, 160 160, 80 100 Z"
              stroke="url(#blueGlow)"
              strokeWidth="3"
              fill="transparent"
              animate={{ pathLength: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
            <defs>
              <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(168,85,247)" stopOpacity="1" />
                <stop
                  offset="100%"
                  stopColor="rgb(192,132,252)"
                  stopOpacity="0.9"
                />
              </linearGradient>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(56,189,248)" stopOpacity="1" />
                <stop
                  offset="100%"
                  stopColor="rgb(34,211,238)"
                  stopOpacity="0.9"
                />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>

      {/* الفورم */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl 
                  border border-cyan-400/30 shadow-xl w-full max-w-lg relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.input
          whileFocus={{
            scale: 1.02,
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.7)",
          }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-400/50 
          text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
        />
        <motion.input
          whileFocus={{
            scale: 1.02,
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.7)",
          }}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-400/50 
                    text-white placeholder-gray-400 focus:outline-none  focus:border-purple-500"
        />
        <motion.textarea
          whileFocus={{
            scale: 1.02,
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.7)",
          }}
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-400/50 
          text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
        />
        <motion.button
          type="submit"
          disabled={loading}
          className={`relative mt-4 py-3 px-6 rounded-lg font-semibold text-white 
              border border-violet-500/50 bg-black/20 backdrop-blur-sm 
              shadow-[0_0_20px_rgba(139,92,246,0.6)] 
              transition-all duration-500 w-full
              ${loading ? "cursor-not-allowed opacity-60" : ""}`}
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="relative z-10">
            {loading ? "Sending..." : "Send Message"}
          </span>
        </motion.button>
      </motion.form>

      {/* Social icons */}
      <motion.div
        className="relative flex items-center justify-center gap-6 
                    p-3 rounded-2xl border border-cyan-400/40
                  bg-white/5 backdrop-blur-md shadow-lg mt-10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-500/20 z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/youssef-shoukry-4568a3348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 text-2xl text-cyan-400 
                      hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/201204470794"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 text-2xl text-green-400 
                        hover:scale-125 transition-transform duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/16sNdwRsQt/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 text-2xl text-blue-500 
                      hover:scale-125 transition-transform duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:ofaashoukry@email.com"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 text-2xl text-red-400 
                      hover:scale-125 transition-transform duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* مودالات */}
      {done && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/30 
                        shadow-xl text-center text-white w-80"
          >
            <h3 className="text-xl font-semibold mb-4">Message Sent ✅</h3>
            <button
              onClick={() => setDone(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                          rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/30 
                        shadow-xl text-center text-white w-80"
          >
            <h3 className="text-xl font-semibold mb-4">
              Something went wrong ❌
            </h3>
            <button
              onClick={() => setError(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                          rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
