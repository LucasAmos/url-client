import React from 'react';
import UrlShortener from '../common/UrlShortener';
import Landing from '../common/Landing';
import About from '../common/About';
import Description from '../common/Description';
import Footer from '../common/Footer';
import Qualifications from '../common/Qualifications';
import Portfolio from '../common/Portfolio';
import ThisSite from '../common/ThisSite';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Landing />
      <Description />
      <About />
      <Qualifications />
      {/* <UrlShortener /> */}
      <Portfolio />
      <ThisSite />
      <Footer />
    </div>
  );
}
