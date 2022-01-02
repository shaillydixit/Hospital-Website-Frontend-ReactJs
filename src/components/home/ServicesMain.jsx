import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AppURL from '../../api/AppURL';

class ServicesMain extends Component {
  constructor() {
    super();
    this.state = {
      ServiceData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.ServiceInfo)
      .then((response) => {
        this.setState({ ServiceData: response.data });
      })
      .catch((error) => {
        console.error('service api failed', error);
      });
  }
  render() {
    const ServiceInfoData = this.state.ServiceData;
    const MyView = ServiceInfoData.map((ServiceInfoData, i) => {
      return (
        <div className="wrap">
          <div className="ico-wrap">
            <span className="mbr-iconfont">
              <i className={ServiceInfoData.icon}></i>
            </span>
          </div>
          <div className="text-wrap vcenter">
            <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
              {ServiceInfoData.service_name}
            </h2>
            <p className="mbr-fonts-style text1 mbr-text display-6">
              {ServiceInfoData.service_description}
            </p>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container>
          <div className="container">
            <div className="my-5">
              <h1 className="text-center" style={{ color: '#007b5e' }}>
                Our Services
              </h1>
            </div>
            <div className="row mbr-justify-content-center">
              <div className="col-lg-12 mbr-col-md-10">{MyView}</div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ServicesMain;
