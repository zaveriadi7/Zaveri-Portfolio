"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RotatingText from "./ui/changingText";
import Certifications from "./ui/imageCarousel";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animations";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

type SkillKey = 
  | "reactjs"
  | "nextjs"
  | "typescript"
  | "tailwindcss"
  | "html5"
  | "css3"
  | "angular"
  | "js"
  | "nodejs"
  | "prisma"
  | "postgresql"
  | "mysql"
  | "c++"
  | "python"
  | "git"
  | "aws";

const skillLevels: Record<SkillKey, number> = {
  "reactjs": 90,
  "nextjs": 85,
  "typescript": 80,
  "tailwindcss": 95,
  "html5": 90,
  "css3": 85,
  "angular": 75,
  "js": 90,
  "nodejs": 85,
  "prisma": 80,
  "postgresql": 85,
  "mysql": 80,
  "c++": 85,
  "python": 80,
  "git": 90,
  "aws": 75,
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillKey | null>(null);

  // Path animation variants
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
        id="skills"
        className="w-full py-12 md:py-24 lg:py-24 bg-gray-50 dark:bg-black relative overflow-hidden"
      >
        {/* Animated background paths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0">
            {/* Corner paths */}
            <motion.path
              d="M0,20 Q20,0 40,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={0}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M60,20 Q80,0 100,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={1}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M0,80 Q20,100 40,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={2}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M60,80 Q80,100 100,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={3}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            {/* Wave paths */}
            <motion.path
              d="M20,10 C30,0 40,20 50,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              custom={4}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M50,10 C60,0 70,20 80,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              custom={5}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M20,90 C30,100 40,80 50,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              custom={6}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M50,90 C60,100 70,80 80,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              custom={7}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
          </svg>
        </div>

        <motion.div 
          className="container px-4 md:px-6 mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Skills
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  My{" "}
                  <RotatingText
                    texts={[
                      "Skills",
                      "Expertise",
                      "Technologies",
                      "Tools",
                      "Hobbies",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 text-gray-500 dark:text-indigo-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
                I've worked with a wide range of technologies throughout my
                career. Here are some of the key areas where I excel.
              </p>
            </div>
          </motion.div>

          {/* Skill Cards */}
          <motion.div 
            className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 font-merriweather"
            variants={staggerContainer}
          >
            {/* Frontend Card */}
            <motion.div 
              variants={fadeIn} 
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <StackIcon name="reactjs" className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-indigo-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                        Frontend Development
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        Building beautiful, responsive user interfaces
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      "reactjs",
                      "nextjs",
                      "typescript",
                      "tailwindcss",
                      "html5",
                      "css3",
                      "angular",
                      "js",
                    ].map((tech, index) => (
                      <motion.div 
                        key={tech} 
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full flex items-center justify-center gap-1 bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <motion.div
                            animate={{
                              rotate: 360,
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut"
                            }}
                          >
                            <StackIcon name={tech} className="w-8 h-6" />
                          </motion.div>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend Card */}
            <motion.div 
              variants={fadeIn} 
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <StackIcon name="nodejs" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-indigo-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                        Backend Development
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        Creating robust, scalable server applications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {["nodejs", "prisma", "postgresql", "mysql"].map((tech, index) => (
                      <motion.div 
                        key={tech} 
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full flex items-center justify-center gap-1 bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <motion.div
                            animate={{
                              rotate: 360,
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut"
                            }}
                          >
                            <StackIcon name={tech} className="w-8 h-6" />
                          </motion.div>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Tools Card */}
            <motion.div 
              variants={fadeIn} 
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <StackIcon name="python" className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-indigo-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                        Core Languages & Tools
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        Streamlining development and deployment
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {["c++", "python", "git", "aws"].map((tech, index) => (
                      <motion.div 
                        key={tech} 
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full flex items-center justify-center gap-1 bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <motion.div
                            animate={{
                              rotate: 360,
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut"
                            }}
                          >
                            <StackIcon name={tech} className="w-8 h-6" />
                          </motion.div>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <motion.section
        id="Certifications"
        className="w-full bg-white dark:bg-black pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          className="container px-4 md:px-6 mx-auto"
          variants={fadeIn}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Certifications
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-indigo-200">
                  My Certifications
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
        <Certifications />
      </motion.section>
    </>
  );
}
