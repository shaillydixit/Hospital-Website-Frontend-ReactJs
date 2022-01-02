import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import About1 from '../../assets/images/other/about1.jpeg';
import About2 from '../../assets/images/other/about2.jpeg';

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      AboutData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AboutUsInfo)
      .then((response) => {
        this.setState({ AboutData: response.data });
      })
      .catch((error) => {
        console.error(' aboutinfo api failed', error);
      });
  }
  render() {
    const AboutInfoData = this.state.AboutData;
    const MyView = AboutInfoData.map((AboutInfoData, i) => {
      return (
        <div>
          <div className="hd text-center mt-5">
            <h5 className="section-title h1">About Us</h5>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={AboutInfoData.about_image1}
                className="img-fluid aboutimg"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="display-5" style={{ color: '#007b5e' }}>
                {AboutInfoData.about_title1}{' '}
              </h1>
              <p className="py-2">{AboutInfoData.about_message1}</p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="display-5" style={{ color: '#007b5e' }}>
                {AboutInfoData.about_title2}
              </h1>
              <p className="py-2">{AboutInfoData.about_message2}</p>

              <a href={AboutInfoData.button_link} className="btn btn-success">
                Read More
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={AboutInfoData.about_image2}
                className="img-fluid aboutimg"
              />
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container style={{ fontSize: '16px' }}>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutUs;
