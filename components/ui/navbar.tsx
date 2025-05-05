"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link as ScrollLink } from "react-scroll" // react-scroll for smooth scroll + active section

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isCompact, setIsCompact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const lastScrollY = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Scroll handling
  const handleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY.current ? "down" : "up"

      setScrollDirection(direction)
      setScrollY(currentScrollY)
      setIsCompact(currentScrollY > 50)

      lastScrollY.current = currentScrollY
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const calculateNavbarWidth = () => {
    const baseWidth = 80 // initial width in vw
    const minWidth = 40  // minimum width in vw
    const maxScroll = 1000 // max scroll value before hitting min width

    const scrollFactor = Math.min(scrollY / maxScroll, 1)

    return baseWidth - scrollFactor * (baseWidth - minWidth)
  }

  const navbarWidth = calculateNavbarWidth()

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact_me" },
  ]

  const shouldShowName = scrollDirection !== "down" && !isCompact

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center hidden lg:block">
      <div
        ref={navRef}
        className={cn(
          "rounded-full transition-all duration-500 ease-in-out",
          "transition-[width] delay-100",
          isCompact
            ? "py-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-md"
            : "py-3 bg-white dark:bg-gray-950 shadow-lg"
        )}
        style={{
          width: `${navbarWidth}vw`,
          maxWidth: "1200px",
        }}
      >
        <div className="flex items-center justify-center px-6 relative">
          {/* Logo/Name */}
          <div
            className={cn(
              "absolute left-6 transition-all duration-500",
              shouldShowName
                ? "opacity-100 translate-x-0"
                : "opacity-50 -translate-x-4 pointer-events-none"
            )}
          >
            <Link href="#hero" className="font-bold text-3xl">
              AZ
            </Link>
          </div>

          {/* Center Nav */}
          <nav className="flex items-center justify-center transition-all duration-300">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href.slice(1)} // remove #
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="text-blue-500 dark:text-blue-400 font-semibold border-b-2 border-blue-500"
                className="text-sm font-mono font-thin hover:text-blue-500 dark:hover:text-gray-100 transition-colors px-3 py-1 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile menu button (hidden on desktop) */}
          <div className="md:hidden absolute right-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-950 rounded-lg shadow-md py-4 w-48">
          <nav className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href.slice(1)}
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
