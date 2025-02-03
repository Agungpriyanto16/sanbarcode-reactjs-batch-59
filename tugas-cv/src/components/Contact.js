import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-white px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4 text-lg">Feel free to reach out to me through the following channels:</p>
        <div className="text-lg">
          <p>Email: <a href="mailto:Agungpriyanto160203@gmail.com" className="text-teal-500 underline">Agungpriyanto160203@gmail.com</a></p>
          <p>Phone: <a href="tel:085933724736" className="text-teal-500 underline">0859-33972-4736</a></p>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/Agungpriyanto16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href="https://gitlab.com/Agungpriyanto16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            Gitlab
          </a>
          <a
            href="https://www.instagram.com/agungpriyanto16/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
