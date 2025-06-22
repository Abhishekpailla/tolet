// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Blog.css';
import '../styles/Home.css'; // Reusing animations and logo styling
import logo from '../assests/logo.png'; // Ensure path is correct

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [viewType, setViewType] = useState('latest');
  const [hasMore, setHasMore] = useState(true);

  const blogsPerPage = 4;

  const allBlogs = {
    latest: [
      { id: 1, title: 'Latest Blog 1', content: 'This is the first latest blog content.', image: '/images/istockphoto-1315649031-612x612.jpg' },
      { id: 2, title: 'Latest Blog 2', content: 'This is the second latest blog content.', image: '/images/Chat.png' },
      { id: 3, title: 'Latest Blog 3', content: 'This is the third latest blog content.', image:  '/images/blogging.png' },
      { id: 4, title: 'Latest Blog 4', content: 'This is the fourth latest blog content.', image: '/images/best.png' },
      { id: 5, title: 'Latest Blog 5', content: 'This is the fifth latest blog content.', image: 'https://via.placeholder.com/300x200?text=Latest+5' }
    ],
    trending: [
      { id: 6, title: 'Trending Blog 1', content: 'This is the first trending blog content.', image: 'images/istockphoto-1315649031-612x612.jpg' },
      { id: 7, title: 'Trending Blog 2', content: 'This is the second trending blog content.', image: 'images/Chat.png' },
      { id: 8, title: 'Trending Blog 3', content: 'This is the third trending blog content.', image: 'images/blogging.png' },
      { id: 9, title: 'Trending Blog 4', content: 'This is the fourth trending blog content.', image: 'images/best.png' }
    ]
  };

  useEffect(() => {
    loadBlogs();
  }, [viewType, page]);

  const loadBlogs = () => {
    const selectedBlogs = allBlogs[viewType];
    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const pagedBlogs = selectedBlogs.slice(startIndex, endIndex);
    setBlogs((prev) => [...(page === 1 ? [] : prev), ...pagedBlogs]);
    setHasMore(endIndex < selectedBlogs.length);
  };

  const handleFilterChange = (type) => {
    setViewType(type);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <img src={logo} alt="Tolet Globe Logo" className="home-logo" />
        <h1 className="animated-title">Our Blog</h1>
        <p className="animated-subtitle">Latest updates and insights from Tolet Globe</p>
        <div className="blog-buttons">
          <button onClick={() => handleFilterChange('latest')} className={viewType === 'latest' ? 'active' : ''}>Latest</button>
          <button onClick={() => handleFilterChange('trending')} className={viewType === 'trending' ? 'active' : ''}>Trending</button>
        </div>
      </header>

      <div className="blog-grid">
        {blogs.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          ))
        )}
      </div>

      {hasMore && (
        <div className="load-more-container">
          <button className="load-more" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
