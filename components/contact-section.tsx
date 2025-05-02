"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      // Reset form
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Potential collaboration? I'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Feel free to reach out through the form or directly via email or phone.
              </p>
            </div>
            <div className="grid gap-2">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500 dark:text-gray-400">alex.johnson@example.com</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 dark:text-gray-400">San Francisco, CA</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Availability</p>
              <p className="text-gray-500 dark:text-gray-400">
                I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full gap-1.5" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
