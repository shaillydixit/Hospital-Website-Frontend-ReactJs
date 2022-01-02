import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import Contact from '../components/home/Contact';
import HomeSlider from '../components/home/HomeSlider';

class ContactUsPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeSlider />
        <Contact />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ContactUsPage;
