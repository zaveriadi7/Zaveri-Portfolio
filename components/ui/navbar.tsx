"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll"; // react-scroll for smooth scroll + active section
import { useTheme } from "next-themes";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const lastScrollY = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Ensure theme toggle is only rendered after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll handling
  const handleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      setScrollDirection(direction);
      setScrollY(currentScrollY);
      setIsCompact(currentScrollY > 50);

      lastScrollY.current = currentScrollY;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const calculateNavbarWidth = () => {
    const baseWidth = 80; // initial width in vw
    const minWidth = 40; // minimum width in vw
    const maxScroll = 1000; // max scroll value before hitting min width

    const scrollFactor = Math.min(scrollY / maxScroll, 1);

    return baseWidth - scrollFactor * (baseWidth - minWidth);
  };

  const navbarWidth = calculateNavbarWidth();

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact_me" },
  ];

  const shouldShowName = scrollDirection !== "down" && !isCompact;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center hidden lg:block">
      <div
        ref={navRef}
        className={cn(
          "rounded-full transition-all duration-500 ease-in-out",
          "transition-[width] delay-100",
          isCompact
            ? "py-2 bg-white/90 dark:bg-black/90 border dark:border-gray-850  backdrop-blur-sm shadow-md"
            : "py-3 bg-white dark:bg-black  dark:border-gray-900  shadow-lg"  
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
                activeClass="text-blue-500 dark:text-indigo-400 font-semibold border-b-2 border-blue-500 dark:border-indigo-400"
                className="text-sm font-mono font-thin hover:text-blue-500 dark:hover:text-gray-100 transition-colors px-3 py-1 cursor-pointer"
              >
                {item.name}
                
              </ScrollLink>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="absolute right-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {mounted && (
                <>
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

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
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-black rounded-lg shadow-md py-4 w-48 transition-colors duration-300">
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
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 py-1 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
            {/* Theme Toggle for Mobile */}
            <button
              className="flex items-center space-x-2 text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 py-1 cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {mounted &&
                (theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4 transition-transform duration-300" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4 transition-transform duration-300" />
                    <span>Light Mode</span>
                  </>
                ))}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

