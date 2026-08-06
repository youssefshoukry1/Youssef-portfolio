"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// ── Icons ────────────────────────────────────────────────────────────────────
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// ── Swipe hint ────────────────────────────────────────────────────────────────
const SwipeHint = ({ color }: { color: "cyan" | "violet" }) => {
  const [visible, setVisible] = useState(true);

  const accent =
    color === "cyan"
      ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      : "text-violet-400 border-violet-400/30 bg-violet-400/10";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.4 }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium tracking-wide select-none pointer-events-none z-20 ${accent}`}
        >
          <motion.span
            whileInView={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 0.85, ease: "easeInOut" }}
            className="flex items-center"
          >
            {([0.35, 0.65, 1] as const).map((op, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: op, marginLeft: i === 0 ? 0 : -6 }}
                className="w-4 h-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ))}
          </motion.span>
          <span>Swipe to explore</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Data ──────────────────────────────────────────────────────────────────────
const projects = [
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1771373376/Screenshot_2026-02-18_020727_acendz.png",
    href: "https://wasla-w.vercel.app",
    description:
      "A worship team scheduling platform to manage members, songs, and service rotations with ease.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1771376937/Screenshot_2026-02-18_030858_stfdlj.png",
    href: "https://bet-el-bon-sx18.vercel.app",
    description:
      "An Coffee Shop That Have An easy way to Order your coffee on the shop or delivery",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118513/Food_u7v8dv.png",
    href: "https://final-food-app-xi.vercel.app",
    description:
      "A full-featured food ordering app with cart, categories, and real-time search built with Next.js and Tailwind CSS.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118147/E-commerce_vdn2b9.png",
    href: "http://ecommerce-cwzh.vercel.app",
    description:
      "A modern e-commerce storefront with product listings, filtering, and a smooth checkout flow.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118582/Real_state_bqvzwn.png",
    href: "https://real-estate-theta-blond.vercel.app",
    description:
      "A real estate listings site with search, map integration, and detailed property pages.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/to-do-list_fsb2rl.png",
    href: "https://to-do-list-0.vercel.app",
    description:
      "A minimal to-do list app with local storage persistence, drag-to-reorder, and priority tags.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118114/x-o_jugiw5.png",
    href: "https://x-o-rose.vercel.app",
    description:
      "A classic Tic-Tac-Toe game with two-player mode, win detection, and animated transitions.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/wheather_z6hsrc.png",
    href: "https://weather-flft.vercel.app",
    description:
      "A weather app using OpenWeather API showing current conditions and a 5-day forecast for any city.",
  },
];

const portfolios = [
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118203/marco_alikmi.png",
    href: "https://marco-portfolio-ten.vercel.app/",
    description:
      "Marco's portfolio featuring bold typography, dark theme, and smooth scroll animations.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118164/marcleno_dkucab.png",
    href: "https://portfolio-marcelino.vercel.app/",
    description:
      "Marcelino's creative portfolio with parallax sections and an interactive skills timeline.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118133/emy_umjdb5.png",
    href: "https://protofilo-sable.vercel.app/",
    description:
      "Emy's portfolio with a warm color palette, elegant layout, and smooth page transitions.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118105/shery_ujafwd.png",
    href: "https://shery-portfolio-eta.vercel.app/",
    description:
      "Shery's portfolio showcasing frontend projects with a vibrant gradient aesthetic.",
  },
  {
    img: "https://res.cloudinary.com/djkxs77gs/image/upload/q_auto/f_auto/v1764118180/joyce_btnto0.png",
    href: "https://joyce-portfolio-five.vercel.app/",
    description:
      "Personal portfolio for Joyce — a clean, animated showcase of her design and development work.",
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────
type CardItem = { img: string; href: string; description: string };

const CardInner = ({
  card,
  index,
  accentClass,
  shadowColor,
}: {
  card: CardItem;
  index: number;
  accentClass: string;
  shadowColor: string;
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`relative w-[220px] h-[140px] sm:w-[260px] sm:h-[230px] md:w-[320px] md:h-[250px] mx-auto rounded-xl overflow-hidden border ${accentClass} ${shadowColor} transition-all duration-500 transform-gpu`}
      >
        <Image
          src={card.img}
          alt={`Project ${index}`}
          priority={index < 3}
          width={320}
          height={250}
          sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 350px, 480px"
          className="object-cover w-full h-full rounded-xl"
        />

        {/* Info overlay */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 rounded-xl"
            >
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit site"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-[11px] font-medium transition-all duration-200 border border-white/10 hover:border-white/25"
        >
          <ExternalLinkIcon />
          <span>Visit</span>
        </a>

        <button
          onClick={() => setShowInfo((v) => !v)}
          title={showInfo ? "Hide info" : "More info"}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 border ${
            showInfo
              ? "bg-white/20 border-white/30 text-white"
              : "bg-white/10 border-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:border-white/25"
          }`}
        >
          <InfoIcon />
          <span>{showInfo ? "Close" : "Info"}</span>
        </button>
      </div>
    </div>
  );
};

