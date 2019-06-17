import React from 'react';
import Fade from 'react-reveal/Fade';
import './PortfolioItem.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function PortfolioItem(portfolio) {
  return (
    <div className="portfolio-item">
      <Container>
        <Row>
          <Col
            lg={{ span: 5, offset: 1 }}
          >
            <a
              href={portfolio.portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fade>
                <div
                  className="portfolio-image"
                  style={{ backgroundImage: `url(${portfolio.portfolio.image})` }}
                />
              </Fade>
            </a>
          </Col>
          <Col
            lg={{ span: 5 }}
          >
            <Fade>
              <h3>
                {portfolio.portfolio.title}
              </h3>
            </Fade>

            {portfolio.portfolio.body.map(para => (
              <div
                className="item"
                key={para}
              >
                <Fade>
                  {para}
                </Fade>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
