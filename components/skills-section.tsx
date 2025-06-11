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
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animations";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import GlowingSymbols from "@/components/ui/GlowingSymbols";

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
  // | "python"
  | "git"
  | "aws";

const skillLevels: Record<SkillKey, number> = {
  reactjs: 90,
  nextjs: 85,
  typescript: 80,
  tailwindcss: 95,
  html5: 90,
  css3: 85,
  angular: 75,
  js: 90,
  nodejs: 85,
  prisma: 80,
  postgresql: 85,
  mysql: 80,
  "c++": 85,
  // python: 80,
  git: 90,
  aws: 75,
};

const skillIcons: Record<SkillKey, string> = {
  reactjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs: "https://devrajchatribin.com/skills/Next.js.svg",
  typescript: "https://devrajchatribin.com/skills/TypeScript.svg",
  tailwindcss: "https://devrajchatribin.com/skills/TailwindCSS.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  angular: "https://devrajchatribin.com/skills/Angular.svg",
  js: "https://devrajchatribin.com/skills/JavaScript.svg",
  nodejs: "https://devrajchatribin.com/skills/Node.js.svg",
  prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  postgresql: "https://devrajchatribin.com/skills/PostgreSQL.svg",
  mysql: "https://devrajchatribin.com/skills/MySQL.svg",
  "c++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  // python:
  //   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  aws: "https://devrajchatribin.com/skills/AWS.svg",
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
        <GlowingSymbols count={6} size="lg" className="z-0" />
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
                transition: { duration: 0.2 },
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
                      <img
                        src={skillIcons["reactjs"]}
                        alt="React"
                        className="w-8 h-8"
                      />
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
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut",
                            }}
                          >
                            <img
                              src={skillIcons[tech as SkillKey]}
                              alt={tech}
                              className="w-8 h-6 object-contain"
                            />
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
                transition: { duration: 0.2 },
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
                      <img
                        src={skillIcons["nodejs"]}
                        alt="Node.js"
                        className="w-8 h-8"
                      />
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
                    {["nodejs", "prisma", "postgresql", "mysql"].map(
                      (tech, index) => (
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
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                ease: "easeOut",
                              }}
                            >
                              <img
                                src={skillIcons[tech as SkillKey]}
                                alt={tech}
                                className="w-8 h-6 object-contain"
                              />
                            </motion.div>
                          </Badge>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Tools Card */}
            <motion.div
              variants={fadeIn}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
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
                      <img
                        src={skillIcons["git"]}
                        alt="git"
                        className="w-8 h-8"
                      />
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
                    {["c++", "git", "aws"].map((tech, index) => (
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
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut",
                            }}
                          >
                            <img
                              src={skillIcons[tech as SkillKey]}
                              alt={tech}
                              className="w-8 h-6 object-contain"
                            />
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

        {/* Learning Section */}
        <motion.div className="mt-16" variants={fadeIn}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-merriweather">
              Coming Soon....{" "}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-merriweather">
              Always expanding my skill set with new technologies
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl sm:mx-auto mx-10"
            variants={staggerContainer}
          >
            {[
              {
                name: "Drizzle",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAflBMVEUAAADF90/I+lDN/1LJ/FDR/1Ryjy5OYh+z4EhkfSjC8U4+ThlngCm760sPEwYNEAU6SRehyUFLXh5ccyUGCQNphColLw9BUhp5lzGPsTkXHQm54UqStzstORIeJgxIWh2t10VWayKEpjWp0ER+nzMRFwcyPxSawD4aIQq/6EwjrqPDAAAEXklEQVR4nO2a25aqMAyGpwe04glE8YQIgqLv/4LbWQNNla49AYGbyXfJmowxTZM/wa8vgiAIgiAIgiAIgiAIgiAIgiAI4k+wHsyoNeHmko+bGnmjy2jahzd2xj6T/JHfm9isZ4pJlsz68umd1BWMMe5EywZGm6eLTyOx6c2tF0L/++OeyBRvdJrzH6PHtj/PDHalj0zs0DbrSJRGfNKja5qwigkTF7TR2C1tmBzkvPdVTJgYYW0OWfXFhonk9FF9HHPR6TVztI/HuE/vSiKpDw592leljZzG5bUFE31ujJ2wRrn2Ufh9OlcSJxBIdHKdVfXN+HzVp3clIx1G6S+QNtdIR1/usUYfECZw2uhSMtYmfH7u07uSvT5svsdKmoOvaxYfokZ6HAKJvqUzyGJ16NO7kkLHRO6xNjHUcXcICTSDtpFcsUbQoGTRp3MlCx8ODt0QY+0jEw1EU2s2UH4ytJI0Oj1ejrRHK8Jnb0PHJAX1o259elfSprctCkhjvPhEEd68W02rpK7ubcqzG51qQ88Iek3WrfoJfHVUxZsMu/oQE1tvG2XqmETh68MY1E/Hs03gSs6lVMHrU4hJYlE/ueSSSem/5t0Oek235edW3g+RmU+XR4hJUDcaS1virVyo49027bz6x9Ic5DdQkpWl/FTtmSdmKCMoP0WnywuYmMw6szVmBosi3OgwmzInhcO2fbEPKOBYDW+Mpl3UP89Ttou/BH3sdNu0V0bxhYJy0nHkzLLNMZRwATon0E9F0mgh8xunDARjrp8ejPBamvb0YZsOthBe13LVPgDaM8/gCgQ6vNzW2y6GgIMKCvpYFmHdqD2wnGAuXJs7qB/XMnwZ04ELxxoa4e1237fTM7zZnuHgZFav4/fMOoiP+1I/ng4kZ0ZXPM91qCwzwwRujdmK0ur7ctVpIA9wrMKcDk5VLRFR3WgJXcUx74ceh/D6GEUKyfWaRqWW4bbdzwiO9aWPVqVVJp3emiXM1OL1ftwjwZ+ag1lK8hQy5K09bzPBOBePbqVuDpuv5L3T5olSviWOsVFBozej+0UpFaH3RShuyf+K783zbKI1hUCqms5Ze56HHipRrHMQtRH6Xxvlp+PpwAqUHzbHLycgQ9QQu1EoP07++1//YK6vum3PdgKICUMfdm4IuAHeyMVGTNDF1zvaOn1/7LSLMkNvvqD8OEMsJ0LVIrlgfuSs065iZ30xSjLWKCxaZMgHpAzUD3rxbswM2QCBvMPinaGTK4TlRMfTgZ3A2PKg5QAsJ+QQr2aM3ibQddwDGTnMbhRikv3+1z8sIttU2R8nWE446ORaaRvWsWC0Ay8LZYF+XWVk5BDl52sDo6dtN2pHF1ZZ08e9oCPpoF/NGJHEv5f/iFspExopwnNZ/htkyGecpeSMy2ZCZif49+9njoP9GGmWuNzNJo1WiMs8YXLuD/HStWQxnjT/0UGcTob5hQ9BEARBEARBEARBEARBEARBEARBEATxh/kH1U8z2/tkoP8AAAAASUVORK5CYII=",
                // status: "Coming Soon"
              },
              {
                name: "React Native",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                // status: "Coming Soon"
              },
              {
                name: "tRPC",
                icon: "https://trpc.io/img/logo.svg",
                // status: "Coming Soon"
              },
              {
                name: "LangChain",
                icon: "data:image/png;base64,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",
                // status: "Coming Soon"
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Card className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 p-2">
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    </motion.div>
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-indigo-500 dark:text-indigo-400">
                        {skill.status}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
