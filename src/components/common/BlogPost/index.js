import React from 'react';

const ReactMarkdown = require('react-markdown/with-html');

export default function index({ content }) {
  return (
    <div>
      <ReactMarkdown escapeHtml={false} source={content} />
    </div>
  );
}
