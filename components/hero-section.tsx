"use client";
import { ArrowRight, Github, Linkedin, Twitter, MailIcon } from "lucide-react";
import Link from "next/link";
import BlurText from "./ui/blurtext";
import { Button } from "@/components/ui/button";
import LogoCarousel from "../components/ui/infiniteScroller";
import ProfileCard from "./ui/ProfileCard";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="w-full 2xl:max-w-5xl 2xl:mx-[275px] py-12 md:py-24 lg:py-36 xl:pt-[200px] bg-white dark:bg-black/20"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4 sm:ml-[150px] sm:pr-20">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                  I'm Aditya Zaveri.
                  <span className="text-gray-500 dark:text-indigo-300 block mt-2">
                    <BlurText
                      text="Full Stack Developer"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className=""
                    />{" "}
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-300 font-merriweather lg:text-[18px]">
                  Creating fast, beautiful, and user-friendly web apps with
                  today's tech — and tomorrow's thinking.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5 group bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white">
                  <a href="#projects">View My Work</a>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <a href="#workex">View Experience</a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://github.com/zaveriadi7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aditya-zaveri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <a href="#contact_me" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <MailIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="sr-only">Mail</span>
                  </Button>
                </a>
              </div>
              <div className="mx-10 sm:hidden">
                <ProfileCard
                  name="Aditya Zaveri"
                  title="Software Engineer"
                  handle="aditya_zaveri"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/adityazaveri.png"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </div>

            {/* Rotating Circle Component */}
            <div className="hidden lg:block relative w-[400px] h-[400px] rounded-full border-8 border-white shadow-xl dark:border-indigo-200 ml-auto mr-0">
              {/* Central emoji */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 rounded-full">
                <span className="text-6xl">👨‍💻</span>
              </div>

              {/* Rotating wrapper */}
              <div className="absolute inset-0 animate-spin-slow z-10">
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
                    <div
                      key={index}
                      className="absolute origin-center"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${
                          angle + 90
                        }deg)`,
                        zIndex: 50,
                      }}
                    >
                      <div className="relative px-3 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-lg dark:bg-gray-800 dark:text-white z-20 whitespace-nowrap transform -rotate-90">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-md opacity-70 z-[-1]"></div>
                        {text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoCarousel />
    </>
  );
}
