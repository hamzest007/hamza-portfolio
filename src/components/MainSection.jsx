import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets";
import { Link } from "react-router-dom";

const MainSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="px-4 md:px-12 lg:px-24 bg-gray-900 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Welcome to <span className="text-indigo-500">My Portfolio</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-lg"
              variants={itemVariants}
            >
              I'm <span className="font-semibold text-white">Hamza</span>, a
              React js Developer specializing in building modern, responsive web
              applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="View my projects"
              >
                <Link to={"/projects"}>View Projects</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-300 hover:border-white text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact me"
              >
                <Link to={"/contact"}>Contact Me</Link>
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                src={images.profile}
                alt="Professional portrait of Hamza"
                className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-indigo-500/20"
                width={288}
                height={288}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse-slow pointer-events-none"></div>

              {/* Floating tech badges around image */}
              <motion.div
                className="absolute -top-4 -left-4 bg-gray-800 px-3 py-1 rounded-full text-sm shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                React
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gray-800 px-3 py-1 rounded-full text-sm shadow-lg"
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Tailwind
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default MainSection;
