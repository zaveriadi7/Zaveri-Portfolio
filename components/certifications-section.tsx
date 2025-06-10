import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CertificationsSection() {
  // Path animation variants
  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i: number) => ({
      pathLength: 1,
      opacity: [0.2, 0.4, 0.2],
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50/50 dark:bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated background paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute top-0 left-0"
        >
          {/* Corner paths */}
          <motion.path
            d="M0,20 Q20,0 40,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            custom={0}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M60,20 Q80,0 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            custom={1}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M0,80 Q20,100 40,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            custom={2}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M60,80 Q80,100 100,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            custom={3}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          {/* Wave paths */}
          <motion.path
            d="M20,10 C30,0 40,20 50,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            custom={4}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M50,10 C60,0 70,20 80,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            custom={5}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M20,90 C30,100 40,80 50,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            custom={6}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M50,90 C60,100 70,80 80,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            custom={7}
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
        </svg>
      </div>

      <motion.div
        id="certifications"
        className="container px-4 md:px-6 mx-auto relative z-10"
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
            <motion.div
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md rounded-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">Certifications</span>
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-indigo-200 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg rounded-lg"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">Professional Certifications</span>
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg"
                animate={{
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">
                A collection of my professional certifications and achievements.
              </span>
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {[
            {
              title: "AWS Certified Developer",
              issuer: "Amazon Web Services",
              date: "2023",
              description:
                "Professional certification for AWS cloud development and services.",
            },
            {
              title: "MongoDB Certified Developer",
              issuer: "MongoDB University",
              date: "2023",
              description:
                "Expertise in MongoDB database development and administration.",
            },
            {
              title: "React Advanced Concepts",
              issuer: "Meta",
              date: "2023",
              description:
                "Advanced React patterns, performance optimization, and best practices.",
            },
          ].map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={fadeIn}
              className="relative p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="space-y-2 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
