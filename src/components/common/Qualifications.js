/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './Qualifications.css';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import textual from '../../res/images/textual.png';
import masters from '../../res/images/masters.png';
import github from '../../res/images/github.png';

export default function Qualifications() {
  return (
    <div className="qualifications">
      <Container>
        <Row className="title">
          <Col>
            <Fade duration={1500}>
              <h2>
                HERE&apos;S SOME OF MY EDUCATION
              </h2>
              <h3>
                (I LIKE TO LEARN THINGS)
              </h3>
            </Fade>
          </Col>
        </Row>
        <Row className="standrews-row uni-row">
          <Col
            xs={{ order: 2, span: 12 }}
            lg={{ span: 6, offset: 0 }}
          >
            <Fade>
              <div className="gaudeamus" />
            </Fade>
          </Col>
          <Col
            xs={{ order: 1, span: 12 }}
            lg={{ span: 5, offset: 0 }}
          >
            <Fade>
              <h2>UNIVERSITY OF ST ANDREWS</h2>

              <p>
                I hold a Masters degree in Advanced Computer Science from the
                University of St Andrews where I competed for the university
                in national archery competitions.
              </p>

              <div className="my-work">
                <h3> See some of my work</h3>
                <a
                  href="https://storage.googleapis.com/url-images-22/Alternatives%20to%20textual%20authentication.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="portfolio-image"
                    src={textual}
                    alt="alternatives to textual authentication"
                  />
                </a>
                <a
                  href="https://storage.googleapis.com/url-images-22/standrewsposter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="portfolio-image"
                    src={masters}
                    alt="masters poster"
                  />
                </a>
                <a
                  href="https://github.com/LucasAmos/Masters-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    className="github-logo"
                    alt="github logo"
                  />
                </a>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aston-row uni-row">
          <Col
            xs={{ order: 2, span: 12 }}
            lg={{ span: 6, order: 1 }}
            className="aston"
          >
            <Fade>
              <div className="campus" />
            </Fade>
          </Col>
          <Col
            xs={{ order: 1, span: 12 }}
            lg={{ span: 5, order: 2 }}
            className="bsc"
          >
            <Fade cascade>
              <div>
                <h2>ASTON UNIVERSITY</h2>
                <p> I also hold a first class BSc in Computer Science from Aston University.</p>
                <p>
                  While studying for my undergraduate degree I was the President of
                  Aston Computer Science Society, the university&apos;s largest academic society.
                </p>
                <p>
                  I particpated in the UK finals of the CapGemini SuperTechies business IT
                  competition, finishing a close runner up in second place.
                </p>
                <a
                  href="https://github.com/LucasAmos/Undergraduate-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    id="github"
                    className="github-logo"
                    alt="github logo"
                  />
                </a>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
