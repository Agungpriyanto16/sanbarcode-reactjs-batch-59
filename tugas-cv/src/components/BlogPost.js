import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  // Dummy data untuk menampilkan detail post
  const postDetails = {
    1: {
      title: 'My First Blog Post',
      date: 'January 7, 2025',
      content: 'This is a detailed view of my first blog post. Here I talk more about my journey as a developer.',
    },
    2: {
      title: 'Learning React: A Personal Experience',
      date: 'December 12, 2024',
      content: 'In this post, I dive deeper into my learning process with React and how I overcame challenges.',
    },
    3: {
      title: 'Understanding JavaScript Closures',
      date: 'November 15, 2024',
      content: 'This post provides an in-depth explanation of JavaScript closures and practical use cases.',
    },
  };

  const post = postDetails[postId];

  return (
    <section className="py-12 bg-gray-100">
      <br></br>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </section>
  );
}

export default BlogPost;
