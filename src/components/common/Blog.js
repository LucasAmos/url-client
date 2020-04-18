import React from 'react';
import './blog.css';
import NavigationWrapper from './NavigationWrapper';
import { blogs } from '../../blogs';

const Blog = () => {
  const blogposts = [];

  blogs.forEach(blog => {
    blogposts.push(blog);
  });

  return (
    <NavigationWrapper>
      BLOG
      <div className="blog">{blogs[0]}</div>
    </NavigationWrapper>
  );
};

export default Blog;
