import axios from 'axios';
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Team1 from '../../assets/images/ourteam/team1.png';
import Team2 from '../../assets/images/ourteam/team2.jpeg';
import Team3 from '../../assets/images/ourteam/team3.png';
import Team4 from '../../assets/images/ourteam/team4.png';
import Team5 from '../../assets/images/ourteam/team5.png';
import Team6 from '../../assets/images/ourteam/team6.jpeg';

class Team extends Component {
  constructor() {
    super();
    this.state = {
      TeamData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.TeamInfo)
      .then((response) => {
        this.setState({ TeamData: response.data });
      })
      .catch((error) => {
        console.error('team api failed', error);
      });
  }
  render() {
    const TeamInfoData = this.state.TeamData;
    const MyView = TeamInfoData.map((TeamInfoData, i) => {
      return (
        <Col xs="4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <div className="frontside">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        className=" img-fluid"
                        src={TeamInfoData.member_image}
                        alt="card image"
                      />
                    </p>
                    <h4 className="card-title">{TeamInfoData.member_name}</h4>
                    <p className="card-text">{TeamInfoData.member_info}</p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <h4 className="card-title">{TeamInfoData.member_name}</h4>
                    <p className="card-text">{TeamInfoData.member_info}</p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          className="social-icon text-xs-center"
                          target="_blank"
                          href={TeamInfoData.facebook_link}
                        >
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="social-icon text-xs-center"
                          target="_blank"
                          href={TeamInfoData.twitter_link}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="social-icon text-xs-center"
                          target="_blank"
                          href={TeamInfoData.skype_link}
                        >
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="social-icon text-xs-center"
                          target="_blank"
                          href={TeamInfoData.googleplus_link}
                        >
                          <i className="fab fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container fluid id="team" className="pb-5">
          <div className="hd text-center mt-5">
            <h5 className="section-title h1">Our Team</h5>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Team;
