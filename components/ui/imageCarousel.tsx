import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    image: "https://images.credly.com/size/300x300/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description: "Issued by Amazon Web Services in January 2023.",
    href: "https://www.credly.com/badges/ac231f94-6119-47e0-ad63-15e40691b72a/public_url",
  },
  {
    id: 2,
    title: "Cloud Computing - IIT Kharagpur",
    image: "/nptel.png",
    description: "Issued by NPTEL. Scored 72% receiving elite badge.",
    href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S45290199230380511",
  },
  {
    id: 3,
    title: "Introduction to Frontend Development by Meta",
    image: "/meta.png",
    description: "Issued by Coursera in June 2024.",
    href: "https://www.coursera.org/account/accomplishments/verify/86XDN65GSLXZ",
  },
  {
    id: 4,
    title: "Applied Machine Learning in Python by University of Michigan",
    image: "/ml.png",
    description: "Issued by Coursera in February 2023.",
    href: "https://www.coursera.org/account/accomplishments/verify/SKYTT8J4249A",
  },
];

export default function Certifications() {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50">
      <motion.div 
        className="container px-4 md:px-6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-4 md:px-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="w-full"
            >
              <motion.div
                className="relative group h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <a 
                  href={cert.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden flex-shrink-0">
                    <div className="aspect-square w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
                      <motion.img
                        src={cert.image}
                        alt={cert.title}
                        className="w-3/4 h-3/4 object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 space-y-2 flex-grow flex flex-col">
                    <motion.h3 
                      className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 font-merriweather"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-gray-600 dark:text-gray-300 font-merriweather line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      {cert.description}
                    </motion.p>
                    <motion.div
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-auto pt-2 font-merriweather"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <span>View Certificate</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
