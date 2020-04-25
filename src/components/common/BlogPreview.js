import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './BlogPreview.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BlogPreview({ title, image, body, link, date }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container className="blogPreview">
      <LinkContainer to={link}>
        <Row>
          <Col lg={4}>
            <div
              className="loading"
              className={`preview ${loaded ? 'loaded' : 'loading'}`}
              style={{ backgroundImage: loaded ? `url(${image})` : '' }}
            >
              <img
                style={{ display: 'none' }}
                alt="hidden"
                src={image}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </Col>
          <Col lg={8} className="details">
            <div id="date">
              <h3>{date}</h3>
            </div>
            <div>
              <h1> {title}</h1>
            </div>
            <div>
              <h2>{body}</h2>
            </div>
          </Col>
        </Row>
      </LinkContainer>
    </Container>
  );
}
