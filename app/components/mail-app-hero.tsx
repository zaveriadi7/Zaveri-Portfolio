import { ArrowRight, CheckCircle, Mail, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MailAppHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Simplify your inbox.{" "}
                <span className="text-gray-500 dark:text-gray-400">Amplify your productivity.</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                A smarter way to manage your emails. Organize, prioritize, and respond faster with our intuitive mail
                app.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5 group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Free Trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500 dark:text-gray-400">No Credit Card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Cancel Anytime</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-950">
              <div className="flex h-12 items-center border-b px-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">MailPro</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="grid grid-cols-[220px_1fr] divide-x">
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                      <span className="text-sm font-medium">Inbox</span>
                    </div>
                    <div className="p-2">
                      <span className="text-sm">Sent</span>
                    </div>
                    <div className="p-2">
                      <span className="text-sm">Drafts</span>
                    </div>
                    <div className="p-2">
                      <span className="text-sm">Archived</span>
                    </div>
                    <div className="p-2">
                      <span className="text-sm">Spam</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Weekly Team Update</div>
                        <div className="text-sm text-gray-500">9:32 AM</div>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        Hi team, I wanted to share our progress from last week and outline our goals for the upcoming
                        sprint...
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Product Launch Reminder</div>
                        <div className="text-sm text-gray-500">Yesterday</div>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        Don't forget about our product launch scheduled for next Tuesday. All materials are ready for
                        review...
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Invoice #3429</div>
                        <div className="text-sm text-gray-500">May 1</div>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        Your invoice for April services has been generated. Please review the attached document...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">AI-Powered Sorting</span>
              </div>
            </div>
            <div className="absolute -right-6 top-10 hidden md:block">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Enhanced Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
