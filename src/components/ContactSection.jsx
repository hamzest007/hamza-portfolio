import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend,
  FiTwitter,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";

const ContactSection = () => {
  const formRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Message sent successfully!");
    formRef.current.reset();
  };

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: <FiTwitter className="text-xl" />,
      url: "https://twitter.com/yourusername" 
    },
    { 
      name: "LinkedIn", 
      icon: <FiLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/yourusername" 
    },
    { 
      name: "GitHub", 
      icon: <FiGithub className="text-xl" />,
      url: "https://github.com/yourusername" 
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            variants={itemVariants}
          >
            Get In <span className="text-indigo-500">Touch</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-indigo-500/10 rounded-full">
                  <FiMail className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300 text-sm md:text-base">hamzasheikh4000@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-indigo-500/10 rounded-full">
                  <FiPhone className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300 text-sm md:text-base">+92 3122264880</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-indigo-500/10 rounded-full">
                  <FiMapPin className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300 text-sm md:text-base">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="pt-4 md:pt-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Connect with me</h3>
                <div className="flex space-x-3 md:space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-gray-800 hover:bg-indigo-500/10 rounded-full transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              variants={itemVariants}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs md:text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-sm md:text-base w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;