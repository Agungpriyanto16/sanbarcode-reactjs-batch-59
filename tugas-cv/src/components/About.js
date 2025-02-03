import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-100 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/Images/Agung Priyanto.jpg" // Ganti dengan path gambar Anda
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">Software Engineer</h2>
          <p className="text-gray-700 mb-6">
          Hello! I am Agung Priyanto, a student at 17 August
University (UNTAG) who has a great passion in the field
of frontend development. I enjoy creating attractive,
responsive, and easy-to-use web interfaces using
modern technologies such as HTML, CSS, JavaScript,
React.js, and Tailwind CSS. I believe that good design is
the key to creating an optimal user experience.
Therefore, I always try to improve my ability to present
creative and innovative solutions in every project.
Apart from studying, I actively participate in various
training, workshops and collaborative projects to
continue learning and honing my skills in the world of
technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p><strong>Birthday:</strong> Februari 16th, 2003</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Country:</strong> Indonesia</p>
            <p><strong>Phone:</strong> 085933724736</p>
            <p><strong>Email:</strong> <a href="mailto:Agungpriyanto160203@gmail.com" className="text-teal-500 underline"> Agungpriyanto160203@gmail.com</a></p>
            <p><strong>Address:</strong> Jl Tambak Mayor Baru Gg 2 no 104, Asemrowo,
            Surabaya, Indonesia</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
