"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const [isCompact, setIsCompact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())
  const animationFrameRef = useRef<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Calculate navbar width based on scroll velocity
  const calculateNavbarWidth = () => {
    // Base width when not scrolling (wider to accommodate name and nav items)
    const baseWidth = 80
    // Minimum width to just fit nav items
    const minWidth = 50
    // How much to shrink based on velocity (adjust for sensitivity)
    const velocityFactor = Math.min(Math.abs(scrollVelocity) * 0.05, 1)
    // Calculate width percentage (baseWidth% to minWidth%)
    return baseWidth - velocityFactor * (baseWidth - minWidth)
  }

  const navbarWidth = calculateNavbarWidth()

  // Track scroll position and calculate velocity
  const handleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDelta = currentTime - lastScrollTime.current

      if (timeDelta > 0) {
        // Calculate velocity (pixels per millisecond)
        const rawVelocity = (currentScrollY - lastScrollY.current) / timeDelta
        // Apply some smoothing
        setScrollVelocity((prevVelocity) => prevVelocity * 0.8 + rawVelocity * 20)
      }

      setScrollY(currentScrollY)
      setIsCompact(currentScrollY > 50)

      lastScrollY.current = currentScrollY
      lastScrollTime.current = currentTime
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

  // Reset velocity when not scrolling
  useEffect(() => {
    const velocityResetTimer = setTimeout(() => {
      if (Math.abs(scrollVelocity) > 0.1) {
        setScrollVelocity((prevVelocity) => prevVelocity * 0.9)
      } else {
        setScrollVelocity(0)
      }
    }, 100)

    return () => clearTimeout(velocityResetTimer)
  }, [scrollVelocity])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const shouldShowName = Math.abs(scrollVelocity) < 2 && !isCompact

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <div
        ref={navRef}
        className={cn(
          "rounded-full transition-all duration-300 ease-in-out",
          isCompact
            ? "py-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-md"
            : "py-3 bg-white dark:bg-gray-950 shadow-lg",
        )}
        style={{
          width: `${navbarWidth}vw`,
          maxWidth: "1200px",
        }}
      >
        <div className="flex items-center justify-center px-6 relative">
          {/* Name on left - visible only when not scrolling fast */}
          <div
            className={cn(
              "absolute left-6 transition-all duration-300",
              shouldShowName ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none",
            )}
          >
            <Link href="#home" className="font-bold text-sm">
              Alex Johnson
            </Link>
          </div>

          {/* Navigation items in center */}
          <nav
            className={cn(
              "flex items-center justify-center transition-all duration-300",
              shouldShowName ? "ml-24" : "",
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors px-3 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
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
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
