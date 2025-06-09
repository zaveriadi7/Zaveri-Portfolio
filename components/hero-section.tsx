"use client";
import { ArrowRight, Github, Linkedin, Twitter, MailIcon } from "lucide-react";
import Link from "next/link";
import BlurText from "./ui/blurtext";
import { Button } from "@/components/ui/button";
import LogoCarousel from "../components/ui/infiniteScroller";
import ProfileCard from "./ui/ProfileCard";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale, slideIn } from "@/lib/animations";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  // Simplified parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <section
        id="hero"
        className="w-full 2xl:max-w-5xl 2xl:mx-[275px] py-12 md:py-24 lg:py-36 xl:pt-[200px] bg-white dark:bg-black/20 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0">
              <motion.path
                d="M0,20 Q50,40 100,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,50 Q50,70 100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M0,80 Q50,100 100,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
          </div>
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
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white"
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
                  >
                    I'm Aditya Zaveri.
                  </motion.span>
                  <motion.span 
                    className="text-gray-500 dark:text-indigo-300 block mt-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <BlurText
                      text="Full Stack Developer"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      className=""
                    />{" "}
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-300 font-merriweather lg:text-[18px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Creating fast, beautiful, and user-friendly web apps with
                  today's tech — and tomorrow's thinking.
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
                  <Button className="w-full sm:w-auto">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#workex">
                  <Button  variant="outline" className="w-full sm:w-auto">
                    View Work Experience
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
                      scale: 1.1,
                      rotate: 3,
                      transition: { duration: 0.15 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

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
                      // whileHover={{ 
                      //   scale: 1.1,
                      //   rotate: angle + 90 + 5,
                      //   transition: { duration: 0.2 }
                      // }}
                    > 
                      <motion.div 
                        className="relative px-3 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-lg dark:bg-gray-800 dark:text-white z-20 whitespace-nowrap transform -rotate-90"
                        // whileHover={{ 
                        //   scale: 1.05,
                        //   transition: { duration: 0.15 }
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
