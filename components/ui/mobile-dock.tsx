"use client";

import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact_me", icon: Mail },
];

export default function MobileDock() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block lg:hidden">
      <div className="mx-auto max-w-screen-md px-4 pb-4">
        <div className="relative rounded-full bg-white/80 dark:bg-black/20 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex items-center justify-around p-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href.slice(1)}
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                activeClass="text-blue-500 dark:text-blue-400"
                className="flex flex-col items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.name}</span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
