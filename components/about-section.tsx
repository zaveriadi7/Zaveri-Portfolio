import { CheckCircle } from "lucide-react";
import BlurText from "../components/ui/blurtext";
import SplitText from "./ui/splittext";
import ShinyText from "./ui/ShinyText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animations";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
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
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:pt-20 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated background paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0">
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 30},${20 + i * 10} Q${50 + i * 10},${40 + i * 10} ${100 - i * 30},${20 + i * 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={i}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
          ))}
          {[...Array(2)].map((_, i) => (
            <motion.path
              key={`circle-${i}`}
              d={`M${50 + Math.cos(i * Math.PI) * 30},${50 + Math.sin(i * Math.PI) * 30} A30,30 0 0,1 ${50 + Math.cos((i+1) * Math.PI) * 30},${50 + Math.sin((i+1) * Math.PI) * 30}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              custom={i}
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
          ))}
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
            <motion.div 
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md rounded-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">About Me</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg rounded-lg"
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
              <span className="relative z-10">My Journey</span>
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                Full stack developer passionate about building clean, fast, and user-friendly web applications.
              </span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12 font-merriweather"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            variants={fadeIn}
          >
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold dark:text-indigo-200">
                  My Background
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                  Final year B.Tech CSE student at VIT, building web apps and developer tools.
                </p>
                <ul className="grid gap-3 font-merriweather">
                  {[
                    "B.Tech CSE @ VIT",
                    "From Curious Beginner to Startup Engineer",
                    "Built Passion Projects & Tools",
                    "Making my mark at @Classplus and @Testbook"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors relative group/item"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-sm rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400 relative z-10" />
                      <span className="text-gray-700 dark:text-gray-300 relative z-10">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center space-y-4"
            variants={fadeIn}
          >
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold dark:text-indigo-200">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                  Focused on clean code, scalable architecture, and optimal performance.
                </p>
                <ul className="grid gap-3 font-merriweather">
                  {[
                    "Clean & Scalable Code",
                    "Optimized Component Design",
                    "AWS Integration & CI/CD",
                    "Always Iterating & Learning"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors relative group/item"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-sm rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400 relative z-10" />
                      <span className="text-gray-700 dark:text-gray-300 relative z-10">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-2 bg-white dark:bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Background glow effects */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div 
          className="container px-4 md:px-6 mx-auto relative z-10"
          variants={fadeIn}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2" id="workex">
              <motion.div 
                className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-10 relative"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md rounded-lg"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Work Experience</span>
              </motion.div>
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg rounded-lg"
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
                <span className="relative z-10">My Work Experience</span>
              </motion.h2>
            </div>
            <div>
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text flex flex-wrap justify-center gap-2 lg:text-6xl lg:pt-10 pb-10 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-lg rounded-lg"
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
                <span className="z-100">Classplus</span>
                <span className="text-purple-500 relative z-10">•</span>
                <span className="z-100">Testbook</span>
                <span className="text-purple-600 relative z-10">•</span>
                <span className="z-100">Polaris</span>
              </motion.h2>

              <SplitText
                text="Front-End Developer at Classplus and Testbook, building high-impact web applications for India's leading edtech platforms."
                className="text-lg md:text-xl font font-serif text-center mt-20 relative"
                delay={10}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
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
              </SplitText>

              <div className="max-w-5xl mx-auto px-6 py-10 font-merriweather text-gray-800 dark:text-gray-300">
                <motion.h2 
                  className="text-lg md:text-2xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg"
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
                  <span className="relative z-10">Professional Experience Highlights</span>
                </motion.h2>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  variants={staggerContainer}
                >
                  {[
                    {
                      title: "Next.js Migration",
                      description: "Migrated front-end systems to Next.js for better performance and SEO."
                    },
                    {
                      title: "Component Development",
                      description: "Built reusable components with dynamic configurations for rapid scaling."
                    },
                    {
                      title: "Performance",
                      description: "Optimized rendering and implemented lazy loading for better performance."
                    },
                    {
                      title: "Data Integration",
                      description: "Developed API-driven rendering with efficient data structures."
                    },
                    {
                      title: "UI Development",
                      description: "Built responsive UIs using Tailwind CSS and ShadCN UI."
                    },
                    {
                      title: "Code Quality",
                      description: "Maintained code quality through best practices and version control."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={hoverScale}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 relative group"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-200 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 relative z-10">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.h2 
                  className="text-3xl font-extrabold mt-20 mb-10 text-gray-900 dark:text-gray-100 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg"
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
                  <span className="relative z-10">Skills & Tools</span>
                </motion.h2>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-4 gap-4"
                  variants={staggerContainer}
                >
                  {[
                    {
                      title: "Frameworks",
                      skills: "React.js, Next.js, Angular, TypeScript"
                    },
                    {
                      title: "Languages",
                      skills: "JavaScript, TypeScript, Python, C++"
                    },
                    {
                      title: "Tools & Platforms",
                      skills: "Git, AWS, Docker, CI/CD"
                    },
                    {
                      title: "Design & UI",
                      skills: "Tailwind CSS, ShadCN UI, Figma"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={hoverScale}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 relative group"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <h4 className="font-semibold text-gray-600 dark:text-indigo-200 mb-2 relative z-10">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 relative z-10">
                        {item.skills}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}
