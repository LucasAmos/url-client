import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './BlogPreview.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function BlogPreview({ title, image, body, link }) {
  return (
    <Container className="blogPreview">
      <LinkContainer to={link}>
        <Row>
          <Col lg={4}>
            <img alt="blog" src={image} />
          </Col>
          <Col lg={8}>
            <h1> {title}</h1>
            <h2>{body}</h2>
          </Col>
        </Row>
      </LinkContainer>
    </Container>
  );
}
