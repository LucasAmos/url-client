import React, { useRef, useEffect } from 'react';
import UrlShortener from '../common/UrlShortener';
import { useLocation, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import smoothscroll from 'smoothscroll-polyfill';
import Landing from '../common/Landing';
import About from '../common/About';
import Description from '../common/Description';
import Footer from '../common/Footer';
import Qualifications from '../common/Qualifications';
import Portfolio from '../common/Portfolio';
import ThisSite from '../common/ThisSite';
import './Home.css';

const Home = function Home() {
  const description = useRef(null);
  const scrollToRef = (ref, behavior) =>
    ref.current && window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior });

  useEffect(() => {
    if (window.location.hash === '#about') {
      scrollToRef(description, 'auto');
    }
  });
  smoothscroll.polyfill();

  const menuClick = (eventKey, event) => {
    switch (eventKey) {
      case 'about':
        scrollToRef(description, 'smooth');
        break;
      default:
        break;
    }
  };

  return (
    <div className="home">
      <Landing ref={description} />
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav onSelect={menuClick}>
            <Nav.Link eventKey="about" active>
              About me
            </Nav.Link>
            <LinkContainer to="/education">
              <Nav.Link eventKey="education">Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link eventKey="portfolio" href="">
                Portfolio
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link eventKey="blog">Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Description />
      <About />
      <ThisSite />
      <Footer />
    </div>
  );
};
export default withRouter(Home);
