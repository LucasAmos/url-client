import React, { useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import moment from 'moment';
import './Landing.css';

export default function Landing() {
  smoothscroll.polyfill();
  const myRef = useRef(null);
  const scrollToRef = ref => ref.current && window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })
  return (
    <div>
      <div className="landing">
        <div className="container-text">
          <p className="la">Lucas Amos</p>
        </div>
        <div className="section-scroll">
          <div
            onKeyPress={() => scrollToRef(myRef)}
            tabIndex={0}
            role="button"
            id="scroll-icon"
            className="hvr-pulse-grow"
            onClick={() => scrollToRef(myRef)}
          />
        </div>
        <div className="lucas">Lucas Amos {moment.utc().year()}</div>
      </div>
      <div ref={myRef} />
    </div>
  );
}
