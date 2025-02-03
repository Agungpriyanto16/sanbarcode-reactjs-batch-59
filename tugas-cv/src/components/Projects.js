import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    { name: 'Job Finder', description: 'Front end for Sanbercode.', link: 'https://gitlab.com/Agungpriyanto16/sanbarcode-reactjs-batch-59/-/tree/main/final-project?ref_type=heads' },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 px-4">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-4"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-teal-500 underline mt-2 block">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
