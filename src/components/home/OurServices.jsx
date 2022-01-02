import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Service1 from '../../assets/images/services/cardio.jpeg';
import Service2 from '../../assets/images/services/gynaeco.jpeg';
import Service3 from '../../assets/images/services/nephro.png';
import Service4 from '../../assets/images/services/neuro.jpeg';
import Service5 from '../../assets/images/services/ortho.jpeg';
import Service6 from '../../assets/images/services/pulmo.jpeg';

class OurServices extends Component {
  constructor() {
    super();
    this.state = {
      AboutServiceData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AboutService)
      .then((response) => {
        this.setState({ AboutServiceData: response.data });
      })
      .catch((error) => {
        console.error('our services api failed', error);
      });
  }
  render() {
    const ServiceList = this.state.AboutServiceData;
    const MyView = ServiceList.map((ServiceList, i) => {
      return (
        <div className="col-lg-4 col-md-4 col-12">
          <div className="card">
            <img
              className="card-img-top"
              src={ServiceList.service_image}
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title text-center">
                {ServiceList.service_name}
              </h4>
              <div className="text-center">
                <a href={ServiceList.service_link} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container className="p-5">
          <div className="py-3">
            <h2 className="text-center" style={{ color: '#007b5e' }}>
              Our Services
            </h2>
          </div>
          <div className="container-fluid">
            <div className="row">{MyView}</div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default OurServices;
