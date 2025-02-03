import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-white text-black flex items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Agung Priyanto</h1>
        <p className="text-lg sm:text-xl mb-6">Sofware Engineer</p>
        <a
          href="#projects"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400"
        >
          View My Projects
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
