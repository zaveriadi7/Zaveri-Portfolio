import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GlowingSymbols from "./ui/GlowingSymbols";
import ProjectModal from "./ui/project-modal";
import { useState } from "react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
  },
};

const tapScale = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

const projects = [
  {
    title: "VakeelSaabOnline",
    description: "An online platform for free consultation with experienced lawyers",
    longDescription: "A comprehensive legal consultation platform that connects clients with experienced lawyers. The platform streamlines the process of finding and scheduling consultations with legal professionals, making legal advice more accessible.",
    images: [
      "/vakeelsaab.png",
      "/vakeelsaab-2.png",
      "/vakeelsaab-3.png"
    ],
    githubUrl: "https://github.com/zaveriadi7/vakeelsaab",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS"],
    features: [
      "User authentication and authorization",
      "Lawyer registration and profile management",
      "Real-time consultation scheduling system",
      "Secure payment integration",
      "Responsive design for all devices",
      "Admin dashboard for platform management"
    ]
  },
  {
    title: "ChefClaude",
    description: "AI-powered recipe generator",
    longDescription: "An innovative recipe generation platform that leverages AI to create personalized recipes based on available ingredients and dietary preferences. The application provides a seamless user experience with real-time recipe generation and customization options.",
    images: [
      "/chefclaude.png",
      "/chefclaude-2.png",
      "/chefclaude-3.png"
    ],
    githubUrl: "https://github.com/zaveriadi7/chefclaude",
    technologies: ["React", "Node.js", "Anthropic API", "Lazy Loading"],
    features: [
      "AI-powered recipe generation",
      "Ingredient-based recipe suggestions",
      "Dietary preference customization",
      "Lazy loading for optimal performance",
      "Responsive design for all devices",
      "User-friendly interface"
    ]
  },
  {
    title: "TaskNest",
    description: "Task management app with reminders and sharing features",
    longDescription: "A comprehensive task management solution that helps users organize their work and personal tasks efficiently. The platform includes advanced features like task sharing, reminders, and file attachments, making it a complete productivity tool.",
    images: [
      "/tasknest.png",
      "/tasknest-2.png",
      "/tasknest-3.png"
    ],
    githubUrl: "https://github.com/zaveriadi7/Tasknest",
    technologies: ["EJS", "Node.js", "PostgreSQL", "Express"],
    features: [
      "User authentication and authorization",
      "Task creation and management",
      "Email reminders and notifications",
      "File attachment support",
      "Task sharing capabilities",
      "Tag-based organization"
    ]
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedProject(projects[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedProject(projects[currentIndex - 1]);
    }
  };

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn}
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Card 
                className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentIndex(index);
                }}
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
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
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
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2 relative group/button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
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
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="relative z-10"
                        >
                          <Github className="h-4 w-4" />
                        </motion.div>
                        <span className="relative z-10">Code</span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        variants={fadeIn}
                        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <Badge
                          variant="secondary"
                          className="relative group/badge"
                        >
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
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex justify-center" variants={fadeIn}>
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
            <a
              href="https://github.com/zaveriadi7/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              View All Projects
            </a>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </section>
  );
}
