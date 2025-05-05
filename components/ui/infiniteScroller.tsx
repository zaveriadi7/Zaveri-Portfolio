 import React, { useEffect, useRef } from "react";

const logos = [
  "ReactJS",
  "NextJS",
  "Angular",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "NodeJS",
  "ExpressJS",
  "PostgreSQL",
  "MySQL",
  "Python",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "C++",
  "DSA"
];

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full bg-black py-6 overflow-hidden sm:block">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap overflow-x-hidden"
        >
          {[...Array(2)].map((_, dupIndex) => (
            <div
              className="flex shrink-0"
              key={dupIndex}
              aria-hidden={dupIndex === 1}
            >
              {logos.map((title, idx) => (
                <h1
                  key={`${dupIndex}-${idx}`}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-serif text-white px-12"
                >
                  {title}
                </h1>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
