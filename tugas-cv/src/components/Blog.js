import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'My First Blog Post',
      date: 'January 7, 2025',
      content: 'This is a summary of my first blog post. Here I talk about my journey as a developer and my goals.',
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Learning React: A Personal Experience',
      date: 'December 12, 2024',
      content: 'In this post, I dive deep into my experience learning React and the challenges I faced along the way.',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'Understanding JavaScript Closures',
      date: 'November 15, 2024',
      content: 'This post explains JavaScript closures and how they are used in real-world applications.',
      link: '/blog/3',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
          className="space-y-8"
        >
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <motion.section
                key={post.id}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700">{post.content}</p>
                <Link
                  to={post.link}
                  className="text-teal-400 hover:text-teal-600 mt-4 inline-block font-medium"
                >
                  Read more...
                </Link>
              </motion.section>
            ))
          ) : (
            <p className="text-center text-gray-500">No blog posts available.</p>
          )}
        </motion.section>
      </div>
    </section>
  );
}

export default Blog;
