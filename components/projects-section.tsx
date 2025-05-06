import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div id="projects" className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              {/* Replace with actual project image */}
              <span className="text-4xl">🚀</span>
            </div>
            <CardHeader>
              <CardTitle>VakeelSaabOnline</CardTitle>
              <CardDescription>An online platform for free consultation with experienced lawyers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with NodeJs, Express, EJS, CSS, PostgreSQL. Features include user authentication, lawyer registration and a backend to handle scheduling of clients with lawyers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400">
                <a href="https://github.com/zaveriadi7/vakeelsaab">
                View Project
                </a>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              {/* Replace with actual project image */}
              <span className="text-4xl">📊</span>
            </div>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Data visualization for business insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                React-based dashboard with real-time data updates, interactive charts, and customizable widgets.
                Includes user role management.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400">
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              {/* Replace with actual project image */}
              <span className="text-4xl">💬</span>
            </div>
            <CardHeader>
              <CardTitle>Chat Application</CardTitle>
              <CardDescription>Real-time messaging platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with Socket.io, React, and Node.js. Features include real-time messaging, file sharing, and user
                presence indicators.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400">
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline" className="gap-1.5 group">
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
