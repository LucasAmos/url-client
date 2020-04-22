import React from 'react';
import './blog.css';
import NavigationWrapper from './NavigationWrapper';
import BlogPreview from './BlogPreview';

const Blog = () => {
  return (
    <NavigationWrapper>
      <div style={{ height: 50 }} />
      <BlogPreview
        title="Use AWS Rekognition to automate your image analysis: Part 1"
        image="https://lucas-blog-images.s3.eu-west-2.amazonaws.com/rekognition.jpg"
        body="An off the shelf machine learning solution without the need to train your own models"
        link="/blog/rekognition"
        date="22/4/2020"
      />
      <div style={{ height: 50 }} />
    </NavigationWrapper>
  );
};

export default Blog;
