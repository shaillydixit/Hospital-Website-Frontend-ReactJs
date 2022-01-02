import React, { Component, Fragment } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      ContactInfoData: [],
    };
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;
    this.setState({ email: email });
  };

  phoneOnChange = (event) => {
    let phone = event.target.value;
    this.setState({ phone: phone });
  };

  messageOnChange = (event) => {
    let message = event.target.value;
    this.setState({ message: message });
  };

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let phone = this.state.phone;
    let message = this.state.message;
    let sendBtn = document.getElementById('sendBtn');
    let contactForm = document.getElementById('contactForm');

    if (message.length === 0) {
      toast.error('please enter your message');
    } else if (name.length === 0) {
      toast.error('please enter your name');
    } else if (email.length === 0) {
      toast.error('please enter your email');
    } else if (phone.length === 0) {
      toast.error('please enter your phone');
    } else {
      sendBtn.innerHTML = 'Sending...';
      let MyFormData = new FormData();
      MyFormData.append('name', name);
      MyFormData.append('email', email);
      MyFormData.append('phone', phone);
      MyFormData.append('message', message);

      axios
        .post(AppURL.Contact, MyFormData)
        .then((response) => {
          if (response.status == 200 && response.data == 1) {
            toast.success('message sent successfully');
            sendBtn.innerHTML = 'Send';
            contactForm.reset();
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: '',
            });
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
    event.preventDefault();
  };
  componentDidMount() {
    axios
      .get(AppURL.ContactInfo)
      .then((response) => {
        this.setState({ ContactInfoData: response.data });
      })
      .catch((error) => {
        console.error('hhh');
      });
  }
  render() {
    const ContactData = this.state.ContactInfoData;
    const MyView = ContactData.map((ContactData, i) => {
      return (
        <div className="row text-center ">
          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <i className={ContactData.address_icon}></i>
            </a>
            <p>{ContactData.address}</p>
          </div>

          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <i className={ContactData.phone_icon}></i>
            </a>
            <p>
              {ContactData.phone_one} <br />
              {ContactData.phone_two}
            </p>
          </div>

          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <i className={ContactData.email_icon}></i>
            </a>
            <p>
              {ContactData.email_one} <br />
              {ContactData.email_two}
            </p>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Container fluid>
          <Row className="section pb-5">
            <h2
              className="section-heading h1 pt-2 text-center"
              style={{ color: '#007b5e' }}
            >
              Contact us
            </h2>

            <p className="section-description pb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur accusamus
              veniam.
            </p>

            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="form-header blue accent-1 text-left">
                      <h3>
                        <i className="fa fa-envelope"></i> Write to us:
                      </h3>
                    </div>

                    <p className="text-left">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                    </p>
                    <br />

                    <Form
                      id="contactForm"
                      onSubmit={this.onFormSubmit}
                      method="POST"
                    >
                      <div className="md-form text-left">
                        <i className="fa fa-user prefix grey-text "></i>
                        <label> Name</label>
                        <input
                          onChange={this.nameOnChange}
                          type="text"
                          name="name"
                          placeholder="name"
                          id="name"
                          autocomplete="off"
                          className="form-control"
                        />
                      </div>

                      <div className="md-form text-left">
                        <i className="fa fa-envelope prefix grey-text "></i>
                        <label> Email Id</label>
                        <input
                          onChange={this.emailOnChange}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email"
                          autocomplete="off"
                          className="form-control"
                        />
                      </div>
                      <div className="md-form text-left">
                        <i className="fa fa-phone prefix grey-text"></i>
                        <label> Mobile No</label>
                        <input
                          onChange={this.phoneOnChange}
                          type="phone"
                          name="phone"
                          id="phone"
                          placeholder="phonenumber"
                          autocomplete="off"
                          className="form-control"
                        />
                      </div>

                      <div className="md-form text-left">
                        <i className="fas fa-envelope-open-text"></i>
                        <label>Your message (optional)</label>

                        <Form.Control
                          onChange={this.messageOnChange}
                          as="textarea"
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="type your message here..."
                        ></Form.Control>
                      </div>

                      <div style={{ marginTop: '6px' }}>
                        <Button
                          id="sendBtn"
                          type="submit"
                          className="btn btn-success"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="row">{MyView}</div>
              </div>
              <div className="col-lg-7">
                <div
                  id="map-container-google-11"
                  className="z-depth-1-half map-container-6"
                  style={{ height: '400px' }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    style={{ border: '0' }}
                    allowfullscreen
                  ></iframe>
                </div>

                <br />
              </div>
            </div>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Contact;
