import { CheckCircle } from "lucide-react";
import BlurText from "../components/ui/blurtext";
import SplitText from "./ui/splittext";
import ShinyText from "./ui/ShinyText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animations";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:pt-20 bg-white dark:bg-black"
    >
      <motion.div 
        className="container px-4 md:px-6 mx-auto"
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
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200">
              My Journey
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
              Full stack developer passionate about building clean, fast, and user-friendly web applications.
            </p>
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
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold dark:text-indigo-200">
                  My Background
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                  Final year B.Tech CSE student at VIT, building web apps and developer tools.
                </p>
                <ul className="grid gap-3 font-merriweather">
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">B.Tech CSE @ VIT</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">From Curious Beginner to Startup Engineer</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Built Passion Projects & Tools</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Making my mark at @Classplus and @Testbook</span>
                  </motion.li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center space-y-4"
            variants={fadeIn}
          >
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold dark:text-indigo-200">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                  Focused on clean code, scalable architecture, and optimal performance.
                </p>
                <ul className="grid gap-3 font-merriweather">
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Clean & Scalable Code</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Optimized Component Design</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">AWS Integration & CI/CD</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300">Always Iterating & Learning</span>
                  </motion.li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-2 bg-white dark:bg-black"
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
            <div className="space-y-2" id="workex">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-10">
                Work Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200">
                My Work Experience
              </h2>
            </div>
            <div>
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text flex flex-wrap justify-center gap-2 lg:text-6xl lg:pt-10 pb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>Classplus</span>
                <span className="text-purple-500">•</span>
                <span>Testbook</span>
                <span className="text-purple-600">•</span>
                <span>Polaris</span>
              </motion.h2>

              <SplitText
                text="Front-End Developer at Classplus and Testbook, building high-impact web applications for India's leading edtech platforms."
                className="text-lg md:text-xl font font-serif text-center mt-20"
                delay={10}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
              />

              <div className="max-w-5xl mx-auto px-6 py-10 font-merriweather text-gray-800 dark:text-gray-300">
                <motion.h2 
                  className="text-lg md:text-2xl font-extrabold mb-10 text-gray-900 dark:text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Professional Experience Highlights
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
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.h2 
                  className="text-3xl font-extrabold mt-20 mb-10 text-gray-900 dark:text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Skills & Tools
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
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-600 dark:text-indigo-200 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
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
