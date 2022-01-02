import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AppURL from '../../api/AppURL';

class WhatWeDo extends Component {
  constructor() {
    super();
    this.state = {
      WhatWeDoData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.WhatWeDoInfo)
      .then((response) => {
        this.setState({ WhatWeDoData: response.data });
      })
      .catch((error) => {
        console.error('what we do api failed', error);
      });
  }
  render() {
    const WhatData = this.state.WhatWeDoData;
    const MyView = WhatData.map((WhatData, i) => {
      return (
        <div className="col-lg-4 col-md-4 col-sm-4 pl-md-5 mb-4">
          <div className="service-block-bg text-center p-3">
            <div className="price-count font-abril">
              <span>
                {' '}
                <i class={WhatData.icon} aria-hidden="true"></i>{' '}
              </span>
            </div>
            <h3>{WhatData.title}</h3>
            <p className="px-4">{WhatData.description}</p>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container
          fluid
          id="price"
          className="info-section sec-bg-03 bg-overlay"
        >
          <div className="hd text-center mt-5">
            <h5 className="section-title h1">What we do</h5>

            <p class="text-center text-muted h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </p>
          </div>
          <div className="text-white">
            <div className="three-panel-block my-4">
              <div className="row">{MyView}</div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default WhatWeDo;
