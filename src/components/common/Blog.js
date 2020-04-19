import React from 'react';
import './blog.css';
import NavigationWrapper from './NavigationWrapper';
import BlogPreview from './BlogPreview';

const Blog = () => {
  return (
    <NavigationWrapper>
      <div style={{ height: 50 }} />
      <BlogPreview
        title="Using AWS Rekognition to identify the contents of an image"
        image="https://lucas-blog-images.s3.eu-west-2.amazonaws.com/rekognition.jpg"
        body="AWS rekognition can give you probabilities"
        link="/blog/rekognition"
      />
      <div style={{ height: 50 }} />
    </NavigationWrapper>
  );
};

export default Blog;
