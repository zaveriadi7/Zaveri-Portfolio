"use client"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import type { JSX } from "react/jsx-runtime"
import { motion, AnimatePresence } from "framer-motion"

export interface CommandType {
  description: string
  execute: (args: string[]) => JSX.Element | Promise<JSX.Element>
}

export interface TerminalPortfolioProps {
  /** Custom commands to override or extend default commands */
  customCommands?: Record<string, CommandType>
  /** Portfolio data */
  portfolioData?: {
    name?: string
    title?: string
    about?: string[]
    skills?: {
      [category: string]: string[]
    }
    projects?: Array<{
      title: string
      description: string
      technologies: string
      link?: string
    }>
    contact?: {
      email?: string
      github?: string
      linkedin?: string
      twitter?: string
    }
  }
  /** Custom welcome message */
  welcomeMessage?: JSX.Element
  /** Terminal height */
  height?: string
  /** Custom CSS classes */
  className?: string
}

const defaultPortfolioData = {
  name: "Terminal Portfolio",
  title: "Full-Stack Developer",
  about: [
    "Hi there! I'm a passionate full-stack developer with expertise in modern web technologies. I love building intuitive, performant applications that solve real-world problems.",
    "With a background in computer science and several years of industry experience, I bring both technical knowledge and practical problem-solving skills to every project.",
    "When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.",
  ],
  skills: {
    Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS", "Redux", "Zustand"],
    Backend: ["Node.js", "Express", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL", "REST API"],
    "DevOps & Tools": ["Docker", "Kubernetes", "AWS", "Vercel", "Netlify", "Git", "GitHub Actions", "Jest", "Cypress"],
  },
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with product management, cart functionality, and secure checkout.",
      technologies: "Next.js, TypeScript, Tailwind CSS, Stripe",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, user permissions, and file attachments.",
      technologies: "React, Redux, Node.js, MongoDB",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather visualization tool with forecasts, historical data, and customizable views.",
      technologies: "Vue.js, D3.js, OpenWeather API",
      link: "#",
    },
  ],
  contact: {
    email: "hello@example.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
  },
}

// Helper components
function ContactItem({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string
  icon: string
  label: string
  value: string
  external?: boolean
}) {
  const IconComponent = getIcon(icon)

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-900/20 transition-colors group"
    >
      <div className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-700/50 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
        <IconComponent />
      </div>
      <div>
        <div className="text-sm text-blue-400/70">{label}</div>
        <div className="text-blue-300 group-hover:text-blue-400 transition-colors">{value}</div>
      </div>
    </a>
  )
}

function FileItem({ icon, name }: { icon: string; name: string }) {
  const IconComponent = getIcon(icon === "folder" ? "folder" : "file")
  const color = icon === "folder" ? "text-blue-400" : "text-blue-500"

  return (
    <div className="flex items-center gap-2">
      <div className={color}>
        <IconComponent />
      </div>
      <span className="text-blue-300">{name}</span>
    </div>
  )
}

function getIcon(type: string) {
  const icons = {
    mail: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    github: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    linkedin: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    twitter: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    file: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    folder: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
    arrowUpRight: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    ),
    download: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
  }

  return icons[type as keyof typeof icons] || icons.file
}

