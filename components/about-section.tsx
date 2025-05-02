import { CheckCircle } from "lucide-react"
import BlurText from "../components/ui/blurtext"

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Journey</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate full stack developer with a focus on creating intuitive and performant web applications.
              With over 5 years of experience in the industry, I've worked with a variety of technologies and frameworks
              to deliver exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Background</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I started my journey as a self-taught developer, building small websites and applications in my spare
                time. After completing my Computer Science degree, I joined a startup where I honed my skills in modern
                web development. I've since worked with companies of all sizes, from early-stage startups to established
                enterprises.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Computer Science Degree</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>5+ Years Professional Experience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Worked with 20+ Clients</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Delivered 30+ Successful Projects</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I believe in writing clean, maintainable code that solves real problems. My approach combines technical
                excellence with a deep understanding of user needs. I'm passionate about accessibility, performance, and
                creating experiences that delight users while meeting business objectives.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>User-Centered Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Performance-Focused Development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Accessible Web Applications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Continuous Learning & Improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
