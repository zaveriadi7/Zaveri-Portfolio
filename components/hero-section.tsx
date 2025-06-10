"use client";
import { ArrowRight, Github, Linkedin, Twitter, Mail as MailIcon } from "lucide-react";
import Link from "next/link";
import BlurText from "./ui/blurtext";
import { Button } from "@/components/ui/button";
import LogoCarousel from "../components/ui/infiniteScroller";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale, slideIn } from "@/lib/animations";
import GlowingSymbols from "./ui/GlowingSymbols";
import PixelCard from "./ui/PixelCard";
import PersonalPhoto from "../public/adityazaveri.png"
import Image from "next/image";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  // Enhanced parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Glowing orb animation
  const orbVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Dev symbol animation
  const devSymbolVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({
      scale: [0.8, 1.3, 0.8],
      opacity: [0.4, 0.8, 0.4],
      rotate: [0, 10, -10, 0],
      y: [0, -15, 0],
      transition: {
        duration: 4 + i * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Line animation
  const lineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: (i: number) => ({
      scaleX: [0, 1, 0],
      opacity: [0, 0.5, 0],
      transition: {
        duration: 3 + i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Code symbol variations
  const codeSymbols = [
    { symbol: "</>", color: "from-indigo-500/30 to-purple-500/30" },
    { symbol: "<>", color: "from-pink-500/30 to-orange-500/30" },
    { symbol: "{}", color: "from-emerald-500/30 to-teal-500/30" },
    { symbol: "[]", color: "from-amber-500/30 to-yellow-500/30" },
    { symbol: "()", color: "from-rose-500/30 to-red-500/30" },
    { symbol: "=>", color: "from-blue-500/30 to-cyan-500/30" },
    { symbol: "&&", color: "from-violet-500/30 to-fuchsia-500/30" },
    { symbol: "||", color: "from-green-500/30 to-emerald-500/30" },
  ];

  // Motion path variations
  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i: number) => ({
      pathLength: 1,
      opacity: [0.2, 0.4, 0.2],
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        delay: i * 0.2,
      },
    }),
  };

  return (
    <>
      <section
        id="hero"
        className="w-full 2xl:max-w-5xl 2xl:mx-[275px] py-12 md:py-24 lg:py-36 xl:pt-[200px] bg-white dark:bg-black/20 relative overflow-hidden"
      >
        {/* Glowing orb background */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
          variants={orbVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-3xl"
          variants={orbVariants}
          initial="initial"
          animate="animate"
        />

        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ y: backgroundY }}
        >
          {/* Dev symbols */}
          {codeSymbols.map((symbol, i) => (
            <motion.div
              key={i}
              className={`absolute text-3xl font-mono font-bold text-indigo-500/40 dark:text-indigo-400/40 hidden md:block`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${10 + (i % 4) * 25}%`,
              }}
              custom={i}
              variants={devSymbolVariants}
              initial="initial"
              animate="animate"
            >
              <span className="relative">
                <motion.span
                  className={`absolute -inset-4 bg-gradient-to-r ${symbol.color} blur-md rounded-lg`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(99, 102, 241, 0.5)",
                      "0 0 20px rgba(99, 102, 241, 0.8)",
                      "0 0 5px rgba(99, 102, 241, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {symbol.symbol}
                </motion.span>
              </span>
            </motion.div>
          ))}

          {/* Animated lines with glow */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-400/20 dark:to-purple-400/20 origin-left hidden md:block"
              style={{
                left: `${10 + i * 20}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: `${100 + i * 20}px`,
              }}
              custom={i}
              variants={lineVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 blur-sm"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="container px-4 md:px-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ opacity }}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:ml-[150px] sm:pr-20"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.4,
                      delay: 0.1,
                      y: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    style={{ y: springY }}
                    className="relative"
                  >
                    I'm Aditya Zaveri.
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-20"
                      animate={{
                        opacity: [0.2, 0.3, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.span>
                  <motion.span
                    className="text-gray-500 dark:text-indigo-300 block mt-2 relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md rounded-lg"
                      animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <BlurText
                      text="Full Stack Developer"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className="relative z-10"
                    />
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-300 font-merriweather lg:text-[18px] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <motion.span
                    className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg"
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10">
                    Creating fast, beautiful, and user-friendly web apps with
                    today's tech — and tomorrow's thinking.
                  </span>
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#projects">
                  <Button className="w-full sm:w-auto relative overflow-hidden group dark:bg-indigo-300">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">View Projects</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#workex">
                    <Button variant="outline" className="w-full sm:w-auto relative overflow-hidden group">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative z-10">View Work Experience</span>
                    </Button>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: Github, href: "https://github.com/zaveriadi7" },
                  { icon: Linkedin, href: "https://linkedin.com/in/aditya-zaveri" },
                  { icon: MailIcon, href: "mailto:adityazaveri7@gmail.com" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group"
                  >
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <item.icon className="h-6 w-6 relative z-10" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

<div className="block sm:hidden mx-auto">
  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
    <div className="relative w-full h-full">
      <Image 
        src="/adityazaveri.webp" 
        alt="Aditya Zaveri" 
        width={250}
        height={250}
        className="w-[250px] h-2/3 object-cover rounded-2xl mx-auto mt-6"
        priority={false}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[25px]" /> */}
    </div>
    <p className="absolute bottom-20 text-indigo-300 font-bold text-xl">Aditya Zaveri</p>
  </div>
</div>
            <motion.div 
              className="hidden lg:block relative w-[400px] h-[400px] rounded-full border-8 border-white shadow-xl dark:border-indigo-200 ml-auto mr-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Central emoji with floating animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span 
                  className="text-6xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍💻
                </motion.span>
              </motion.div>

              {/* Rotating wrapper with enhanced animations */}
              <motion.div
                className="absolute inset-0 animate-spin-slow z-10"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[
                  "Backend Developer",
                  "Cloud Solutions",
                  "Caffeine-Fueled Coder",
                  "Frontend Developer",
                  "Database Architect",
                  "Agile Developer",
                ].map((text, index, arr) => {
                  const angle = (360 / arr.length) * index;
                  const radius = 200;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={index}
                      className="absolute origin-center"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                        zIndex: 50,
                      }}
                    >
                      <motion.div
                        className="relative px-3 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-lg dark:bg-gray-800 dark:text-white z-20 whitespace-nowrap transform -rotate-90"
                          // whileHover={{ 
                          //   scale: 1.1,
                          //   transition: { duration: 0.2 }
                          // }}
                      >
                        <motion.div 
                          className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-md opacity-70 z-[-1]"
                          animate={{ 
                            opacity: [0.5, 0.7, 0.5],
                            scale: [1, 1.05, 1]
                          }}
                          // transition={{ 
                          //   duration: 1.5,
                          //   repeat: Infinity,
                          //   ease: "easeInOut"
                          // }}
                        />
                        {text}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <LogoCarousel />
      </motion.div>
    </>
  );
}
