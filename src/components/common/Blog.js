import React, { useEffect } from 'react';
import './blog.css';
import NavigationWrapper from './NavigationWrapper';

import Footer from './Footer';

const Blog = props => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <NavigationWrapper>
      <div className="blog">BLOG</div>
    </NavigationWrapper>
  );
};

export default Blog;
