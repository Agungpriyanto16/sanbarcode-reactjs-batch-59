import React from 'react';
import { motion } from 'framer-motion';

function WorkExperience() {
  const experiences = [
    { role: 'IT Support and IT Software (Magang)', company: 'RS PHC SURABAYA', duration: 'Okt 2019 – Des 2019', location: 'Surabaya' },
  ];

  return (
    <section id="work-experience" className="py-16 bg-white px-4">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <p>{exp.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WorkExperience;
