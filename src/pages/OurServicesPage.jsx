import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import ClientTestimonials from '../components/home/ClientTestimonials';
import HomeSlider from '../components/home/HomeSlider';
import ServicesMain from '../components/home/ServicesMain';

class OurServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeSlider />
        <ServicesMain />
        <ClientTestimonials />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default OurServicesPage;
