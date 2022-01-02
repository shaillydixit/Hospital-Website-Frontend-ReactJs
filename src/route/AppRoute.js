import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router';
import AboutUsPage from '../pages/AboutUsPage';
import BlogPage from '../pages/BlogPage';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import OurServicesPage from '../pages/OurServicesPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />}>
            {' '}
          </Route>
          <Route exact path="/about" element={<AboutUsPage />}>
            {' '} 
          </Route>
          <Route exact path="/ourservices" element={<OurServicesPage />}>
            {' '}
          </Route>
          <Route exact path="/blog" element={<BlogPage />}>
            {' '}
          </Route>
          <Route exact path="/contact" element={<ContactUsPage />}>
            {' '}
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
