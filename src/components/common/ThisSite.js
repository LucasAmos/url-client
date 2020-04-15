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
            <p>This site is built using a MERN stack (Mongo, Express, React, Node).</p>
            <p>
              Check out the
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/LucasAmos/url-client">
                &nbsp;code&nbsp;
              </a>
              on GitHub
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
