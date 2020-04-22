import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './BlogPreview.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function BlogPreview({ title, image, body, link, date }) {
  return (
    <Container className="blogPreview">
      <LinkContainer to={link}>
        <Row>
          <Col lg={4}>
            <img alt="blog" src={image} />
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
