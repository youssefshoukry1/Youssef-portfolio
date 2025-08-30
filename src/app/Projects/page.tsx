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
  const projects = [
    { img: "/ecomeerce.webp", href: "https://ecommerce-project.vercel.app/" },
    { img: "/food.webp", href: "https://food-project.vercel.app/" },
    { img: "/to-do.webp", href: "https://to-do-project.vercel.app/" },
    { img: "/weather.webp", href: "https://weather-flft.vercel.app/" },
    { img: "/x&o.webp", href: "https://xo-project.vercel.app/" },
  ];

  const portfolios = [
    { img: "/marcen.webp", href: "https://portfolio-marcelino.vercel.app/" },
    { img: "/joyce.webp", href: "https://joyce-portfolio-five.vercel.app/" },
    { img: "/emy.webp", href: "https://protofilo-sable.vercel.app/" },
    { img: "/shery.webp", href: "https://shery-portfolio-eta.vercel.app/" },
  ];

  const ProjectsSlider = ({ items }: { items: { img: string; href: string }[] }) => (
   <Swiper
  effect="coverflow"
  grabCursor
  speed={700}
  centeredSlides={true} // هنا نخليها true
  initialSlide={0}
  slidesPerView={3} // نحدد عدد slides ثابت على الكمبيوتر
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
    768: { slidesPerView: 2, spaceBetween: -20 },
    1024: { slidesPerView: 3, spaceBetween: -10 },
    1280: { slidesPerView: 3, spaceBetween: 0 },
  }}
>
      {items.map((card, index) => (
        <SwiperSlide key={index} className="!w-[260px]">
          <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] mx-auto rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-all duration-500 transform-gpu"
              >
                <Image src={card.img} alt={`Project ${index}`} fill className="object-cover" />
              </motion.div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const PortfoliosSlider = ({ items }: { items: { img: string; href: string }[] }) => {
    let loopedItems = items;
    if (items.length < 4) {
      const repeatTimes = Math.ceil(5 / items.length);
      loopedItems = Array.from({ length: repeatTimes }, () => items).flat();
    }

    return (
   <Swiper
  effect="coverflow"
  grabCursor
  speed={700}
  centeredSlides={true} // هنا نخليها true
  initialSlide={0}
  slidesPerView={3} // نحدد عدد slides ثابت على الكمبيوتر
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
    768: { slidesPerView: 2, spaceBetween: -20 },
    1024: { slidesPerView: 3, spaceBetween: -10 },
    1280: { slidesPerView: 3, spaceBetween: 0 },
  }}
>

        {loopedItems.map((card, index) => (
          <SwiperSlide key={index} className="!w-[260px]">
            <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] mx-auto rounded-xl overflow-hidden border border-violet-400/40 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-500 transform-gpu"
                >
                  <Image src={card.img} alt={`Portfolio ${index}`} fill className="object-cover" />
                </motion.div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center gap-20 px-6 py-16 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] relative overflow-hidden">
      {/* Projects */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extraboldt bg-clip-text text-white drop-shadow-lg -mb-10 z-10"
      >
        <span className="text-indigo-400">P  </span>r <span className="text-pink-400">o </span> j<span className="text-teal-400"> e</span> c <span className="text-cyan-400">t</span> s
      </motion.h1>
      <ProjectsSlider items={projects} />

      {/* Portfolios */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg lg:mt-30 lg:mb-10 -mt-10 -mb-10  z-10"
      >
        <span className="text-indigo-400">P</span ><span className="text-emerald-400">o</span><span className="text-pink-400 ">R</span>t<span className="text-teal-400 text-5xl">f</span>o<span className="text-cyan-400">i</span>ls
      </motion.h1>
      <PortfoliosSlider items={portfolios} />
    </section>
  );
}
