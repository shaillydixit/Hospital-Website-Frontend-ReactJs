import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <Container id="footer" fluid>
          <div className="container p-5">
            <div className="row text-left text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Lifecare General Hospital</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="/">
                      <i className="fa fa-angle-double-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <i className="fa fa-angle-double-right"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Services
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      <i className="fa fa-angle-double-right"></i>Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-angle-double-right"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Our Services</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Cardiology
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Neurology
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Pulmonology
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Orthopedics
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Gynaecology
                    </a>
                  </li>
                  <li>
                    <a href="/ourservices">
                      <i className="fa fa-angle-double-right"></i>Nephrology
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Contact Us</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="/contact">
                      <i className="fa fa-angle-double-right"></i>New Delhi,
                      Delhi, India, 110001{' '}
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-angle-double-right"></i>
                      info@example.com
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-angle-double-right"></i>+ 91 8888 769
                      886
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-angle-double-right"></i>+ 91 8888 769
                      887
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://myaccount.google.com/">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="contact.html" target="_blank">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p>
                  Copyright &copy;2021 by{' '}
                  <a href="https://github.com/shaillydixit">Shailly Dixit</a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default FooterDesktop;
