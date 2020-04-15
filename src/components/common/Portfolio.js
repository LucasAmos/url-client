import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import NavigationWrapper from './NavigationWrapper';
import Fade from 'react-reveal/Fade';

import PortfolioItem from './PortfolioItem';
import loadingImage from '../../res/images/loading.gif';
import './Portfolio.css';
import config from '../../config/config';

const Portfolio = props => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [route] = useState(process.env.NODE_ENV === 'development' ? config.developmentURL : config.productionURL);
  const [work, setWork] = useState();
  const [authError, setAuthError] = useState(false);
  const [title, setTitle] = useState('View some of my work');

  function getWork() {
    setLoading(true);
    fetch(`${route}authorize?password=${password}`)
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          setLoading(false);
          setAuthError(true);
        } else {
          setLoading(false);
          setTitle('Some projects I have worked on');
          setWork(res.data);
          setAuthError(false);
        }
      })
      .catch(() => {
        setLoading(false);
        setAuthError(true);
      });
  }
  return (
    <NavigationWrapper>
      <Fade>
        <div className="portfolio">
          <Container>
            <Row>
              <Col className="view-work-col" lg={{ span: 12 }}>
                <h2>{title}</h2>
                {work && <h5>(click on the images!)</h5>}
              </Col>
              <Col
                xs={{ span: 12 }}
                sm={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 4, offset: 4 }}
              >
                {!work && (
                  <Form.Group>
                    <InputGroup>
                      <FormControl
                        onKeyDown={e => (e.key === 'Enter' ? getWork() : null)}
                        type="password"
                        isInvalid={authError}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter the password"
                      />
                      <InputGroup.Append>
                        <Button className="submit-button" variant="outline-secondary" onClick={getWork}>
                          {loading ? <img src={loadingImage} alt="loading" /> : 'Submit'}
                        </Button>
                      </InputGroup.Append>
                      <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                )}
              </Col>
            </Row>
          </Container>
          {work && work.map(elem => <PortfolioItem key={elem.title} portfolio={elem} />)}
        </div>
      </Fade>
    </NavigationWrapper>
  );
};

export default Portfolio;
