import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Row } from 'react-bootstrap';
import AppURL from '../../api/AppURL';

class About extends Component {
  constructor() {
    super();
    this.state = {
      HomeAboutData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.HomeAboutInfo)
      .then((response) => {
        this.setState({ HomeAboutData: response.data });
      })
      .catch((error) => {
        console.error('home about api failed', error);
      });
  }
  render() {
    const AboutData = this.state.HomeAboutData;
    const MyView = AboutData.map((AboutData, i) => {
      return (
        <div className="maindiv">
          <h1>{AboutData.title}</h1>
          <p>{AboutData.description}</p>
        </div>
      );
    });
    return (
      <Fragment>
        <Row>{MyView}</Row>
      </Fragment>
    );
  }
}

export default About;
