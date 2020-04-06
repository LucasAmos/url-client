/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Skills from './Skills';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <Container>
        <Row className="row-one">
          <Col lg={{ span: 6 }}>
            <Fade>
              <p>
                I am an AWS certified cloud software engineer experienced in working across the stack. I learn new
                technologies at lightspeed and work with whatever tool is best for the job, building projects in React,
                React Native, Svelte, Node.js, Python and Java.
              </p>
              <p>
                I have a Masters degree in Advanced Computer Science from the University of St Andrews where I worked
                with Code First: Girls teaching an introductory course in web development.{' '}
              </p>
            </Fade>
            {/* <Fade delay={100}>
              <p>
                I&apos;ve worked on many and varied projects using numerous frameworks and languages. Check out my
                <a target="_blank" rel="noopener noreferrer" href="http://github.com/lucasamos">
                  &nbsp;GitHub&nbsp;
                </a>
                or scroll to the bottom of this page to see examples of my work.
              </p>
            </Fade> */}
            <Fade delay={200}>
              <p>
                When I&apos;m not writing dank code I like to take
                <a href="https://www.flickr.com/photos/181849230@N04/" target="_blank" rel="noopener noreferrer">
                  &nbsp;photos&nbsp;
                </a>
                and watch Formula One while enjoying one of Scotland&apos;s many fine craft beers. I also carry Baboons
                about on my shoulders from time to time.
              </p>
            </Fade>
            <Skills />
          </Col>
          <Col lg={{ span: 5, offset: 1 }} md={{ span: 8, offset: 2 }} className="image-col">
            <Fade>
              <Carousel className="caro" controls={false} indicators={false} fade pauseOnHover>
                <Carousel.Item>
                  <div className="sec">
                    <div className="gown" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="sec">
                    <div className="me" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="sec">
                    <div className="lucas" />
                  </div>
                </Carousel.Item>
              </Carousel>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
