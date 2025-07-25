import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "ecommerce.png",
      github: "https://github.com/hamzest007/ecommerce-platform",
      live: "https://hamza-ecommerce.netlify.app",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop interface, team collaboration, and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "taskapp.jpg",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Interactive weather application with 5-day forecasts, location search, and responsive design.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      image: "weather.jpg",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio showcasing my projects and skills with smooth animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "portfolio.png",
      github: "https://github.com/hamzest007/hamzasheikh-portfolio",
      live: "https://hamza-sheikh-portfolio.netlify.app",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Projects Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-indigo-500">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my recent work. Each project represents
            unique challenges and solutions I've implemented.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
            Contact Me
          </button>
        </section>
      </main>
    </div>
  );
};

export default Projects;
