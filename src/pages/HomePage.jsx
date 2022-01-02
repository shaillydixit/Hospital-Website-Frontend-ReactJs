import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import About from '../components/home/About';
import HomeSlider from '../components/home/HomeSlider';
import PeopleBelieve from '../components/home/PeopleBelieve';
import Team from '../components/home/Team';
import WhatWeDo from '../components/home/WhatWeDo';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeSlider />
        <About />
        <PeopleBelieve />
        <WhatWeDo />
        <Team />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default HomePage;
