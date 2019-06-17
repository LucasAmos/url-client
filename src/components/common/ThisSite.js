/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ThisSite.css';

export default function ThisSite() {
  return (
    <div className="this-site">
      <Container>
        <Row>
          <Col className="about-col">
            <h2>About this site</h2>
            <p>This site is built using a MERN stack (Mongo, Express, React, Node)
              and conforms to the
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jamstack.org/"
              >
                &nbsp;JAMstack&nbsp;
              </a>
              architecture specification.
            </p>
            <p>
              Check out the
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucasAmos/url-client"
              >
                &nbsp;client&nbsp;
              </a>and
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucasAmos/URLshortener"
              >
                &nbsp;server&nbsp;
              </a>
              code on GitHub
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
