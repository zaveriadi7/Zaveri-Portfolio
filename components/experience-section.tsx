  <motion.div
    variants={fadeIn}
    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
  >
    <motion.div
      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
      whileHover={{ scale: 1.2 }}
    />
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold">Classplus/Testbook/Polaris</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        <li>Contributed to multiple features and improvements across these platforms</li>
        <li>Implemented UI/UX enhancements and performance optimizations</li>
        <li>Developed new features and maintained existing functionality</li>
        <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
      </ul>
    </motion.div>
  </motion.div> 