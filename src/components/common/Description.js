import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Description.css';

export default function Description() {
  return (
    <div className="description">
      <Container>
        <Row>
          <Col lg={12} className="col-one">
            <Fade>
              <h2>
                FULL STACK SOFTWARE ENGINEER
              </h2>
            </Fade>
          </Col>
          <Col lg={12} className="col-two">
            <a
              href="https://www.linkedin.com/in/lucasamos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fade delay={200}>
                <Button
                  variant="light"
                  className="linkedin-button hvr-pulse-grow"
                >
                  LinkedIn
                </Button>
              </Fade>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
