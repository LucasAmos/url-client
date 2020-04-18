import './BlogPost.css';

import React from 'react';

export default function BlogPost({ children }) {
  return <div className="blogpost"> {children}</div>;
}
