"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Page() {
  // Data
  const projects = [
    { img: "/ecomeerce.webp", href: "https://ecommerce-project.vercel.app/" },
    { img: "/food.webp", href: "https://food-project.vercel.app/" },
    { img: "/to-do.webp", href: "https://to-do-project.vercel.app/" },
    { img: "/weather.webp", href: "https://weather-flft.vercel.app/" },
    { img: "/x&o.webp", href: "https://xo-project.vercel.app/" },
  ];

  const portfolios = [
    { img2: "/marcen.webp", href: "https://portfolio-marcelino.vercel.app/" },
    { img2: "/joyce.webp", href: "https://joyce-portfolio-five.vercel.app/" },
    { img2: "/emy.webp", href: "https://protofilo-sable.vercel.app/" },
    { img2: "/shery.webp", href: "https://shery-portfolio-eta.vercel.app/" },
  ];

  // Slider Component
 const Slider = ({
  items,
  type,
}: {
  items: { img?: string; img2?: string; href: string }[];
  type: "projects" | "portfolios";
}) => 
 (
    <Swiper
      effect="coverflow"
      grabCursor
      loop={true}
      speed={700}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={0}
      coverflowEffect={{
        rotate: 45,
        stretch: -30,
        depth: 300,
        modifier: 2.5,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      pagination={{ clickable: true }}
      className="w-[95%] max-w-6xl z-10"
      breakpoints={{
        320: { slidesPerView: 1.2, spaceBetween: -60 },
        480: { slidesPerView: 2, spaceBetween: -60 },
        768: { slidesPerView: 3, spaceBetween: -20 },
        1024: { slidesPerView: 3, spaceBetween: -10 },
        1280: { slidesPerView: 3, spaceBetween: 0 },
      }}
    >
      {items.map((card, index) => (
        <SwiperSlide key={index} className="!w-[260px]">
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] 
                          mx-auto rounded-xl overflow-hidden
                          border ${type === "projects" ? "border-cyan-400/40 shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)]" : "border-violet-400/40 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]"} 
                          bg-white/5 backdrop-blur-md 
                          transition-all duration-500`}
            >
              <Image
                src={type === "projects" ? card.img ?? "" : card.img2 ?? ""}
                alt={`${type === "projects" ? "Project" : "Portfolio"} ${index}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 px-6 py-16 
                 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] 
                 relative overflow-hidden"
    >
      {/* Projects */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
                   text-transparent bg-clip-text drop-shadow-lg mb-10 z-10"
      >
        Projects
      </motion.h1>
      <Slider items={projects} type="projects" />

      {/* Portfolios */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                   text-transparent bg-clip-text drop-shadow-lg mt-20 mb-10 z-10"
      >
        Portfolios
      </motion.h1>
      <Slider items={portfolios} type="portfolios" />
    </section>
  );
}
