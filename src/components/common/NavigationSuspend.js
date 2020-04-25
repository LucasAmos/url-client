import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from './Footer';
import './Navigation.css';
import loading from '../../res/images/loading.gif';

export default function NavigationWrapper({ children }) {
  return (
    <>
      <div className="navigation-component">
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <LinkContainer to="/#about">
                <Nav.Link eventKey="about">About me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/education">
                <Nav.Link eventKey="qualifications">Education</Nav.Link>
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
      </div>
      <div
        className="minheight"
        style={{
          display: 'flex',
          height: '200px',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <img alt="loading" src={loading} style={{}} />
      </div>
      <Footer />
    </>
  );
}
