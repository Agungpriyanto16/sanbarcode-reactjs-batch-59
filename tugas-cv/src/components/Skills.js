import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100 px-4">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold">Frontend</h3>
            <p>Flutter Framework, Html, CSS,
              Bootstrap, TailwindCSS(Beginner),
              Javascript(beginner), React Js(beginner)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
