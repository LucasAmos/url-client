import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import certification from '../../res/images/cert.png';
import './Description.css';

const Description = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="description">
        <Container>
          <Row>
            <Col lg={12} className="col-one">
              <Fade>
                <div className="title-wrapper">
                  <h2>CLOUD SOFTWARE ENGINEER</h2>
                  <a
                    href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2020-03-18&ci=AWS01302137"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={certification} alt="aws logo" className="certification" />
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={12} className="col-two">
              <a href="https://www.linkedin.com/in/lucasamos/" target="_blank" rel="noopener noreferrer">
                <Fade delay={200}>
                  <Button variant="light" className="linkedin-button hvr-pulse-grow">
                    LinkedIn
                  </Button>
                </Fade>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
});

export default Description;
