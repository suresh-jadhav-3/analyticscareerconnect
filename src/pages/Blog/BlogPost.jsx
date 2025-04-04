
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { blogPosts as initialBlogPosts } from '../../data/BlogPosts';
import { CommentSection } from '../../components/Blog/CommentSection';
import { ArrowLeft, Calendar, User, MessageCircle, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import Footer from '../../components/layout/Footer';

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });
  const post = posts.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
          <button onClick={() => navigate('/blog')} className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft size={20} className="mr-2" />
            Back to all posts
          </button>
        </div>
      </div>
    );
  }

  const handleAddComment = (newComment) => {
    const updatedPosts = posts.map(p =>
      p.id === post.id ? { ...p, comments: [...(p.comments || []), newComment] } : p
    );
    setPosts(updatedPosts);
  };

  const handleShare = async (platform) => {
    const url = window.location.href;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${post.title}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${post.title}`
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy URL:', err);
      }
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const renderContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('#')) {
        const level = paragraph.match(/^#+/)[0].length;
        const text = paragraph.replace(/^#+\s/, '');
        const HeadingTag = `h${Math.min(level, 6)}`;
        return <HeadingTag key={index} className="font-bold text-gray-900 mb-4">{text}</HeadingTag>;
      }
      if (paragraph.startsWith('-')) {
        return <li key={index} className="text-gray-700 mb-2 ml-4">{paragraph.substring(2)}</li>;
      }
      return paragraph.trim() ? <p key={index} className="text-gray-700 mb-6 leading-relaxed">{paragraph}</p> : <br key={index} />;
    });
  };

  return (
    <>
      <div className="mt-20 bg-gray-50 min-h-screen pb-16">
        <div className="relative h-[500px] bg-gray-900 mb-8">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-4xl mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-300 hover:text-white mb-6 group transition-colors">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">{post.category}</span>
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2"><User size={20} /><span className="font-medium">{post.author}</span></div>
              <div className="flex items-center space-x-2"><Calendar size={20} /><span>{format(new Date(post.date), 'MMMM d, yyyy')}</span></div>
              <div className="flex items-center space-x-2"><MessageCircle size={20} /><span>{post.comments?.length || 0} Comments</span></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex items-center space-x-4">
              {['facebook', 'twitter', 'linkedin', 'copy'].map((platform) => (
                <button key={platform} onClick={() => handleShare(platform)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors" aria-label={`Share on ${platform}`}>
                  {platform === 'copy' ? (copied ? <Check size={20} /> : <Copy size={20} />) : platform === 'facebook' ? <Facebook size={20} /> : platform === 'twitter' ? <Twitter size={20} /> : <Linkedin size={20} />}
                </button>
              ))}
            </div>
          </div>

          <CommentSection comments={post.comments || []} onAddComment={handleAddComment} />
        </div>
      </div>
      
      {/* footer */}
      <Footer/>
    </>
  );
};
