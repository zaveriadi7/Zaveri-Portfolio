"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RotatingText from "./ui/changingText";
import Certifications from "./ui/imageCarousel";
import StackIcon from "tech-stack-icons";

export default function SkillsSection() {
  return (
    <>
      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-20 bg-gray-50 dark:bg-black"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Skills
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  My{" "}
                  <RotatingText
                    texts={[
                      "Skills",
                      "Expertise",
                      "Technologies",
                      "Tools",
                      "Hobbies",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 text-gray-500 dark:text-gray-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
                I've worked with a wide range of technologies throughout my
                career. Here are some of the key areas where I excel.
              </p>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 font-merriweather">
            {/* Frontend Card */}
            <Card className="dark:bg-[#222831] dark:border-gray-900">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Frontend Development
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Building beautiful, responsive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 items-center">
                  {[
                    "reactjs",
                    "nextjs",
                    "typescript",
                    "tailwindcss",
                    "html5",
                    "css3",
                    "angular",
                    "js",
                  ].map((tech) => (
                    <Badge
                      variant="secondary"
                      key={tech}
                      className="flex items-center gap-1 bg-transparent dark:border-gray-800"
                    >
                      <StackIcon name={tech} className="w-10 h-7" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Card */}
            <Card className="dark:bg-[#222831] dark:border-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Backend Development
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Creating robust, scalable server applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 items-center">
                  {["nodejs", "prisma", "postgresql", "mysql"].map((tech) => (
                    <Badge
                      variant="secondary"
                      key={tech}
                      className="flex items-center gap-1 bg-transparent dark:border-gray-800"
                    >
                      <StackIcon name={tech} className="w-10 h-7" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Core Tools Card */}
            <Card className="dark:bg-[#222831] dark:border-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Core Languages & Tools
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Streamlining development and deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 items-center">
                  {["c++", "python", "git", "aws"].map((tech) => (
                    <Badge
                      variant="secondary"
                      key={tech}
                      className="flex items-center gap-1 bg-transparent dark:border-gray-800"
                    >
                      <StackIcon name={tech} className="w-10 h-7" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="Certifications" className="w-full bg-white dark:bg-black pt-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Certifications
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  My Certifications
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Certifications />
      </section>
    </>
  );
}
