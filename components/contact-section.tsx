"use client";

import type React from "react";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const FORM_ENDPOINT = "https://formspree.io/f/mqaqpqoq";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Submission failed");

      setIsSent(true); // ✅ Mark message as sent
      e.currentTarget.reset();

      // Optionally show toast too
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset back to original button after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact_me"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lets Get in Touch?
            </h2>
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
                Feel free to reach out through the form or directly via email.
              </p>
            </div>
            <div className="grid gap-2">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500 dark:text-gray-400">
                  adityazaveri7@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 dark:text-gray-400">Delhi, India</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Availability</p>
              <p className="text-gray-500 dark:text-gray-400">
                I'm currently available for full-time opportunities.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className={`w-full gap-1.5 ${
                  isSent ? "bg-green-600 hover:bg-green-300 text-white" : ""
                }`}
                disabled={isSubmitting || isSent}
              >
                {isSent ? (
                  <>
                    Message Sent
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
