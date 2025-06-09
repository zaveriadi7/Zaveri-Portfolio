import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale, tapScale } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlowingSymbols from "./ui/GlowingSymbols";

export default function ProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-black relative overflow-hidden">
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

      {/* Glowing dev symbols */}
      <GlowingSymbols count={6} size="lg" className="z-0" />

      <motion.div 
        id="projects" 
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
              <span className="relative z-10">Portfolio</span>
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
              <span className="relative z-10">Featured Projects</span>
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 relative"
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
                A selection of my recent work. Each project represents a unique
                challenge and solution.
              </span>
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} whileHover={hoverScale} whileTap={tapScale}>
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative">
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
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/vakeelsaab.png"
                  alt="Vakeel Saab Logo"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="https://github.com/zaveriadi7/vakeelsaab">
                    <Button variant="secondary" size="sm" className="gap-2 relative group/button">
                      <motion.span
                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md rounded-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="relative z-10"
                      >
                        <Github className="h-4 w-4" />
                      </motion.div>
                      <span className="relative z-10">Code</span>
                    </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
              <CardHeader className="relative z-10">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardTitle>VakeelSaabOnline</CardTitle>
                  <CardDescription>
                    An online platform for free consultation with experienced lawyers
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="flex-grow relative z-10">
                <motion.p 
                  className="text-sm text-gray-500 dark:text-gray-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Built with NodeJs, Express, EJS, CSS, PostgreSQL. Features
                  include user authentication, lawyer registration and a backend
                  to handle scheduling of clients with lawyers.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {["Node.js", "Express", "PostgreSQL", "EJS"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      variants={fadeIn}
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="relative group/badge">
                        <motion.span
                          className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-sm rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="relative z-10">{tech}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
              <CardFooter className="flex justify-between relative z-10">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-primary relative group/button"
                  >
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-sm rounded-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <a href="https://github.com/zaveriadi7/vakeelsaab" target="_blank" rel="noopener noreferrer" className="relative z-10">
                      View Project
                    </a>
                    <motion.div
                      animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} whileHover={hoverScale} whileTap={tapScale}>
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/chefclaude.png"
                  alt="ChefClaude Logo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  {/* <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button> */}
                </div>
              </div>
              <CardHeader>
                <CardTitle>ChefClaude</CardTitle>
                <CardDescription>AI-powered recipe generator</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Built with React, Node.js, and Anthropic API. Users can input
                  ingredients and dietary preferences to generate personalized
                  recipes. Implemented Lazy loading for smooth user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Anthropic API</Badge>
                  <Badge variant="secondary">Lazy Loading</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} whileHover={hoverScale} whileTap={tapScale}>
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/tasknest.png"
                  alt="TaskNest Logo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href="https://github.com/zaveriadi7/Tasknest">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  {/* <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button> */}
                </div>
              </div>
              <CardHeader>
                <CardTitle>TaskNest</CardTitle>
                <CardDescription>
                  Task management app with reminders and sharing features
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Built with React, Node.js, Express, CSS, PostgreSQL. Features
                  include user authentication, task management, and a backend to
                  handle notifications. Users can create, update, and delete
                  tasks, set tags, receive reminders, upload files and have
                  reminders on gmail.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Express</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
                >
                  <a href="https://github.com/zaveriadi7/Tasknest" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          variants={fadeIn}
        >
          <Button 
            variant="outline" 
            className="gap-1.5 group hover:bg-primary hover:text-primary-foreground transition-colors duration-300 relative"
          >
            <motion.span
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
            <a href="https://github.com/zaveriadi7/" target="_blank" rel="noopener noreferrer" className="relative z-10">
              View All Projects
            </a>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
