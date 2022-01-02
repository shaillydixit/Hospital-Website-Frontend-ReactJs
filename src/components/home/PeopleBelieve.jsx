import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppURL from '../../api/AppURL';

class PeopleBelieve extends Component {
  constructor() {
    super();
    this.state = {
      PeopleBelieveData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.PeopleBelieveInfo)
      .then((response) => {
        this.setState({ PeopleBelieveData: response.data });
      })
      .catch((error) => {
        console.error('people believe api failed', error);
      });
  }
  render() {
    const PeopleBelieveInfoData = this.state.PeopleBelieveData;
    const MyView = PeopleBelieveInfoData.map((PeopleBelieveInfoData, i) => {
      return (
        <Col xs="3">
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                {' '}
                <img className="img" src={PeopleBelieveInfoData.image} />
                <div className="shadow"></div>
                <div className="card-title">
                  {' '}
                  {PeopleBelieveInfoData.title}{' '}
                </div>
                <div className="card-subtitle">
                  <p>
                    {' '}
                    <small className="text-muted">
                      {PeopleBelieveInfoData.description}
                    </small>{' '}
                  </p>

                  <a
                    href={PeopleBelieveInfoData.button_link}
                    className="btn btn-success"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container fluid style={{ alignItems: 'center' }}>
          <div>
            <div className="hd text-center mt-5">
              <h5 className="section-title h1">Why People Believe in Us</h5>
            </div>
            <p className="text-center">
              <small class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                cumque, accusantium eum quo doloremque quidem! <br />
                Quisquam quaerat ipsam culpa dolorem vero nam, esse autem iusto
                earum. Error?{' '}
              </small>
            </p>
          </div>
          <Row className="justify-content-center">{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default PeopleBelieve;
