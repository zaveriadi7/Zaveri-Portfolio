import React, { useEffect, useRef } from "react";

// const logos = [
//   "ReactJS",
//   "NextJS",
//   "Angular",
//   "TailwindCSS",
//   "JavaScript",
//   "TypeScript",
//   "NodeJS",
//   "ExpressJS",
//   "PostgreSQL",
//   "MySQL",
//   "Python",
//   "AWS",
//   "Docker",
//   "Git",
//   "GitHub",
//   "C++",
//   "DSA"
// ];
const logos = [
  {
    title: "ReactJS",
    image: "https://devrajchatribin.com/skills/React.js.svg",
  },
  { title: "NextJS", image: "https://devrajchatribin.com/skills/Next.js.svg" },
  { title: "Angular", image: "https://devrajchatribin.com/skills/Angular.svg" },
  {
    title: "TailwindCSS",
    image: "https://devrajchatribin.com/skills/TailwindCSS.svg",
  },
  {
    title: "JavaScript",
    image:
      "data:image/png;base64,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",
  },
  {
    title: "TypeScript",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp",
  },
  { title: "NodeJS", image: "https://devrajchatribin.com/skills/Node.js.svg" },
  {
    title: "ExpressJS",
    image: "https://devrajchatribin.com/skills/Express.js.svg",
  },
  {
    title: "PostgreSQL",
    image: "https://devrajchatribin.com/skills/PostgreSQL.svg",
  },
  { title: "MySQL", image: "https://www.svgrepo.com/show/355133/mysql.svg" },
  // { title: "Python", image: "https://www.svgrepo.com/show/452091/python.svg" },
  { title: "Prisma", image: "https://www.svgrepo.com/show/374002/prisma.svg" },
  { title: "AWS", image: "https://devrajchatribin.com/skills/AWS.svg" },
  // { title: "Docker", image: "https://devrajchatribin.com/skills/Docker.svg" },
  { title: "Git", image: "https://devrajchatribin.com/skills/GIT.svg" },
  { title: "GitHub", image: "https://www.svgrepo.com/show/450156/github.svg" },
  { title: "C++", image: "https://cdn.worldvectorlogo.com/logos/c.svg" },
  { title: "Figma", image: "https://www.svgrepo.com/show/450134/figma.svg" },
  { title: "Redux", image: "https://www.svgrepo.com/show/452093/redux.svg" },
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
              {logos.map(({ title, image }, idx) => (
                <div
                  key={`${dupIndex}-${idx}`}
                  className="flex items-center space-x-2 px-6 sm:px-10"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-serif text-white">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
