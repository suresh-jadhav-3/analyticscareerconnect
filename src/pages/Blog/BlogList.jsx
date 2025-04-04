
import React, { useState, useEffect } from 'react';
import { BlogCard } from '../../components/Blog/BlogCard';
import { blogPosts as initialBlogPosts } from '../../data/BlogPosts';
import Footer from '../../components/layout/Footer';

export const BlogList = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h1>
        <p className="text-lg text-gray-600">
          Discover insights and tips about career development, job market trends, and professional growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>

    {/* footer */}
    <Footer/>
    </>
  );
};