"use client";

import React, { useEffect, useState } from "react";
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
    { img: "/food.webp", href: "https://final-food-app-xi.vercel.app/" },
    { img: "/ecomeerce.webp", href: "http://ecommerce-cwzh.vercel.app" },
    { img: "/real-estate.webp", href: "https://real-estate-theta-blond.vercel.app/" },
    { img: "/to-do.webp", href: "https://to-do-list-0.vercel.app/" },
    { img: "/x&o.webp", href: "https://x-o-rose.vercel.app/" },
    { img: "/weather.webp", href: "https://weather-flft.vercel.app/" },
  ];

  const portfolios = [
    { img: "/joyce.webp", href: "https://joyce-portfolio-five.vercel.app/" },
    { img: "/marco.webp", href: "https://marco-portfolio-ten.vercel.app/" },
    { img: "/marcen.webp", href: "https://portfolio-marcelino.vercel.app/" },
    { img: "/emy.webp", href: "https://protofilo-sable.vercel.app/" },
    { img: "/shery.webp", href: "https://shery-portfolio-eta.vercel.app/" },
  ];

  const ProjectsSlider = ({ items }: { items: { img: string; href: string }[] }) => (
   <Swiper
  effect="coverflow"
  grabCursor
  speed={700}
  centeredSlides={true} 
  initialSlide={1}
  slidesPerView={4} 
  coverflowEffect={{
    rotate: 35,
    stretch: -30,
    depth: 300,
    modifier: 1.5,
    slideShadows: true,
  }}
  modules={[EffectCoverflow, Pagination]}
  pagination={{ clickable: true }}
  className="w-[95%] max-w-6xl z-10"
  breakpoints={{
    320: { slidesPerView: 1.2, spaceBetween: -60 },
    480: { slidesPerView: 2, spaceBetween: -60 },
    768: { slidesPerView: 2, spaceBetween: -20 },
    1024: { slidesPerView: 5, spaceBetween: 0 },
    1280: { slidesPerView: 4, spaceBetween: 0 },
  }}
>
      {items.map((card, index) => (
        <SwiperSlide key={index} className=" w-[290px]">
          <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4  ">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-[220px] h-[140px] sm:w-[260px] sm:h-[230px] md:w-[320px] md:h-[250px] mx-auto rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-all duration-500 transform-gpu"
              >
<Image
  src={card.img}
  alt={`Project ${index}`}
  priority={index < 3 } 
  width={320}   // العرض المطلوب
  height={250}  // الطول المطلوب
   sizes="(max-width: 640px) 220px,
          (max-width: 768px) 260px,
          (max-width: 1024px) 350px,
          480px"
  className="object-cover w-full h-full rounded-xl"
/>
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
  centeredSlides={true} 
  initialSlide={1}
  slidesPerView={4} 
  coverflowEffect={{
    rotate: 45,
    stretch: -20,
    depth: 300,
    modifier:1.5,
    slideShadows: true,
  }}
  modules={[EffectCoverflow, Pagination]}
  pagination={{ clickable: true }}
  className="w-[95%] max-w-6xl z-10"
  breakpoints={{
    320: { slidesPerView: 1.2, spaceBetween: -60 },
    480: { slidesPerView: 2, spaceBetween: -60 },
    768: { slidesPerView: 2, spaceBetween: -20 },
    1024: { slidesPerView: 4, spaceBetween: -10 },
    1280: { slidesPerView: 4, spaceBetween: 0 },
  }}
>

        {loopedItems.map((card, index) => (
          <SwiperSlide key={index} className="w-[290px]">
            <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative w-[220px] h-[140px] sm:w-[260px] sm:h-[230px] md:w-[320px] md:h-[250px] mx-auto rounded-xl overflow-hidden border border-violet-400/40  shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-500 transform-gpu"
                >
<Image
  src={card.img}
  alt={`Portfolio ${index}`}
  priority={index < 3 } 
  width={320}   // العرض المطلوب
  height={250}  // الطول المطلوب
  sizes="(max-width: 640px) 220px,
          (max-width: 768px) 260px,
          (max-width: 1024px) 350px,
          480px"
  className="object-cover w-full h-full rounded-xl"
/>
                </motion.div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  // New: generate bubbles and rectangles only on client
  type Bubble = { cx: number; cy: number; r: number; dur: number };
  type Rect = { x: number; y: number; w: number; h: number; dur: number };
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [rects, setRects] = useState<Rect[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 30 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 10 + Math.random() * 20,
      }))
    );

    setRects(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 750,
        y: Math.random() * 550,
        w: 15 + Math.random() * 40,
        h: 10 + Math.random() * 25,
        dur: 12 + Math.random() * 10,
      }))
    );
  }, []);

  return (
<section
  id="projects"
  className="min-h-screen w-full flex flex-col items-center justify-center gap-20 px-6 py-16 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b] relative overflow-hidden"
>
  {/* Floating bubbles */}
  <motion.svg
    className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
  >
    {bubbles.map((b, i) => (
      <motion.circle
        key={i}
        cx={b.cx}
        cy={b.cy}
        r={b.r}
        fill="url(#grad)"
        animate={{
          cy: [b.cy, b.cy - 50, b.cy + 50, b.cy],
          scale: [0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: b.dur,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
    
    {rects.map((r, i) => (
      <motion.rect
        key={i}
        x={r.x}
        y={r.y}
        width={r.w}
        height={r.h}
        rx={3}
        ry={3}
        fill="url(#grad)"
        opacity={0.1}
        animate={{
          x: [r.x, r.x + 30, r.x - 30, r.x],
          y: [r.y, r.y + 20, r.y - 20, r.y],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: r.dur,
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

  {/* Projects title and sliders */}
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

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg lg:mt-36 lg:mb-0 -mt-10 -mb-10  z-10"
  >
    <span className="text-indigo-400">P</span ><span className="text-emerald-400">o</span><span className="text-pink-400 ">R</span>t<span className="text-teal-400 text-5xl lg:text-6xl">f</span>o<span className="text-cyan-400">l</span>ios
  </motion.h1>
  <PortfoliosSlider items={portfolios} />
</section>
  );
}
