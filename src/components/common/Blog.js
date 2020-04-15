import React from 'react';
import './blog.css';
import NavigationWrapper from './NavigationWrapper';
import BlogPost from './BlogPost';

const input =
  '# This is a header\n\n' +
  '## This is a smaller header \n\n ' +
  '### This is an even smaller header \n\n' +
  'And this is a paragraph' +
  'This block of Markdown contains <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/HTML">HTML</a>';

const Blog = props => {
  return (
    <NavigationWrapper>
      <div className="blog">
        BLOG
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
        <BlogPost content={input} />
      </div>
    </NavigationWrapper>
  );
};

export default Blog;
