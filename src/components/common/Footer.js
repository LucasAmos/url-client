import React from 'react';
import './Footer.css';
import githubwhite from '../../res/images/githubwhite.png';
import linkedin from '../../res/images/in.png';
import flickr from '../../res/images/flickr.png';

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/LucasAmos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubwhite}
          className="image"
          alt="github logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/lucasamos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedin}
          className="image"
          alt="linkedin logo"
        />
      </a>
      <a
        href="https://www.flickr.com/photos/181849230@N04/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={flickr}
          className="image"
          alt="flickr logo"
        />
      </a>
    </div>
  );
}
