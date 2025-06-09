"use client";

import type React from "react";
import { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const FORM_ENDPOINT = "https://formspree.io/f/mqaqpqoq";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/zaveriadi7",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/your-profile",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/your-handle",
  },
];

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

      setIsSent(true);
      e.currentTarget.reset();

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

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
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black"
    >
      <motion.div 
        className="container px-4 md:px-6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={fadeIn}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200">
              Let's Get in Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-merriweather">
              Potential collaboration? I'd love to hear from you.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2"
          variants={staggerContainer}
        >
          <motion.div 
            className="space-y-6"
            variants={fadeIn}
          >
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 dark:text-indigo-200 font-merriweather">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium dark:text-gray-200 font-merriweather">Email</p>
                    <a 
                      href="mailto:adityazaveri7@gmail.com"
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-merriweather"
                    >
                      adityazaveri7@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium dark:text-gray-200 font-merriweather">Location</p>
                    <p className="text-gray-500 dark:text-gray-400 font-merriweather">Delhi, India</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mt-1" />
                  <div>
                    <p className="font-medium dark:text-gray-200 font-merriweather">Availability</p>
                    <p className="text-gray-500 dark:text-gray-400 font-merriweather">
                      I'm currently available for full-time opportunities.
                    </p>
                  </div>
                </motion.div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-medium dark:text-gray-200 font-merriweather mb-1.5">Connect with Me</p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-merriweather">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 font-merriweather"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-merriweather">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 font-merriweather"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-merriweather">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="min-h-[120px] bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 font-merriweather"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full gap-1.5 transition-all duration-300 font-merriweather ${
                    isSent 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black"
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
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
