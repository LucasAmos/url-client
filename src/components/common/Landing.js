import React, { useRef, useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './Landing.css';

export default function Landing() {
  smoothscroll.polyfill();
  const myRef = useRef(null);
  const [userAgent, setUserAgent] = useState();
  const scrollToRef = ref => ref.current && window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })

  useEffect(() => {
    if (navigator.userAgent.indexOf('CriOS') > 0) {
      setUserAgent('chromeios');
    }
  })

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
            className={"hvr-pulse-grow" + (userAgent === 'chromeios' ? ' chrome-name' : '')}
            onClick={() => scrollToRef(myRef)}
          />
        </div>
        <div className={"lucas" + (userAgent === 'chromeios' ? ' chrome-date' : '')}>{userAgent === 'chromeios' ? 'true' : 'false'}</div>
      </div>
      <div ref={myRef} />
    </div>
  );
}
