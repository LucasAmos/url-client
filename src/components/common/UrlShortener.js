/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import validator from 'validator';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import config from '../../config/config';
import loadingImage from '../../res/images/loading.gif';
import './UrlShortener.css';

class UrlShortener extends Component {
  static formatUrl(url) {
    let result = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
    result = `http://www.${result}`;
    return result;
  }

  constructor() {
    super();
    this.state = {
      loading: false,
      url: '',
      validUrl: true,
      link: '',
      shortenRoute: process.env.NODE_ENV === 'development' ? config.developmentURL : config.productionSubdomain,
      route: process.env.NODE_ENV === 'development' ? config.developmentURL : config.productionURL
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const { route } = this.state;

    // ping heroku to activate the dyno
    // not nessary now on paid plan
    // fetch(`${route}status`)
    //   .then((response) => {
    //     response.json();
    //   });
  }

  handleSubmit() {
    const { url, route, shortenRoute } = this.state;
    const validURL = validator.isURL(url);

    this.setState({
      validUrl: validator.isURL(url)
    });

    if (validURL) {
      this.setState({ loading: true });
      fetch(`${route}api/shorten`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: UrlShortener.formatUrl(url)
        })
      })
        .then(response => response.json())
        .then(res => {
          this.setState({
            link: shortenRoute + res.hash,
            loading: false
          });
        })
        .catch(() => this.setState({ loading: false }));
    }
  }

  handleChange(e) {
    this.setState({ url: e.target.value });
  }

  render() {
    const { validUrl, url, link, loading } = this.state;
    return (
      <div className="url-shortener">
        <Container>
          <Row className="row-one">
            <Col className="col-one" lg={{ span: 8, offset: 2 }}>
              <h2>Need to shorten a URL?</h2>
            </Col>
            <Col className="col-two" lg={{ span: 8, offset: 2 }}>
              <Form.Group>
                <InputGroup>
                  <FormControl
                    onKeyDown={e => (e.key === 'Enter' ? this.handleSubmit() : null)}
                    className="url-input"
                    test="form-name"
                    name="name"
                    isInvalid={!validUrl}
                    type="text"
                    value={url}
                    onChange={e => {
                      this.setState({
                        url: e.target.value,
                        validUrl: e.target.value.length > 0
                      });
                    }}
                    placeholder="Enter a URL"
                  />
                  <InputGroup.Append>
                    <Button className="submit-button" variant="outline-secondary" onClick={this.handleSubmit}>
                      {' '}
                      {loading ? <img src={loadingImage} alt="loading" /> : 'Get URL!'}
                    </Button>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">Please enter a valid URL</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <div className="url-row">
            {link && (
              <Row>
                <Col className="url" lg={{ span: 8, offset: 2 }}>
                  <span>
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                      {link}
                    </a>
                  </span>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default withReveal(UrlShortener, <Fade />);
