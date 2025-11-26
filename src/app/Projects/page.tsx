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
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118513/Food_u7v8dv.png", href: "https://final-food-app-xi.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118147/E-commerce_vdn2b9.png", href: "http://ecommerce-cwzh.vercel.app" },
    {
      img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118582/Real_state_bqvzwn.png",
      href: "https://real-estate-theta-blond.vercel.app/",
    },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/to-do-list_fsb2rl.png", href: "https://to-do-list-0.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118114/x-o_jugiw5.png", href: "https://x-o-rose.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/wheather_z6hsrc.png", href: "https://weather-flft.vercel.app/" },
  ];

  const portfolios = [
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118180/joyce_btnto0.png", href: "https://joyce-portfolio-five.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118203/marco_alikmi.png", href: "https://marco-portfolio-ten.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118164/marcleno_dkucab.png", href: "https://portfolio-marcelino.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118133/emy_umjdb5.png", href: "https://protofilo-sable.vercel.app/" },
    { img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/shery_ujafwd.png", href: "https://shery-portfolio-eta.vercel.app/" },
  ];

  const ProjectsSlider = ({
    items,
  }: {
    items: { img: string; href: string }[];
  }) => (
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
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4  ">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative w-[220px] h-[140px] sm:w-[260px] sm:h-[230px] md:w-[320px] md:h-[250px] mx-auto rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-all duration-500 transform-gpu"
              >
                <Image
                  src={card.img}
                  alt={`Project ${index}`}
                  priority={index < 3}
                  width={320} // العرض المطلوب
                  height={250} // الطول المطلوب
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

  const PortfoliosSlider = ({
    items,
  }: {
    items: { img: string; href: string }[];
  }) => {
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
          1024: { slidesPerView: 4, spaceBetween: -10 },
          1280: { slidesPerView: 4, spaceBetween: 0 },
        }}
      >
        {loopedItems.map((card, index) => (
          <SwiperSlide key={index} className="w-[290px]">
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="relative w-[220px] h-[140px] sm:w-[260px] sm:h-[230px] md:w-[320px] md:h-[250px] mx-auto rounded-xl overflow-hidden border border-violet-400/40  shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-500 transform-gpu"
                >
                  <Image
                    src={card.img}
                    alt={`Portfolio ${index}`}
                    priority={index < 3}
                    width={320} // العرض المطلوب
                    height={250} // الطول المطلوب
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
  type Bubble = { cx: number; cy: number; r: number; dur: number; dir: number };

  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 20 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 10 + Math.random() * 20,
        dir: Math.random() > 0.5 ? 1 : -1, // عشوائي يمين/شمال
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
              translateX: [0, b.dir * 20, b.dir * -20, 0], // حركة جانبية خفيفة
              translateY: [0, -50, 50, 0],
              scale: [0.8, 1, 1.2, 1],
            }}
            transition={{
              repeatType: "mirror",
              duration: b.dur,
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
      <h1 className="text-4xl sm:text-5xl font-extraboldt bg-clip-text text-white drop-shadow-lg -mb-10 z-10">
        <span className="text-indigo-400">P </span>r{" "}
        <span className="text-pink-400">o </span> j
        <span className="text-teal-400"> e</span> c{" "}
        <span className="text-cyan-400">t</span> s
      </h1>
      <ProjectsSlider items={projects} />

      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg lg:mt-36 lg:mb-0 -mt-10 -mb-10  z-10">
        <span className="text-indigo-400">P</span>
        <span className="text-emerald-400">o</span>
        <span className="text-pink-400 ">R</span>t
        <span className="text-teal-400 text-5xl lg:text-6xl">f</span>o
        <span className="text-cyan-400">l</span>ios
      </h1>
      <PortfoliosSlider items={portfolios} />
    </section>
  );
}
