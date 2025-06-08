import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import vakeelsaab from "../public/vakeelsaab.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div id="projects" className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of my recent work. Each project represents a unique
              challenge and solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-55 object-contain">
              <img
                src="/vakeelsaab.png"
                alt="Vakeel Saab Logo"
                className="h-55"
              />
            </div>
            <CardHeader>
              <CardTitle>VakeelSaabOnline</CardTitle>
              <CardDescription>
                An online platform for free consultation with experienced
                lawyers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with NodeJs, Express, EJS, CSS, PostgreSQL. Features
                include user authentication, lawyer registration and a backend
                to handle scheduling of clients with lawyers.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400"
              >
                <a href="https://github.com/zaveriadi7/vakeelsaab">
                  View Project
                </a>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-55 object-contain">
              <img
                src="/chefclaude.png"
                alt="Vakeel Saab Logo"
                className="h-55"
              />
            </div>
            <CardHeader>
              <CardTitle>ChefClaude</CardTitle>
              <CardDescription>AI-powered recipe generator</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with React, Node.js, and Anthropic API. Users can input
                ingredients and dietary preferences to generate personalized
                recipes.Implemented Lazy loading for smooth user experience.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-55 object-contain">
              <img
                src="/tasknest.png"
                alt="Vakeel Saab Logo"
                className="h-55"
              />
            </div>
            <CardHeader>
              <CardTitle>TaskNest</CardTitle>
              <CardDescription>
                Task management app with reminders and sharing features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with React, Node.js, Express,CSS, PostgreSQL. Features
                include user authentication, task management, and a backend to
                handle notifications. Users can create, update, and delete
                tasks, set tags, receive reminders,upload files and have
                reminders on gmail.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="gap-1 p-0 text-sm text-gray-500 dark:text-gray-400"
              >
                <a href="https://github.com/zaveriadi7/Tasknest">
                  View Project
                </a>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="gap-1.5 group">
            <a href="https://github.com/zaveriadi7/">View All Projects</a>

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
