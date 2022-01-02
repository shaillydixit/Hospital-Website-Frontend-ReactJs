import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="p-0">
          <Navbar className="m-0" bg="success">
            <Container fluid={true} style={{ fontSize: '20px' }}>
              <Nav.Link href="/" style={{ color: 'white' }}>
                Lifecare General Hospital
              </Nav.Link>

              <Nav className="text-center">
                <Nav.Link href="/" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/about" style={{ color: 'white' }}>
                  About Us
                </Nav.Link>
                <Nav.Link href="/ourservices" style={{ color: 'white' }}>
                  Services
                </Nav.Link>
                <Nav.Link href="/blog" style={{ color: 'white' }}>
                  Blog
                </Nav.Link>
                <Nav.Link href="/contact" style={{ color: 'white' }}>
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/"
                  role="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://twitter.com/"
                  role="button"
                >
                  <i className="fab fa-google-plus"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://myaccount.google.com/"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