export function TerminalPortfolio({
  customCommands = {},
  portfolioData = defaultPortfolioData,
  welcomeMessage,
  height = "70vh",
  className = "",
}: TerminalPortfolioProps) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<JSX.Element[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Create default commands using portfolio data
  const createDefaultCommands = (): Record<string, CommandType> => ({
    help: {
      description: "Show available commands",
      execute: () => (
        <div className="grid gap-1">
          <p className="text-blue-400">Available commands:</p>
          {Object.entries({ ...defaultCommands, ...customCommands }).map(([name, command]) => (
            <div
              key={name}
              className="grid grid-cols-[100px_1fr] gap-2 hover:bg-blue-900/10 px-2 py-1 rounded-md transition-colors"
            >
              <span className="text-blue-500 font-semibold drop-shadow-[0_0_2px_rgba(59,130,246,0.5)]">{name}</span>
              <span className="text-blue-300/80">{command.description}</span>
            </div>
          ))}
        </div>
      ),
    },

    about: {
      description: "Display information about me",
      execute: () => (
        <div className="grid gap-3 bg-blue-950/10 p-4 rounded-md border border-blue-900/50 shadow-[0_0_10px_rgba(29,78,216,0.15)]">
          <h2 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">About Me</h2>
          {portfolioData.about?.map((paragraph, index) => (
            <p key={index} className="text-blue-300">
              {paragraph}
            </p>
          ))}
        </div>
      ),
    },

    skills: {
      description: "List my technical skills",
      execute: () => (
        <div className="grid gap-4">
          <h2 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Skills</h2>
          {Object.entries(portfolioData.skills || {}).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-blue-950/10 p-3 sm:p-4 rounded-md border border-blue-900/50 shadow-[0_0_10px_rgba(29,78,216,0.15)]"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-900/30 border border-blue-700/50 rounded-full text-xs sm:text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },

    projects: {
      description: "View my portfolio projects",
      execute: () => (
        <div className="grid gap-4">
          <h2 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Projects</h2>
          {portfolioData.projects?.map((project, index) => (
            <div
              key={index}
              className="bg-blue-950/10 p-4 rounded-md border border-blue-900/50 shadow-[0_0_10px_rgba(29,78,216,0.15)] hover:shadow-[0_0_15px_rgba(29,78,216,0.25)] transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-400">{project.title}</h3>
              <p className="text-sm text-blue-300/70 mt-1">{project.technologies}</p>
              <p className="mt-2 text-blue-300">{project.description}</p>
              {project.link && (
                <div className="mt-3">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                  >
                    <span>View Project</span>
                    {getIcon("arrowUpRight")()}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },

    contact: {
      description: "Get my contact information",
      execute: () => (
        <div className="grid gap-3 bg-blue-950/10 p-4 rounded-md border border-blue-900/50 shadow-[0_0_10px_rgba(29,78,216,0.15)]">
          <h2 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Contact Me</h2>
          <p className="text-blue-300">Feel free to reach out through any of these channels:</p>
          <div className="grid gap-3 mt-2">
            {portfolioData.contact?.email && (
              <ContactItem
                href={`mailto:${portfolioData.contact.email}`}
                icon="mail"
                label="Email"
                value={portfolioData.contact.email}
              />
            )}
            {portfolioData.contact?.github && (
              <ContactItem
                href={portfolioData.contact.github}
                icon="github"
                label="GitHub"
                value={portfolioData.contact.github.replace("https://", "")}
                external
              />
            )}
            {portfolioData.contact?.linkedin && (
              <ContactItem
                href={portfolioData.contact.linkedin}
                icon="linkedin"
                label="LinkedIn"
                value={portfolioData.contact.linkedin.replace("https://", "")}
                external
              />
            )}
            {portfolioData.contact?.twitter && (
              <ContactItem
                href={portfolioData.contact.twitter}
                icon="twitter"
                label="Twitter"
                value={portfolioData.contact.twitter.replace("https://twitter.com/", "@")}
                external
              />
            )}
          </div>
        </div>
      ),
    },

    clear: {
      description: "Clear the terminal",
      execute: () => {
        setOutput([])
        return <></>
      },
    },

    echo: {
      description: "Echo a message",
      execute: (args) => <div className="text-blue-300">{args.join(" ")}</div>,
    },

    resume: {
      description: "View my resume",
      execute: () => (
        <div className="grid gap-3 bg-blue-950/10 p-4 rounded-md border border-blue-900/50 shadow-[0_0_10px_rgba(29,78,216,0.15)]">
          <h2 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Resume</h2>
          <p className="text-blue-300">You can view or download my resume:</p>
          <div className="mt-2">
            <a
              href="https://drive.google.com/file/d/14BndNCmSzSJXtUU1HC5fvIOja1N7kjzl/view?usp=sharing"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-[0_0_10px_rgba(29,78,216,0.3)]"
            >
              {getIcon("download")()}
              Download Resume (PDF)
            </a>
          </div>
        </div>
      ),
    },
  })

  const defaultCommands = createDefaultCommands()
  const commands = { ...defaultCommands, ...customCommands }

  const defaultWelcomeMessage = (
    <div className="mb-4">
      <p className="text-blue-400 text-sm sm:text-base">Welcome to my interactive terminal portfolio!</p>
      <p className="text-sm sm:text-base">
        Type <span className="text-blue-500 font-semibold drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">help</span> to see
        available commands.
      </p>
    </div>
  )

  useEffect(() => {
    inputRef.current?.focus()
    setOutput([<div key="welcome">{welcomeMessage || defaultWelcomeMessage}</div>])

    const handleClickOutside = () => {
      inputRef.current?.focus()
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [welcomeMessage])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  const handleSubmit = async () => {
    const trimmedInput = input.trim()

    if (trimmedInput === "") {
      addToOutput(<div key={`empty-${Date.now()}`}>&nbsp;</div>)
      return
    }

    setHistory((prev) => [...prev, trimmedInput])
    setHistoryIndex(-1)

    addToOutput(
      <div key={`command-${Date.now()}`}>
        <span className="text-blue-500 drop-shadow-[0_0_2px_rgba(59,130,246,0.5)]">visitor@portfolio</span>:
        <span className="text-purple-400">~$</span> {trimmedInput}
      </div>,
    )

    const [command, ...args] = trimmedInput.split(" ")
    const lowerCommand = command.toLowerCase()

    if (lowerCommand === "clear") {
      setOutput([])
      setInput("")
      return
    }

    if (lowerCommand in commands) {
      const result = await commands[lowerCommand].execute(args)
      addToOutput(<div key={`result-${Date.now()}`}>{result}</div>)
    } else {
      addToOutput(
        <div key={`error-${Date.now()}`} className="text-red-400">
          Command not found: {command}. Type{" "}
          <span className="text-blue-500 font-semibold drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">help</span> to see
          available commands.
        </div>,
      )
    }

    setInput("")
  }

  const addToOutput = (element: JSX.Element) => {
    setOutput((prev) => [...prev, element])
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const commandStart = input.toLowerCase()
      const possibleCommands = Object.keys(commands).filter((cmd) => cmd.startsWith(commandStart))

      if (possibleCommands.length === 1) {
        setInput(possibleCommands[0])
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-zinc-950 rounded-lg border border-blue-900/50 shadow-lg shadow-blue-500/20 overflow-hidden ${className}`}
    >
      <motion.div 
        className="flex items-center px-4 py-2 bg-black border-b border-blue-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex space-x-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.div 
            className="w-3 h-3 bg-red-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-3 h-3 bg-yellow-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-3 h-3 bg-green-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
        <motion.div 
          className="mx-2 text-sm font-semibold text-blue-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          terminal@portfolio
        </motion.div>
      </motion.div>
      <div
        ref={terminalRef}
        className="p-4 sm:p-6 overflow-y-auto bg-black font-mono text-sm sm:text-base"
        style={{ height }}
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence>
          {output.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-2 break-words"
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
          className="flex items-center mt-1 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <motion.span 
            className="text-blue-500 drop-shadow-[0_0_2px_rgba(59,130,246,0.5)] hidden sm:inline"
            whileHover={{ scale: 1.05 }}
          >
            zaveri@portfolio
          </motion.span>
          <motion.span 
            className="text-blue-500 drop-shadow-[0_0_2px_rgba(59,130,246,0.5)] sm:hidden"
            whileHover={{ scale: 1.05 }}
          >
            visitor
          </motion.span>
          :<span className="text-purple-400">~$</span>&nbsp;
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-blue-400 caret-transparent text-sm sm:text-base"
            aria-label="Terminal input"
          />
          <motion.span 
            className="animate-pulse text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ▋
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Example usage:
/*
import { TerminalPortfolio } from './terminal-portfolio'

export default function App() {
  const myData = {
    name: "John Doe",
    about: ["I'm a developer..."],
    skills: {
      "Frontend": ["React", "Next.js"],
      "Backend": ["Node.js", "Python"]
    },
    projects: [
      {
        title: "My Project",
        description: "A cool project",
        technologies: "React, TypeScript",
        link: "https://github.com/username/project"
      }
    ],
    contact: {
      email: "john@example.com",
      github: "https://github.com/johndoe"
    }
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <TerminalPortfolio 
        portfolioData={myData}
        height="80vh"
      />
    </div>
  )
}
*/
