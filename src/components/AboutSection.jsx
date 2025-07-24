import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { images } from "../assets/index";

const AboutSection = () => {
  const skills = [
    { name: "React", level: "75%" },
    { name: "JavaScript", level: "70%" },
    { name: "TypeScript", level: "60%" },
    { name: "Node.js", level: "30%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "UI/UX Design", level: "70%" },
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Remote",
      period: "2024 - Present",
      description:
        "Developing responsive web applications using React and modern JavaScript frameworks.",
    },
    {
      role: "Web Developer Intern",
      company: "Remote",
      period: "2024 - 2025",
      description:
        "Assisted in building and maintaining client websites with HTML, CSS, and JavaScript.",
    },
  ];

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

  const handleDownloadCV = () => {
    const cvUrl = "/documents/Hamza_Sheikh.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Hamza_Sheikh_Frontend_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-900 text-white font-sans antialiased"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Me Section */}
        <motion.section className="mb-16 md:mb-20" variants={itemVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={itemVariants}
              >
                About <span className="text-indigo-500">Me</span>
              </motion.h2>

              <motion.p
                className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
                variants={itemVariants}
              >
                I'm Hamza, a passionate frontend developer with 1+ years of
                experience building modern web applications. I specialize in
                React ecosystem and love creating intuitive, performant user
                interfaces.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                variants={itemVariants}
              >
                My journey in web development began during my computer science
                studies, and I've been hooked ever since. When I'm not coding,
                you can find me contributing to open-source projects or
                exploring new technologies.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 md:gap-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </motion.button>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="flex items-center px-4 py-2 md:px-6 md:py-3 border border-gray-300 hover:border-white text-white font-medium rounded-lg transition-colors"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  src={images.profile}
                  alt="Hamza professional portrait"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-indigo-500/20"
                />
                <div className="absolute -inset-3 sm:-inset-4 border-2 border-indigo-500/30 rounded-lg -z-10 animate-pulse-slow"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="mb-16 md:mb-20" variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            variants={itemVariants}
          >
            My <span className="text-indigo-500">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-4 md:mb-6"
                variants={itemVariants}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-200 text-sm md:text-base">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 md:h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-indigo-600 h-full rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            variants={itemVariants}
          >
            Work <span className="text-indigo-500">Experience</span>
          </motion.h2>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 p-4 md:p-6 rounded-lg border-l-4 border-indigo-500 hover:bg-gray-800/70 transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-indigo-400">
                    {exp.role}
                  </h3>
                  <span className="text-gray-400 text-sm md:text-base">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-medium text-gray-200 mb-2 md:mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default AboutSection;
