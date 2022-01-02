import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import AppURL from '../../api/AppURL';
import Slider1 from '../../assets/images/slider/Slider1.jpg';
import Slider2 from '../../assets/images/slider/Slider2.jpg';
import Slider3 from '../../assets/images/slider/Slider3.jpg';
import Slider4 from '../../assets/images/slider/Slider4.jpg';
import Slider5 from '../../assets/images/slider/Slider5.jpg';
import Slider6 from '../../assets/images/slider/Slider6.jpg';
import Slider7 from '../../assets/images/slider/Slider7.jpg';
import Slider8 from '../../assets/images/slider/Slider8.jpg';

class HomeSlider extends Component {
  constructor() {
    super();
    this.state = {
      SliderInfoData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.HomeSliderInfo)
      .then((response) => {
        this.setState({ SliderInfoData: response.data });
      })
      .catch((error) => {
        console.error('slider api failed', error);
      });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    const SliderData = this.state.SliderInfoData;
    const MyView = SliderData.map((SliderData, i) => {
      return (
        <div>
          <img src={SliderData.slider_image} />{' '}
        </div>
      );
    });
    return (
      <Fragment>
        <div>
          <Slider {...settings}>{MyView}</Slider>
        </div>
      </Fragment>
    );
  }
}

export default HomeSlider;
