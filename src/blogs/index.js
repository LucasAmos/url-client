import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const ReactMarkdown = require('react-markdown/with-html');

export default function index({ blog }) {
  const formattedBlog = [];

  blog.forEach(element => {
    if (element.type === 'text') {
      formattedBlog.push(
        <div className="markdown" key={element.value}>
          <ReactMarkdown escapeHtml={false} source={element.value} />
        </div>
      );
    } else if (element.type === 'code') {
      formattedBlog.push(
        <div className="code" key={element.value}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {element.value}
          </SyntaxHighlighter>
        </div>
      );
    }
  });

  return <>{formattedBlog}</>;
}
