import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Gal1 from '../../assets/images/gallary/gal1.jpeg';
import Gal2 from '../../assets/images/gallary/gal2.jpeg';
import Gal3 from '../../assets/images/gallary/gal3.jpeg';
import Gal4 from '../../assets/images/gallary/gal4.jpeg';
import Gal5 from '../../assets/images/gallary/gal5.jpg';
import Gal6 from '../../assets/images/gallary/gal6.jpeg';
import Gal7 from '../../assets/images/gallary/gal7.jpeg';
import Gal8 from '../../assets/images/gallary/gal8.jpeg';
import Gal9 from '../../assets/images/gallary/gal9.jpeg';

class OurGallary extends Component {
  constructor() {
    super();
    this.state = {
      GallaryData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.GallaryInfo)
      .then((response) => {
        this.setState({ GallaryData: response.data });
      })
      .catch((error) => {
        console.error('gallary api failed', error);
      });
  }
  render() {
    const GallaryList = this.state.GallaryData;
    const MyView = GallaryList.map((GallaryList, i) => {
      return (
        <div class="col-lg-4 col-md-4 col-12">
          <img src={GallaryList.gallary_image} class="img-fluid pb-4" />
        </div>
      );
    });

    return (
      <Fragment>
        <Container>
          <Row class="my-0">
            <div class="py-3">
              <h2 class="text-center" style={{ color: '#007b5e' }}>
                Our Gallary
              </h2>
            </div>
            <div class="container-fluid">
              <div class="row">{MyView}</div>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default OurGallary;