// ── Sliders ───────────────────────────────────────────────────────────────────
const swiperBreakpoints = {
  320: { slidesPerView: 1.2, spaceBetween: 20 },
  480: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 5, spaceBetween: 0 },
  1280: { slidesPerView: 4, spaceBetween: 0 },
};

const ProjectsSlider = ({ items }: { items: CardItem[] }) => (
  <div className="w-full flex flex-col items-center gap-3">
    <SwipeHint color="cyan" />
    <Swiper
      effect="coverflow"
      grabCursor
      speed={700}
      centeredSlides
      initialSlide={1}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 35,
        stretch: -30,
        depth: 300,
        modifier: 1.5,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className="w-[95%] max-w-6xl z-10"
      breakpoints={swiperBreakpoints}
    >
      {items.map((card, index) => (
        <SwiperSlide key={index} className="w-[290px]">
          <CardInner
            card={card}
            index={index}
            accentClass="border-cyan-400/40"
            shadowColor="shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const portfolioBreakpoints = {
  320: { slidesPerView: 1.2, spaceBetween: 20 },
  480: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 0 },
  1280: { slidesPerView: 4, spaceBetween: 0 },
};

const PortfoliosSlider = ({ items }: { items: CardItem[] }) => {
  let loopedItems = items;
  if (items.length < 4) {
    const repeatTimes = Math.ceil(5 / items.length);
    loopedItems = Array.from({ length: repeatTimes }, () => items).flat();
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <SwipeHint color="violet" />
      <Swiper
        effect="coverflow"
        grabCursor
        speed={700}
        centeredSlides
        initialSlide={1}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 45,
          stretch: -20,
          depth: 300,
          modifier: 1.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="w-[95%] max-w-6xl z-10"
        breakpoints={portfolioBreakpoints}
      >
        {loopedItems.map((card, index) => (
          <SwiperSlide key={index} className="w-[290px]">
            <CardInner
              card={card}
              index={index}
              accentClass="border-violet-400/40"
              shadowColor="shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// ── Bubble type ───────────────────────────────────────────────────────────────
type Bubble = { cx: number; cy: number; r: number; dur: number; dir: number };

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 20 }).map(() => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
        r: 1 + Math.random() * 3,
        dur: 10 + Math.random() * 20,
        dir: Math.random() > 0.5 ? 1 : -1,
      })),
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
              translateX: [0, b.dir * 20, b.dir * -20, 0],
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

      {/* Projects */}
      <h1 className="text-4xl sm:text-5xl font-extraboldt bg-clip-text text-white drop-shadow-lg -mb-10 z-10">
        <span className="text-indigo-400">P </span>r{" "}
        <span className="text-pink-400">o </span> j
        <span className="text-teal-400"> e</span> c{" "}
        <span className="text-cyan-400">t</span> s
      </h1>
      <ProjectsSlider items={projects} />

      {/* Portfolios */}
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg lg:mt-36 lg:mb-0 -mt-10 -mb-10 z-10">
        <span className="text-indigo-400">P</span>
        <span className="text-emerald-400">o</span>
        <span className="text-pink-400">R</span>t
        <span className="text-teal-400 text-5xl lg:text-6xl">f</span>o
        <span className="text-cyan-400">l</span>ios
      </h1>
      <PortfoliosSlider items={portfolios} />
    </section>
  );
}
