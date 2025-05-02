import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RotatingText from "./ui/changingText"

export default function SkillsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
            <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My <RotatingText
  texts={['Skills', 'Expertise', 'Technologies', 'Tools','Hobbies']}
  mainClassName="px-2 sm:px-2 md:px-3  text-gray-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/></h2>
</div>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I've worked with a wide range of technologies throughout my career. Here are some of the key areas where I
              excel.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>Building beautiful, responsive user interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Redux</Badge>
                <Badge>Framer Motion</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>Creating robust, scalable server applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>Python</Badge>
                <Badge>Django</Badge>
                <Badge>GraphQL</Badge>
                <Badge>REST APIs</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>DevOps & Tools</CardTitle>
              <CardDescription>Streamlining development and deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>GitHub Actions</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
                <Badge>Vercel</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Jest</Badge>
                <Badge>Cypress</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
