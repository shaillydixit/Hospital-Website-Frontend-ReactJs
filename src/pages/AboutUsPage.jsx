import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import AboutUs from '../components/home/AboutUs';
import HomeSlider from '../components/home/HomeSlider';
import OurGallary from '../components/home/OurGallary';
import OurServices from '../components/home/OurServices';

class AboutUsPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeSlider />
        <AboutUs />
        <OurServices />
        <OurGallary />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default AboutUsPage;
