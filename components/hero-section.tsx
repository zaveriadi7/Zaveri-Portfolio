"use client";
import { ArrowRight, Github, Linkedin, Twitter, MailIcon } from "lucide-react";
import Link from "next/link";
import BlurText from "./ui/blurtext";
import { Button } from "@/components/ui/button";
import LogoCarousel from "../components/ui/infiniteScroller";
export default function HeroSection() {
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-36 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4 sm:mx-[140px]">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                I'm Aditya Zaveri
                <span className="text-gray-500 dark:text-gray-400 block mt-2">
                  <BlurText
                    text="Full Stack Developer"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className=""
                  />{" "}
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                I build beautiful, performant, and user-friendly web
                applications with modern technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5 group">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <a
                href="mailto:adityazaveri.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MailIcon className="h-5 w-5" />
                  <span className="sr-only">Mail</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden sm:block relative w-[400px] aspect-square rounded-full border-8 border-white shadow-xl dark:border-gray-800">
            {/* Central emoji */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full">
              <span className="text-6xl">👨‍💻</span>
            </div>

            {/* Rotating wrapper */}
            <div className="absolute inset-0 animate-spin-slow z-10">
              {[
                "Backend Developer",
                "Cloud Solutions ",
                "Coffee Person",
                "Frontend Developer",
                "UI/UX Advocate",
                "Agile Developer",
              ].map((text, index, arr) => {
                const angle = (360 / arr.length) * index;
                return (
                  <div
                    key={index}
                    className="absolute left-[130px] top-[177px] hidden md:block"
                    style={{
                      transform: `rotate(${angle}deg) translateX(200px)`, // ✅ Removed rotate(-angle)
                      zIndex: 50,
                    }}
                  >
                    <div
                      className="relative px-4 py-2 rounded-full bg-white text-sm font-medium text-black shadow-lg dark:bg-gray-800 dark:text-white z-20"
                      style={
                        {
                          // transform: `rotate(${-angle}deg)`, // ✅ Text stays upright (counter-rotate only text block)
                        }
                      }
                    >
                      {/* Gradient border glow */}
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
