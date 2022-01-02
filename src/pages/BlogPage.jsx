import React, { Component, Fragment } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import HomeSlider from '../components/home/HomeSlider';
import FooterDesktop from '../components/common/FooterDesktop';
import Blog from '../components/home/Blog';

class BlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeSlider />
        <Blog />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default BlogPage;
