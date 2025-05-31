import { CheckCircle } from "lucide-react";
import BlurText from "../components/ui/blurtext";
import SplitText from "./ui/splittext";
import ShinyText from "./ui/ShinyText";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Journey
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
              I'm a full stack developer with a curious mind and a builder's
              heart. I enjoy turning ideas into real, usable web applications
              that are clean, fast, and user-friendly.  I’m driven by the process of creating things that
              make a difference.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12 font-merriweather">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Background</h3>
              <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                {/* My journey into tech began with a deep interest in how things
                work and a drive to create solutions that are both useful and
                meaningful. I’m currently in my final year of B.Tech CSE at VIT,
                where I’ve blended academic learning with hands-on projects.
                Over time, I’ve built web apps and developer tools that are
                clean, fast, and user-friendly. Professionally, I’ve worked with
                Classplus and Testbook, where I contributed to high-impact
                products and fast-moving teams — gaining real-world experience
                in building scalable, production-grade systems. I enjoy turning
                ideas into reliable, real-world software. */}
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>B.Tech CSE @ VIT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>From Curious Beginner to Startup Engineer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>Built Passion Projects & Tools</span>
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>
                  Making my mark at @Classplus and @Testbook
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="text-gray-600 dark:text-gray-400 font-merriweather">
                {/* I focus on writing clean, scalable code and designing robust,
                maintainable architectures. Performance and accessibility aren’t
                optional — they’re baked into everything I build. I'm committed
                to improving both the developer experience and the user
                experience. Whether it's building reusable component libraries,
                setting up CI/CD pipelines, or integrating with cloud services
                like AWS, I believe in reducing friction, automating the boring
                stuff, and shipping fast — without cutting corners. I'm always
                iterating, always learning, and always looking for ways to make
                things better. */}
              </p>
            </div>
            <ul className="grid gap-2 font-merriweather">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>Clean & Scalable Code</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>Optimized Component Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>AWS Integration & CI/CD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
                <span>Always Iterating & Learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-2 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2" id="workex">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-10">
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
                text="As a Front-End Developer Intern at both Classplus and Testbook, I’ve been at the forefront of building high-impact, user-focused web applications for two of India’s leading edtech platforms. My work spans across modernizing legacy systems, engineering scalable UI architectures, and delivering rich, dynamic experiences that support millions of learners and educators."
                className="text-lg md:text-xl font font-serif text-center mt-20"
                delay={10}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
              />
              <div className="max-w-5xl mx-auto px-6 py-10 font-merriweather text-gray-800 dark:text-gray-300">
                {/* First section heading */}
                <h2 className="text-lg md:text-2xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 ">
                  Professional Experience Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Modern Front-End Architecture
                    </h3>
                    <p>
                      Built and maintained scalable, modular UIs using React,
                      Next.js, Angular, and TypeScript — focusing on component
                      reusability, clean code, and seamless responsiveness.
                    </p>
                  </div> */}

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Next.js Migration at Classplus from Angular
                    </h3>
                    <p>
                      {/* Led the migration of existing front-end systems to
                      Next.js, leveraging server-side rendering (SSR), static
                      site generation (SSG), and route optimization for faster
                      performance, better SEO, and smoother developer
                      experience. */}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Dynamic Component Development
                    </h3>
                    <p>
                      {/* Engineered reusable components powered by dynamic JSON
                      configurations — including FAQs, quizzes, test series,
                      navigation tabs, super coaching banners, and hero sections
                      — ensuring flexibility and rapid scalability. */}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Performance & Optimization
                    </h3>
                    <p>
                      {/* Conducted Lighthouse audits, implemented lazy loading, and
                      optimized rendering workflows to ensure high performance
                      across devices, even under heavy data loads. */}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Real-Time Data Integration
                    </h3>
                    <p>
                      {/* Developed API-driven rendering logic with dynamic data
                      structures and projections to populate deeply nested
                      content efficiently in production-grade applications. */}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Design Systems & UI Libraries
                    </h3>
                    <p>
                      {/* Used Tailwind CSS, ShadCN UI to build
                      elegant, responsive, and interactive UIs consistent with
                      modern design systems. */}
                    </p>
                  </div>

                  {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
                      Cross-Team Collaboration
                    </h3>
                    <p>
                      Worked closely with backend, design, and product teams in
                      Agile environments to deliver end-to-end features, manage
                      release cycles, and troubleshoot production issues in
                      real-time.
                    </p>
                  </div> */}

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-gray-600 dark:text-indigo-400">
Debugging & Maintenance
                    </h3>
                    <p>
                      {/* Regularly identified and resolved bugs across large
                      codebases, contributed to QA workflows, and upheld code
                      quality through best practices and Git version control. */}
                    </p>
                  </div>
                </div>

                {/* Skills & Tools section */}
                <h2 className="text-3xl font-extrabold mt-20 mb-10 text-gray-900 dark:text-gray-100 ">
                  Skills & Tools
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-600 dark:text-indigo-400 mb-2">
                      Frameworks
                    </h4>
                    <p>React.js, Next.js, Angular, TypeScript</p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-600 dark:text-indigo-400 mb-2">
                      Styling & Animation
                    </h4>
                    <p>Tailwind CSS, ShadCN UI, Framer Motion</p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-600 dark:text-indigo-400 mb-2">
                      State & Data Handling
                    </h4>
                    <p>
                      React Context API, Hooks, REST APIs
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-600 dark:text-indigo-400 mb-2">
                      Build Tools & DevOps
                    </h4>
                    <p>
                      Git, GitHub, Lighthouse, ESLint, Prettier
                    </p>
                  </div>

                  {/* <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-600 dark:text-indigo-400 mb-2">
                      Project Management
                    </h4>
                    <p>Agile methodologies, Jira</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
