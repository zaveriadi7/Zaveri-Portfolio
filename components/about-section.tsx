import { CheckCircle } from "lucide-react";
import BlurText from "../components/ui/blurtext";
import SplitText from "./ui/splittext";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Journey
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
              I'm a passionate full stack developer with a focus on creating
              intuitive and performant web applications. I am currently in my last year of BTech CSE from Vellore Institute of Technology. I work with a variety of
              technologies and frameworks to deliver beautiful and simple
              experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12 font-merriweather">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Background</h3>
              <p className="text-gray-500 dark:text-gray-400 font-merriweather">
                I started my journey with pythonas a self-taught developer, building small
                applications in my spare time. After completing my
                Computer Science degree, I joined Classplus, a startup aimed at transforming modern day learning where I honed my
                skills in web development. 
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
              <li className="flex items-center gap-2 ">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Computer Science Degree</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Worked with 5+ Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Delivered every Project on Time</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Delivered every Project on Time</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="text-gray-500 dark:text-gray-400 font-merriweather">
                I believe in writing clean, maintainable code that solves real
                problems. My approach combines technical excellence with a deep
                understanding of user needs. I'm passionate about accessibility,
                performance, and creating experiences that delight users while
                meeting business objectives.
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2" id="workex">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Work Experience
              </div>
              <h2  className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Work Experience
              </h2>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text flex flex-wrap justify-center gap-2 lg:text-6xl lg:pt-10 pb-10">
                <span>Classplus</span>
                <span className="text-purple-500">•</span>
                <span>Testbook</span>
                <span className="text-purple-600">•</span>
                <span>Polaris</span>
              </h2>

              <SplitText
                text="As a Front-End Developer, I specialize in creating dynamic, responsive, and user-friendly web applications. My goal is to enhance the overall user experience by building scalable components, integrating real-time data, and ensuring optimal functionality. I also actively identify, troubleshoot, and resolve bugs, ensuring the stability and reliability of the platform."
                className="text-2xl font font-serif text-center mt-20"
                delay={10}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                // rootMargin="-50px"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
