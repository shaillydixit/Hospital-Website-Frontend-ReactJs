import React, { Component, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import Client1 from '../../assets/images/client/666.jpeg';
import Client2 from '../../assets/images/client/555.jpeg';
import Client3 from '../../assets/images/client/333.jpeg';
import Client4 from '../../assets/images/client/222.jpeg';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class ClientTestimonials extends Component {
  constructor() {
    super();
    this.state = {
      TestimonialData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.TestimonialInfo)
      .then((response) => {
        this.setState({ TestimonialData: response.data });
      })
      .catch((error) => {
        console.error('client api failed', error);
      });
  }
  render() {
    const TestimonialInfoData = this.state.TestimonialData;
    const MyView = TestimonialInfoData.map((TestimonialInfoData, i) => {
      return (
        <div>
          <div className="col-12 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src={TestimonialInfoData.client_image}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  {TestimonialInfoData.client_message}
                </p>
                <a className="nm" style={{ color: '#007b5e' }}>
                  {TestimonialInfoData.client_name}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <Container>
          <div id="testimonials">
            <div className="container tm-header">
              <h1 className="text-center" style={{ color: '#007b5e' }}>
                Client Testimonials
              </h1>
            </div>

            <div className="container">
              <Row xs="1" md="2" lg="4" xl="4">
                {MyView}
              </Row>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ClientTestimonials;
