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
              I'm a passionate full stack developer who thrives at the intersection of creativity and logic.
              My curiosity for how things work led me to explore the world of software, and I’ve been building ever since.
              From late-night debugging sessions to launching user-centric features, each step has shaped me into the developer I am today.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12 font-merriweather">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Background</h3>
              <p className="text-gray-500 dark:text-gray-400 font-merriweather">
                My journey began with curiosity and a sense of pure joy when my first code outputted "Hello, World!". I taught myself Python and built small utilities
                before diving deep into full stack development. I’m currently pursuing my final year in B.Tech CSE at VIT, where I’ve combined theory with practice,
                and worked at Classplus to apply those skills in a real-world, fast-paced environment. I enjoy solving problems, 
                whether it's through code or conversation.
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>B.Tech CSE @ VIT</span>
              </li>
              <li className="flex items-center gap-2">
  <CheckCircle className="h-4 w-4 text-gray-500" />
  <span>From Curious Beginner to Startup Engineer</span>
</li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Built Passion Projects & Tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Currently making my mark at @Classplus and @Testbook</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="text-gray-500 dark:text-gray-400 font-merriweather">
                I focus on writing clean, scalable code and building robust architectures.
                I treat performance and accessibility as non-negotiables, and I'm always striving to improve the developer and user experience.
                Whether it’s through automation, component libraries, or CI/CD pipelines, I aim to reduce friction and ship fast.
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Clean & Scalable Code</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Optimized Component Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>AWS Integration & CI/CD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span>Always Iterating & Learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2" id="workex">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Work Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
                text="As a Front-End Developer Intern at Classplus, I specialize in creating dynamic, responsive, and user-friendly web applications. My goal is to enhance the overall user experience by building scalable components, integrating real-time data, and ensuring optimal functionality. I also actively identify, troubleshoot, and resolve bugs, ensuring the stability and reliability of the platform."
                className="text-2xl font font-serif text-center mt-20"
                delay={10}
                animationFrom={{
                  opacity: 0,
                  transform: 'translate3d(0,50px,0)',
                }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
