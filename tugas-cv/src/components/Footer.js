import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="bg=white text-black py-4 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <p>&copy; 2025 Agung Priyanto. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
